import React, { Component } from 'react'
import Footer from '../Footer'

class SignUp extends Component {
  render() {
    return (
      <div>
       
          <form onSubmit={this.props.onSignUp}>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password"/>
            </div>
            <button type="submit">Submit</button>
          </form>
          <Footer />
      </div>
    )
  }
}
export default SignUp

