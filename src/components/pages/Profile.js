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
    render() {
        const {reservations} = this.state
        return (
            <div>
            <div className="main-body">
                <h1>Profile</h1>
            {
                reservations.map((reservation, index) => {
                    return <div class="main-body" key={index}>
                    {reservation.time}
                    {reservation.date}
                    {reservation.locationName}
                </div>  
                })
            }
          
            </div>
            </div>
        )
    }
}
export default Profile