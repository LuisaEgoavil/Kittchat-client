import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Cafe extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body">
          <div className="cafe-left">
            <p>here is the menu name</p>
            <p>price: </p>
          </div>
          <div className="cafe-right">
            <img src="" alt="cafemenu"/>
            <p>menu name come here</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Cafe