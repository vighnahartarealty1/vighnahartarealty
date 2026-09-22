import React from 'react';
import { PROPERTIES } from '../data/siteData';

export default function FeaturedSection({ onOpenModal }) {
  const featured = PROPERTIES.slice(0, 3);

  return (
    <section className="section featured-section">
      <div className="wrap">
        <div className="section-head">
          <p className="intro-label">Selected opportunities</p>
          <h2>Featured projects</h2>
          <p>A closer look at a few locations our team is currently proud to present.</p>
        </div>
        <div className="featured-grid">
          {featured.map((p) => (
            <article className="featured-card" key={p.id}>
              <img src={p.image} alt={p.name} loading="lazy" />
              <div>
                <p className="card-type">{p.type}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <button 
                  type="button" 
                  className="text-link view-details"
                  onClick={() => onOpenModal(p)}
                >
                  View project details <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
