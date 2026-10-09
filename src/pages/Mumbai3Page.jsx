import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { 
  SITE,
  MUMBAI3_IMAGES,
  MUMBAI3_INFRASTRUCTURE,
  MUMBAI3_OVERVIEW,
  MUMBAI3_PROPERTIES,
  MUMBAI3_ADVANTAGES,
  MUMBAI3_STATS,
  MUMBAI3_LOCATION_HIGHLIGHTS
} from '../data/siteData';

export default function Mumbai3Page({ onOpenModal }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = (propertyName, location) => {
    const text = encodeURIComponent(
      `Hello ${SITE.name}, I am interested in learning more about "${propertyName}" in ${location} on the Mumbai 3.0 portal. Please provide comprehensive details.`
    );
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-mumbai3">
      {/* =========================================================================
          SECTION A: PREMIUM HERO SECTION
          ========================================================================= */}
      <section className="m3-hero-section" id="m3-hero">
        <div className="m3-hero-backdrop">
          {MUMBAI3_IMAGES.heroBg ? (
            <img 
              src={MUMBAI3_IMAGES.heroBg} 
              alt="Mumbai 3.0 Real Estate & Infrastructure Horizon" 
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
            <ScrollReveal animation="fade-up">
               
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="m3-hero-title">
                Strategic Land &amp; Property Horizons <span className="m3-gold-gradient-text">Across Mumbai 3.0</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="m3-hero-subtitle">
                Discover verified residential plots, high-yield commercial parcels, and township acreage positioned along Maharashtra's fastest expanding economic and transit corridors.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section m3-overview-section" id="m3-overview">
        <div className="wrap m3-overview-grid">
          <ScrollReveal animation="fade-up">
            <div className="m3-overview-copy">
              <span className="m3-kicker">Mumbai Metropolitan Region</span>
              <h2 className="m3-section-title">{MUMBAI3_OVERVIEW.title}</h2>
              {MUMBAI3_OVERVIEW.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={120}>
            <img
              className="m6-overview-image"
              src={MUMBAI3_IMAGES.overview}
              alt="Mumbai 3.0 region and its developing infrastructure"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>



      <section className="section m3-infrastructure-section" id="m3-infrastructure">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="m3-section-header text-center">
              <span className="m3-kicker">Regional Development</span>
              <h2 className="m3-section-title">Infrastructure Shaping Mumbai 3.0</h2>
              <p className="m3-section-subtitle">
                Explore the transport links and major projects influencing connectivity across the region.
              </p>
            </div>
          </ScrollReveal>
          <div className="m3-news-articles" aria-label="Mumbai 3.0 newspaper coverage">
            {MUMBAI3_INFRASTRUCTURE.filter((item) => item.article).map((item) => (
              <figure className="m3-news-article" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" />
              </figure>
            ))}
          </div>
          <div className="m3-infrastructure-grid">
            {MUMBAI3_INFRASTRUCTURE.filter((item) => !item.article).map((item, index) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={index * 60}>
                <article className="m3-infrastructure-item">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="m3-infrastructure-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: INVESTMENT ADVANTAGES (DARK THEME WITH DUAL LAYOUT & STATS)
          ========================================================================= */}
      <section className="section m3-advantages-section" id="m3-advantages">
        <div className="wrap">
          <div className="m3-advantages-header-grid">
            <ScrollReveal animation="fade-up">
              <div className="m3-adv-left">
                <span className="m3-kicker m3-kicker-gold">Strategic Horizons</span>
                <h2 className="m3-dark-section-title">A Smarter Perspective on Property Investment</h2>
                <p className="m3-dark-section-subtitle">
                  Why emerging development belts across Mumbai 3.0 present unprecedented strategic advantages for buyers seeking uncompromised title clarity and sustained capital appreciation.
                </p>
              </div>
            </ScrollReveal>

            {/* Prominent Statistics Panel */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="m3-stats-panel-grid">
                {MUMBAI3_STATS.map((st, sIdx) => (
                  <div key={sIdx} className="m3-stat-card">
                    <div className="m3-stat-number">{st.value}</div>
                    <div className="m3-stat-label">{st.label}</div>
                    <div className="m3-stat-sub">{st.sub}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* 5 Feature Items in Modern Asymmetric Cards */}
          <div className="m3-features-row-grid">
            {MUMBAI3_ADVANTAGES.map((adv, aIdx) => (
              <ScrollReveal key={adv.title} animation="fade-up" delay={aIdx * 80}>
                <div className="m3-feature-box">
                  <div className="m3-feature-icon-bubble"><i className={adv.icon} /></div>
                  <div className="m3-feature-text">
                    <h3 className="m3-feature-title">{adv.title}</h3>
                    <p className="m3-feature-desc">{adv.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION D: PROPERTY DISCOVERY CALL TO ACTION
          ========================================================================= */}
      <section className="section m3-discovery-cta-section" id="m3-discovery-cta">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="m3-discovery-card">
              <div className="m3-discovery-ambient-glow"></div>
              <div className="m3-discovery-inner">
                <div className="m3-discovery-text">
                  <span className="m3-kicker m3-kicker-gold">Begin Your Exploration</span>
                  <h2 className="m3-discovery-title">Find Your Next Property Opportunity</h2>
                  <p className="m3-discovery-subtitle">
                    Explore a curated selection of land and real estate opportunities, compare locations, and identify properties that match your investment interests.
                  </p>
                </div>

                <div className="m3-discovery-actions">
                  <Link to="/projects" className="btn m3-btn-gold">
                    <span>Browse All Properties</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  <button
                    type="button"
                    className="btn m3-btn-outline-gold"
                    onClick={() => scrollToSection('m3-locations')}
                  >
                    <span>Explore Locations</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
