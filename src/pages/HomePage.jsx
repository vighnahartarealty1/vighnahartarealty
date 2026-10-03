import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsIntro from '../components/StatsIntro';
import PropertyCard from '../components/PropertyCard';
import VisionSteps from '../components/VisionSteps';
import TimelineSection from '../components/TimelineSection';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';
import { PROPERTIES } from '../data/siteData';

export default function HomePage({ onOpenModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/projects?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/projects');
    }
  };

  const featured = PROPERTIES.slice(0, 3);

  return (
    <div className="page-home">
      {/* 1. HERO with Parallax */}
      <Hero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 2. STATS & WELCOME INTRO */}
      <StatsIntro />

      {/* 3. FEATURED LOCATIONS SHOWCASE */}
      <section className="section featured-section" id="featured-home">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="section-head text-center-wrap">
              <p className="intro-label">Curated Portfolio</p>
              <h2>Featured Opportunities</h2>
              <p>Explore prime land and verified properties hand-picked for their location and enduring value.</p>
            </div>
          </ScrollReveal>

          <div className="grid">
            {featured.map((p, idx) => (
              <PropertyCard 
                key={p.id} 
                property={p} 
                index={idx} 
                onOpenModal={onOpenModal} 
              />
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="section-bottom-cta">
              <Link to="/projects" className="btn btn-brown btn-glow">
                <span>View All Properties &amp; Plots</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. VISION / MISSION / VALUES */}
      <VisionSteps />

      {/* 5. WHY CHOOSE US / TIMELINE */}
      <TimelineSection />

      {/* 6. CONTACT & ENQUIRY */}
      <ContactSection />
    </div>
  );
}
