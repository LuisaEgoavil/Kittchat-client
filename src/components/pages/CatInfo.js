import React, { Component } from 'react'
import Footer from '../Footer'
import '../../App.css';

class CatInfo extends Component {

  render() {

    return (
      <div>

        <h3>Meet the Cats</h3>
        
        <div className="main-body cats-body">
          <div className="cats-cards">
            <img src="/images/catimages/cat1.jpg" alt="cats" width="50%"/>
            <p>Charlie</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat2.jpg" alt="cats" width="50%"/>
            <p>Lucy</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat3.jpg" alt="cats" width="50%"/>
            <p>Bella</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat4.jpg" alt="cats" width="50%"/>
            <p>Leo & Bella</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat5.jpg" alt="cats" width="50%"/>
            <p>Jack</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat6.jpg" alt="cats" width="50%"/>
            <p>6,Type of cat</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat7.jpg" alt="cats" width="50%"/>
            <p>Ollie</p>
            <p>description</p>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat8.png" alt="cats" width="50%"/>
            <p>Ginger</p>
            <p>description</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default CatInfo