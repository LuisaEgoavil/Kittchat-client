import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

class EditForm extends Component {

    state = {
        reservation: {}
    }

    componentDidMount(){
        let reservationId= this.props.match.params.id
        axios.get(`${config.API_URL}/api/profile/${reservationId}`)
            .then((response) => {
                this.setState({
                    reservation: response.data
                })
            })
            .catch(() =>{
                console.log('Details fetch failed')
            })
    }

   
    handleDelete = (reservationId) => {
    axios.delete(`${config.API_URL}/api/bookinglist/${reservationId}`, {}, {withCredentials: true})
      .then(() => {
        let filteredReservations = this.state.reservations.filter((reservation) => {
          return reservation._id !== reservationId
          })
            this.setState({
              reservations: filteredReservations
            }, () => {
              this.props.history.push('/profile')
            })
      })
      .catch((err) => {
        console.log('delete failed'. err)
      })
  }

    render() {

        const {reservation} = this.state
        const {onEdit} = this.props

        return (
            <div>
                <input type="text" onChange={this.handleNameChange} valkue={reservation.reservationName}/>
                <input type="text" onchange={this.handleDescChange} value={reservation.description}/>
                <button onClick={ () => {onEdit(reservation)}}>Change</button>
            </div>
        )
    }
}


export default EditForm
