import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveItem = (itemTitle) => {
    removeFromCart(itemTitle);
  };

  return (
    <Container className="my-5">
        <br/>
        <br/>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Row>
          {cartItems.map((item, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="shadow-sm text-center h-100">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Price: {item.price}</Card.Text>
                  <Card.Text>Quantity: {item.quantity}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(item.title)}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Cart;
