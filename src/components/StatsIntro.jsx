import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/siteData';
import ScrollReveal from './ScrollReveal';

function AnimatedCounter({ target, suffix, displayValue, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(update);
  }, [started, target, duration]);

  return (
    <div className="hero-stat-card" ref={elementRef}>
      <div className="stat-number-wrap">
        <span className="stat-num">{displayValue ?? count}</span>
        {!displayValue && <span className="stat-plus">{suffix}</span>}
      </div>
      <span className="stat-label"></span>
    </div>
  );
}

export default function StatsIntro() {
  return (
    <section className="intro" id="about-intro">
      <div className="wrap">
        {/* Live Animated Trust Stats */}
        <ScrollReveal animation="fade-up">
          <div className="hero-stats" aria-label="Company Key Highlights">
            {STATS.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <div className="hero-stat-card">
                  <AnimatedCounter target={stat.count} suffix={stat.suffix} displayValue={stat.displayValue} />
                  <span className="stat-label">{stat.label}</span>
                </div>
                {idx < STATS.length - 1 && <div className="hero-stat-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={140}>
          <div className="intro-inner">
            <p className="intro-label">Welcome to Vighnaharta Realty</p>
            <h2>Places with promise. Decisions with clarity.</h2>
            <p>
              From your first enquiry to the day you take possession, we make every step easier with honest details,
              practical guidance and projects selected for their location and long-term potential.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

