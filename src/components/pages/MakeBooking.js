import React, { Component } from 'react'
import Footer from "../Footer"
import { Link } from 'react-router-dom' 

class MakeBooking extends Component {
  render() {
    return (
      <div>
    
        <div className="main-body booking-body">
          <div className="booking-right">
            <form onSubmit={this.props.onBook} className="book-form">
              <div>
                <label>Cafe Location</label><br></br>
                <input name="location" type="location" />
              </div>
              <div>
                <label>Date</label><br></br>
                <input name="date" type="date" />
              </div>
              <div>
                <label>Time</label><br></br>
                <input name="time" type="time" />
              </div>
              <div>
                <label>Name</label><br></br>
                <input name="name" type="text" />
              </div>
              <div>
                <label>Special Request</label><br></br>
                <input name="request" type="text" />
              </div><br></br>
              <Link to="/bookinglist"><button type="submit">Submit</button></Link>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default MakeBooking
