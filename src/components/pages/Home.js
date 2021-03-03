import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body home-body">
        <p>welcome to Kittchat. We have many cute and friendly cats in each cafe.</p>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home