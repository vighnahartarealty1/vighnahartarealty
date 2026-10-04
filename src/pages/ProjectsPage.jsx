import React from 'react';
import PageBanner from '../components/PageBanner';
import PropertyCard from '../components/PropertyCard';
import ScrollReveal from '../components/ScrollReveal';
import { PROPERTIES, SITE } from '../data/siteData';

export default function ProjectsPage({ onOpenModal }) {
  return (
    <div className="page-projects">
      {/* Parallax Page Banner */}
      <PageBanner 
        title="Our Curated Projects"
        subtitle="Explore verified commercial and strategic investment land across Panvel, Alibaug, and the Mumbai 3.0 corridor."
        theme="projects"
        image={SITE.projectsImage}
      />

      {/* Catalog Section */}
      <section className="section" id="projects-catalog">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <p className="count" aria-live="polite">
              Showing all <strong>{PROPERTIES.length}</strong> verified listings
            </p>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid">
            {PROPERTIES.map((property, idx) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                index={idx} 
                onOpenModal={onOpenModal} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Banner */}
      <section className="section reassurance-section">
        <div className="wrap">
          <div className="reassurance-card">
            <div>
              <h3>Can't find what you're looking for?</h3>
              <p>Our land scouts frequently acquire private off-market plots with 100% clear titles. Let us know your exact budget and preference.</p>
            </div>
            <a 
              href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
                `Hello ${SITE.name}, I am looking for a custom plot inquiry in the Mumbai 3.0 belt.`
              )}`}
              className="btn btn-wa-fill btn-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Custom Plot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
