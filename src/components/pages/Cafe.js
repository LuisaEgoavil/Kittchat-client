import React, { Component } from 'react'
import Footer from '../Footer'

class Cafe extends Component {

  render() {
    return (
      <div>
        <div className="main-body cafe-body">
          <h1>Menu</h1> 

            <div className="cafe">
                <div className="menu-wrap">
                  <div className="menu-block">
                    <h2>Coffee</h2>
                    <span className="menu-detail">
                      <p>Black Coffee</p>
                      <p>€ 2.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>White Coffee</p>
                      <p>€ 3.00</p>
                    </span>
                    <span className="menu-detail">
                      <p>Cappuccino</p>
                      <p>€ 3.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Latte</p>
                      <p>€ 3.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Mocha</p>
                      <p>€ 4.00</p>
                    </span>
                  </div>
                  <img src="/images/cafe2.png" alt="cats" />
                </div>

                
                <div className="menu-wrap">
                  <div className="menu-block">
                    <h2>Tea</h2>
                    <span className="menu-detail">
                    <p>Sweet Ginger Peach</p>
                    <p>€ 3.00</p>
                  </span>
                    <span className="menu-detail">
                    <p>HoneyBush Caramel</p>
                    <p>€ 3.00</p>
                  </span>
                    <span className="menu-detail">
                    <p>Peach Mango</p>
                    <p>€ 3.00</p>
                  </span>
                  </div>
                  <img src="/images/cafe2.png" alt="cats" />
                </div>

                
                <div className="menu-wrap">
                  <div className="menu-block">
                    <h2>Others</h2>
                    <span className="menu-detail">
                      <p>Coke</p>
                      <p>€ 2.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Sprite</p>
                      <p>€ 2.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Mineral Water</p>
                      <p>€ 2.00</p>
                    </span>
                    <span className="menu-detail">
                      <p>Green Tea</p>
                      <p>€ 2.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Lemon Tea</p>
                      <p>€ 2.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Frizzy Lychee</p>
                      <p>€ 4.00</p>
                    </span>
                    <span className="menu-detail">
                  <p>Hot Chocolate</p>
                  <p>€ 3.50</p>
                </span>
                  </div>
                  <img src="/images/cafe2.png" alt="cats" />
                </div>

                
                <div className="menu-wrap">
                  <div className="menu-block">
                    <h2>Desserts&Foods</h2>
                    <span className="menu-detail">
                      <p>Oreo Cheesecake</p>
                      <p>€ 6.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Matcha Azuki Cake</p>
                      <p>€ 6.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Raionbow Swiss Roll</p>
                      <p>€ 6.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Belgiam Waffles</p>
                      <p>€ 4.00</p>
                    </span>
                    <span className="menu-detail">
                      <p>Nachos with Salsa Dip</p>
                      <p>€ 5.50</p>
                    </span>
                    <span className="menu-detail">
                    <p>Curry and rice</p>
                    <p>€ 7.50</p>
                  </span>
                  </div>
                  <img src="/images/cafe2.png" alt="cats" />
                </div>
            </div>
            
        </div>
        
        
      </div>
    )
  }
}
export default Cafe