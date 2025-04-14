import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // for toggler to work
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg w-100" style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '10',
        backgroundColor: 'pink',
        color: 'white'
      }}>
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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Locations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 w-100" type="search" placeholder="I am looking for..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link to="/SignIn">
              <button type="button" className="btn btn-outline-dark mx-3">Sign In</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Wavy border under navbar */}
      <div style={{
  position: 'fixed',
  top: '66px', // adjust based on navbar height
  left: 0,
  right: 0,
  zIndex: '9',
  overflow: 'hidden',
  lineHeight: 0
}}>
  
</div>
    </>
  );
}
