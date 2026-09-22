import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import ScrollReveal from '../components/ScrollReveal';
import { SITE, FAQS } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [activeFaq, setActiveFaq] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address.';
    }
    if (!formData.interest) errs.interest = 'Please select what you are interested in.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      'Hello Vidhnharta Reality,',
      '',
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Interest: ${formData.interest}`
    ];
    if (formData.message.trim()) {
      lines.push(`Message: ${formData.message.trim()}`);
    }

    const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-contact">
      <PageBanner 
        badge="Direct Advisory &amp; Enquiries"
        title="Let's Find Your Ideal Place"
        subtitle="Speak directly with our land and property specialists in Bhavnagar. We are here to guide your every step with clarity."
        image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2200&q=85"
      />

      {/* ─── Section A: Centered Introduction ─── */}
      <section className="section ct-intro-section">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="ct-intro">
              <span className="ct-eyebrow">Let's Connect</span>
              <h2 className="ct-intro-heading">Let's find your <em>place.</em></h2>
              <div className="ct-intro-line" aria-hidden="true"></div>
              <p className="ct-intro-desc">
                From finding your ideal home to exploring your next investment, we're here to help you take the next step with confidence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section B: Contact Information Cards ─── */}
      <section className="section ct-cards-section">
        <div className="wrap">
          <div className="ct-cards-row">
            <ScrollReveal animation="fade-up" delay={0}>
              <a href={`tel:+${SITE.whatsappNumber}`} className="ct-info-card" id="contact-card-call">
                <div className="ct-card-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="ct-card-label">Call Us</span>
                <span className="ct-card-value">{SITE.phoneDisplay}</span>
              </a>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <a href={`mailto:${SITE.email}`} className="ct-info-card" id="contact-card-email">
                <div className="ct-card-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="ct-card-label">Email Us</span>
                <span className="ct-card-value">{SITE.email}</span>
              </a>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={240}>
              <div className="ct-info-card" id="contact-card-visit">
                <div className="ct-card-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="ct-card-label">Visit Us</span>
                <span className="ct-card-value ct-card-address">{SITE.address}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Section C: Large Map + Overlapping Contact Form ─── */}
      <section className="section ct-map-form-section">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="ct-map-form-layout">
              {/* Map Area */}
              <div className="ct-map-area">
                <iframe 
                  title="Vidhnharta Reality Bhavnagar office location"
                  src="https://www.google.com/maps?q=Waghawadi+Road,+Bhavnagar,+Gujarat+364002&output=embed" 
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a 
                  href="https://www.google.com/maps/dir//Waghawadi+Road,+Bhavnagar,+Gujarat+364002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ct-directions-btn"
                  id="contact-get-directions"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Floating Contact Form */}
              <div className="ct-form-card" id="contact-form-card">
                <div className="ct-form-header">
                  <h3>Send an Enquiry</h3>
                  <p>Share your requirements and we'll get back to you promptly.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="ct-form">
                  <div className={`field ${errors.name ? 'invalid' : ''}`}>
                    <label htmlFor="ctName">Your Name *</label>
                    <input 
                      id="ctName" 
                      name="name" 
                      type="text" 
                      placeholder="e.g. Ramesh Patel"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      required 
                    />
                    {errors.name && <span className="err">{errors.name}</span>}
                  </div>

                  <div className={`field ${errors.email ? 'invalid' : ''}`}>
                    <label htmlFor="ctEmail">Email Address *</label>
                    <input 
                      id="ctEmail" 
                      name="email" 
                      type="email" 
                      placeholder="name@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      required 
                    />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </div>

                  <div className={`field ${errors.interest ? 'invalid' : ''}`}>
                    <label htmlFor="ctInterest">I am Interested In *</label>
                    <select 
                      id="ctInterest" 
                      name="interest" 
                      value={formData.interest}
                      onChange={handleChange}
                      aria-invalid={errors.interest ? 'true' : 'false'}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Residential Property">Residential Property</option>
                      <option value="Commercial Property">Commercial Property</option>
                      <option value="Land / Plot">Land / Plot</option>
                      <option value="Investment">Investment</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.interest && <span className="err">{errors.interest}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="ctMessage">Message <small>(Optional)</small></label>
                    <textarea 
                      id="ctMessage" 
                      name="message" 
                      rows="3"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="ct-wa-submit-btn" id="contact-submit-whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Send on WhatsApp</span>
                  </button>

                  <p className="ct-form-privacy">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Your details are 100% confidential. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="section faq-section">
        <div className="wrap">
          <ScrollReveal animation="fade-up">
            <div className="section-head text-center-wrap">
              <p className="intro-label">Frequently Asked Questions</p>
              <h2>Got Questions? We've Got Answers</h2>
              <p>Everything you need to know about buying plots and verified properties with Vidhnharta Reality.</p>
            </div>
          </ScrollReveal>

          <div className="faq-accordion-wrap">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <ScrollReveal key={faq.question} animation="fade-up" delay={idx * 60}>
                  <div className={`faq-card ${isOpen ? 'open' : ''}`}>
                    <button 
                      type="button" 
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
