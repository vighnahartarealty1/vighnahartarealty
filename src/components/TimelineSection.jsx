import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE } from '../data/siteData';

export default function TimelineSection() {
  const [progress, setProgress] = useState(0);
  const [activeIndices, setActiveIndices] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = timelineRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.72;
      const current = triggerPoint - rect.top;
      const total = rect.height;
      const prog = Math.max(0, Math.min(1, current / total));

      setProgress(prog * 100);

      const items = el.querySelectorAll('.tl-item');
      const active = [];
      items.forEach((item, idx) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < triggerPoint) {
          active.push(idx);
        }
      });
      setActiveIndices(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section timeline-section" id="why-us">
      <div className="wrap">
        <div className="section-head">
          <h2>Why choose Vighnharta Realty</h2>
          <p>The small details matter when you are choosing land for a very big future.</p>
        </div>
        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-track" id="timelineTrack">
            <div className="timeline-bar" id="timelineBar" style={{ height: `${progress}%` }}></div>
          </div>
          <ol className="timeline" id="timeline">
            {TIMELINE.map((t, idx) => (
              <li 
                className={`tl-item ${activeIndices.includes(idx) ? 'is-active' : ''}`} 
                key={t.year}
              >
                <span className="tl-year">{t.year}</span>
                <div className="tl-body">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="timeline-cta">
          <p>Want to be part of the next chapter?</p>
          <a href="#contact" className="btn btn-brown btn-glow">Talk to our team</a>
        </div>
      </div>
    </section>
  );
}
