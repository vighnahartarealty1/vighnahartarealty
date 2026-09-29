import React, { useState } from 'react';
import { SITE } from '../data/siteData';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address, like name@example.com.';
    }
    if (!formData.interest) {
      errs.interest = 'Choose what you are interested in.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      'Hello Vighnharta Realty,',
      '',
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Interested in: ${formData.interest}`
    ];
    if (formData.message.trim()) {
      lines.push(`Message: ${formData.message.trim()}`);
    }

    const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-inner">
        <ScrollReveal animation="fade-up">
          <div>
            <h2>Let’s find your place.</h2>
            <p>
              Tell us what you are looking for and our team will share the right project details, availability and next steps.
            </p>
            <ul className="contact-list">
              <li>
                Phone: <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                Office: {SITE.address}
              </li>
            </ul>
            <div className="map-wrap">
              <iframe 
                title="Vighnharta Realty office location"
                src="https://www.google.com/maps?q=Bhavnagar%2C%20Gujarat&output=embed" 
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={140}>
          <form onSubmit={handleSubmit} noValidate>
          <div className={`field ${errors.name ? 'invalid' : ''}`}>
            <label htmlFor="name">Your name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              required 
            />
            {errors.name && <span className="err">{errors.name}</span>}
          </div>

          <div className={`field ${errors.email ? 'invalid' : ''}`}>
            <label htmlFor="email">Email address</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : 'false'}
              required 
            />
            {errors.email && <span className="err">{errors.email}</span>}
          </div>

          <div className={`field ${errors.interest ? 'invalid' : ''}`}>
            <label htmlFor="interest">I am interested in</label>
            <select 
              id="interest" 
              name="interest" 
              value={formData.interest}
              onChange={handleChange}
              aria-invalid={errors.interest ? 'true' : 'false'}
              required
            >
              <option value="">Choose one</option>
              <option value="Buying a residential plot">Buying a residential plot</option>
              <option value="Buying a farm plot">Buying a farm plot</option>
              <option value="Project details">Project details</option>
              <option value="Site visit">Site visit</option>
              <option value="Partnership enquiry">Partnership enquiry</option>
            </select>
            {errors.interest && <span className="err">{errors.interest}</span>}
          </div>

          <div className="field">
            <label htmlFor="message">Message <small>(optional)</small></label>
            <textarea 
              id="message" 
              name="message" 
              rows="3"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-wa-fill btn-full btn-glow">
            Send on WhatsApp
          </button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
