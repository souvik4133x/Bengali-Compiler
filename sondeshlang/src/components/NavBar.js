import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <span className="brand-icon">🐯</span>
          সন্দেশLang
        </Link>

        {/* Hamburger menu for mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button className="close-menu" onClick={closeMenu}></button>
          
          <Link 
            to="/" 
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            হোম
          </Link>
          <Link 
            to="/docs" 
            className={`nav-item ${location.pathname === '/docs' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            ডকুমেন্টেশন
          </Link>
          <Link 
            to="/editor" 
            className={`nav-item ${location.pathname === '/editor' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            কোড এডিটর
          </Link>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;