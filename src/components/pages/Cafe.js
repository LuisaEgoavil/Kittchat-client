import React, { Component } from 'react'
import Footer from '../Footer'

class Cafe extends Component {
  render() {
    return (
      <div>
        
        <div className="main-body">
          <div className="cafe-left">
            <h2>Menu</h2>
            <p>price: </p>
          </div>
          <div className="cafe-right">
            <img src="" alt="cafemenu"/>
            <p>names of the menu</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Cafe