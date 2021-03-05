import axios from 'axios'
import React, { Component } from 'react'
import Footer from '../Footer'
import MyMap from '../MyMap'
import config from '../../config'

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

    
    axios.get(`${config.API_URL}/api/location`)
      .then((response) => {
        console.log(response.data)
        this.setState({ location: response.data }) // this causes a rerender
      })
      .catch(() => {
        console.log('Detail fetch failed')
      })
  }

  handleLocation = (locationIndex) => {
    // this.state.locationToDisplay = 1 // Please never do this
    this.setState({locationToDisplay: 1}) // this causes a rerender
  }

  // step 3 Try to render
  // step 5 A rerender happends
  render() {
    const {location, locationToDisplay} = this.state

    if (location.length === 0) return <h1>Loading</h1>
    return (
      <div>
        
        <div className="main-body contact-body">
          <div className="contact-left">

          <button onClick={this.handleLocation}>Location 2</button>
          
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
            <button type="submit">Reserve here!</button>
          </div>
          <div className="contact-right">
            <MyMap />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Contact