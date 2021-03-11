import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import {Link} from 'react-router-dom'


class BookingList extends Component {

  state = {
    reservation: null
  }

  componentDidMount(){
    let reservationId = this.props.match.params.id
    console.log(reservationId)
    axios.get(`${config.API_URL}/api/booking/${reservationId}`)
      .then((response) => {
        console.log(response.data)
        this.setState({reservation: response.data})
      })
      .catch((err) => {
        console.log('details failed', err)
      })
  }

  render() {
    const {reservation} = this.state
    const {onDelete} = this.props

    if (!reservation) return <h1>Loading</h1>
    return (
      <div>
        <div class="main-body confirm-body" style={{backgroundImage: `url(/images/cafe-bg6.jpg)`,backgroundSize: "cover",backgroundPosition:"bottom",backgroundRepeat:'no-repeat'}}>
          <h1>Reservation confirmation</h1>
          <div className="confirm-inner">
            <p><strong>Cafe Location</strong> <br/><span className="confirm-topic">{reservation.locationName.cafeName}</span></p>
            <p><strong>Name</strong> <br/><span className="confirm-topic">{reservation.reservationName}</span></p>
            <p><strong>Date</strong> <br/><span className="confirm-topic">{reservation.date}</span></p>
            <p><strong>Time</strong> <br/><span className="confirm-topic">{reservation.time}</span></p>
            <p><strong>Special request</strong> <br/><span className="confirm-topic">{reservation.description}</span></p>
            <Link to="/profile"><button className="confirm-profile">Profile</button></Link>
            <button className="confirm-cancel" onClick={() => {onDelete(reservation._id)}}>Cancel </button>
          </div>
        </div>
      </div>
    )
  }
}

export default BookingList