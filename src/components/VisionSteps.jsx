import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function VisionSteps() {
  const steps = [
    {
      num: "01",
      title: "Our vision",
      text: "To help more families create secure, meaningful futures through well-chosen real estate."
    },
    {
      num: "02",
      title: "Our mission",
      text: "To present promising projects with clear information, responsive service and dependable support."
    },
    {
      num: "03",
      title: "Our values",
      text: "Transparency, location-first thinking, personal attention and respect for every investment."
    }
  ];

  return (
    <section className="section approach" id="about">
      <div className="wrap">
        <ScrollReveal animation="fade-up">
          <div className="section-head">
            <p className="intro-label">About Vighnaharta Realty</p>
            <h2>Real estate with a long view.</h2>
            <p>
              We believe a property decision should feel informed, not rushed. Our work is built around trustworthy
              information, carefully considered locations and relationships that last beyond a transaction.
            </p>
          </div>
        </ScrollReveal>
        <ol className="steps">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.num} animation="fade-up" delay={idx * 120}>
              <li className="step-card">
                <span className="step-n">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
