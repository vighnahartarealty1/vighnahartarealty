import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import VisionSteps from '../components/VisionSteps';
import ScrollReveal from '../components/ScrollReveal';
import { SITE } from '../data/siteData';

export default function AboutPage() {
  const pillars = [
    {
      title: "100% Clear Title Verification",
      desc: "Every single piece of land undergoes multi-layer title clearance, revenue record validation, and physical boundary demarcation.",
      icon: "📜"
    },
    {
      title: "Strategic Growth Locations",
      desc: "We prioritize upcoming corridors with planned infrastructure, highway accessibility, and natural tranquility.",
      icon: "📍"
    },
    {
      title: "Transparent & Fair Deals",
      desc: "No hidden charges, no ambiguous paperwork. We walk you through every document before any financial commitment.",
      icon: "🤝"
    },
    {
      title: "Enduring Relationship",
      desc: "From your initial enquiry to registry, possession, and future construction guidance, our team stands by you.",
      icon: "🏡"
    }
  ];

  return (
    <div className="page-about">
      <PageBanner 
        title="Decisions with Clarity. Places with Promise."
        subtitle="We help families, creators, and investors discover verified plots and peaceful sanctuaries with complete trust."
        image={SITE.aboutImage || "/images/about-us.jpeg"}
      />

      {/* Story & Philosophy */}
      <section className="section story-section">
        <div className="wrap">
          <div className="story-grid">
            <ScrollReveal animation="fade-up">
              <div className="story-content">
                <p className="intro-label">Our Philosophy</p>
                <h2>Real estate with a long view.</h2>
                <p className="lead-text">
                  We believe buying land is more than a monetary transaction—it is the foundation of your family's future, a space for peace, and a legacy that endures.
                </p>
                <p>
                  Established in Mumbai, Vighnharta Realty was founded to bring clarity, honesty, and verified legal confidence to land acquisition. In a market often complicated by opaque documentation, we operate with complete openness, offering thoughtfully vetted residential plots and farm land with immediate registry readiness.
                </p>
                <div className="story-stats-inline">
                  <div>
                    <strong>500+</strong>
                    <span>Families Guided</span>
                  </div>
                  <div>
                    <strong>10+</strong>
                    <span>Years Regional Trust</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>RERA &amp; Title Cleared</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <div className="story-image-wrap">
                <img 
                  src={SITE.aboutImage2 || "/images/about-us-2.jpeg"} 
                  alt="Peaceful lush residential landscape"
                  className="story-main-img" 
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <VisionSteps />

      {/* Trust Pillars */}
      <section className="section pillars-section">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="section-head text-center-wrap">
              <p className="intro-label">The Vighnharta Standard</p>
              <h2>Four Pillars of Our Promise</h2>
              <p>How we ensure every plot we deliver becomes a source of pride and peace of mind.</p>
            </div>
          </ScrollReveal>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.title} animation="fade-up" delay={idx * 100}>
                <div className="pillar-card">
                  <span className="pillar-icon">{pillar.icon}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up">
            <div className="about-cta-banner">
              <div>
                <h3>Ready to discuss your land requirements?</h3>
                <p>Speak directly with our property advisory team in Bhavnagar.</p>
              </div>
              <div className="cta-btn-group">
                <Link to="/contact" className="btn btn-brown btn-glow">Contact Our Team</Link>
                <Link to="/projects" className="btn btn-wa-line">Explore Available Plots</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
