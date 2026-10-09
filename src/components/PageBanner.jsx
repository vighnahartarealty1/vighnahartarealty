import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function PageBanner({ 
  title, 
  subtitle, 
  theme = 'default',
  image,
  badge,
  breadcrumbs = []
}) {
  return (
    <section className="m3-hero-section page-banner" id="page-banner">
      <div className="m3-hero-backdrop">
        {image ? (
          <img 
            src={image} 
            alt={typeof title === 'string' ? title : 'Page Banner'} 
            className="m3-hero-bg-img" 
          />
        ) : (
          <div className="m3-hero-gradient-canvas">
            <div className="m3-hero-ambient-orb orb-1"></div>
            <div className="m3-hero-ambient-orb orb-2"></div>
            <div className="m3-hero-grid-overlay"></div>
          </div>
        )}
        <div className="m3-hero-overlay"></div>
      </div>

      <div className="wrap m3-hero-wrap">
        <div className="m3-hero-content">
          {breadcrumbs.length > 0 && (
            <nav className="banner-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/"><i className="fa-solid fa-house" style={{ fontSize: '11px' }} /> Home</Link>
              {breadcrumbs.map((crumb) => (
                <React.Fragment key={crumb.label}>
                  <span className="crumb-sep"><i className="fa-solid fa-chevron-right" /></span>
                  {crumb.to ? (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  ) : (
                    <span className="crumb-current">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {badge && (
            <ScrollReveal animation="fade-up">
              <div className="m3-hero-badge">
                <span className="m3-badge-pulse"></span>
                <span className="m3-badge-text">{badge}</span>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="m3-hero-title banner-title">{title}</h1>
          </ScrollReveal>

          {subtitle && (
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="m3-hero-subtitle banner-subtitle">{subtitle}</p>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
