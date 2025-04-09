// src/components/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>

      {/* Hero Banner - Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1600880292089-90e6a0b49707?auto=format&fit=crop&w=1350&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Discover Award-Winning Flavors!</h3>
            <p>Try our signature ice creams today.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1627495270169-6c6714bb7a57?auto=format&fit=crop&w=1350&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Fresh and Creamy Delights</h3>
            <p>Indulge in our latest creations.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Dishes */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80" />
              <Card.Body>
                <Card.Title>Gadbad Ice Cream</Card.Title>
                <Card.Text>Layered sundae with nuts, fruits, and ice cream scoops!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1587815071070-94d0eccee60a?auto=format&fit=crop&w=800&q=80" />
              <Card.Body>
                <Card.Title>Chocolate Fantasy</Card.Title>
                <Card.Text>Rich chocolate ice cream with brownie chunks and fudge.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80" />
              <Card.Body>
                <Card.Title>Fruit Fiesta</Card.Title>
                <Card.Text>Refreshing blend of seasonal fruits and creamy scoops.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Customer Testimonials */}
      <Container className="my-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>"The best ice cream parlour in town! Loved the Gadbad Ice Cream."</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">- Priya Sharma ⭐⭐⭐⭐⭐</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>"Amazing flavors and great ambiance. Highly recommended!"</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">- Rahul Verma ⭐⭐⭐⭐⭐</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>"Loved the seasonal specials. Fresh and delicious!"</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">- Sneha Patel ⭐⭐⭐⭐☆</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Exclusive Offers */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Exclusive Offers</h2>
        <Row>
          <Col md={6}>
            <Card className="bg-warning text-white">
              <Card.Body>
                <Card.Title>Happy Hours: 3PM - 6PM</Card.Title>
                <Card.Text>Get 20% off on all sundaes and shakes!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="bg-success text-white">
              <Card.Body>
                <Card.Title>Summer Specials</Card.Title>
                <Card.Text>Cool off with our tropical ice creams, only this season!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;
