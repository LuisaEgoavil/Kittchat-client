import React, { Component } from 'react'
import { NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom"


class LogIn extends Component {
  render() {
    return (
      <div>
        <div className="main-body login-body">
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
        </div>
      </div>
    )
  }
}
export default LogIn
