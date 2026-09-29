import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { SITE } from '../data/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape or screen resize to desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`} id="top">
        <div 
          className="scroll-progress" 
          style={{ width: `${scrollProgress}%` }} 
          aria-hidden="true" 
        />
        <div className="header-container">
          {/* Brand Logo */}
          <Link to="/" className="logo logo-pill-badge" aria-label="Vighnharta Realty home" onClick={() => setMenuOpen(false)}>
            <svg className="logo-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
            <span>Vighnharta <em>Realty</em></span>
          </Link>

          {/* Desktop Nav: Clean single row with active bottom underline bar (Image 1) */}
          <nav className="nav desktop-nav" aria-label="Main Navigation">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/why-us" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Why Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Enquire Button & Mobile Circle Button */}
          <div className="header-right-group">
            <div className="header-action">
              <Link to="/contact" className="btn btn-pill-dark nav-cta">Enquire now</Link>
            </div>

            {/* Mobile Circular Button: 3-bar hamburger when closed (Image 2) & 'X' when open (Image 3) */}
            <button 
              type="button"
              className={`mobile-circle-btn ${menuOpen ? 'active' : ''}`} 
              id="menuBtn" 
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen} 
              aria-controls="mobileDrawer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="circle-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <div className="circle-bars-wrap">
                  <span className="c-bar"></span>
                  <span className="c-bar"></span>
                  <span className="c-bar"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer (Image 3 layout) */}
        <div className={`mobile-drawer-sheet ${menuOpen ? 'open' : ''}`} id="mobileDrawer">
          <div className="drawer-content-box">
            <nav className="drawer-nav-list" aria-label="Mobile Navigation">
              <NavLink 
                to="/" 
                className={({ isActive }) => `drawer-link ${isActive ? 'active-capsule' : ''}`}
                end
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `drawer-link ${isActive ? 'active-capsule' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `drawer-link ${isActive ? 'active-capsule' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/why-us" 
                className={({ isActive }) => `drawer-link ${isActive ? 'active-capsule' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Why Us
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `drawer-link ${isActive ? 'active-capsule' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </nav>

            {/* Bottom Contact Pills (Image 3) */}
            <div className="drawer-contact-pills">
              <a href={`tel:+${SITE.whatsappNumber}`} className="drawer-pill-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{SITE.phoneDisplay}</span>
              </a>

              <a 
                href={`https://wa.me/${SITE.whatsappNumber}?text=Hello%20Vighnharta%20Realty,%20I%20would%20like%20to%20enquire%20about%20your%20properties.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="drawer-pill-btn drawer-pill-wa"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Dimmed Backdrop when menu is open */}
      {menuOpen && (
        <div 
          className="mobile-backdrop" 
          onClick={() => setMenuOpen(false)} 
          aria-hidden="true" 
        />
      )}
    </>
  );
}
