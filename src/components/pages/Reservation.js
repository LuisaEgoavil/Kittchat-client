import React, { Component } from 'react'
import Footer from '../Footer'
import LogIn from '../auth/LogIn'
import SignUp from '../auth/SignUp'
import {Link} from 'react-router-dom'


class Reservation extends Component {
  render() {
    return (
      <div>
        <div className="main-body reservations-body">
          <h1>Make your reservation</h1>
          <p>To make a reservation, please Login. </p>
          <p>You don't have an account? Join for free!</p>
          <Link to='/login'><button>Log In</button></Link>
          <Link to='/signup'><button>Sign Up</button></Link>
        </div>
        <Footer />
        
      </div>
    )
  }
}
export default Reservation