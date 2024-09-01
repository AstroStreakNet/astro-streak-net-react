import "./Footer.css";
import { Link } from "react-router-dom";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            SpaceTitle is dedicated to collecting and sharing satellite streak
            images.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="footer-link">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/upload" className="footer-link">
                Contribute
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">Email: info@spacetitle.com</p>
          <p className="footer-text">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; 2024 SpaceTitle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
