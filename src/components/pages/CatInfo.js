import React, { Component } from 'react'
import Header from '../Header.js'
import Footer from '../Footer.js'

class CatInfo extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body">
        {/* map function gonna be here */}
          <img src="" alt="cats"/>
          <p>Type of cat</p>
          <p>description</p>
        </div>
        <Footer />
      </div>
    )
  }
}
export default CatInfo