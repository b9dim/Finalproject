import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const totalItems = useSelector(state => state.cart.totalItems);
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🌿 Paradise Nursery
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/plants" className={location.pathname === '/plants' ? 'active' : ''}>
              Plants
            </Link>
          </li>
          <li>
            <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
              Cart
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
