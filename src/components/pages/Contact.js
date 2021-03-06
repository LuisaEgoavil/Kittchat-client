import axios from 'axios'
import React, { Component } from 'react'
import Footer from '../Footer'
import MyMap from '../MyMap'
import config from '../../config'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Link} from 'react-router-dom'
import L from 'leaflet';


class Contact extends Component {

  // step 1. Read state
  state = {
    location:[],
    locationToDisplay: 0
  }

  // step 2. read functions
  componentDidMount() {
    // step 4. comnponent did mount will execute
    console.log(this.props)

    let locationId = this.props.match.params.locationId
    axios.get(`${config.API_URL}/api/location`)
      .then((response) => {
        console.log(response.data)
        this.setState({ location: response.data }) // this causes a rerender
      })
      .catch(() => {
        console.log('Detail fetch failed')
      })
  }


  handleLocationA = (locationIndex) => {
    // this.state.locationToDisplay = 1 // Please never do this
    this.setState({locationToDisplay: 0}) // this causes a rerender
  }

  handleLocationB = (locationIndex) => {
    // this.state.locationToDisplay = 1 // Please never do this
    this.setState({locationToDisplay: 1}) // this causes a rerender
  }

  handleLocationC = (locationIndex) => {
    this.setState({locationToDisplay: 2}) 
  }

  handleLocationD = (locationIndex) => {
    this.setState({locationToDisplay: 3}) 
  }

  handleLocationE = (locationIndex) => {
    this.setState({locationToDisplay: 4}) 
  }




  // step 3 Try to render
  // step 5 A rerender happends
  render() {
    const {location, locationToDisplay} = this.state

    if (location.length === 0) return <h1>Loading</h1>


    const centerPosition = [52.517510, 13.393847]
    const position1 = [52.503004, 13.429300]
    const position2 = [52.518258, 13.305188]
    const position3 = [52.494853, 13.428098]
    const position4 = [52.474364, 13.433076]
    const position5 = [52.535594, 13.424836]

    const locationPin = new L.Icon({
      iconUrl: '../images/pin.png',
      iconSize: [60, 60]
    })

    return (
      <div>
        <div className="main-body contact-body">
          <div className="contact-left">
          
            <h2>Cafe Name</h2>
            <p>{location[locationToDisplay].cafeName}</p>
            <h2>Address</h2>
            <p>{location[locationToDisplay].address}</p>
            <h2>Open Hours</h2>
            <p>{location[locationToDisplay].hours}</p>
            <h2>Phone Number</h2>
            <p>{location[locationToDisplay].phoneNumber}</p>
            <h2>Email</h2>
            <p>{location[locationToDisplay].email}</p>
            <Link to="/reservation"><button type="submit">Reserve here!</button></Link>
          </div>

          <div>
          <MapContainer style={{width: '700px', height: '500px'}}center={centerPosition} zoom={12} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              
            <div className="location-spot">
              <Marker icon={locationPin} position={position1}>
                <Popup><button  onClick={this.handleLocationA}>Kittchat Schöneberg</button></Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin} position={position2}>
                <Popup><button onClick={this.handleLocationB}>Kittchat Charlottenburg</button></Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin} position={position3}>
                <Popup><button onClick={this.handleLocationC}>Kittchat Kreuzberg</button></Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin} position={position4}>
                <Popup><button onClick={this.handleLocationD}>Kittchat Neukölln</button></Popup>
              </Marker>
            </div>

            <div className="location-spot">
              <Marker icon={locationPin} position={position5}>
                <Popup><button onClick={this.handleLocationE}>Kittchat Prenzlauer Berg</button></Popup>
              </Marker>
            </div>
          </MapContainer>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Contact