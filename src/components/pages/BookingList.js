import React, { Component } from 'react'
import config from '../../config'
import axios from 'axios'
import {Link} from 'react-router-dom'

class BookingList extends Component {
    
   state = {
       reservations: {}
   }

    
    render() {

         const {reservations} = this.props
         console.log(this.props)

        return (
            <div>
                <h1>My Reservations</h1>

              {/* <p>cafename{locationName}</p>  */}
              <p>date{date.data}</p>
              <p>time{time.data}</p>
             <p>name{reservationName.data}</p>
              <p>request{description.data}</p>

                
            </div>
        )
    }
}

export default BookingList