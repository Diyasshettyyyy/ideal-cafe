import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Add your styles

export default function Navbar({ onSearch, cartItems }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Pass the query to the parent component (App or Menu)
    setQuery(''); // Reset the input field after submitting
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://www.idealicecream.com/wp-content/uploads/2017/12/ideal-cream-parlour.png"
            alt="Logo"
            width="130"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/offers">Offers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/locations">Locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex search-bar" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search ice cream..."
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-success custom-search-btn" type="submit">Search</button>
          </form>
          <Link to="/cart">
            <button type="button" className="btn btn-outline-dark mx-3 cart-btn">
              Cart ({cartItems.length}) {/* Displaying cart count */}
            </button>
          </Link>
          <Link to="/SignIn">
            <button type="button" className="btn btn-outline-dark mx-3 signin-btn">Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
