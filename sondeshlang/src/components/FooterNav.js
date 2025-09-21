import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import '../styles/FooterNav.css';

const FooterNav = () => {
  return (
    <footer className="footer-nav">
      <div className="footer-container">
        <div className="footer-left">
          <span>© 2025 Souvik Saha</span>
        </div>
        
        <div className="footer-center">
          <span className="created-with">Created with</span>
          <span className="heart-icon"><FontAwesomeIcon icon={faHeart} /></span>
          <span className="tech-stack">
            <span className="tech-item">
              <FontAwesomeIcon icon={faCode} className="tech-icon" />
              React
            </span>
            <span className="tech-separator">&</span>
            <span className="tech-item">
              <FontAwesomeIcon icon={faServer} className="tech-icon" />
              FastAPI
            </span>
          </span>
        </div>
        
        <div className="footer-right">
          <a 
            href="https://github.com/souvik4133x" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://www.linkedin.com/in/souvik-saha-613503226/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;