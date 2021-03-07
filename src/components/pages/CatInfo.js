import React, { Component } from 'react'
import Footer from '../Footer'
import '../../App.css';
import {Card, Accordion, Button } from 'react-bootstrap'

 
class CatInfo extends Component {

  render() {

    return (
      <div>
        <h3>Meet the Cats</h3>
        
        <div className="main-body cats-body">
          <div className="cats-cards">
            <img src="/images/catimages/cat1.jpg" alt="cats" width="50%"/>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Lucy
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Lucy is a super friendly cat, she loves kids and likes to play a lot. She is our little princess of the house. You will find her mostly sleeping in warm places. </Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat2.jpg" alt="cats" width="50%"/>
            <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Mark
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Mark is a little shy when he sees anyone wants to pet him. If you find him wondering around the cafe just leave him take a look around, maybe he comes for pets!</Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>

          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat3.jpg" alt="cats" width="50%"/>
            <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Bella
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Our cray cray Bella beauty! She is a jung, loving and playful cat that will get you (no matter what) to play with her! Be carefull with the shoelaces! She loves them!</Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>

          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat4.jpg" alt="cats" width="50%"/>
            <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Leo & Spiky
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>This two cat brothers are just the funniest! They are always trying to get all the attention from cats and people, always chasing them for play. Be aware!</Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>

          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat5.jpg" alt="cats" width="50%"/>
            <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Jack
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>He seems bit scared on the photo, right? Don't let him fool you! Jack is super friendly with everyone in the cafe and for some reason loves to play with long hair... He is super playful and also loves to cuddle!</Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>
        
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat6.jpg" alt="cats" width="50%"/>
            <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Bob
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Bob or Bobby is a really friendly cat just when people come over he tends to get a little bit nervous and tries to find a place to hide. You can spot him on the top shalves.</Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>
          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat7.jpg" alt="cats" width="50%"/>
            <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Ollie
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>How could we describe him? He is just too lovely! He will find your legs and sleep on them, just waiting for you to pet him. Meeting you is on his TODO list!</Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>

          </div>
          <div className="cats-cards">
            <img src="/images/catimages/cat8.png" alt="cats" width="50%"/>
            <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">Ginger
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Ginger came to us when she was 6 months old, she sparks joy wherever she is, she likes to play a lot and also eat from other ones food so... just FYI!</Card.Body>
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