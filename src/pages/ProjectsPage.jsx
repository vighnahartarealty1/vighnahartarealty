import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import PropertyCard from '../components/PropertyCard';
import ScrollReveal from '../components/ScrollReveal';
import { PROPERTIES, CATEGORIES, SITE } from '../data/siteData';

export default function ProjectsPage({ onOpenModal }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCat = searchParams.get('cat') || 'All';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCat, setSelectedCat] = useState(initialCat);

  useEffect(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('cat');
    if (q !== null) setSearchQuery(q);
    if (cat !== null) setSelectedCat(cat);
  }, [searchParams]);

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    const newParams = new URLSearchParams(searchParams);
    if (val.trim()) {
      newParams.set('q', val);
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams, { replace: true });
  };

  const handleCatChange = (cat) => {
    setSelectedCat(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat !== 'All') {
      newParams.set('cat', cat);
    } else {
      newParams.delete('cat');
    }
    setSearchParams(newParams, { replace: true });
  };

  const q = searchQuery.trim().toLowerCase();
  const filtered = PROPERTIES.filter((p) => {
    const matchesSearch = !q || 
      p.name.toLowerCase().includes(q) || 
      p.location.toLowerCase().includes(q) || 
      p.type.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q));

    const matchesCat = selectedCat === 'All' || 
      p.type?.toLowerCase() === selectedCat.toLowerCase();

    return matchesSearch && matchesCat;
  });

  return (
    <div className="page-projects">
      {/* Parallax Page Banner */}
      <PageBanner 
        title="Our Curated Projects"
        subtitle="Explore verified commercial and strategic investment land across Panvel, Alibaug, and the Mumbai 3.0 corridor."
        image={SITE.projectsImage || "/images/projects.jpeg"}
        // breadcrumbs={[{ label: 'Projects & Locations' }]}
      />

      {/* Catalog & Filter Section */}
      <section className="section" id="projects-catalog">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="catalog-toolbar">
              {/* Category Pills */}
              <div className="category-pills" role="tablist" aria-label="Filter properties by category">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCat === cat}
                    className={`cat-pill ${selectedCat === cat ? 'active' : ''}`}
                    onClick={() => handleCatChange(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Field */}
              <div className="search-row-catalog">
                <label className="search">
                  <span className="sr">Search by project or location</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-4-4" />
                  </svg>
                  <input 
                    type="search" 
                    id="searchCatalog" 
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search by name, location or type..." 
                    autoComplete="off" 
                  />
                </label>
                <p className="count" aria-live="polite">
                  Showing <strong>{filtered.length}</strong> of {PROPERTIES.length} verified listings
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          {filtered.length > 0 ? (
            <div className="grid">
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
            <div className="empty-catalog">
              <div className="empty-icon">🔍</div>
              <h3>No matching projects found</h3>
              <p>We couldn't find any listings matching "{searchQuery}". Try clearing filters or searching for Panvel, Alibaug, Mumbai 3.0, or Plots.</p>
              <button 
                type="button" 
                className="btn btn-brown btn-glow"
                onClick={() => { setSearchQuery(''); setSelectedCat('All'); }}
              >
                Reset All Filters
              </button>
            </div>
          )}
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
