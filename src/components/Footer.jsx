import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <Link to="/" className="logo" aria-label="Vidhnharta Reality home">
            <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
              <path d="M15 2 L28 26 H2 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="15" cy="17" r="3" fill="currentColor" />
            </svg>
            <span>Vidhnharta <em>Reality</em></span>
          </Link>
          <p className="tagline">Thoughtfully chosen. Clearly presented.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Us</Link>
          <Link to="/why-us">Why Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="wrap copyright">
        <p>&copy; {year} Vidhnharta Reality. All rights reserved.</p>
      </div>
    </footer>
  );
}
