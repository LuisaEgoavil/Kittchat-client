import React, { Component } from 'react'

class Error extends Component {
  render() {
    return (
      <div className="main-body error-body">
        <div className="error-message">
          <h1>Oops...</h1>
          <p>Sorry, the page not found.</p>
        </div>
        <img className="error-img" src="images/cat404.png"/>
      </div>
    )
  }
}
export default Error