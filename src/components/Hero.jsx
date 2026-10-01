import React, { useState, useEffect } from 'react';
import { SITE } from '../data/siteData';

export default function Hero({ searchQuery, setSearchQuery, onSearchSubmit }) {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (!ticking && scrollTop < window.innerHeight) {
        window.requestAnimationFrame(() => {
          setParallaxOffset(scrollTop * 0.28);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit();
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg-wrapper">
        <img 
          className={`hero-img ${imageLoaded ? 'is-loaded' : ''}`}
          src={SITE.heroImage || "/images/home page 1.jpeg"}
          alt="Sunlit peaceful rolling hills landscape at golden sunrise"
          style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            if (!e.target.dataset.triedFallback) {
              e.target.dataset.triedFallback = 'true';
              e.target.src = '/images/home page 1.jpeg';
            }
          }}
        />
        <div className="hero-sunflare"></div>
        <div className="hero-mist"></div>
      </div>
      <div className="hero-overlay"></div>

      <div className="wrap hero-content">
        <div className="hero-center-box">
          {/* Frosted Pill Badge */}
          <div className="hero-pill-badge hero-anim-1">
            <span className="badge-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </span>
            <span>Voted best peaceful plots &amp; land in Maharashtra</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title hero-anim-2">
            The best place to find <br />
            your <em>Inner Peace</em>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub hero-anim-3">
            Feeling ready to build? Find the best verified location to reconnect with nature, create your sanctuary, and
            invest with complete clarity.
          </p>

          {/* Center Floating Pill Search Capsule */}
          <form className="hero-search-capsule hero-anim-4" onSubmit={handleSubmit} role="search">
            <div className="search-capsule-input-wrap">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
              <input 
                type="search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a location, plot, or project..." 
                autoComplete="off" 
              />
            </div>
            <button type="submit" className="capsule-btn">Search Now</button>
          </form>
        </div>

        {/* Bottom Trust Bar */}
        <div className="hero-trust-bar hero-anim-5">
          <p className="trust-heading">Featured as the safest place to invest in</p>
          <div className="trust-badges">
            <div className="trust-brand">100% CLEAR TITLE</div>
            <div className="trust-brand">RERA COMPLIANT</div>
            <div className="trust-brand">MUMBAI PRIME</div>
            <div className="trust-brand">500+ FAMILIES</div>
            <div className="trust-brand">INSTANT REGISTRY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
