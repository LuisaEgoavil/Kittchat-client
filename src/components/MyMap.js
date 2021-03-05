// import React, { Component } from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import L from 'leaflet';


// class MyMap extends Component {

//   render() {
//     // const centerPosition = [52.517510, 13.393847]
//     // const position1 = [52.503004, 13.429300]
//     // const position2 = [52.518258, 13.305188]
//     // const position3 = [52.494853, 13.428098]
//     // const position4 = [52.474364, 13.433076]
//     // const position5 = [52.535594, 13.424836]

//     // const locationPin = new L.Icon({
//     //   iconUrl: '../images/pin.png',
//     //   iconSize: [60, 60]
//     // })
    
//     return (
//       <div>
//           <MapContainer style={{width: '700px', height: '500px'}}center={centerPosition} zoom={12} scrollWheelZoom={false}>
//             <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
//             <div className="location-spot">
//               <Marker icon={locationPin} position={position1}>
//                 <Popup>LocationA</Popup>
//               </Marker>
//             </div>

//             <div className="location-spot">
//               <Marker icon={locationPin} position={position2}>
//                 <Popup>Location B</Popup>
//               </Marker>
//             </div>

//             <div className="location-spot">
//               <Marker icon={locationPin} position={position3}>
//                 <Popup>LocationC</Popup>
//               </Marker>
//             </div>

//             <div className="location-spot">
//               <Marker icon={locationPin} position={position4}>
//                 <Popup>LocationD</Popup>
//               </Marker>
//             </div>

//             <div className="location-spot">
//               <Marker icon={locationPin} position={position5}>
//                 <Popup>LocationE</Popup>
//               </Marker>
//             </div>
//           </MapContainer>
//         </div>
//     )
//   }
// }
// export default MyMap