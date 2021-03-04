import React, { Component } from 'react'
import Footer from '../Footer'
import LogIn from '../auth/LogIn'
import SignUp from '../auth/SignUp'
import {Link} from 'react-router-dom'


class Reservation extends Component {
  render() {
    return (
      <div>
      
        <h1>reservation page</h1>
        <p>please log in to make a reservation, you dont have an account? sign up for free!</p>
        <Link to='/login'><button>Log In</button></Link>
        <Link to='/signup'><button>Sign Up</button></Link>
        <Footer />
      </div>
    )
  }
}
export default Reservation