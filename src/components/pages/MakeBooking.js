import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class MakeBooking extends Component {

  render() {
  

    return (
      <div>
    
        <div className="main-body booking-body" style={{backgroundImage: `url(/images/cafe-bg3.jpg)`,backgroundSize: "cover",backgroundPosition:"center",backgroundRepeat:'no-repeat'}}>
          <div className="booking-right">
            <h1>Reservation here!</h1>
            <form onSubmit={this.props.onAdd} className="book-form">
              <div className="form-topic">
                <label>Cafe Location</label><br></br>
                <select name="locationName">
                  <option value="Kittchat Schöneberg">Kittchat Schöneberg</option>
                  <option value="Kittchat Charlottenburg">Kittchat Charlottenburg</option>
                  <option value="Kittchat Kreuzberg">Kittchat Kreuzberg</option>
                  <option value="Kittchat Neukölln">Kittchat Neukölln</option>
                  <option value="Kittchat Prenzlauer Berg">Kittchat Prenzlauer Berg</option>
                </select>
              </div>
              <div className="form-topic">
                <label>Date</label><br></br>
                <input name="date" type="date" />
              </div>
              <div className="form-topic">
                <label>Time</label><br></br>
                <input name="time" type="time" />
              </div>
              <div className="form-topic">
                <label>Name</label><br></br>
                <input name="reservationName" type="text" />
              </div>
              <div className="form-topic">
                <label>Special Request</label><br></br>
                <input name="description" type="text" />
              </div><br></br>
              <button className="booking-form-btn" type="submit">Submit</button> 
              <Link to="/profile"><button className="booking-form-btn">Go back to Profile</button></Link>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
export default MakeBooking
