import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import {Link} from 'react-router-dom'


class BookingList extends Component {
    
    state = {
        reservation: {}
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
        console.log(reservation)
        return (
            <div>
                <h1>My Reservations</h1>
                    <p>Cafe Location <br/>{reservation.locationName}</p>
                    <p>Name <br/>{reservation.reservationName}</p>
                    <p>Date <br/>{reservation.date}</p>
                    <p>Time <br/>{reservation.time}</p>
                    <p>Special request <br/>{reservation.description}</p>
                <Link to="/profile"><button>Reservation's history</button></Link>
               <button onClick={() => {onDelete(reservation._id)}}>Cancel </button>
            </div>
        )
    }
}

export default BookingList