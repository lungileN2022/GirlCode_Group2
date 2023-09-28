import React from 'react';
import './checkout-style.css'; // Import my CSS file

function Checkout() {
  return (
    <div>
      <h1>GirlCode Store</h1>
      <div className="container">
        <div className="heading">Order Summary</div>
        <div className="login-option">
          Already have an account? <a href="#">Log in here</a>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="company">Work Address (for workplace delivery):</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="input-group">
          <label htmlFor="address">Home Address:</label>
          <input type="text" id="address" name="address" placeholder="Street Address" required />
          <input type="text" id="apartment" name="apartment" placeholder="Apartment/Suite" />
          <input type="text" id="city" name="city" placeholder="City" required />
          <input type="text" id="postal" name="postal" placeholder="Postal Code" required />
          <input type="text" id="province" name="province" placeholder="Province" required />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Cellphone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
      </div>

      <div className="next-button">
        <a href="#payment-details">Proceed to Payment Details</a>
      </div>
    </div>
  );
}

export default Checkout;

