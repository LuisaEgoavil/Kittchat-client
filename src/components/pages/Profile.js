import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import config from '../../config'

class Profile extends Component {
    state = {
        reservations : []
    }

    getAlltheData = () => {
        axios.get(`${config.API_URL}/api/profile`)
            .then((response) => {
                const data = response.data
                this.setState({reservations: data})
                console.log('data has been received')
            })
            .catch(() => {
            })
    }

    componentDidMount = () => {
        this.getAlltheData()
    }

    displayReservations = (reservations) => {
        return reservations.map((reservation, index) => {
            <div key={index}>
                <p>Cafe Location <br/>{reservation.locationName}</p>
                    <p>Name <br/>{reservation.reservationName}</p>
                    <p>Date <br/>{reservation.date}</p>
                    <p>Time <br/>{reservation.time}</p>
                    <p>Special request <br/>{reservation.description}</p>
            </div>
        })
    }
    // componentDidMount(){
    //     //let reservationId = this.props.match.params.id
    //     axios.get(`${config.API_URL}/api/profile`)
    //         .then((response) =>{
    //             console.log(response.data)
    //             this.setState({
    //                 _id: _id,
    //                 locationName: response.data,
    //                 time: response.data, 
    //                 date: response.data,
    //                 description: response.data,
    //                 reservationName: response.data
    //             })
    //         })
    //         .catch(() => {
    //             console.log('error while getting data')
    //         })
    // }

    render() {
        //const {reservations} = this.state
        
        return (
            <div>
            {/* {
                reservations.map((reservation, index) => {
                    return <div class="main-body" key={index}>
                    <h1>Profile</h1>
                    {reservation._id}
                    {reservation.time}
                    {reservation.date}
                    {reservation.locationName}
                </div>  
                })
            } */}
            {this.displayReservations(this.state.reservations)}

            </div>
            
        )
    }
}

export default Profile
