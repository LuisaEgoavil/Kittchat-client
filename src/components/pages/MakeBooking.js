import React, { Component } from 'react'

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
                  <option value="Kittchat Schöneberg">Kittchat Schöneberg</option>
                  <option value="Kittchat Charlottenburg">Kittchat Charlottenburg</option>
                  <option value="Kittchat Kreuzberg">Kittchat Kreuzberg</option>
                  <option value="Kittchat Neukölln">Kittchat Neukölln</option>
                  <option value="Kittchat Prenzlauer Berg">Kittchat Prenzlauer Berg</option>
                </select>
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
      </div>
    )
  }
}
export default MakeBooking
