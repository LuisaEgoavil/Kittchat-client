import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

class Profile extends Component {

    state = {
        reservations: {}
    }

    componentDidMount(){
        let myReservation = this.props.match.params
        console.log(myReservation)
        axios.get(`${config.API_URL}/api/profile/${myReservation}`)
            .then((response) => {
                console.log(response.data)
                this.setState({reservations: response.data})
            })
            .catch((err) => {
                console.log('details failed', err)
            })
    }
    render() {
        const {reservations} = this.props
        return (
            <div>
                History of 
               

            </div>
        )
    }
}

export default Profile
