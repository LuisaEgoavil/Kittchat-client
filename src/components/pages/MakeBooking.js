import React, { Component } from 'react'
import Footer from "../Footer"

class MakeBooking extends Component {
  render() {
    return (
      <div>
    
        <div className="main-body booking-body">
          <div className="booking-right">
            <form onSubmit={this.props.onAdd} className="book-form">
              <div>
                <label>Cafe Location</label><br></br>
                <select name="locationName">
                  <option value="location1">Kittchat Schöneberg</option>
                  <option value="location2">Kittchat Charlottenburg</option>
                  <option value="location3">Kittchat Kreuzberg</option>
                  <option value="location4">Kittchat Neukölln</option>
                  <option value="location5">Kittchat Prenzlauer Berg</option>
                </select>
              </div>
              <div>
                <label>Date</label><br></br>
                <input name="date" type="text" />
              </div>
              <div>
                <label>Time</label><br></br>
                <input name="time" type="text" />
              </div>
              <div>
                <label>Name</label><br></br>
                <input name="reservationName" type="text" />
              </div>
              <div>
                <label>Special Request</label><br></br>
                <input name="description" type="text" />
              </div><br></br>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default MakeBooking
