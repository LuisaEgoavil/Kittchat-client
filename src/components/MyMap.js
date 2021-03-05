import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

class MyMap extends Component {
  render() {
    const position = [51.505, -0.09]
    
    const position1 = [51.600, -0.11]
    

    const locationPin = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })

    const locationPin1 = new L.icon({
      iconUrl: '../images/pin.png',
      iconSize: [60,60]
    })

    return (
      <div>
        <MapContainer style={{width: '800px', height: '500px'}}center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker icon={locationPin} position={position}>
            <Popup>Kittchat Cafe<br />Park Avenue 15, London </Popup>
          </Marker>

          <Marker icon={locationPin1} position={position1}>
            <Popup>Kittchat Cafe<br />Park Avenue 21, London </Popup>
          </Marker>

        </MapContainer>
        </div>
    )
  }
}
export default MyMap