
import React from 'react';
import { Container, Nav, Navbar, Carousel, Card, Row, Col, Image } from 'react-bootstrap';
import '../App.css'; // Link to CSS

const Home = () => {
  return (
    <div className="home-bg">

      {/* Navbar */}
      <Navbar expand="lg" className="shadow-sm py-3 custom-navbar">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="images/logo.png"
              width="100"
              height="100"
              className="d-inline-block align-top me-2"
              alt="Ice Cream Logo"
            />
            <span className="brand-name">Ideal Café</span>
          </Navbar.Brand>

          {/* Center: Navigation */}
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-item">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-item">Contact</Nav.Link>
            <Nav.Link href="#menu" className="nav-item">Menu</Nav.Link>
            <Nav.Link href="#login" className="nav-item">Login</Nav.Link>
          </Nav>

          {/* Right: Profile Picture */}
          <div>
            <img
              src="https://i.pinimg.com/736x/cb/5e/34/cb5e349d3c644515e5ff7bde5513d366.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle"
              alt="Profile"
            />
          </div>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Container className="my-4">
        <Carousel fade className="large-carousel">
          {[
            { src: '/images/berryiamge.jpeg' },
            { src: '/images/idealcafeimg.jpg.png' },
            { src: '/images/berry.jpeg' },
          ].map((item, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100 carousel-img" src={item.src} alt={item.caption} />
              <Carousel.Caption>
                <h3>{item.caption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      
      <Container className="my-5 text-center">
  <h2 className="mb-4">Most Popular</h2>

  <Row>
    {[
      { title: 'Tasty Tiramisu', image: 'https://i.pinimg.com/736x/fc/ba/01/fcba014b569cb5568dc4b037cc40729c.jpg' },
      { title: 'Minty fresh chocochip', image: 'https://i.pinimg.com/736x/12/b7/85/12b78519cd42439d523a5588e13b0dcc.jpg' },
      { title: 'Mixed Berry', image: 'https://i.pinimg.com/736x/5d/b6/7e/5db67e5ce73e62dc6861ac0dcaa31dbe.jpg' },
      { title: 'icecream sandwich', image: 'https://i.pinimg.com/736x/1d/a7/4d/1da74dbe2d151650b1092d35e700075f.jpg' },
    ].map((item, idx) => (
      <Col md={3} key={idx} className="mb-4">
        <Card className="shadow-sm border-0 text-center">
          <Card.Body>
            <Image
              src={item.image}
              roundedCircle
              fluid
              className="popular-img mb-3"
              alt={item.title}
            />
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Delicious {item.title.toLowerCase()} for your sweet cravings!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


    </div>
  );
};

// Reusable Section component
const Section = ({ title, items }) => (
  <Container className="my-5 text-center">
    <h2 className="mb-4">{title}</h2>
    <Row>
      {items.map((item, idx) => (
        <Col md={3} key={idx}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={`https://source.unsplash.com/300x200/?ice-cream,${item}`} />
            <Card.Body>
              <Card.Title>{item}</Card.Title>
              <Card.Text>{generateText(title, item)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

const generateText = (section, item) => {
  switch (section) {
    case 'Our Menu':
      return `Delicious ${item.toLowerCase()} to refresh your day.`;
    case 'Famous Ice Creams':
      return `Our special ${item} loved by all!`;
    default:
      return '';
  }
};

export default Home;

