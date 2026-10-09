import React from 'react';
import { Link } from 'react-router-dom';

const PAGE_THEMES = {
  about:    { icon: 'fa-solid fa-building-columns', accent: '#c9a96e' },
  projects: { icon: 'fa-solid fa-layer-group',      accent: '#7eb8f7' },
  whyus:    { icon: 'fa-solid fa-shield-halved',    accent: '#82e0aa' },
  contact:  { icon: 'fa-solid fa-headset',          accent: '#c39bd3' },
  default:  { icon: 'fa-solid fa-location-dot',     accent: '#c9a96e' },
};

export default function PageBanner({ 
  title, 
  subtitle, 
  theme = 'default',
  image,
  badge,
  breadcrumbs = []
}) {
  const t = PAGE_THEMES[theme] || PAGE_THEMES.default;

  return (
    <section className={`page-banner page-banner--icon ${image ? 'has-image' : ''}`}>
      {image && (
        <div className="pb-image-wrap" aria-hidden="true">
          <img className="pb-image" src={image} alt="" />
        </div>
      )}
      {/* Animated background */}
      <div className="pb-gradient-bg" aria-hidden="true">

        {/* Floating orbs */}
        <div className="pb-orb pb-orb-1" style={{ background: t.accent }} />
        <div className="pb-orb pb-orb-2" style={{ background: t.accent }} />
      </div>

      <div className="wrap banner-content">
        <div className="banner-inner">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="banner-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/"><i className="fa-solid fa-house" style={{fontSize:'11px'}}/> Home</Link>
              {breadcrumbs.map((crumb) => (
                <React.Fragment key={crumb.label}>
                  <span className="crumb-sep"><i className="fa-solid fa-chevron-right"/></span>
                  {crumb.to ? (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  ) : (
                    <span className="crumb-current">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
 
          {/* Badge pill */}
          {badge && (
            <div className="pb-badge-pill">
              <div className="banner-kicker" >
                <i className="fa-solid fa-circle-check" />
                <span>{badge}</span>
              </div>
            </div>
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
