import React from 'react';
import { SITE } from '../data/siteData';

export default function FloatingWhatsApp() {
  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    'Hello Vidhnharta Reality, I would like to enquire about your land and property opportunities.'
  )}`;

  return (
    <a 
      href={waUrl} 
      className="floating-wa" 
      id="floatingWa" 
      aria-label="Chat with Vidhnharta Reality on WhatsApp" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className="floating-wa-radar"></span>
      <span className="floating-wa-tooltip">Chat with us on WhatsApp</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.500-1.700a11.900 11.900 0 005.500 1.400c6.500 0 11.800-5.300 11.800-11.800 0-3.100-1.200-6-3.300-8.400zM12 21.700c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.800 1 1-3.700-.2-.4a9.800 9.800 0 01-1.500-5.200C2.100 6.400 6.500 2 12 2c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 012.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1-.2.300-.8 1-.9 1.200-.2.200-.3.200-.6.100-.3-.1-1.300-.5-2.400-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.4-.5c.1-.2.200-.3.300-.5.100-.2 0-.4 0-.5-.1-.1-.7-1.600-.9-2.200-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.7.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  );
}
