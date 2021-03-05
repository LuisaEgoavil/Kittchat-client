import React, { Component } from 'react'
import Footer from '../Footer'
import MyMap from '../MyMap'

class Contact extends Component {
  render() {
    return (
      <div>
        
        <div className="main-body contact-body">
          <div className="contact-left">
            <h2>Cafe Name</h2>
            <p>cafename here</p>
            <h2>Address</h2>
            <p>address here</p>
            <h2>Open Hours</h2>
            <p>10:00-18:00</p>
            <h2>Phone Number</h2>
            <p>Number here</p>
            <h2>Email</h2>
            <p>email here</p>
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