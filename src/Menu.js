import React from 'react';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import './App.css';

const Menu = ({ searchQuery = '', addToCart }) => {
  const iceCreams = [
    { title: 'Tasty Tiramisu', image: 'https://i.pinimg.com/736x/fc/ba/01/fcba014b569cb5568dc4b037cc40729c.jpg', price: '₹120' },
    { title: 'Minty Fresh Chocochip', image: 'https://i.pinimg.com/736x/12/b7/85/12b78519cd42439d523a5588e13b0dcc.jpg', price: '₹100' },
    { title: 'Mixed Berry', image: 'https://i.pinimg.com/736x/5d/b6/7e/5db67e5ce73e62dc6861ac0dcaa31dbe.jpg', price: '₹110' },
    { title: 'Icecream Sandwich', image: 'https://i.pinimg.com/736x/1d/a7/4d/1da74dbe2d151650b1092d35e700075f.jpg', price: '₹130' },
  ];

  const extras = [
    { title: 'Waffle Cone', image: 'https://www.thespruceeats.com/thmb/sI6k33jp9uO_uPbVC78m3XB1II4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waffle-cones-10-32ce805bc4004ba78bd9aadf23745939.jpg', price: '₹30' },
    { title: 'Choco Chips', image: 'https://homebakersmart.co.in/cdn/shop/files/61XgbruQbyL.jpg?v=1724413299', price: '₹20' },
    { title: 'Rainbow Sprinkles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkP2IP4cUfeV0t9-jxZwQCqZ4Ct4WPfzMvzg&s', price: '₹15' },
    { title: 'Cold Coffee', image: 'https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg', price: '₹60' },
  ];

  const allItems = [...iceCreams, ...extras];

  const filteredItems = searchQuery
    ? allItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allItems;

  return (
    <Container className="my-5">
        <br />
        <br />
      <Row>
        {filteredItems.map((item, idx) => (
          <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <Image src={item.image} roundedCircle fluid className="popular-img mb-3" />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
