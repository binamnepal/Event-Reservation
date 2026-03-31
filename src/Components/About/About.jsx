import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const team = [
  { name: "Arjun Shrestha", role: "Founder & Lead Planner", initials: "AS" },
  { name: "Priya Maharjan", role: "Creative Director", initials: "PM" },
  { name: "Rohan Thapa", role: "Corporate Events Head", initials: "RT" },
  { name: "Sita Gurung", role: "Client Relations", initials: "SG" },
];

const values = [
  { icon: "✦", title: "Creativity", desc: "Every event is a blank canvas. We bring fresh ideas and distinctive designs to make your celebration one-of-a-kind." },
  { icon: "◈", title: "Precision", desc: "From timelines to vendor coordination, no detail is overlooked. We plan obsessively so you can relax completely." },
  { icon: "❋", title: "Integrity", desc: "Transparent pricing, honest communication, and promises kept — always." },
];

export default function About() {
  return (
    <div className="about">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <span className="about-eyebrow">Our Story</span>
          <h1 className="about-hero__title">Planning Events<br /><em>With Heart & Craft</em></h1>
          <p className="about-hero__sub">
            Founded in 2025, Pashupati Planners was born from a simple belief: every celebration deserves to be extraordinary. Based in Kathmandu, we've grown into Nepal's most trusted event planning partner.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="about-mv__inner">
          <div className="about-mv__card">
            <div className="about-mv__icon">🎯</div>
            <h2 className="about-mv__title">Our Mission</h2>
            <p className="about-mv__text">To deliver exceptional event experiences that exceed expectations through creativity, commitment, and excellence — turning every idea into a seamless, unforgettable reality.</p>
          </div>
          <div className="about-mv__card about-mv__card--gold">
            <div className="about-mv__icon">🌟</div>
            <h2 className="about-mv__title">Our Vision</h2>
            <p className="about-mv__text">To be the most innovative and trusted event planning company in Nepal and South Asia, setting the standard for cultural sensitivity, creativity, and flawless execution.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values__inner">
          <div className="about-section-header">
            <span className="about-tag">What Drives Us</span>
            <h2 className="about-section-title">Our Core Values</h2>
          </div>
          <div className="about-values__grid">
            {values.map(({ icon, title, desc }) => (
              <div className="about-value-card" key={title}>
                <span className="about-value-icon">{icon}</span>
                <h3 className="about-value-title">{title}</h3>
                <p className="about-value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="about-team__inner">
          <div className="about-section-header">
            <span className="about-tag">The People</span>
            <h2 className="about-section-title">Meet Our Team</h2>
          </div>
          <div className="about-team__grid">
            {team.map(({ name, role, initials }) => (
              <div className="about-team-card" key={name}>
                <div className="about-team-avatar">{initials}</div>
                <h3 className="about-team-name">{name}</h3>
                <p className="about-team-role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let's create something amazing together.</h2>
        <Link to="/contact" className="about-cta-btn">Contact Our Team →</Link>
      </section>

    </div>
  );
}