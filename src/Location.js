import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

const Location = () => {
  return (
    <div className="location-bg pt-5 mt-5">
      <Container className="text-center my-5">
        <h2 className="mb-4">📍 Visit Us</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0 mb-4">
              <Card.Body>
                <Card.Title className="mb-3">Our Location</Card.Title>
                <Card.Text>
                  Ideal Ice Cream Cafe<br />
                  123 Sweet Street, Dessert Town, IN 456789<br />
                  Phone: +91 98765 43210<br />
                  Email: idealicecream@example.com
                </Card.Text>
                <Card.Text className="text-muted">
                  Open Daily: 10:00 AM – 10:00 PM
                </Card.Text>
              </Card.Body>
            </Card>

            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609839565!2d72.74109924025718!3d19.082197839410875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61d1e65bcbf%3A0x50b9fcd92f2c1794!2sIce%20Cream%20Shop!5e0!3m2!1sen!2sin!4v1611153331341!5m2!1sen!2sin"
                width="100%"
                height="350"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
