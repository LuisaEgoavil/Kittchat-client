import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../App.css';
import { NavDropdown, Item, Divider} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src="images/logo-kittchat.png" alt="logo" width="100"/>
          <ul className="header-nav">
            <li>
              <NavDropdown title="ABOUT" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Cafe</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Cats</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li><Link to="/about">CONTACT</Link></li>
            <li>
              <NavDropdown title="RESERVATION" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Log In</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header