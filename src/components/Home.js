  import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; 
import image1 from './Hike1.jpg';
import image2 from './Hike2.jpg';
import image3 from './Hike4.jpg';
import image4 from './Hike6.jpg';
import image5 from './Hike7.jpg';
const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="hero-section">
        <Col>
          <h1>Discover your next Hike</h1>
          <p>Discover Nature's wonders with our HL and Camping Adventures</p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Places to Visit in Autumn</h2>
        </Col>
      </Row>
      <Row >
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Mountain Loop</Card.Title>
              <Card.Text>
              The Mountain Loop Highway is a scenic byway in the U.S. state of Washington. It traverses the western section of the Cascade Range within Snohomish County. 
                <br />
                <small><b className='b'>Location 0.4 miles</b></small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='colo'>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>National Park</Card.Title>
              <Card.Text>
              A national park is a natural park in use for conservation purposes, created and protected by national governments. Often it is a reserve of natural, semi-natural, or developed land that a government declares or owns.
                <br />
                <small><b className='b'>Location 0.2 miles</b></small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='colo'>
            <Card.Img variant="top" src={image3}/>
            <Card.Body>
              <Card.Title>Canyon Trail</Card.Title>
              <Card.Text>
              Canyon Trail is ideal for a picnic or a short day hike. Most of the trail is nicely shaded, and an abundance of birds provide a pleasant soundtrack for wildlife-watching and relaxation.
                <br />
                <small><b className='b'>Location 0.6   miles</b></small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Mountaineering Ice Climbing</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className='colo'>
          <Card.Img variant="top" src={image4}/>
            <Card.Body>
              <Card.Title>Activities</Card.Title>
              <Card.Text>
                Kundalini is the most classic yoga. Its origin is in the Raja Yoga of Patanjali and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.
              </Card.Text>
              <ul>
                <li>Start: April 15</li>
                <li>Price: $9900</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='colo'>
          <Card.Img variant="top" src={image5}/>
            <Card.Body>
              <Card.Title>Rock Climbing</Card.Title>
              <Card.Text>
              Rock climbing is a sport in which participants climb up, across, or down natural rock formations or indoor climbing walls. The goal is to reach the summit of a formation or the endpoint of a usually pre-defined route without falling.
              </Card.Text>
              <ul>
                <li>Start: April 30</li>
                <li>Price: $900</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
