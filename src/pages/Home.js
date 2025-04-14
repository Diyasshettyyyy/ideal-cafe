// src/pages/Home.js
// import React from 'react';
// import { Container, Nav, Navbar, Carousel, Card, Row, Col } from 'react-bootstrap';
// import '../App.css'; // We'll write custom styles here

// const Home = () => {
//   return (
//     <div>

//       {/* Navbar */}
//       <Navbar bg="light" expand="lg" className="shadow-sm">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/9388/9388861.png"
//               width="40"
//               height="40"
//               className="d-inline-block align-top"
//               alt="Ice Cream Logo"
// import React from 'react';
// import { Container, Nav, Navbar, Carousel, Card, Row, Col } from 'react-bootstrap';
// import '../App.css'; // Correct relative path

// const Home = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar bg="light" expand="lg" className="shadow-sm">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/9388/9388861.png"
//               width="40"
//               height="40"
//               className="d-inline-block align-top me-2"
//               alt="Ice Cream Logo"
//             />{' '}
//             Ideal Café
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Carousel */}
//       <Container className="my-4">
//         <Carousel fade className="small-carousel">
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://sdmntprwestus.oaiusercontent.com/files/00000000-193c-5230-80e5-4553e4301613/raw?se=2025-04-09T15%3A38%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=84d70780-d94c-504b-ae4d-7ea8e88de9a8&skoid=e872f19f-7b7f-4feb-9998-20052dec61d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-09T09%3A14%3A13Z&ske=2025-04-10T09%3A14%3A13Z&sks=b&skv=2024-08-04&sig=FYrpOQujNiUkxKkve26v5DSaSQpKd2nuSZwkKybL6iM%3D"
//               alt="Tiramisu Ice Cream"
//             />
//             <Carousel.Caption>
//               <h5>Vanilla Delight</h5>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://images.unsplash.com/photo-1599785209707-28dfae49f47b"
//               alt="Chocolate Ice Cream"
//             />
//             <Carousel.Caption>
//               <h5>Chocolate Heaven</h5>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://images.unsplash.com/photo-1590080877498-71285f1f2600"
//               alt="Strawberry Ice Cream"
//             />
//             <Carousel.Caption>
//               <h5>Strawberry Bliss</h5>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </Container>

//       {/* Menu Section */}
//       <Container className="my-5 text-center" id="menu">
//         <h2 className="mb-4">Our Menu</h2>
//         <Row>
//           {['Ice Cream Sundae', 'Waffle Cone', 'Milkshake', 'Fruit Sorbet'].map((item, idx) => (
//             <Col md={3} key={idx}>
//               <Card className="mb-4 shadow-sm">
//                 <Card.Img variant="top" src={`https://source.unsplash.com/300x200/?ice-cream,${idx}`} />
//                 <Card.Body>
//                   <Card.Title>{item}</Card.Title>
//                   <Card.Text>Delicious {item.toLowerCase()} to refresh your day.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Famous Ice Creams */}
//       <Container className="my-5 text-center">
//         <h2 className="mb-4">Famous Ice Creams</h2>
//         <Row>
//           {['Gadbad Ice Cream', 'Black Forest', 'Butterscotch', 'Choco Chip'].map((item, idx) => (
//             <Col md={3} key={idx}>
//               <Card className="mb-4 shadow-sm">
//                 <Card.Img variant="top" src={`https://source.unsplash.com/300x200/?ice-cream,${item}`} />
//                 <Card.Body>
//                   <Card.Title>{item}</Card.Title>
//                   <Card.Text>Our special {item} loved by all!</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Recommended Ice Creams */}
//       <Container className="my-5 text-center">
//         <h2 className="mb-4">Recommended for You</h2>
//         <Row>
//           {['Mango Delight', 'Caramel Swirl', 'Mint Choco', 'Blueberry'].map((item, idx) => (
//             <Col md={3} key={idx}>
//               <Card className="mb-4 shadow-sm">
//                 <Card.Img variant="top" src={`https://source.unsplash.com/300x200/?ice-cream,${item}`} />
//                 <Card.Body>
//                   <Card.Title>{item}</Card.Title>
//                   <Card.Text>Handpicked flavors you'll love.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Special Ice Creams */}
//       <Container className="my-5 text-center">
//         <h2 className="mb-4">Special Ice Creams</h2>
//         <Row>
//           {['Pistachio Fantasy', 'Red Velvet', 'Tropical Paradise', 'Nutty Buddy'].map((item, idx) => (
//             <Col md={3} key={idx}>
//               <Card className="mb-4 shadow-sm">
//                 <Card.Img variant="top" src={`https://source.unsplash.com/300x200/?ice-cream,${item}`} />
//                 <Card.Body>
//                   <Card.Title>{item}</Card.Title>
//                   <Card.Text>Experience our chef's signature specials!</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//     </div>
//   );
// };
// export default Home;

// export default Home;
// src/pages/Home.js
// import React from 'react';
// import { Container, Nav, Navbar, Carousel, Card, Row, Col } from 'react-bootstrap';
// import '../App';
// import logo from '../logo.svg';
//  // Custom styles
// // import logo from '../assets/Balosto.jpeg'; // Assuming you placed the image in src/assets

// const Home = () => {
//   return (
//     <div>

//       {/* Navbar */}
//       <Navbar bg="light" expand="lg" className="shadow-sm">
//         <Container>
//           <Navbar.Brand href="#home" className="d-flex align-items-center">
//             <img
//               src={logo}
//               width="40"
//               height="40"
//               className="d-inline-block align-top me-2"
//               alt="Ice Cream Logo"
//             />
//             <span className="fw-bold">Ideal Café</span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Carousel */}
//       <Container className="my-4">
//         <Carousel fade className="small-carousel">
//           {[
//             { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587", label: "Vanilla Delight" },
//             { src: "https://images.unsplash.com/photo-1599785209707-28dfae49f47b", label: "Chocolate Heaven" },
//             { src: "https://images.unsplash.com/photo-1590080877498-71285f1f2600", label: "Strawberry Bliss" },
//           ].map((item, idx) => (
//             <Carousel.Item key={idx}>
//               <img className="d-block w-100" src={item.src} alt={item.label} />
//               <Carousel.Caption>
//                 <h5>{item.label}</h5>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>

//       {/* Menu Section */}
//       <Section title="Our Menu" items={['Ice Cream Sundae', 'Waffle Cone', 'Milkshake', 'Fruit Sorbet']} />

//       {/* Famous Ice Creams */}
//       <Section title="Famous Ice Creams" items={['Gadbad Ice Cream', 'Black Forest', 'Butterscotch', 'Choco Chip']} description="Our special {item} loved by all!" />

//       {/* Recommended Ice Creams */}
//       <Section title="Recommended for You" items={['Mango Delight', 'Caramel Swirl', 'Mint Choco', 'Blueberry']} description="Handpicked flavors you'll love." />

//       {/* Special Ice Creams */}
//       <Section title="Special Ice Creams" items={['Pistachio Fantasy', 'Red Velvet', 'Tropical Paradise', 'Nutty Buddy']} description="Experience our chef's signature specials!" />

//     </div>
//   );
// };

// // Reusable Section Component
// const Section = ({ title, items, description }) => (
//   <Container className="my-5 text-center">
//     <h2 className="mb-4">{title}</h2>
//     <Row>
//       {items.map((item, idx) => (
//         <Col md={3} key={idx}>
//           <Card className="mb-4 shadow-sm">
//             <Card.Img variant="top" src={`https://source.unsplash.com/300x200/?ice-cream,${encodeURIComponent(item)}`} />
//             <Card.Body>
//               <Card.Title>{item}</Card.Title>
//               <Card.Text>
//                 {description ? description.replace('{item}', item) : `Delicious ${item.toLowerCase()} to refresh your day.`}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   </Container>
// );

// export default Home;
// src/pages/Home.js
// src/pages/Home.js
// src/pages/Home.js
// import React from 'react';
// import { Container, Nav, Navbar, Carousel, Card, Row, Col } from 'react-bootstrap';
// import '../App.css'; // Custom styles

// const Home = () => {
//   return (
//     <div style={{ backgroundColor: '#ffe6f0' }}> {/* Light pink background */}

//       {/* Clean Single Navbar */}
//       <Navbar expand="lg" className="shadow-sm py-3" style={{ backgroundColor: '#fff0f5' }}>
//         <Container>
//           <Navbar.Brand href="#home" className="d-flex align-items-center">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/9388/9388861.png"
//               width="40"
//               height="40"
//               className="d-inline-block align-top me-2"
//               alt="Ice Cream Logo"
//             />
//             <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Ideal Café</span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Carousel */}
//       <Container className="my-4">
//         <Carousel fade className="small-carousel">
//           {[
//             { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', caption: 'Vanilla Delight' },
//             { src: 'https://images.unsplash.com/photo-1599785209707-28dfae49f47b', caption: 'Chocolate Heaven' },
//             { src: 'https://images.unsplash.com/photo-1590080877498-71285f1f2600', caption: 'Strawberry Bliss' },
//           ].map((item, idx) => (
//             <Carousel.Item key={idx}>
//               <img className="d-block w-100" src={item.src} alt={item.caption} />
//               <Carousel.Caption>
//                 <h5>{item.caption}</h5>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>

//       {/* Menu Section */}
//       <Section title="Our Menu" items={['Ice Cream Sundae', 'Waffle Cone', 'Milkshake', 'Fruit Sorbet']} />

//       {/* Famous Ice Creams */}
//       <Section title="Famous Ice Creams" items={['Gadbad Ice Cream', 'Black Forest', 'Butterscotch', 'Choco Chip']} />

//       {/* Recommended Ice Creams */}
//       <Section title="Recommended for You" items={['Mango Delight', 'Caramel Swirl', 'Mint Choco', 'Blueberry']} />

//       {/* Special Ice Creams */}
//       <Section title="Special Ice Creams" items={['Pistachio Fantasy', 'Red Velvet', 'Tropical Paradise', 'Nutty Buddy']} />

//     </div>
//   );
// };

// // Reusable Section component
// const Section = ({ title, items }) => (
//   <Container className="my-5 text-center">
//     <h2 className="mb-4">{title}</h2>
//     <Row>
//       {items.map((item, idx) => (
//         <Col md={3} key={idx}>
//           <Card className="mb-4 shadow-sm">
//             <Card.Img variant="top" src={`https://source.unsplash.com/300x200/?ice-cream,${item}`} />
//             <Card.Body>
//               <Card.Title>{item}</Card.Title>
//               <Card.Text>{generateText(title, item)}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   </Container>
// );

// // Dynamic text generator
// const generateText = (section, item) => {
//   switch (section) {
//     case 'Our Menu':
//       return `Delicious ${item.toLowerCase()} to refresh your day.`;
//     case 'Famous Ice Creams':
//       return `Our special ${item} loved by all!`;
//     case 'Recommended for You':
//       return "Handpicked flavors you'll love.";
//     case 'Special Ice Creams':
//       return "Experience our chef's signature specials!";
//     default:
//       return '';
//   }
// };

// export default Home;
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

      {/* Menu Section
      <Section title="Our Menu" items={['Ice Cream Sundae', 'Waffle Cone', 'Milkshake', 'Fruit Sorbet']} /> */}

      {/* Famous Ice Creams
      <Section title="Famous Ice Creams" items={['Gadbad Ice Cream', 'Black Forest', 'Butterscotch', 'Choco Chip']} /> */}

      {/* Most Popular Section */}
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

