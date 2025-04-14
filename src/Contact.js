import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './App.css';

const Contact = () => {
  return (
    <div className="pt-5 mt-5 contact-bg">
      <Container className="my-5">
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <h2>📞 Get in Touch</h2>
            <p>We'd love to hear from you! Fill out the form or reach us directly using the info below.</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="shadow-sm border-0 p-4">
              <h4 className="mb-3">Send Us a Message</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message..." required />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <Card className="shadow-sm border-0 p-4 h-100">
              <h4 className="mb-3">Contact Details</h4>
              <p><strong>Address:</strong><br />Ideal Ice Cream, 123 Sweet Lane, Dessert City, IN 456789</p>
              <p><strong>Phone:</strong><br />+91 98765 43210</p>
              <p><strong>Email:</strong><br />idealicecream@example.com</p>
              <p><strong>Working Hours:</strong><br />10:00 AM – 10:00 PM (Daily)</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
