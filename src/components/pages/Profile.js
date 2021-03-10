import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
class Profile extends Component {
  state = {
    reservations : [],
    reservation: {}
  }

  componentDidMount(){
   
    axios.get(`${config.API_URL}/api/profile`,{withCredentials: true})
      .then((response) =>{
        console.log(response.data)
        this.setState({
        reservations: response.data
        })
      })
      .catch(() => {
        console.log('error while getting data')
      })
  }

  handleDelete = (reservationId) => {

    axios.delete(`${config.API_URL}/api/bookinglist/${reservationId}`, {}, {withCredentials: true})
      .then(() => {
        let filteredReservations = this.state.reservations.filter((reservation) => {
          return reservation._id !== reservationId
          })
            this.setState({
              reservations: filteredReservations
            }, () => {
              this.props.history.push('/profile')
            })
      })
      .catch((err) => {
        console.log('delete failed'. err)
      })
    }

//---------------------------------------------
handleEditReservation = (reservationId) => {
  axios.patch(`${config.API_URL}/api/profile/${reservationId}`, {
    locationName: reservation.locationName,
    time: reservation.time,
    date: reservation.date,
    reservationName: reservation.reservationName,
    description: reservation.description
  })

    .then(() => {
      let newReservations = this.state.reservations.map((singleReservation) => {
          if(reservation._id === singleReservation._id) {
            singleReservation.locationName = reservation.locationName
            singleReservation.time = reservation.time
            singleReservation.date = reservation.date
            singleReservation.reservationName = reservation.reservationName
            singleReservation.description = reservation.description
          }
          return singleReservation
      })
      this.setState({
        reservations: newReservations
      }, () => {
        this.props.history.push('/profile')
      })
    })
    .catch((err) => {
      console.log('edit failed', err)
    })
}



    render() {
        const {reservations} = this.state
        // const {onDelete} = this.props
        
        return (
            <div>
            <div className="main-body">
                <h1>Profile</h1><br/>
               <Link to="/booking"><button>Click here to make a reservation</button></Link> 

            {
                reservations.map((reservation, index) => {
                    return <div class="main-body" key={index}>
                    <p>Location: {reservation.locationName.cafeName}</p>
                    <p>{reservation.locationName.address}</p>
                    <p>Name: {reservation.reservationName}</p>
                    <p>Date: {reservation.date}</p>
                    <p>Time: {reservation.time}</p>
                    <p>Request: {reservation.description}</p>
                    <button onClick={() => {this.handleDelete(reservation._id)}}>Delete</button>
                    <button onClick={() => {this.handleEditReservation(reservation)}}>Change details</button>

                </div>  
                })
            }

            </div>
            </div>
        )
    }
}
export default Profile