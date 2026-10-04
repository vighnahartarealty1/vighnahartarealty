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
        {/* Geometric grid lines */}
        <svg className="pb-grid" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="pbGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1440" height="400" fill="url(#pbGrid)" />
          {/* Accent circles */}
          <circle cx="100" cy="350" r="200" fill={t.accent} fillOpacity="0.06"/>
          <circle cx="1350" cy="60"  r="250" fill={t.accent} fillOpacity="0.05"/>
          <circle cx="720"  cy="200" r="120" fill={t.accent} fillOpacity="0.03"/>
        </svg>

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

          {/* Icon badge */}
          <div className="pb-icon-badge" style={{ '--accent': t.accent }}>
            <i className={t.icon} />
          </div>

          {/* Badge pill */}
          {badge && (
            <div className="pb-badge-pill">
              <i className="fa-solid fa-circle-check" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="banner-title">{title}</h1>

          {subtitle && (
            <p className="banner-subtitle">{subtitle}</p>
          )}

          {/* Decorative line */}
          <div className="pb-accent-line" style={{ background: `linear-gradient(90deg, ${t.accent}, transparent)` }} />
        </div>
      </div>
    </section>
  );
}
