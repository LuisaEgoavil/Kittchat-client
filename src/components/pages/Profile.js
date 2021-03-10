import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
class Profile extends Component {
  state = {
    reservations : []
  }

  componentDidMount(){
    //let reservationId = this.props.match.params.id
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
                <p><strong>Name:</strong> {reservation.name}</p>
                <p><strong>Date:</strong> {reservation.date}</p>
                <p><strong>Time:</strong> {reservation.time}</p>
                <p><strong>Request:</strong> {reservation.description}</p>
                <button className="delete-btn" onClick={() => {this.handleDelete(reservation._id)}}>Delete</button>
                </div>  
                })
            }

            </div>
          </div>
        )
    }
}
export default Profile