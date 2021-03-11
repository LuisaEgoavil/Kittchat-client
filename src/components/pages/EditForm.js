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
      let name=event.target.value;
      let reser={
        reservationName:name,
        description:this.state.reservation.description
      }
      this.setState({reservation:reser})
    }

    handleDesChange=(event)=>{
      let description=event.target.value;
      let clonedReservation=JSON.parse(JSON.stringify(this.state.reservation))
      clonedReservation.description=description;
      this.setState({reservation:clonedReservation})
    }

    handleDateChange=(event)=>{
      let date=event.target.value;
      let reser={
        date:date,
        description:this.state.reservation.description
      }
      this.setState({reservation:reser})
    }

    handleTimeChange=(event)=>{
      let time=event.target.value;
      let reser={
        time:time,
        description:this.state.reservation.description
      }
      this.setState({reservation:reser})
    }

  //   handleDelete = (reservationId) => {
  //   axios.delete(`${config.API_URL}/api/bookinglist/${reservationId}`, {}, {withCredentials: true})
  //     .then(() => {
  //       let filteredReservations = this.state.reservations.filter((reservation) => {
  //         return reservation._id !== reservationId
  //         })
  //           this.setState({
  //             reservations: filteredReservations
  //           }, () => {
  //             this.props.history.push('/profile')
  //           })
  //     })
  //     .catch((err) => {
  //       console.log('delete failed'. err)
  //     })
  // }

    render() {

        const {reservation} = this.state
        const {onEdit} = this.props

        return (
      
          <form className="main-body" onSubmit={this.props.onEdit}>
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
                <label onChange={this.handleDateChange} value={reservation.date}>Date</label><br></br>
                <input name="date" type="date" />
              </div>
              <div className="form-topic">
                <label value={reservation.time}>Time</label><br></br>
                <input onChange={this.handleTimeChange} name="time" type="time" />
              </div>
              <div className="form-group">
              <input hidden value={reservation._id} name="id" type="text"/>
                <label >Name</label>
                <input onChange={this.handleNameChange} value={reservation.reservationName} name="reservationName" type="text"/>
              </div>
              <div className="form-group">
                <label>Special Request</label>
                <input onChange={this.handleDesChange} value={reservation.description} name="description" type="text"/>
              </div>
              <button type="submit">Update</button>
            </form>
        
      
        )
    }
}


export default EditForm
