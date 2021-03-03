import React, { Component } from 'react'
import Header from '../Header.js'
import Footer from '../Footer.js'
import '../../App.css';

class CatInfo extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body cats-body">
          <div className="cats-cards">
            <img src="" alt="cats"/>
            <p>1,Type of cat</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="" alt="cats"/>
            <p>2,Type of cat</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="" alt="cats"/>
            <p>3,Type of cat</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="" alt="cats"/>
            <p>4,Type of cat</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="" alt="cats"/>
            <p>5,Type of cat</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="" alt="cats"/>
            <p>6,Type of cat</p>
            <p>description</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default CatInfo