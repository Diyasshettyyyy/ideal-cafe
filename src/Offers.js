import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css'; // Custom styles

const offersData = [
  {
    title: 'Buy 1 Get 1 Free',
    description: 'Get a free scoop of your choice with any purchase of a regular-sized cone.',
    image: 'https://media.istockphoto.com/id/685816670/photo/variety-of-ice-cream-cones.jpg?s=612x612&w=0&k=20&c=I2BkvccjpB6nkLnWxY6AGh0RAonuPMwHk-rsBhK18IQ=',
    expiry: 'Valid till April 30, 2025',
  },
  {
    title: '50% Off on All Sundaes',
    description: 'Enjoy 50% off on all sundaes when you order online.',
    image: 'https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW0lMjBzdW5kYWV8ZW58MHx8MHx8fDA%3D',
    expiry: 'Valid till May 15, 2025',
  },
  {
    title: 'Family Combo Offer',
    description: 'Buy the Family Combo Pack and get a free pack of cones.',
    image: 'https://img.cdnx.in/21109/1613376260312_SKU-0017_0.jpg?format=webp',
    expiry: 'Valid till April 25, 2025',
  },
];

const Offers = () => {
  return (
    
    <div className="offers-bg">
        <br></br>
        <br></br>
      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col lg={12}>
            <h2 className="mb-4">🍦 Exclusive Offers Just for You!</h2>
            <p>Enjoy delicious discounts and special deals on your favorite ice creams!</p>
          </Col>
        </Row>

        <Row>
          {offersData.map((offer, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src={offer.image} />
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.description}</Card.Text>
                  <Card.Text><strong>Offer Expiry:</strong> {offer.expiry}</Card.Text>
                  <Button variant="primary" className="w-100">Claim Offer</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Offers;
