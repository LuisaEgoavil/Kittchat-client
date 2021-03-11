import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../App.css';
import { NavDropdown} from "react-bootstrap";

class Header extends Component {

  render() {
    
    return (
      <div>
        <div className="header">
          <div className="logo">
            <Link to="/"><img src="images/logo-kittchat.png" alt="logo" width="100"/></Link>
          </div>
          <ul className="header-nav">
            <li>
              <NavDropdown title="ABOUT" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1"><Link to="/cafe">Cafe</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2"><Link to="/catinfo">Cats</Link></NavDropdown.Item>
              </NavDropdown>
            </li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/reservation">RESERVATION</Link></li>
            <li>
            {
                this.props.user ? (
                  <button className="header-btn" onClick={this.props.onLogout}>Logout</button>
                  

                ) : (
                  <>
                  <Link className="nav-login" to="/login">Login</Link>
                  <Link to="/signup">SignUp</Link>
                  </>
                )
          }
          </li>
          

          </ul>
        </div>
      </div>
    )
  }
}

export default Header