import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'


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
        return (
            <div>
                <h1>My Reservations</h1>
                    <p>cafename {reservation.locationName}</p> 
                    <p>date {reservation.date}</p>
                    <p>time {reservation.time}</p>
                    <p>name {reservation.reservationName}</p>
                    <p>request {reservation.description}</p>
                
            </div>
        )
    }
}

export default BookingList