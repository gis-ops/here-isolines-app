import React from 'react'
import { connect } from 'react-redux'
import L from 'leaflet'
import chroma from 'chroma-js'
import ExtraMarkers from './extraMarkers'
import HereTileLayer from './hereTileLayer'
import { fetchHereReverseGeocode } from '../actions/actions'
import PropTypes from 'prop-types'

const style = {
  width: '100%',
  height: '100vh'
}

// const CartoDB_VoyagerLabelsUnder = L.tileLayer(
//   'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
//   {
//     attribution:
//       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
//     subdomains: 'abcd',
//     maxZoom: 19
//   }
// )

const hereReducedDay = HereTileLayer.here({
  appId: 'jKco7gLGf0WWlvS5n2fl',
  appCode: 'HQnCztY23zh2xiTPCFiTMA',
  scheme: 'reduced.day'
})

const hereHybridGreyDay = HereTileLayer.here({
  appId: 'jKco7gLGf0WWlvS5n2fl',
  appCode: 'HQnCztY23zh2xiTPCFiTMA',
  scheme: 'hybrid.grey.day'
})

const markersLayer = L.layerGroup()

const isochronesLayer = L.layerGroup()

const mapParams = {
  center: [40.655769, -73.938503],
  zoomControl: false,
  zoom: 13,
  layers: [markersLayer, isochronesLayer, hereReducedDay]
}

class Map extends React.Component {
  static propTypes = {
    isochronesControls: PropTypes.array.isRequired,
    mapEvents: PropTypes.object
  }
  componentDidMount() {
    this.map = L.map('map', mapParams)

    var isochronesPane = this.map.createPane('isochronesPane')

    isochronesPane.style.opacity = 0.9

    const baseMaps = {
      'HERE reduced.day': hereReducedDay,
      'HERE hybrid.grey.day': hereHybridGreyDay
    }

    L.control.layers(baseMaps).addTo(this.map)

    L.control
      .zoom({
        position: 'topright'
      })
      .addTo(this.map)

    const brand = L.control({
      position: 'bottomright'
    })
    brand.onAdd = function(map) {
      var div = L.DomUtil.create('div', 'brand')
      div.innerHTML =
        '<a href="https://gis.ops.com" target="_blank"><div class="gis-ops-logo"></div></a>'
      return div
    }
    this.map.addControl(brand)
  }

  updateMarkers() {
    const { isochronesControls } = this.props

    markersLayer.clearLayers()

    let cnt = 0
    for (let isochrones of isochronesControls) {
      // add marker
      if (isochrones.geocodeResults.length > 0) {
        for (let location of isochrones.geocodeResults) {
          if (location.selected) {
            // if a address is geocoded normally, clear layer beforehand

            if (!isochrones.reverse) this.clearLayerByIndex(cnt)

            this.addIsochronesMarker(location, cnt, this.isMarkerPresent(cnt))
          }
        }
      }

      cnt += 1
    }
  }

  updateIsochrones(prevProps) {
    const { isochronesControls } = this.props

    isochronesLayer.clearLayers()

    for (let i = 0; i < isochronesControls.length; i++) {
      if (
        isochronesControls[i].isochrones.results.length > 0
        //&& isochronesControls[i].isochrones.receivedAt > prevIsochronesControls[i].isochrones.receivedAt
      ) {
        let cnt = 0
        const isochroneResultsReversed =
          isochronesControls[i].isochrones.results
        const scaleHsl = chroma
          .scale(['#f44242', '#f4be41', '#41f497'])
          .mode('hsl')
          .colors(isochronesControls[i].isochrones.results.length)

        for (const isochrone of isochroneResultsReversed) {
          for (const isochroneComponent of isochrone.component) {
            this.addIsochrones(
              isochroneComponent.shape,
              isochronesControls[i].settings.rangetype === 'time'
                ? isochrone.range / 60 + ' minutes'
                : isochrone.range / 1000 + ' kilometers',
              scaleHsl[cnt],
              i
            )
          }
          cnt += 1
        }
      }
    }
  }

  updateMap(prevProps) {
    const { mapEvents } = this.props
    if (mapEvents.receivedAt > prevProps.mapEvents.receivedAt) {
      let eventFeatures = L.featureGroup()

      switch (mapEvents.event) {
        case 'ZOOM_TO_ISOCHRONES':
          isochronesLayer.eachLayer(function(layer) {
            if (layer.options.index === mapEvents.controlIndex)
              eventFeatures.addLayer(layer)
          })

          this.map.fitBounds(eventFeatures.getBounds())

          break

        default:
          break
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateMarkers()
    this.updateIsochrones(prevProps)
    this.updateMap(prevProps)
  }

  clearLayerByIndex(idx) {
    markersLayer.eachLayer(function(layer) {
      if (layer.options.index === idx) markersLayer.removeLayer(layer)
    })
  }

  isMarkerPresent(idx) {
    let isPresent = false
    markersLayer.eachLayer(function(layer) {
      if (layer.options.index === idx) isPresent = true
    })
    return isPresent
  }

  updatePosition(obj) {
    this.props.dispatch(
      fetchHereReverseGeocode({
        isoIndex: obj.isoIndex,
        ...obj.latLng
      })
    )
  }

  addIsochrones(geometry, range, color, index) {
    console.log('adding this isochron')
    L.polygon(
      geometry.map(function(coordString) {
        return coordString.split(',')
      }),
      {
        fillColor: color,
        weight: 2,
        opacity: 1,
        color: 'white',
        pane: 'isochronesPane',
        index: index
      }
    )
      .addTo(isochronesLayer)
      .bindTooltip('Range: ' + range, { permanent: false, sticky: true })
  }
  addIsochronesMarker(location, idx, isPresent = false) {
    if (!isPresent) {
      const isochronesMarker = ExtraMarkers.icon({
        icon: 'fa-number',
        markerColor: 'purple',
        shape: 'star',
        prefix: 'fa',
        number: (idx + 1).toString()
      })

      const that = this

      L.marker(location.displayposition, {
        icon: isochronesMarker,
        draggable: true,
        index: idx
      })
        .addTo(markersLayer)
        .bindTooltip(location.title + ', ' + location.description, {
          permanent: false
        })
        .on('dragend', function(e) {
          that.updatePosition({
            latLng: e.target.getLatLng(),
            isoIndex: e.target.options.index
          })
        })
    } else {
      markersLayer.eachLayer(function(layer) {
        if (layer.options.index === idx) {
          layer.setTooltipContent(location.title + ', ' + location.description)
        }
      })
    }
  }

  render() {
    return <div id="map" style={style} />
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  const isochronesControls = state.isochronesControls.controls
  const mapEvents = state.mapEvents
  return {
    isochronesControls,
    mapEvents
  }
}

export default connect(mapStateToProps)(Map)
