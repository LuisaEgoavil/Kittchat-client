import React, { Component } from 'react'
import Header from "../Header"

class LogIn extends Component {
  render() {
    return (
      <div>
      <Header />
        <form onSubmit={this.props.onLogIn}>
          <div className="form-grooup">
            <label>Email</label>
            <input name="email" type="email"/>
          </div>
          <div className="form-grooup">
            <label>Password</label>
            <input name="password" type="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default LogIn
