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
        <div class="main-body cnfirm-body">
          <h1>Reservation confirmation</h1>
          <div className="confirm-inner">
            <p><strong>Cafe Location</strong> <br/>{reservation.locationName.cafeName}</p>
            <p><strong>Name</strong> <br/>{reservation.reservationName}</p>
            <p><strong>Date</strong> <br/>{reservation.date}</p>
            <p><strong>Time</strong> <br/>{reservation.time}</p>
            <p><strong>Special request</strong> <br/>{reservation.description}</p>
            <Link to="/profile"><button>Profile</button></Link>
            <button onClick={() => {onDelete(reservation._id)}}>Cancel </button>
          </div>
        </div>
      </div>
    )
  }
}

export default BookingList