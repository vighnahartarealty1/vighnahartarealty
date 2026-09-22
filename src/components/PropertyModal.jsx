import React, { useEffect } from 'react';
import { SITE } from '../data/siteData';

export default function PropertyModal({ property, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (property) {
      document.body.classList.add('no-scroll');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const facts = [
    ['Available sizes', property.sizes],
    ['Project highlights', property.highlights],
    ['Location & connectivity', property.connectivity]
  ].filter((f) => f[1]);

  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vidhnharta Reality, I am interested in "${property.name}" in ${property.location}. Please share more details.`
  )}`;

  return (
    <div 
      className="modal open" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="mTitle"
    >
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-box">
        <button 
          className="modal-close" 
          aria-label="Close details" 
          onClick={onClose}
        >
          &times;
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
                <span>{val}</span>
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
