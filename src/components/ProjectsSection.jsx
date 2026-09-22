import React from 'react';
import PropertyCard from './PropertyCard';
import { PROPERTIES } from '../data/siteData';

export default function ProjectsSection({ searchQuery, setSearchQuery, onOpenModal }) {
  const q = searchQuery.trim().toLowerCase();
  const filtered = PROPERTIES.filter(
    (p) => !q || p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)
  );

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Our projects</h2>
          <p>
            Explore available projects, compare plot sizes and discover the details that make each location worth considering.
          </p>
        </div>

        <div className="search-row">
          <label className="search">
            <span className="sr">Search by project name or location</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            <input 
              type="search" 
              id="search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project or location" 
              autoComplete="off" 
            />
          </label>
          <p className="count" id="count" aria-live="polite">
            {q ? `${filtered.length} of ${PROPERTIES.length} projects shown` : `${PROPERTIES.length} projects`}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid" id="grid">
            {filtered.map((property, idx) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                index={idx} 
                onOpenModal={onOpenModal} 
              />
            ))}
          </div>
        ) : (
          <p className="empty" id="empty">
            No projects match your search. Try a different name or location.
          </p>
        )}
      </div>
    </section>
  );
}
