import React, { Component } from 'react'
import Header from "../Header"
import Footer from "../Footer"

class MakeBooking extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="main-body booking-body">
          <div className="booking-right">
            <form onSubmit={this.props.onBook} className="book-form">
              <div>
                <label>CAFE LOCATION</label>
                <input name="location" type="location" />
              </div>
              <div>
                <label>DATE</label>
                <input name="date" type="date" />
              </div>
              <div>
                <label>TIME</label>
                <input name="time" type="time" />
              </div>
              <div>
                <label>NAME</label>
                <input name="name" type="text" />
              </div>
              <div>
                <label>ANY REQUEST</label>
                <input name="reqest" type="reqest" />
              </div>
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
