// src/components/layout/NavBar/NavBar.tsx
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/src/assets/images/logo.png" alt="SpaceTitle Logo" className="navbar-logo-image" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery" className="navbar-link">Gallery</Link>
          </li>
          <li className="navbar-item">
            <Link to="/upload" className="navbar-link">Contribute</Link>
          </li>
          <li className="navbar-item">
            <div className="account-bubble">A</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;