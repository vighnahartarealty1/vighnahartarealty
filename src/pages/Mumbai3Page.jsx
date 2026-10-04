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
              <div className="m3-hero-badge">
                <span className="m3-badge-pulse"></span>
                <span className="m3-badge-text">Metropolitan Growth Belt · Mumbai 3.0</span>
              </div>
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

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="m3-hero-actions">
                <button
                  type="button"
                  className="btn m3-btn-primary"
                  onClick={() => scrollToSection('m3-properties')}
                >
                  <span>Explore Properties</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </button>

                <button
                  type="button"
                  className="btn m3-btn-secondary"
                  onClick={() => scrollToSection('m3-advantages')}
                >
                  <span>View Investment Opportunities</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </ScrollReveal>

            {/* Quick Metrics Bar */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="m3-hero-highlights-strip">
                <div className="m3-strip-item">
                  <span className="m3-strip-icon"><i className="fa-solid fa-plane-departure" /></span>
                  <div>
                    <strong>NMIA &amp; Atal Setu</strong>
                    <small>High-Connectivity Hubs</small>
                  </div>
                </div>
                <div className="m3-strip-divider"></div>
                <div className="m3-strip-item">
                  <span className="m3-strip-icon"><i className="fa-solid fa-file-shield" /></span>
                  <div>
                    <strong>100% 7/12 Checked</strong>
                    <small>Clean Revenue Records</small>
                  </div>
                </div>
                <div className="m3-strip-divider"></div>
                <div className="m3-strip-item">
                  <span className="m3-strip-icon"><i className="fa-solid fa-seedling" /></span>
                  <div>
                    <strong>₹ 2.1L / Guntha*</strong>
                    <small>Accessible Entry Starting</small>
                  </div>
                </div>
              </div>
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
              className="m3-overview-image"
              src={MUMBAI3_IMAGES.overview}
              alt="Mumbai 3.0 region and its developing infrastructure"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: FEATURED PROPERTY OPPORTUNITIES
          ========================================================================= */}
      <section className="section m3-properties-section" id="m3-properties">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="m3-section-header text-center">
              <span className="m3-kicker">Curated Portfolio</span>
              <h2 className="m3-section-title">Featured Property Opportunities</h2>
              <p className="m3-section-subtitle">
                Explore an original portfolio of six distinct property typologies across strategic corridors, tailored for private villas, township sectors, commercial assets, and long-term capital preservation.
              </p>
            </div>
          </ScrollReveal>

          {/* Property Cards Grid (Responsive 3-col Desktop, 2-col Tablet, 1-col Mobile) */}
          <div className="m3-property-grid">
            {MUMBAI3_PROPERTIES.map((property, idx) => (
                <ScrollReveal key={property.id} animation="fade-up" delay={idx * 70}>
                  <article className="m3-card">
                    {/* Card Media with Image or Elegant Fallback */}
                    <div className="m3-card-media">
                      {property.image ? (
                        <img
                          src={property.image}
                          alt={`${property.name}, ${property.location}`}
                          loading="lazy"
                          className="m3-card-img"
                        />
                      ) : (
                        <div className="m3-card-placeholder">
                          <div className="m3-card-placeholder-pattern"></div>
                          <div className="m3-card-placeholder-content">
                            <span className="m3-ph-icon"><i className="fa-solid fa-ruler-combined" /></span>
                            <span className="m3-ph-title">{property.type}</span>
                            <span className="m3-ph-sub">{property.city}</span>
                          </div>
                        </div>
                      )}
                      <div className="m3-card-media-tags">
                        <span className="m3-tag-badge">{property.categoryBadge}</span>
                        <span className="m3-status-badge">{property.status}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="m3-card-body">
                      <div className="m3-card-type-row">
                        <span className="m3-card-type-text">{property.type}</span>
                        <span className="m3-card-price-chip">{property.indicativePrice}</span>
                      </div>

                      <h3 className="m3-card-title">{property.name}</h3>

                      <p className="m3-card-loc">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{property.location}</span>
                      </p>

                      <p className="m3-card-desc">{property.description}</p>

                      {/* Specs Row */}
                      <div className="m3-card-specs">
                        <div className="m3-spec-box">
                          <span className="m3-spec-label">Plot Size / Area</span>
                          <span className="m3-spec-val">{property.plotSizes}</span>
                        </div>
                        <div className="m3-spec-box">
                          <span className="m3-spec-label">Investment Profile</span>
                          <span className="m3-spec-val">{property.investmentType}</span>
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <ul className="m3-card-highlights">
                        {property.highlights.slice(0, 3).map((hl, hIdx) => (
                          <li key={hIdx}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Card Action Buttons */}
                      <div className="m3-card-actions">
                        <button
                          type="button"
                          className="btn m3-btn-view"
                          onClick={() => {
                            if (typeof onOpenModal === 'function') {
                              onOpenModal({
                                ...property,
                                sizes: property.plotSizes,
                                priceFrom: property.indicativePrice,
                                overview: property.description
                              });
                            } else {
                              openWhatsApp(property.name, property.location);
                            }
                          }}
                        >
                          <span>View Details</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>

                        <button
                          type="button"
                          className="btn m3-btn-wa"
                          onClick={() => openWhatsApp(property.name, property.location)}
                          aria-label={`Enquire about ${property.name} on WhatsApp`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                          </svg>
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
            ))}
          </div>
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
          SECTION E: LOCATION HIGHLIGHTS & CORRIDORS
          ========================================================================= */}
      <section className="section m3-locations-section" id="m3-locations">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="m3-section-header text-center">
              <span className="m3-kicker">Macro Perspective</span>
              <h2 className="m3-section-title">Evolving Regional Corridors</h2>
              <p className="m3-section-subtitle">
                Understand the distinct character and infrastructure drivers across Mumbai 3.0's four primary property development corridors.
              </p>
            </div>
          </ScrollReveal>

          <div className="m3-corridor-grid">
            {MUMBAI3_LOCATION_HIGHLIGHTS.map((loc, lIdx) => (
              <ScrollReveal key={loc.id} animation="fade-up" delay={lIdx * 90}>
                <div className="m3-corridor-card">
                  <div className="m3-corridor-media">
                    {loc.image ? (
                      <img src={loc.image} alt={loc.title} className="m3-corridor-img" />
                    ) : (
                      <div className="m3-corridor-ph">
                        <span className="m3-corridor-ph-badge">{loc.tag}</span>
                      </div>
                    )}
                  </div>
                  <div className="m3-corridor-body">
                    <span className="m3-corridor-sub">{loc.subtitle}</span>
                    <h3 className="m3-corridor-title">{loc.title}</h3>
                    <p className="m3-corridor-desc">{loc.description}</p>
                    <ul className="m3-corridor-points">
                      {loc.highlights.map((item, pIdx) => (
                        <li key={pIdx}>
                          <span className="m3-dot"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
