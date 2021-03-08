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
        axios.get(`${config.API_URL}/api/profile`)
            .then((response) =>{
                console.log(response.data)
                this.setState({
                    locationName: response.data,
                    time: response.data, 
                    date: response.data,
                    description: response.data,
                    reservationName: response.data
                })
            })
            .catch(() => {
                console.log('error while getting data')
            })
    }
    render() {
        const {reservation, locationName, time, date, description, reservationName} = this.state
        
        return (
            <div>
            {/* {
                reservations.map((reservation, index) => {
                    return <div class="main-body" key={index}>
                    <h1>Profile</h1>
                    {reservation.time}
                    {reservation.date}
                    {reservation.locationName}
                </div>  
                })
            } */}

            {reservation.time}
            </div>
            
        )
    }
}

export default Profile
