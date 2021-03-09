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
            <div className="main-body">
                <h1>Profile</h1>
            {
                reservations.map((reservation, index) => {
                    return <div class="main-body" key={index}>
                    <p>Location: {reservation.locationName.cafeName}</p>
                    <p>Name: {reservation.name}</p>
                    <p>Date: {reservation.date}</p>
                    <p>Time: {reservation.time}</p>
                    <p>Request: {reservation.description}</p>
                    <button onClick={() => {this.handleDelete(reservation._id)}}>Delete</button>
                </div>  
                })
            }

            </div>
            </div>
        )
    }
}
export default Profile