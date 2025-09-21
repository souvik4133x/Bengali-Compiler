import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <span className="brand-icon">🐯</span>
          সন্দেশLang
        </Link>
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            হোম
          </Link>
          <Link 
            to="/docs" 
            className={`nav-item ${location.pathname === '/docs' ? 'active' : ''}`}
          >
            ডকুমেন্টেশন
          </Link>
          <Link 
            to="/editor" 
            className={`nav-item ${location.pathname === '/editor' ? 'active' : ''}`}
          >
            কোড এডিটর
          </Link>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
