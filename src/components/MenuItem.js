import React from 'react';
import './MenuItem.css'; // ✅ add this line

function MenuItem({ item, onAddToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={item.image} 
        className="card-img-top menu-img" // ✅ custom class for consistent sizing
        alt={item.name}
      />
      <div className="card h-100 shadow-sm p-2">

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <div className="mt-auto">
          <p className="fw-bold mb-2">₹{item.price}</p>
          <button className="btn btn-success w-100" onClick={() => onAddToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MenuItem;
