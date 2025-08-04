import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <section className="about-hero">
        <h1 className="about-hero-title">About Us</h1>
        <p className="about-hero-subtitle">Who we are & what we do</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-content-inner">
          <h2 className="about-content-title">Welcome to Pashupati Planners</h2>
          <p className="about-text">
            Pashupati Planners is your trusted partner for creating unforgettable events. Based in Nepal,
            we specialize in organizing weddings, corporate functions, parties, and cultural programs
            with creativity, precision, and heart.
          </p>

          <p className="about-text">
            Founded in 2025, our mission is to turn your ideas into seamless experiences. From intimate
            gatherings to grand celebrations, we handle everything — from concept to execution.
          </p>

          <p className="about-text">
            Our team of experienced event managers, designers, and coordinators work closely with clients
            to ensure every event is unique, meaningful, and flawless.
          </p>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="about-vision-mission">
        <div className="about-vision-mission-grid">
          <div className="vision-mission-card">
            <h3 className="vision-mission-title">Our Vision</h3>
            <p className="vision-mission-text">
              To be the most innovative and customer-focused event planning company in Nepal and beyond.
            </p>
          </div>
          <div className="vision-mission-card">
            <h3 className="vision-mission-title">Our Mission</h3>
            <p className="vision-mission-text">
              To deliver exceptional event experiences that exceed expectations through creativity,
              commitment, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Pashupati Planners. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;