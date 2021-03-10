import React, { Component } from 'react'




class Home extends Component {
  render() {
    return (
      <div>
        <div style={{backgroundImage: `url(/images/bg2.jpg)`,backgroundSize: "cover",backgroundPosition:"center",backgroundRepeat:'no-repeat'}} className="main-body home-body">
          <div className="home-inside">
            <h1>Welcome to Kittchat</h1>
            <p>We have many cute and friendly cats in each cafe.</p>
            <p>Cat cafe is a type of coffee shop where patrons can play with cats that roam freely around the establishment. </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Home