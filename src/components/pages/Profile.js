import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import config from '../../config'

class Profile extends Component {
  state = {
    reservations : []
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
            singleReservation.locationName = reservations.locationName
            singleReservation.time = reservations.time
            singleReservation.date = reservations.date
            singleReservation.reservationName = reservations.reservationName
            singleReservation.description = reservations.description
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
            <div className="main-body profile-wrapper" style={{backgroundImage: `url(/images/cafe-bg2.jpg)`,backgroundSize: "cover",backgroundPosition:"center", backgroundRepeat:'repeat'}}>
              <h1>Profile</h1><br/>
              <Link to="/booking"><button className="reservation-btn">Click here to make a reservation</button></Link> 

            {
              reservations.map((reservation, index) => {
                return <div className="main-body profile-body" key={index}>
                <p><strong>Location:</strong> {reservation.locationName.cafeName}</p>
                <p><strong>Address:</strong> {reservation.locationName.address}</p>
                <p><strong>Phone Number:</strong> {reservation.locationName.phoneNumber}</p>
                <p><strong>Opening Hour:</strong> {reservation.locationName.hours}</p>
                <p><strong>Email:</strong> {reservation.locationName.email}</p>
                <p><strong>Name:</strong> {reservation.reservationName}</p>
                <p><strong>Date:</strong> {reservation.date}</p>
                <p><strong>Time:</strong> {reservation.time}</p>
                <p><strong>Request:</strong> {reservation.description}</p>
                <button className="delete-btn" onClick={() => {this.handleDelete(reservation._id)}}>Delete</button>
                <Link to={`/profile/edit/${reservation._id}`}><button className="change-btn">Change</button></Link>
                </div>  
                })
            }

            </div>
          </div>
        )
    }
}
export default Profile