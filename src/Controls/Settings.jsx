import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Slider } from 'react-semantic-ui-range'
import { Label, Input, Button, Divider } from 'semantic-ui-react'
import { updateSettings } from '../actions/actions'

const transportModes = {
  pedestrian: {
    type: ['fastest', 'shortest'],
    traffic: ['enabled', 'disabled']
  },
  car: {
    type: ['fastest', 'shortest', 'traffic'],
    traffic: ['enabled', 'disabled'],
    consumptionModel: ['default', 'standard'],
    customConsumptionDetails: {}
  },
  truck: {
    type: ['fastest'],
    shippedHazardousGoods: [],
    limitedWeight: {},
    weightPerAxle: {},
    height: {},
    width: {},
    length: {},
    tunnelCategory: [],
    consumptionModel: ['default', 'standard'],
    customConsumptionDetails: {}
  }
}

const rangeTypes = {
  distance: {},
  time: {}
}

class Settings extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  static propTypes = {
    userTextInput: PropTypes.string,
    results: PropTypes.array,
    isFetching: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    controls: PropTypes.array.isRequired,
    controlindex: PropTypes.number.isRequired
  }

  updateSettings() {
    const { controls, controlindex, dispatch } = this.props

    dispatch(
      updateSettings({
        controlIndex: controlindex,
        settings: controls[controlindex].settings
      })
    )
  }

  handleClickMode(mode) {
    const { controls, controlindex } = this.props

    controls[controlindex].settings.mode = mode

    this.updateSettings()
  }

  handleRangetype(rangetype) {
    const { controls, controlindex } = this.props

    controls[controlindex].settings.rangetype = rangetype

    this.updateSettings()
  }

  handleRangeValueChange(e, { value }) {
    const { controls, controlindex } = this.props

    controls[controlindex].settings.range.value = value

    this.updateSettings()
  }

  handleIntervalValueChange(e, { value }) {
    const { controls, controlindex } = this.props

    controls[controlindex].settings.interval.value = value

    this.updateSettings()
  }

  render() {
    const { controls, controlindex } = this.props

    const rangetype =
      controls[controlindex].settings.rangetype === 'time'
        ? ' minutes'
        : ' kilometers'

    const rangeSettings = {
      settings: {
        ...controls[controlindex].settings.range,
        start: controls[controlindex].settings.range.value,
        onChange: value => {
          controls[controlindex].settings.range.value = value

          if (
            controls[controlindex].settings.range.value <
            controls[controlindex].settings.interval.value
          ) {
            controls[controlindex].settings.interval.value =
              controls[controlindex].settings.range.value
          }

          controls[controlindex].settings.interval.max =
            controls[controlindex].settings.range.value

          this.updateSettings()
        }
      }
    }

    const intervalSettings = {
      settings: {
        ...controls[controlindex].settings.interval,
        start: controls[controlindex].settings.interval.value,
        onChange: value => {
          controls[controlindex].settings.interval.value = value

          this.updateSettings()
        }
      }
    }

    return (
      <div>
        <div className="mb3">
          <Label size="small" color="purple">
            {'Travel mode'}
          </Label>
          <div className="mt3">
            <Button.Group basic size="small">
              {transportModes &&
                Object.keys(transportModes).map((key, i) => (
                  <Button
                    active={key === controls[controlindex].settings.mode}
                    key={i}
                    mode={key}
                    onClick={() => this.handleClickMode(key)}>
                    {key}
                  </Button>
                ))}
            </Button.Group>
          </div>
        </div>
        <Divider />

        <div className="mb3">
          <Label size="small" color="purple">
            {'Range type'}
          </Label>
          <div className="mt3">
            <Button.Group basic size="small">
              {rangeTypes &&
                Object.keys(rangeTypes).map((key, i) => (
                  <Button
                    active={key === controls[controlindex].settings.rangetype}
                    key={i}
                    mode={key}
                    onClick={() => this.handleRangetype(key)}>
                    {key}
                  </Button>
                ))}
            </Button.Group>
          </div>
        </div>
        <Divider />

        <div>
          <Label size="small" color="purple">
            {'Maximum range'}
          </Label>
          <div className="mt3">
            <Slider
              discrete
              color="grey"
              value={controls[controlindex].settings.range.value}
              inverted={false}
              settings={rangeSettings.settings}
            />
            <div className="mt2 flex justify-between items-center">
              <Input
                size="mini"
                placeholder="Enter Value"
                onChange={this.handleRangeValueChange.bind(this)}
              />
              <Label className="mt2" color="grey" size={'mini'}>
                {controls[controlindex].settings.range.value + rangetype}
              </Label>
            </div>
          </div>
        </div>
        <Divider />
        <div>
          <Label size="small" color="purple">
            {'Interval step'}
          </Label>
          <div className="mt3">
            <Slider
              discrete
              color="grey"
              value={controls[controlindex].settings.interval.value}
              inverted={false}
              settings={intervalSettings.settings}
            />
            <div className="mt2 flex justify-between items-center">
              <Input
                size="mini"
                placeholder="Enter Value"
                onChange={this.handleIntervalValueChange.bind(this)}
              />
              <Label className="mt2" color="grey" size={'mini'}>
                {controls[controlindex].settings.interval.value + rangetype}
              </Label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { controls } = state.isochronesControls
  return {
    controls
  }
}

export default connect(mapStateToProps)(Settings)
