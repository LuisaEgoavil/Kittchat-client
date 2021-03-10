import React, { Component } from 'react'
import { NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom"


class LogIn extends Component {
  render() {
    return (
      <div>
        <div className="main-body login-body">
        <h1>Login as a user</h1>
          <form onSubmit={this.props.onLogIn}>
            <div className="form-grooup">
              <label>Email</label>
              <input name="email" type="email"/>
            </div>
            <div className="form-grooup">
              <label>Password</label>
              <input name="password" type="password" />
            </div>
            <button type="submit">Log In</button>
          </form>
        <br/><br/><br/><br/>

       <h1>Login as an admin</h1>
          <form onSubmit={this.props.onLogInAdmin}>
            <div className="form-grooup">
              <label>Email</label>
              <input name="email" type="email"/>
            </div>
            <div className="form-grooup">
              <label>Password</label>
              <input name="password" type="password" />
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    )
  }
}
export default LogIn
