import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

class MyMap extends Component {
  render() {
    const position = [51.505, -0.09]

    const locationPin = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })

    return (
      <div>
        <MapContainer style={{width: '800px', height: '500px'}}center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker icon={locationPin} position={position}>
            <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
          </Marker>
        </MapContainer>
        </div>
    )
  }
}
export default MyMap