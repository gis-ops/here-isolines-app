(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{293:function(e,t,n){e.exports=n(477)},470:function(e,t,n){},477:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(56);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(58),s=n(257),l=n(33),c=n(259),d=(n(302),n(288)),u=n(16),h="jKco7gLGf0WWlvS5n2fl",p="HQnCztY23zh2xiTPCFiTMA",m=n(32),v=function e(){Object(m.a)(this,e),this.userInput="",this.geocodeResults=[],this.isochrones={receivedAt:null,results:[]},this.isFetching=!1,this.isFetchingIsochrones=!1,this.settings={range:{min:1,max:500,step:1,value:60},interval:{min:1,max:60,step:1,value:10},mode:"car",rangetype:"distance"}},g=function(e){return{type:"ZOOM_TO_ISOCHRONES",receivedAt:Date.now(),controlIndex:e}},f=function(e){return{type:"ZOOM_TO_POINT",receivedAt:Date.now(),latLng:e}},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(r){var a=function(e,t){if(e.Response&&e.Response.View.length>0){var n=[],o=!0,r=!1,a=void 0;try{for(var i,s=e.Response.View[0].Result[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var l=i.value;l.Location&&"point"===l.Location.LocationType&&n.push({title:l.Location.Address.Label,description:l.Location.Address.PostalCode,displayposition:{lat:t?t.lat:l.Location.DisplayPosition.Latitude,lng:t?t.lng:l.Location.DisplayPosition.Longitude},selected:!1})}}catch(c){r=!0,a=c}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}return n}return[{title:"",description:"",displayposition:{lat:t.lat,lng:t.lng},selected:!1}]}(e,n);0==a[0].title.length&&r(_({handlerCode:"NO_GEOCODE_RESULTS"})),r(x(t,a,o)),o&&r(b(t,a))}},x=function(e,t,n){return{type:"RECEIVE_GEOCODE_RESULTS",controlIndex:e,results:t,receivedAt:Date.now(),reverse:n}},E=function(e,t){return{type:"RECEIVE_ISOCHRONES_RESULTS",controlIndex:e,results:t,receivedAt:Date.now(),reverse:!1}},b=function(e,t){return function(n){t[0]&&(n(T({controlIndex:e,inputValue:t[0]?t[0].title:""})),n(I({controlIndex:e,inputValue:t[0]?t[0].title:""})))}},O=function(e){return function(t){t(C(e.controlIndex));var n=function(e,t){var n={};n.start=t.lat+","+t.lng,n.mode="fastest;"+e.mode,n.rangetype=e.rangetype;var o=[];if("time"===e.rangetype){for(var r=60*e.range.value,a=60*e.interval.value;r>0;)o.push(r),r-=a;n.range=o.join(",")}else if("distance"===e.rangetype){for(var i=1e3*e.range.value,s=1e3*e.interval.value;i>0;)o.push(i),i-=s;n.range=o.join(",")}return n}(e.settings,e.center),o=new URL("https://isoline.route.api.here.com/routing/7.2/calculateisoline.json"),r=Object(u.a)({app_id:h,app_code:p},n);return o.search=new URLSearchParams(r),fetch(o).then(function(e){return e.json()}).then(function(n){return t(function(e,t){return function(n){var o=function(e){return e.response&&e.response.isoline.length>0?e.response.isoline.reverse():[]}(e);0==o.length&&n(_({handlerCode:"NO_ISOCHRONES_RESULTS"})),n(E(t,o)),o.length>0&&n(g(t))}}(n,e.controlIndex))})}},C=function(e){return{type:"REQUEST_ISOCHRONES_RESULTS",controlIndex:e}},S=function(e){return Object(u.a)({type:"REQUEST_GEOCODE_RESULTS"},e)},w=function(){return{type:"ADD_ISOCHRONESCONTROL",payload:new v}},T=function(e){return{type:"UPDATE_TEXTINPUT",payload:e}},I=function(e){return{type:"UPDATE_SELECTED_ADDRESS",payload:e}},_=function(e){return{type:"RESULT_HANDLER",handlerCode:e.handlerCode,receivedAt:Date.now()}},R={event:null,controlIdx:null,receivedAt:null,latLng:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"ZOOM_TO_ISOCHRONES":return Object(u.a)({},e,{event:t.type,controlIndex:t.controlIndex,receivedAt:t.receivedAt});case"ZOOM_TO_POINT":return Object(u.a)({},e,{event:t.type,latLng:t.latLng,receivedAt:t.receivedAt});default:return e}},L={NO_GEOCODE_RESULTS:"Sorry, unfortunately no addresses can be found, please try a different location.",NO_ISOCHRONES_RESULTS:"Sorry, unfortunately no isochrones can be computed, please try a different location."},k={NO_GEOCODE_RESULTS:"Unable to find addresses here",NO_ISOCHRONES_RESULTS:"Unable to build isochrones here"},A={handlerCode:null,handlerMessage:null,handlerTopic:null,receivedAt:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESULT_HANDLER":return Object(u.a)({},e,{handlerCode:t.handlerCode,handlerTopic:k[t.handlerCode],handlerMessage:L[t.handlerCode],receivedAt:t.receivedAt});default:return e}},z={controls:[new v]},U=Object(i.combineReducers)({isochronesControls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"ADD_ISOCHRONESCONTROL":return Object(u.a)({},e,{controls:[].concat(Object(d.a)(e.controls),[t.payload])});case"REMOVE_ISOCHRONES_CONTROL":return Object(u.a)({},e,{controls:e.controls.filter(function(e,n){return n!==t.payload.controlIndex})});case"UPDATE_TEXTINPUT":return Object(u.a)({},e,{controls:e.controls.map(function(e,n){return n===t.payload.controlIndex?Object(u.a)({},e,{userInput:t.payload.inputValue}):e})});case"REQUEST_ISOCHRONES_RESULTS":return Object(u.a)({},e,{controls:e.controls.map(function(e,n){return n===t.controlIndex?Object(u.a)({},e,{isFetchingIsochrones:!0}):e})});case"REQUEST_GEOCODE_RESULTS":return Object(u.a)({},e,{controls:e.controls.map(function(e,n){return n===t.controlIndex?Object(u.a)({},e,{isFetching:!0,reverse:t.reverse}):e})});case"RECEIVE_GEOCODE_RESULTS":case"RECEIVE_REVERSE_GEOCODE_RESULTS":return Object(u.a)({},e,{controls:e.controls.map(function(e,n){return n===t.controlIndex?Object(u.a)({},e,{isFetching:!1,geocodeResults:t.results,reverse:t.reverse}):e})});case"UPDATE_SELECTED_ADDRESS":return Object(u.a)({},e,{controls:e.controls.map(function(e,n){return n===t.payload.controlIndex?Object(u.a)({},e,{geocodeResults:e.geocodeResults.map(function(e){return e.title===t.payload.inputValue&&e.title.length>0?Object(u.a)({},e,{selected:!0}):Object(u.a)({},e,{selected:!1})})}):e})});case"UPDATE_SETTINGS":return Object(u.a)({},e,{controls:e.controls.map(function(e,n){return n===t.controlIndex?Object(u.a)({},e,{settings:t.payload.settings}):e})});case"RECEIVE_ISOCHRONES_RESULTS":return Object(u.a)({},e,{controls:e.controls.map(function(e,n){return n===t.controlIndex?Object(u.a)({},e,{isFetchingIsochrones:!1,isochrones:{results:t.results,receivedAt:t.receivedAt}}):e})});default:return e}},mapEvents:j,resultHandler:N}),B=n(42),D=n(46),H=n(43),M=n(47),P=n(19),V=n.n(P),G=n(260),F=n.n(G),W={};W.Icon=P.Icon.extend({options:{iconSize:[35,45],iconAnchor:[17,42],popupAnchor:[1,-32],shadowAnchor:[10,12],shadowSize:[36,16],className:"",prefix:"",extraClasses:"",shape:"circle",icon:"",innerHTML:"",markerColor:"red",svgBorderColor:"#fff",svgOpacity:1,iconColor:"#fff",number:"",svg:!1},initialize:function(e){e=P.Util.setOptions(this,e)},createIcon:function(){var e=document.createElement("div"),t=this.options;return t.icon&&(e.innerHTML=this._createInner()),t.innerHTML&&(e.innerHTML=t.innerHTML),t.bgPos&&(e.style.backgroundPosition=-t.bgPos.x+"px "+-t.bgPos.y+"px"),t.svg?this._setIconStyles(e,"svg"):this._setIconStyles(e,t.shape+"-"+t.markerColor),e},_createInner:function(){var e="",t="",n=this.options;if(n.iconColor&&(e="style='color: "+n.iconColor+"' "),n.number&&(t="number='"+n.number+"' "),n.svg){var o='<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.529271 95.44922" style="fill:'+n.markerColor+";stroke:"+n.svgBorderColor+";fill-opacity:"+n.svgOpacity+';" height="100%" width="100%" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><g transform="translate(-139.52 -173.21)"><path d="m174.28 173.21c-19.199 0.00035-34.764 15.355-34.764 34.297 0.007 6.7035 1.5591 12.813 5.7461 18.854l0.0234 0.0371 28.979 42.262 28.754-42.107c3.1982-5.8558 5.9163-11.544 6.0275-19.045-0.0001-18.942-15.565-34.298-34.766-34.297z"/></g></svg>';return"square"===n.shape&&(o='<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.457038 96.523441" style="fill:'+n.markerColor+";stroke:"+n.svgBorderColor+";fill-opacity:"+n.svgOpacity+';" height="100%" width="100%" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><g transform="translate(-545.27 -658.39)"><path d="m545.27 658.39v65.301h22.248l12.48 31.223 12.676-31.223h22.053v-65.301h-69.457z"/></g></svg>'),"star"===n.shape&&(o='<svg style="top:0; fill:'+n.markerColor+";stroke:"+n.svgBorderColor+";fill-opacity:"+n.svgOpacity+';" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 77.690999 101.4702"><g transform="translate(-101.15 -162.97)"><g transform="matrix(1 0 0 1.0165 -65.712 -150.28)"><path d="m205.97 308.16-11.561 11.561h-16.346v16.346l-11.197 11.197 11.197 11.197v15.83h15.744l11.615 33.693 11.467-33.568 0.125-0.125h16.346v-16.346l11.197-11.197-11.197-11.197v-15.83h-15.83l-11.561-11.561z"/></g></g></svg>'),"penta"===n.shape&&(o='<svg style="fill:'+n.markerColor+";stroke:"+n.svgBorderColor+";fill-opacity:"+n.svgOpacity+';"   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.550368 96.362438" height="100%" width="100%" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><g transform="translate(-367.08 -289.9)"><path d="m367.08 322.5 17.236-32.604h36.151l18.164 32.25-35.665 64.112z"/></g></svg>'),o+"<i "+t+e+"class='"+n.extraClasses+" "+n.prefix+" "+n.icon+"'></i>"}return"<i "+t+e+"class='"+n.extraClasses+" "+n.prefix+" "+n.icon+"'></i>"},_setIconStyles:function(e,t){var n,o,r=this.options,a=P.point(r["shadow"===t?"shadowSize":"iconSize"]);"shadow"===t?(n=P.point(r.shadowAnchor||r.iconAnchor),o="shadow"):(n=P.point(r.iconAnchor),o="icon"),!n&&a&&(n=a.divideBy(2,!0)),e.className="leaflet-marker-"+o+" extra-marker extra-marker-"+t+" "+r.className,n&&(e.style.marginLeft=-n.x+"px",e.style.marginTop=-n.y+"px"),a&&(e.style.width=a.x+"px",e.style.height=a.y+"px")},createShadow:function(){var e=document.createElement("div");return this._setIconStyles(e,"shadow"),e}}),W.icon=function(e){return new W.Icon(e)};var Z=W,Q={};Q.HERE=P.TileLayer.extend({options:{subdomains:"1234",minZoom:2,maxZoom:18,scheme:"normal.day",resource:"maptile",mapId:"newest",format:"png8",appId:"",appCode:""},initialize:function(e){var t=(e=P.setOptions(this,e)).scheme.split(".")[0];e.tileResolution=256,P.Browser.retina&&(e.tileResolution=512);var n="base.maps.api.here.com";"satellite"!=t&&"terrain"!=t&&"hybrid"!=t||(n="aerial.maps.api.here.com"),-1!==e.scheme.indexOf(".traffic.")&&(n="traffic.maps.api.here.com");var o="https://{s}."+n+"/{resource}/2.1/{resource}/{mapId}/{scheme}/{z}/{x}/{y}/{tileResolution}/{format}?app_id={appId}&app_code={appCode}";this._attributionUrl=P.Util.template("https://1."+n+"/maptile/2.1/copyright/{mapId}?app_id={appId}&app_code={appCode}",this.options),P.TileLayer.prototype.initialize.call(this,o,e),this._attributionText=""},onAdd:function(e){P.TileLayer.prototype.onAdd.call(this,e),this._attributionBBoxes||this._fetchAttributionBBoxes()},onRemove:function(e){P.TileLayer.prototype.onRemove.call(this,e),this._map.attributionControl.removeAttribution(this._attributionText),this._map.off("moveend zoomend resetview",this._findCopyrightBBox,this)},_fetchAttributionBBoxes:function(){var e=new XMLHttpRequest;e.onreadystatechange=P.bind(function(){4==e.readyState&&200==e.status&&this._parseAttributionBBoxes(JSON.parse(e.responseText))},this),e.open("GET",this._attributionUrl,!0),e.send()},_parseAttributionBBoxes:function(e){if(this._map){for(var t=e[this.options.scheme.split(".")[0]]||e.normal,n=0;n<t.length;n++)if(t[n].boxes)for(var o=0;o<t[n].boxes.length;o++){var r=t[n].boxes[o];t[n].boxes[o]=P.latLngBounds([[r[0],r[1]],[r[2],r[3]]])}this._map.on("moveend zoomend resetview",this._findCopyrightBBox,this),this._attributionProviders=t,this._findCopyrightBBox()}},_findCopyrightBBox:function(){if(this._map){for(var e=this._attributionProviders,t=[],n=this._map.getZoom(),o=this._map.getBounds(),r=0;r<e.length;r++){if(e[r].minLevel<n&&e[r].maxLevel>n&&!e[r].boxes){t.push(e[r]);break}for(var a=0;a<e[r].boxes.length;a++){var i=e[r].boxes[a];if(o.overlaps(i)){t.push(e[r]);break}}}var s=['<a href="https://legal.here.com/terms/serviceterms/gb/">HERE maps</a>'];for(r=0;r<t.length;r++){var l=t[r];s.push('<abbr title="'+l.alt+'">'+l.label+"</abbr>")}var c="\xa9 "+s.join(", ")+". ";c!==this._attributionText&&(this._map.attributionControl.removeAttribution(this._attributionText),this._map.attributionControl.addAttribution(this._attributionText=c))}}}),Q.here=function(e){return new Q.HERE(e)};var J=Q,K={width:"100%",height:"100vh"},X=J.here({appId:"jKco7gLGf0WWlvS5n2fl",appCode:"HQnCztY23zh2xiTPCFiTMA",scheme:"reduced.day"}),Y=J.here({appId:"jKco7gLGf0WWlvS5n2fl",appCode:"HQnCztY23zh2xiTPCFiTMA",scheme:"hybrid.grey.day"}),q=V.a.layerGroup(),$=V.a.layerGroup(),ee=V.a.latLng(-90,-180),te=V.a.latLng(90,180),ne={center:[25.95681,-35.729687],zoomControl:!1,maxBounds:V.a.latLngBounds(ee,te),zoom:2,layers:[q,$,X]},oe=function(e){function t(){return Object(m.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.map=V.a.map("map",ne),this.map.createPane("isochronesPane").style.opacity=.9;var e={"HERE reduced.day":X,"HERE hybrid.grey.day":Y};V.a.control.layers(e).addTo(this.map),V.a.control.zoom({position:"topright"}).addTo(this.map);var t=V.a.control({position:"bottomright"});t.onAdd=function(e){var t=V.a.DomUtil.create("div","brand");return t.innerHTML='<a href="https://gis.ops.com" target="_blank"><div class="gis-ops-logo"></div></a>',t},this.map.addControl(t)}},{key:"updateMarkers",value:function(){var e=this.props.isochronesControls,t=0,n=!0,o=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var s=a.value;if(s.geocodeResults.length>0){var l=!0,c=!1,d=void 0;try{for(var u,h=s.geocodeResults[Symbol.iterator]();!(l=(u=h.next()).done);l=!0){var p=u.value;p.selected&&(s.reverse||this.clearLayerByIndex(t),this.addIsochronesMarker(p,t,this.isMarkerPresent(t)))}}catch(m){c=!0,d=m}finally{try{l||null==h.return||h.return()}finally{if(c)throw d}}}t+=1}}catch(m){o=!0,r=m}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}}},{key:"updateIsochrones",value:function(e){var t=this.props.isochronesControls;$.clearLayers();for(var n=0;n<t.length;n++)if(t[n].isochrones.results.length>0){var o=0,r=t[n].isochrones.results,a=F.a.scale(["#f44242","#f4be41","#41f497"]).mode("hsl").colors(t[n].isochrones.results.length),i=!0,s=!1,l=void 0;try{for(var c,d=r[Symbol.iterator]();!(i=(c=d.next()).done);i=!0){var u=c.value,h=!0,p=!1,m=void 0;try{for(var v,g=u.component[Symbol.iterator]();!(h=(v=g.next()).done);h=!0){var f=v.value;this.addIsochrones(f.shape,"time"===t[n].settings.rangetype?u.range/60+" minutes":u.range/1e3+" kilometers",a[o],n)}}catch(y){p=!0,m=y}finally{try{h||null==g.return||g.return()}finally{if(p)throw m}}o+=1}}catch(y){s=!0,l=y}finally{try{i||null==d.return||d.return()}finally{if(s)throw l}}}}},{key:"updateMap",value:function(e){var t=this.props.mapEvents;if(t.receivedAt>e.mapEvents.receivedAt){var n=V.a.featureGroup();switch(t.event){case"ZOOM_TO_ISOCHRONES":$.eachLayer(function(e){e.options.index===t.controlIndex&&n.addLayer(e)}),this.map.fitBounds(n.getBounds(),{paddingTopLeft:[100,100]});break;case"ZOOM_TO_POINT":this.map.flyTo(t.latLng,14)}}}},{key:"componentDidUpdate",value:function(e,t){this.updateMarkers(),this.updateIsochrones(e),this.updateMap(e)}},{key:"clearLayerByIndex",value:function(e){q.eachLayer(function(t){t.options.index===e&&q.removeLayer(t)})}},{key:"isMarkerPresent",value:function(e){var t=!1;return q.eachLayer(function(n){n.options.index===e&&(t=!0)}),t}},{key:"updatePosition",value:function(e){var t;(0,this.props.dispatch)((t=Object(u.a)({isoIndex:e.isoIndex},e.latLng),function(e){e(S({controlIndex:t.isoIndex,reverse:!0}));var n=new URL("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json"),o={app_id:h,app_code:p,mode:"retrieveAddresses",maxresults:1,prox:[t.lat,t.lng,250].join(",")};return n.search=new URLSearchParams(o),fetch(n).then(function(e){return e.json()}).then(function(n){return e(y(n,t.isoIndex,{lat:t.lat,lng:t.lng},!0))})}))}},{key:"addIsochrones",value:function(e,t,n,o){V.a.polygon(e.map(function(e){return e.split(",")}),{fillColor:n,weight:2,opacity:1,color:"white",pane:"isochronesPane",index:o}).addTo($).bindTooltip("Range: "+t,{permanent:!1,sticky:!0})}},{key:"addIsochronesMarker",value:function(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])q.eachLayer(function(n){n.options.index===t&&(e.title.length>0?n.getTooltip()?n.setTooltipContent(e.title+", "+e.description):n.bindTooltip(e.title+", "+e.description,{permanent:!1}).openTooltip():n.unbindTooltip())});else{var n=Z.icon({icon:"fa-number",markerColor:"purple",shape:"star",prefix:"fa",number:(t+1).toString()}),o=this;V.a.marker(e.displayposition,{icon:n,draggable:!0,index:t}).addTo(q).bindTooltip(e.title+", "+e.description,{permanent:!1}).openTooltip().on("dragend",function(e){o.updatePosition({latLng:e.target.getLatLng(),isoIndex:e.target.options.index})})}}},{key:"render",value:function(){return r.a.createElement("div",{id:"map",style:K})}}]),t}(r.a.Component),re=Object(l.b)(function(e,t){return console.log(e,t),{isochronesControls:e.isochronesControls.controls,mapEvents:e.mapEvents}})(oe),ae=n(34),ie=n(165),se=n(231),le=n(164),ce=n(182),de=n(90),ue=n(229),he=n(230),pe={pedestrian:{type:["fastest","shortest"],traffic:["enabled","disabled"]},car:{type:["fastest","shortest","traffic"],traffic:["enabled","disabled"],consumptionModel:["default","standard"],customConsumptionDetails:{}},truck:{type:["fastest"],shippedHazardousGoods:[],limitedWeight:{},weightPerAxle:{},height:{},width:{},length:{},tunnelCategory:[],consumptionModel:["default","standard"],customConsumptionDetails:{}}},me={distance:{},time:{}},ve=function(e){function t(){return Object(m.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(B.a)(t,[{key:"updateSettings",value:function(){var e=this.props,t=e.controls,n=e.controlindex;(0,e.dispatch)({type:"UPDATE_SETTINGS",payload:{controlIndex:n,settings:t[n].settings}})}},{key:"handleClickMode",value:function(e){var t=this.props;t.controls[t.controlindex].settings.mode=e,this.updateSettings()}},{key:"handleRangetype",value:function(e){var t=this.props;t.controls[t.controlindex].settings.rangetype=e,this.updateSettings()}},{key:"handleRangeValueChange",value:function(e,t){var n=t.value,o=this.props;o.controls[o.controlindex].settings.range.value=n,this.updateSettings()}},{key:"handleIntervalValueChange",value:function(e,t){var n=t.value,o=this.props;o.controls[o.controlindex].settings.interval.value=n,this.updateSettings()}},{key:"render",value:function(){var e=this,t=this.props,n=t.controls,o=t.controlindex,a="time"===n[o].settings.rangetype?" minutes":" kilometers",i={settings:Object(u.a)({},n[o].settings.range,{start:n[o].settings.range.value,onChange:function(t){n[o].settings.range.value=t,n[o].settings.range.value<n[o].settings.interval.value&&(n[o].settings.interval.value=n[o].settings.range.value),n[o].settings.interval.max=n[o].settings.range.value,e.updateSettings()}})},s={settings:Object(u.a)({},n[o].settings.interval,{start:n[o].settings.interval.value,onChange:function(t){n[o].settings.interval.value=t,e.updateSettings()}})};return r.a.createElement("div",null,r.a.createElement("div",{className:"mb3"},r.a.createElement(de.a,{size:"small",color:"purple"},"Travel mode"),r.a.createElement("div",{className:"mt3"},r.a.createElement(le.a.Group,{basic:!0,size:"small"},pe&&Object.keys(pe).map(function(t,a){return r.a.createElement(le.a,{active:t===n[o].settings.mode,key:a,mode:t,onClick:function(){return e.handleClickMode(t)}},t)})))),r.a.createElement(ue.a,null),r.a.createElement("div",{className:"mb3"},r.a.createElement(de.a,{size:"small",color:"purple"},"Range type"),r.a.createElement("div",{className:"mt3"},r.a.createElement(le.a.Group,{basic:!0,size:"small"},me&&Object.keys(me).map(function(t,a){return r.a.createElement(le.a,{active:t===n[o].settings.rangetype,key:a,mode:t,onClick:function(){return e.handleRangetype(t)}},t)})))),r.a.createElement(ue.a,null),r.a.createElement("div",null,r.a.createElement(de.a,{size:"small",color:"purple"},"Maximum range"),r.a.createElement("div",{className:"mt3"},r.a.createElement(ce.Slider,{discrete:!0,color:"grey",value:n[o].settings.range.value,inverted:!1,settings:i.settings}),r.a.createElement("div",{className:"mt2 flex justify-between items-center"},r.a.createElement(he.a,{size:"mini",placeholder:"Enter Value",onChange:this.handleRangeValueChange.bind(this)}),r.a.createElement(de.a,{className:"mt2",color:"grey",size:"mini"},n[o].settings.range.value+a)))),r.a.createElement(ue.a,null),r.a.createElement("div",null,r.a.createElement(de.a,{size:"small",color:"purple"},"Interval step"),r.a.createElement("div",{className:"mt3"},r.a.createElement(ce.Slider,{discrete:!0,color:"grey",value:n[o].settings.interval.value,inverted:!1,settings:s.settings}),r.a.createElement("div",{className:"mt2 flex justify-between items-center"},r.a.createElement(he.a,{size:"mini",placeholder:"Enter Value",onChange:this.handleIntervalValueChange.bind(this)}),r.a.createElement(de.a,{className:"mt2",color:"grey",size:"mini"},n[o].settings.interval.value+a)))))}}]),t}(r.a.Component),ge=Object(l.b)(function(e){return{controls:e.isochronesControls.controls}})(ve),fe=n(45),ye=n(234),xe=n(245),Ee=n(246),be=n(263),Oe=n.n(be),Ce=n(264),Se=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(D.a)(this,Object(H.a)(t).call(this,e))).handleClick=function(e,t){var o=t.index,r=n.state.activeIndex===o?-1:o;n.setState({activeIndex:r})},n.handleSearchChange=function(e){var t=n.props,o=t.dispatch,r=t.controlindex;o(T({inputValue:e.target.value,controlIndex:r})),n.fetchGeocodeResults()},n.handleResultSelect=function(e,t){var o=t.result,r=n.props,a=r.dispatch,i=r.controlindex;a(T({inputValue:o.title,controlIndex:i})),a(I({inputValue:o.title,controlIndex:i})),a(f(o.displayposition))},n.handleFetchIsochrones=function(){var e,t=n.props,o=t.dispatch,r=t.controlindex,a=t.controls,i=!0,s=!1,l=void 0;try{for(var c,d=a[r].geocodeResults[Symbol.iterator]();!(i=(c=d.next()).done);i=!0){var u=c.value;u.selected&&(e=u.displayposition)}}catch(h){s=!0,l=h}finally{try{i||null==d.return||d.return()}finally{if(s)throw l}}o(O({controlIndex:r,settings:a[r].settings,center:e}))},n.handleZoom=function(){var e=n.props,t=e.dispatch,o=e.controlindex;t(g(o))},n.dataChanged=n.dataChanged.bind(Object(ae.a)(Object(ae.a)(n))),n.state={isochronesTitle:"Isochrones -"+(e.controlindex+1),activeIndex:0},n.handleSearchChange=n.handleSearchChange.bind(Object(ae.a)(Object(ae.a)(n))),n.handleResultSelect=n.handleResultSelect.bind(Object(ae.a)(Object(ae.a)(n))),n.fetchGeocodeResults=Object(Ce.a)(1e3,n.fetchGeocodeResults),n}return Object(M.a)(t,e),Object(B.a)(t,[{key:"fetchGeocodeResults",value:function(){var e,t=this.props,n=t.dispatch,o=t.userTextInput,r=t.controlindex;n((e={inputValue:o,controlIndex:r},function(t){t(S({controlIndex:e.controlIndex}));var n=new URL("https://geocoder.api.here.com/6.2/geocode.json"),o={app_id:h,app_code:p,searchtext:e.inputValue};return n.search=new URLSearchParams(o),fetch(n).then(function(e){return e.json()}).then(function(n){return t(y(n,e.controlIndex))})}))}},{key:"customValidateText",value:function(e){return e.length>0&&e.length<64}},{key:"dataChanged",value:function(e){this.setState(Object(u.a)({},e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.isFetching,o=t.isFetchingIsochrones,a=t.userTextInput,i=t.results,s=t.controls,l=t.controlindex,c=t.isochronesResults;return r.a.createElement(ie.a,{style:{margin:"20px"}},r.a.createElement("div",{className:"mb2 justify-between flex flex-row items-center"},r.a.createElement("div",null,r.a.createElement(se.a,{trigger:r.a.createElement(fe.a,{name:"pencil"}),content:"Edit name",size:"mini"}),r.a.createElement(Oe.a,{validate:this.customValidateText,activeClassName:"editing",text:this.state.isochronesTitle,paramName:"isochronesTitle",change:this.dataChanged,style:{minWidth:150,display:"inline-block",margin:"0 0 0 0",padding:0,fontWeight:"bold",fontSize:15,outline:"none",border:"none"}})),c&&c.length>0&&r.a.createElement(se.a,{trigger:r.a.createElement(le.a,{circular:!0,size:"mini",icon:"unhide",style:{float:"right"},onClick:this.handleShow,className:"pr3"}),content:"Toggle on map",size:"mini"}),c&&c.length>0&&r.a.createElement(se.a,{trigger:r.a.createElement(le.a,{circular:!0,icon:"expand arrows alternate",style:{float:"right"},size:"mini",onClick:this.handleZoom,className:"pr4"}),content:"Zoom",size:"mini"}),r.a.createElement(se.a,{trigger:r.a.createElement(le.a,{circular:!0,size:"mini",icon:"remove",style:{float:"right"},onClick:function(){s.length>1&&e.props.dispatch({type:"REMOVE_ISOCHRONES_CONTROL",payload:{controlIndex:l}})}}),content:"Remove",size:"mini"})),r.a.createElement(ue.a,{fitted:!0}),r.a.createElement("div",{className:"flex justify-between items-center mt3"},r.a.createElement(ye.a,{onSearchChange:this.handleSearchChange,onResultSelect:this.handleResultSelect,type:"text",fluid:!0,input:{fluid:!0},loading:n,className:"flex-grow-1 mr2",results:i,value:a,placeholder:"Find Address ..."}),r.a.createElement(se.a,{trigger:r.a.createElement(le.a,{circular:!0,loading:o,disabled:function(){var e=!0,t=!1,n=void 0;try{for(var o,r=i[Symbol.iterator]();!(e=(o=r.next()).done);e=!0)if(o.value.selected)return!1}catch(a){t=!0,n=a}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}return!0}(),color:"purple",icon:"globe",onClick:this.handleFetchIsochrones}),content:"Compute isochrones",size:"mini"})),r.a.createElement(xe.a,{className:"mt2"},r.a.createElement(Ee.a,null,r.a.createElement(Ee.a.Title,{active:0===this.state.activeIndex,index:0,onClick:this.handleClick},r.a.createElement(fe.a,{name:"dropdown"}),"Settings"),r.a.createElement(Ee.a.Content,{active:0===this.state.activeIndex},r.a.createElement(ge,{controlindex:l})))))}}]),t}(r.a.Component),we=Object(l.b)(function(e,t){var n=e.isochronesControls.controls[t.controlindex].userInput,o=e.isochronesControls.controls[t.controlindex].geocodeResults,r=e.isochronesControls.controls[t.controlindex].isochrones.results;return{userTextInput:n,results:o,isFetching:e.isochronesControls.controls[t.controlindex].isFetching,isFetchingIsochrones:e.isochronesControls.controls[t.controlindex].isFetchingIsochrones,controls:e.isochronesControls.controls,mapEvents:e.mapEvents,isochronesResults:r}})(Se),Te={zIndex:999,position:"absolute",width:"400px",top:"0",left:"10px",maxHeight:"calc(100vh)",padding:"0px"},Ie=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(D.a)(this,Object(H.a)(t).call(this,e))).handleAddIsochronesControl=function(){n.props.dispatch(w())},n.handleSettings=function(){console.log("open settings")},n.handleAddIsochronesControl=n.handleAddIsochronesControl.bind(Object(ae.a)(Object(ae.a)(n))),n}return Object(M.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.props.controls;return r.a.createElement(ie.a,{className:"flex flex-column",style:Te},r.a.createElement("div",null,r.a.createElement("div",{style:{flex:1,display:"flex",minHeight:"0px"}},r.a.createElement("div",{style:{flex:1,overflow:"auto"}},r.a.createElement("div",{style:{maxHeight:"calc(100vh - 2vw)",overflow:"auto"}},e&&e.map(function(e,t){return r.a.createElement(we,{key:t,controlindex:t})}),r.a.createElement("div",{style:{marginLeft:"20px",marginBottom:"20px",marginTop:"0px"}},r.a.createElement(se.a,{trigger:r.a.createElement(le.a,{circular:!0,icon:"plus",className:"ma3",onClick:this.handleAddIsochronesControl}),content:"Add",size:"mini"})))))))}}]),t}(r.a.Component),_e=Object(l.b)(function(e){return{controls:e.isochronesControls.controls}})(Ie),Re=n(183),je=function(e){function t(){return Object(m.a)(this,t),Object(D.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(B.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.resultHandler;Object(Re.toast)({type:"info",icon:"info",title:n.handlerTopic,description:n.handlerMessage,time:5e3})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(_e,{className:"isoControls"}),r.a.createElement(Re.SemanticToastContainer,{position:"bottom-center"}))}}]),t}(r.a.Component),Le=Object(l.b)(function(e){return{resultHandler:e.resultHandler}})(je),ke=(n(470),[c.a]);var Ae=Object(i.createStore)(U,Object(s.composeWithDevTools)(i.applyMiddleware.apply(void 0,ke)));Object(a.render)(r.a.createElement(l.a,{store:Ae}," ",r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[293,2,1]]]);
//# sourceMappingURL=main.6a582339.chunk.js.map