import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <Link to="/" className="logo" aria-label="Vighnaharta Realty home">
            <i className="fa-solid fa-building-columns" style={{ fontSize: '22px', color: 'var(--clay,#c9a96e)' }} />
            <span>Vighnaharta <em>Realty</em></span>
          </Link>
          <p className="tagline">Thoughtfully chosen. Clearly presented.</p>

          {/* Quick contact in footer */}
          <div className="footer-contact-row">
            <a href={`tel:+${SITE.whatsappNumber}`} className="footer-contact-item">
              <i className="fa-solid fa-phone" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="footer-contact-item">
              <i className="fa-solid fa-envelope" />
              <span>{SITE.email}</span>
            </a>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent('Hello Vighnaharta Realty, I would like to enquire.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item footer-wa"
            >
              <i className="fa-brands fa-whatsapp" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link to="/"><i className="fa-solid fa-house" /> Home</Link>
          <Link to="/projects"><i className="fa-solid fa-layer-group" /> Projects</Link>
          <Link to="/about"><i className="fa-solid fa-building-columns" /> About Us</Link>
          <Link to="/why-us"><i className="fa-solid fa-shield-halved" /> Why Us</Link>
          <Link to="/contact"><i className="fa-solid fa-headset" /> Contact</Link>
        </nav>
      </div>

      <div className="wrap copyright">
        <p>
          <i className="fa-regular fa-copyright" /> {year} Vighnaharta Realty. All rights reserved.
          &nbsp;·&nbsp;
          <i className="fa-solid fa-location-dot" /> Mumbai &amp; Navi Mumbai
        </p>
        <p className="designer-credit">
          Designed &amp; Developed with <i className="fa-solid fa-heart" /> by <strong>Elite Digital Studio</strong>
        </p>
      </div>
    </footer>
  );
}
