import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-wrapper">
        <video
          className="hero-vid"
          src="/images/Hero_leanding_vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero-sunflare"></div>
        <div className="hero-mist"></div>
      </div>
      <div className="hero-overlay"></div>

      <div className="wrap hero-content">
        <div className="hero-center-box">
          {/* Frosted Pill Badge */}
          <div className="hero-pill-badge hero-anim-1">
            <span className="badge-icon"></span>
            <span>Recognized as the best investment plots &amp; land in Maharashtra</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title hero-anim-2">
            Find Your Place. Build <br />
            your <em>Future. </em>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub hero-anim-3">
            Premium plots in Mumbai 3.0 for your home, business, or future investment.
          </p>
        </div>

        {/* Bottom Trust Bar */}
        <div className="hero-trust-bar hero-anim-5">
          <p className="trust-heading">Featured as the safest place to invest in</p>
          <div className="trust-badges">
            <div className="trust-brand">100% CLEAR TITLE</div>
            <div className="trust-brand">RERA COMPLIANT</div>
            <div className="trust-brand">MUMBAI PRIME</div>
            <div className="trust-brand">INSTANT REGISTRY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
