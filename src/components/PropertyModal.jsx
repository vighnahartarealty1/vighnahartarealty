import React, { useEffect } from 'react';
import { SITE } from '../data/siteData';

export default function PropertyModal({ property, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (property) {
      document.body.classList.add('no-scroll');
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const formatFact = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (Array.isArray(val)) {
      return val
        .map((item) => {
          if (item && typeof item === 'object') {
            return `${item.place || item.label || ''} (${item.distance || item.value || ''})`;
          }
          return String(item);
        })
        .join(', ');
    }
    return String(val);
  };

  const facts = [
    ['Price', property.priceFrom ? `${property.priceFrom}${property.priceNote ? ` · ${property.priceNote}` : ''}` : null],
    ['Available sizes', property.sizes],
    ['Project highlights', Array.isArray(property.highlights) ? property.highlights.join(' • ') : property.highlights],
    ['Location & connectivity', property.connectivity]
  ].filter((f) => f[1]);

  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${SITE.name}, I am interested in "${property.name}" in ${property.location}. Please share more details.`
  )}`;

  return (
    <div 
      className="modal open" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="mTitle"
    >
      <div className="modal-backdrop" onClick={onClose} tabIndex={-1} aria-hidden="true"></div>
      <div className="modal-box">
        <button 
          type="button"
          className="modal-close" 
          aria-label="Close details" 
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img 
          className="modal-img" 
          src={property.image} 
          alt={`${property.name}, ${property.location}`} 
        />
        <div className="modal-content">
          <p className="modal-type">{property.type}</p>
          <h3 id="mTitle">{property.name}</h3>
          <p className="modal-loc">{property.location}</p>
          {property.description && <p className="modal-desc">{property.description}</p>}
          <div className="modal-facts">
            {facts.map(([label, val]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{formatFact(val)}</span>
              </div>
            ))}
          </div>
          <a 
            href={waUrl} 
            className="btn btn-wa-fill btn-full btn-glow" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
