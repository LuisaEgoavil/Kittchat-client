import React, { Component } from 'react'

class Cafe extends Component {

  render() {
    return (
      <div>
        <div className="main-body cafe-body" style={{backgroundImage: `url(/images/cafe-bg7.jpg)`,backgroundSize: "cover",backgroundPosition:"center",backgroundRepeat:'no-repeat'}}>
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
                    <span className="menu-detail">
                      <p>Hot Chocolate</p>
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
                      <p>Green Tea</p>
                      <p>€ 2.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>English Breackfast Tea</p>
                      <p>€ 3.00</p>
                    </span>
                    <span className="menu-detail">
                      <p>Chamomile tea</p>
                      <p>€ 4.50</p>
                    </span>
                  </div>
                    <img src="/images/cafe4.jpg" alt="cafetea" />
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
                      <p>Peach Mango</p>
                      <p>€ 3.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Fresh Orange juice</p>
                      <p>€ 2.50</p>
                    </span>
                    <span className="menu-detail">
                      <p>Passion frui soda</p>
                      <p>€ 4.00</p>
                    </span>
                    <span className="menu-detail">
                  <p>Hot Chocolate</p>
                  <p>€ 3.50</p>
                </span>
                  </div>
                  <img src="/images/drink.jpg" alt="cafeDrink" />
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
                      <p>New York Cheesecake</p>
                      <p>€ 5.50</p>
                    </span>
                    <span className="menu-detail">
                    <p>Blueberry Cheesecake</p>
                    <p>€ 5.50</p>
                  </span>
                  </div>
                  <img src="/images/cafe3.jpg" alt="cafeDessert" />
                </div>
            </div>
            
        </div>
        
        
      </div>
    )
  }
}
export default Cafe