import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({ 
  title, 
  subtitle, 
  image = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80',
  breadcrumbs = []
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (!ticking && scrollTop < 600) {
        window.requestAnimationFrame(() => {
          setOffset(scrollTop * 0.32);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="page-banner">
      <div className="banner-bg-wrapper">
        <img 
          src={image} 
          alt={title} 
          className="banner-bg-img"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        />
        <div className="banner-overlay"></div>
        <div className="banner-glow-flare"></div>
      </div>

      <div className="wrap banner-content">
        <div className="banner-inner">
          {breadcrumbs.length > 0 && (
            <nav className="banner-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumbs.map((crumb) => (
                <React.Fragment key={crumb.label}>
                  <span className="crumb-sep">/</span>
                  {crumb.to ? (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  ) : (
                    <span className="crumb-current">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="banner-title">{title}</h1>

          {subtitle && (
            <p className="banner-subtitle">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
