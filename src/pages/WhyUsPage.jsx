import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import TimelineSection from '../components/TimelineSection';
import ScrollReveal from '../components/ScrollReveal';
import { SITE } from '../data/siteData';

export default function WhyUsPage() {
  const guarantees = [
    {
      title: "100% Clear Title Guarantee",
      desc: "Every project has clear, marketable freehold title certified by seasoned real estate legal counsel.",
      icon: "⚖️"
    },
    {
      title: "RERA & Revenue Compliant",
      desc: "Full adherence to town planning, NA (Non-Agricultural) sanctions, and local municipal zoning norms.",
      icon: "📜"
    },
    {
      title: "Direct Owner Registry",
      desc: "Instant registration directly in your name with zero middlemen ambiguity and genuine government stamp duty assistance.",
      icon: "✍️"
    },
    {
      title: "Infrastructure Ready",
      desc: "Internal roads, boundary demarcation, water access, and electricity lines ready for prompt home construction.",
      icon: "🏗️"
    },
    {
      title: "High Growth Corridors",
      desc: "Carefully researched investment pockets in Mumbai 3.0, Navi Mumbai, Panvel, Uran, and Raigad corridors with high capital appreciation potential.",
      icon: "📈"
    },
    {
      title: "Post-Sale Assistance",
      desc: "We assist with architectural consultation, municipal water connection, boundary protection, and site management.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="page-why-us">
      <PageBanner 
        badge="Trust &amp; Verification"
        title="Why Choose Vighnaharta Realty"
        subtitle="The small details matter when you are choosing land for a very big future. Discover our proven standard of trust."
        image={SITE.whyChooseUsImage || "/images/why-choose-us.jpeg"}
        // breadcrumbs={[{ label: 'Why Us' }]}
      />

      {/* Guarantees Grid */}
      <section className="section guarantees-section">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="section-head text-center-wrap">
              <p className="intro-label">Legal Confidence &amp; Certainty</p>
              <h2>The Vighnaharta Assurance</h2>
              <p>Six uncompromising principles that protect your investment and ensure total peace of mind.</p>
            </div>
          </ScrollReveal>

          <div className="guarantees-grid">
            {guarantees.map((item, idx) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={idx * 80}>
                <div className="guarantee-card">
                  <div className="guarantee-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Comparison & Action Section */}
      <section className="section comparison-section">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="comparison-card">
              <div className="comparison-text">
                <p className="intro-label">Schedule a Free Consultation</p>
                <h2>Experience the location in person.</h2>
                <p>We arrange private guided physical visits to all our plotting projects across the Mumbai 3.0 belt (Panvel, Uran, Pen, Alibaug) with our senior land consultants.</p>
              </div>
              <div className="comparison-action">
                <Link to="/contact" className="btn btn-brown btn-glow">Book a Site Visit</Link>
                <a 
                  href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent('Hello Vighnaharta Realty, I would like to book a site visit in Mumbai 3.0.')}`}
                  className="btn btn-wa-fill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Site Coordinator
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
