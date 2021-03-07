import React, { Component } from 'react'
import Footer from '../Footer'
import '../../App.css';

class Home extends Component {
  render() {
    return (
      <div >
        <div className="main-body home-body">
          <p>Welcome to Kittchat Cafe! We have many cute and friendly cats in each cafe.</p>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home