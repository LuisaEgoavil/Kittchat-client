import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'


class BookingList extends Component {     
    
    state = {
        reservation: {}
    }

    componentDidMount(){
        let reservationId = this.props.match.params.reservationId
        axios.get(`${config.API_URL}/api/bookinglist/${reservationId}`)
            .then((response) => {
                this.setState({reservation: response.data})
            })
            .catch(() => {
                console.log('details failed')
            })
    }
    render() {
        const {reservation, locationName} = this.state
        return (
            <div>
                <h1>My Reservations</h1>

              <p>cafename{reservation.locationName}</p> 
              <p>date</p>
              <p>time</p>
              <p>name</p>
              <p>request</p>

                
            </div>
        )
    }
}

export default BookingList