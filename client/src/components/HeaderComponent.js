// src/components/HeaderComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to="/Home" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/About" onClick={toggleMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
          <li>
          </li>
          <li>
            <Link to="/portfolio-details" onClick={toggleMenu}>Portfolio Details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
