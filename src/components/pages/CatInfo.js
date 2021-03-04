import React, { Component } from 'react'
import Footer from '../Footer'
import '../../App.css';

class CatInfo extends Component {
  render() {
    return (
      <div>
        
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