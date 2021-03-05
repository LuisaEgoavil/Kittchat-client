import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

class MyMap extends Component {
  render() {
    const position1 = [51.505, -0.09]
    const position2 = [51.605, -0.11]
    const position3 = [51.705, -0.21]
    const position4 = [51.805, -0.31]
    const position5 = [51.905, -0.41]

    const locationPin1 = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })
    const locationPin2 = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })
    const locationPin3 = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })
    const locationPin4 = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })
    const locationPin5 = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })

    const locationPin1 = new L.icon({
      iconUrl: '../images/pin.png',
      iconSize: [60,60]
    })

    return (
      <div>
          <MapContainer style={{width: '600px', height: '400px'}}center={position1} zoom={13} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
            <div className="location-spot">
              <Marker icon={locationPin1} position={position1}>
                <Popup>Location1</Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin2} position={position2}>
                <Popup>Location2</Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin3} position={position3}>
                <Popup>Location3</Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin4} position={position4}>
                <Popup>Location4</Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin5} position={position5}>
                <Popup>Location5</Popup>
              </Marker>
            </div>
          </MapContainer>
        </div>
    )
  }
}
export default MyMap