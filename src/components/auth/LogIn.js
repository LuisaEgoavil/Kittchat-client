import React, { Component } from 'react'
import Header from "../Header"

class LogIn extends Component {
  render() {
    return (
      <div>
      <Header />
        <form>
          <div className="form-grooup">
            <label>Email</label>
            <input name="email" type="email"/>
          </div>
          <div className="form-grooup">
            <label>Password</label>
            <input name="password" type="password" />
          </div>
          <botton type="submit">Submit</botton>
        </form>
      </div>
    )
  }
}
export default LogIn
