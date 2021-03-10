import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

class Admin extends Component {
    state = {
        reservations: []
    }

    componentDidMount(){
        //let reservationId = this.props.match.params.id
        axios.get(`${config.API_URL}/api/admin`)
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
            <div class="main-body">
                <h1>ADMIN PAGE</h1>

               <h3>{reservations.reservationName}</h3>


            </div>
            </div>
        )
    }
}

export default Admin