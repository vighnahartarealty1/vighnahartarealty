import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();
  const contactNumbers = [SITE.phoneDisplay, SITE.phoneAlt, SITE.phoneAlt2].filter(Boolean);

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        {/* Column 1: Brand Logo Card */}
        <div className="footer-col-brand">
          <Link to="/" className="logo footer-logo" aria-label="Vighnaharta Realty home">
            <div className="footer-logo-badge">
              <img 
                src="/images/vighnaharta_logo_white.png" 
                alt="Vighnaharta Realty" 
                className="footer-logo-img" 
              />
            </div>
          </Link>
          <p className="footer-tagline">
            We don't just sell land, we secure your future with verified plots.
          </p>
        </div>

        {/* Column 2: Company Navigation Links */}
        <div className="footer-col-nav">
          <h3 className="footer-col-title">COMPANY</h3>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mumbai-3.0">Mumbai 3.0</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/why-us">Why Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Reach Us Information */}
        <div className="footer-col-contact">
          <h3 className="footer-col-title">REACH US</h3>
          <div className="footer-reach-list">
            <div className="footer-reach-item">
              <i className="fa-solid fa-location-dot reach-icon" />
              <div className="reach-text">
                <span>510, v times square , sec 15 , CBD Belapur , Navi Mumbai - 400614</span>
              </div>
            </div>

            <div className="footer-reach-item">
              <i className="fa-solid fa-phone reach-icon" />
              <div className="reach-text">
                {contactNumbers.map((number, index) => (
                  <div className="footer-phone-line" key={number}>
                    <a
                      href={
                        index === 0
                          ? `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent('Hello Vighnaharta Realty, I would like to enquire about your properties.')}`
                          : `tel:${number.replace(/\s+/g, '')}`
                      }
                      target={index === 0 ? '_blank' : undefined}
                      rel={index === 0 ? 'noopener noreferrer' : undefined}
                    >
                      {number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-reach-item">
              <i className="fa-solid fa-envelope reach-icon" />
              <div className="reach-text">
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
          </div>
        </div>
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
