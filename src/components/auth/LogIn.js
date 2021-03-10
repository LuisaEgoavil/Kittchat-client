import React, { Component } from 'react'
import { NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom"


class LogIn extends Component {
  render() {
    return (
      <div>
        <div className="main-body login-body" style={{backgroundImage: `url(/images/cafe-bg4.png)`,backgroundSize: "cover",backgroundPosition:"bottom",backgroundRepeat:'no-repeat'}}>
          <div className="login-inner">
            <h1>Login</h1>
            <form onSubmit={this.props.onLogIn}>
              <div className="form-grooup">
                <label className="email">Email</label>
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
      </div>
    )
  }
}
export default LogIn
