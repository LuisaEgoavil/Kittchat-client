import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

class EditForm extends Component {

    state = {
        reservation: {}
    }

    componentDidMount(){
      console.log(this.props.match)
        let reservationId= this.props.match.params.id
        axios.get(`${config.API_URL}/api/booking/${reservationId}`)
            .then((response) => {
                this.setState({
                    reservation: response.data
                })
            })
            .catch(() =>{
                console.log('Details fetch failed')
            })
    }

    handleNameChange=(event)=>{
      let name = event.target.value;
      let reser = {
        reservationName:name,
        description:this.state.reservation.description
      }
      this.setState({reservation:reser})
    }

    handleDesChange=(event)=>{
      let description = event.target.value;
      let clonedReservation = JSON.parse(JSON.stringify(this.state.reservation))
      clonedReservation.description = description;
      this.setState({reservation:clonedReservation})
    }

    handleDateChange=(event)=>{
      let date = event.target.value;
      let reserdate = {
        date: date,
        description:this.state.reservation.description
      }
      this.setState({reservation:reserdate})
    }

    handleTimeChange=(event)=>{
      let time = event.target.value;
      let resertime = {
        time:time,
        description:this.state.reservation.description
      }
      this.setState({reservation:resertime})
    }

    handleLocationChange=(event)=>{
      let locationName = event.target.value;
      let reserLocation = {
        locationName: locationName,
        description:this.state.reservation.description
      }
      this.setState({reservation:reserLocation})
    }

    render() {

        const {reservation} = this.state
        const {onEdit} = this.props

        return (
          <div onSubmit={onEdit} className="main-body edit-body" style={{backgroundImage: `url(/images/cafe-bg10.jpg)`,backgroundSize: "cover",backgroundPosition:"center",backgroundRepeat:'no-repeat'}}>
            <h1>Edit the booking</h1>
            <form className="edit-form" onSubmit={this.props.onEdit}>
              <div className="edit-inner">
                <label>Cafe Location</label><br></br>
                <p  onChange={this.handleLocationChange} value={reservation.locationName} name="locationName" type="text">{reservation.locationName} </p>
                <select disabled onChange={this.handleLocationChange} value={reservation.locationName} name="locationName">
                  {/* <option value="Kittchat Schöneberg">Kittchat Schöneberg</option>
                  <option value="Kittchat Charlottenburg">Kittchat Charlottenburg</option>
                  <option value="Kittchat Kreuzberg">Kittchat Kreuzberg</option>
                  <option value="Kittchat Neukölln">Kittchat Neukölln</option>
                  <option value="Kittchat Prenzlauer Berg">Kittchat Prenzlauer Berg</option> */}
                </select>
              </div>

              <div className="form-topic">
                <label >Date</label><br></br>
                <input onChange={this.handleDateChange} value={reservation.date} name="date" type="date" />
              </div>

              <div className="form-topic">
                <label>Time</label><br></br>
                <input onChange={this.handleTimeChange}  value={reservation.time} name="time" type="time" />
              </div>

              <div className="form-group">
              <input hidden value={reservation._id} name="id" type="text"/>
                <label >Name</label><br></br>
                <input onChange={this.handleNameChange} value={reservation.reservationName} name="reservationName" type="text"/>
              </div>

              <div className="form-group">
                <label>Special Request</label><br></br>
                <input onChange={this.handleDesChange} value={reservation.description} name="description" type="text"/>
              </div>
              <button className="edit-form-btn" type="submit">Update</button>
            </form>
          </div>
        )
    }
}


export default EditForm
