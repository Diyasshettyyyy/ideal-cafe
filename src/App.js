import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignIn from './SignIn';
import Home from './pages/Home';
import Navbar from './Navbar';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Location from './Location';
import Contact from './Contact';
import Offers from './Offers';
import Cart from './Cart';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  // Handle the search query for filtering menu items
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.title === item.title);
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Handle removing items from the cart
  const handleRemoveFromCart = (title) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.title === title ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} cartItems={cartItems} />
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu searchQuery={searchQuery} addToCart={handleAddToCart} />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />} />

      </Routes>
    </Router>
  );
}

export default App;
