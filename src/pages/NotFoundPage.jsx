import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page-not-found">
      <div className="wrap not-found-content">
        <span className="not-found-code">404</span>
        <h1>Page Not Found</h1>
        <p>The sanctuary you are looking for might have been moved, renamed, or does not exist.</p>
        <div className="cta-group">
          <Link to="/" className="btn btn-brown btn-glow">Return to Home</Link>
          <Link to="/projects" className="btn btn-wa-line">Explore All Projects</Link>
        </div>
      </div>
    </div>
  );
}
