// import React, { useState } from 'react';
// import { Button, Badge, Form, Row, Col, Card } from 'react-bootstrap';
// import menuData from '../data/menuData.js';
// import Rating from 'react-rating-stars-component';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import MenuItem from '../components/MenuItem';



// function MenuPage() {
//   const [filter, setFilter] = useState('All');
//   const [sort, setSort] = useState('');
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Handle adding an item to the cart
//   const handleAddToCart = (item) => {
//     setCart([...cart, item]);
//     toast.success("Item added to cart!");
//   };

//   // Filter items based on the selected filter
//   const filterItems = (items) => {
//     switch (filter) {
//       case 'Ice Creams':
//       case 'Desserts':
//       case 'Beverages':
//       case 'Snacks':
//         return items.filter((item) => item.category === filter);
//       case 'Popular':
//         return items.filter((item) => item.popular);
//       case 'New Arrivals':
//         return items.filter((item) => item.newArrival);
//       default:
//         return items;
//     }
//   };

//   // Sort items based on the selected sort criteria
//   const sortItems = (items) => {
//     switch (sort) {
//       case 'Price':
//         return [...items].sort((a, b) => a.price - b.price);
//       case 'Popularity':
//         return [...items].sort((a, b) => b.popularity - a.popularity);
//       case 'Rating':
//         return [...items].sort((a, b) => b.rating - a.rating);
//       default:
//         return items;
//     }
//   };

//   // Filter items based on search term
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Filter and sort the menu items
//   const displayedItems = sortItems(filterItems(menuData)).filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h2 className="mb-4">Our Menu</h2>

//       {/* Search Bar */}
//       <Form.Control
//         type="text"
//         placeholder="Search menu..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="mb-4"
//       />

//       {/* Category and Sorting Controls */}
//       <div className="mb-3 d-flex flex-wrap gap-2">
//         {['All', 'Ice Creams', 'Desserts', 'Beverages', 'Snacks', 'Popular', 'New Arrivals'].map((category) => (
//           <Button
//             key={category}
//             variant={filter === category ? 'primary' : 'outline-primary'}
//             onClick={() => setFilter(category)}
//           >
//             {category === 'Ice Creams' && '🍦'}
//             {category === 'Beverages' && '🥤'}
//             {category === 'Desserts' && '🍰'}
//             {category === 'Snacks' && '🍟'}
//             {category === 'Popular' && '🔥'}
//             {category === 'New Arrivals' && '✨'}
//             {category}
//           </Button>
//         ))}

//         <select className="form-select w-auto ms-auto" onChange={(e) => setSort(e.target.value)}>
//           <option value="">Sort By</option>
//           <option value="Price">Price</option>
//           <option value="Popularity">Popularity</option>
//           <option value="Rating">Rating</option>
//         </select>
//       </div>

//       {/* Menu Grid Layout */}
//       <Row className="g-4">
//         {displayedItems.map((item) => (
//           <Col key={item.id} md={4}>
//             <Card className="menu-card">
//               <Card.Img variant="top" src={item.image} />
//               <Card.Body>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>{item.description}</Card.Text>
//                 <Card.Text>₹{item.price}</Card.Text>

//                 {/* Display Popular/New badges */}
//                 {item.popular && <Badge bg="danger" className="ms-2">Popular</Badge>}
//                 {item.newArrival && <Badge bg="success" className="ms-2">New</Badge>}

//                 {/* Star Rating */}
//                 <div className="my-2">
//                   <Rating count={5} value={item.rating} edit={false} size={20} />
//                 </div>

//                 {/* Add to Cart Button */}
//                 <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Toast Notification */}
//       <ToastContainer position="top-right" autoClose={2000} />
//     </div>
//   );
// }

// export default MenuPage;
import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MenuPage.css';

function MenuPage() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    toast.success(`${item.name} added to cart!`);
  };

  const filterItems = (items) => {
    let filtered = items;

    if (filter === 'Popular') {
      filtered = filtered.filter((item) => item.popular);
    } else if (filter === 'New Arrivals') {
      filtered = filtered.filter((item) => item.newArrival);
    } else if (['Ice Creams', 'Desserts', 'Beverages', 'Snacks'].includes(filter)) {
      filtered = filtered.filter((item) => item.category === filter);
    }

    if (search.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  };

  const sortItems = (items) => {
    switch (sort) {
      case 'Price':
        return [...items].sort((a, b) => a.price - b.price);
      case 'Popularity':
        return [...items].sort((a, b) => b.popularity - a.popularity);
      case 'Rating':
        return [...items].sort((a, b) => b.rating - a.rating);
      default:
        return items;
    }
  };

  const displayedItems = sortItems(filterItems(menuData));

  return (
    // <div className="menu-container">
    <div className="container py-4" style={{ backgroundColor: "#f0d9da", minHeight: "100vh" }}>

      <h2 className="menu-title">Menu</h2>

      <div className="menu-filters">
        <input
          type="text"
          className="form-control menu-search"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="d-flex flex-wrap gap-2">
          {['All', 'Ice Creams', 'Desserts', 'Beverages', 'Snacks', 'Popular', 'New Arrivals'].map((category) => (
            <button
              key={category}
              className={`btn btn-${filter === category ? 'primary' : 'outline-primary'}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <select
          className="form-select menu-sort"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="Price">Price</option>
          <option value="Popularity">Popularity</option>
          <option value="Rating">Rating</option>
        </select>
      </div>

      <div className="row">
        {displayedItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <MenuItem item={item} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default MenuPage;
