import React, { Component } from 'react'
// import axios from 'axios'
// import config from '../../config'

class Profile extends Component {
    

    render() {
        const {reservations} = this.props
        console.log(reservation)
        return (
            <div>
                History of Reservations
                <p>{reservations.locationName}</p>
              
            </div>
        )
    }
}

export default Profile
