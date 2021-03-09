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
            <div class="main-body">
                <h1>Reservation confirmation</h1>
                    <p>Cafe Location <br/>{reservation.locationName.cafeName}</p>
                    <p>Name <br/>{reservation.reservationName}</p>
                    {/* <p>Date <br/>{reservation.date}</p> */}
                    <p>Time <br/>{reservation.time}</p>
                    <p>Special request <br/>{reservation.description}</p>
                <Link to="/profile"><button>Profile</button></Link>
               <button onClick={() => {onDelete(reservation._id)}}>Cancel </button>
            </div>
            </div>
        )
    }
}

export default BookingList