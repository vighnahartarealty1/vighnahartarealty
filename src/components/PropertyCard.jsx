import React, { useRef } from 'react';
import { SITE } from '../data/siteData';

const WA_ICON = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 18, height: 18, fill: 'currentColor' }}>
    <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.500-1.700a11.900 11.900 0 005.500 1.400c6.500 0 11.800-5.300 11.800-11.800 0-3.100-1.200-6-3.300-8.400zM12 21.700c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.800 1 1-3.700-.2-.4a9.800 9.800 0 01-1.500-5.200C2.100 6.400 6.500 2 12 2c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 012.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1-.2.300-.8 1-.9 1.200-.2.200-.3.200-.6.100-.3-.1-1.300-.5-2.400-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.4-.5c.1-.2.200-.3.300-.5.100-.2 0-.4 0-.5-.1-.1-.7-1.600-.9-2.200-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.7.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.3z" />
  </svg>
);

export default function PropertyCard({ property, index, onOpenModal }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3.5;
    const rotateY = ((x - centerX) / centerX) * 3.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.015)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = '';
    }
  };

  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${SITE.name}, I am interested in "${property.name}" in ${property.location}. Please share more details.`
  )}`;

  const delay = (index % 3) * 0.08;

  return (
    <article 
      ref={cardRef}
      className="card card-enter"
      style={{ animationDelay: `${delay}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-img">
        <img 
          src={property.image} 
          alt={`${property.name}, ${property.location}`} 
          loading="lazy" 
          width="1000" 
          height="750" 
        />
      </div>
      <div className="card-body">
        <div className="card-top-meta">
          <p className="card-type">{property.type}</p>
          {property.priceFrom && (
            <span className="card-price-badge">From {property.priceFrom}</span>
          )}
        </div>
        <h3>{property.name}</h3>
        <p className="card-loc">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ verticalAlign: '-1px', marginRight: 5, opacity: 0.75, display: 'inline-block' }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          {property.location}
        </p>
        {property.sizes && (
          <p className="card-sizes">
            <span className="card-sizes-label">Sizes:</span> {property.sizes}
          </p>
        )}
        <div className="card-actions">
          <button 
            type="button" 
            className="btn btn-brown btn-glow view-details"
            onClick={() => onOpenModal(property)}
          >
            View details
          </button>
          <a 
            className="btn btn-wa-line" 
            href={waUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {WA_ICON}
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
