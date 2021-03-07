import React, { Component } from 'react'
import Footer from '../Footer'
import '../../App.css';
import {Card, Accordion, Button } from 'react-bootstrap'

 
class CatInfo extends Component {


  render() {

    return (
      <div>
        <div className="main-body cats-body">
          <h3>Meet the Cats</h3>
          <div className="cats-cards">
            <img src="/images/catimages/cat1.jpg" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Lucy</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="cats-cards">
            <img src="/images/catimages/cat2.jpg" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Mark</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="cats-cards">
            <img src="/images/catimages/cat3.jpg" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Bella</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="cats-cards">
            <img src="/images/catimages/cat4.jpg" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Leo & Spiky</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="cats-cards">
            <img src="/images/catimages/cat5.jpg" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Jack</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="cats-cards">
            <img src="/images/catimages/cat6.jpg" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Bob</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="cats-cards">
            <img src="/images/catimages/cat7.jpg" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Ollie</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="cats-cards">
            <img src="/images/catimages/cat8.png" alt="cats" width="50%"/>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Ginger</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>description</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default CatInfo