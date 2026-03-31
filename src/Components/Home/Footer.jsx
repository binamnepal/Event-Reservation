import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <h2 className="footer__brand-name">Pashupati Planners</h2>
          <p className="footer__brand-tagline">Creating unforgettable events across Nepal since 2025.</p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Facebook">fc</a>
            <a href="#" className="footer__social" aria-label="Instagram">ig</a>
            <a href="#" className="footer__social" aria-label="TikTok">tt</a>
          </div>
        </div>

        <div className="footer__links">
          <h4 className="footer__col-title">Navigation</h4>
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/about" className="footer__link">About Us</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
          <Link to="/login" className="footer__link">Login</Link>
        </div>

        <div className="footer__links">
          <h4 className="footer__col-title">Services</h4>
          <span className="footer__link">Weddings</span>
          <span className="footer__link">Corporate Events</span>
          <span className="footer__link">Cultural Programs</span>
          <span className="footer__link">Private Parties</span>
        </div>

        <div className="footer__links">
          <h4 className="footer__col-title">Contact</h4>
          <span className="footer__link">hello@pashupatiplannners.com</span>
          <span className="footer__link">+977 1-4XXXXXX</span>
          <span className="footer__link">Thamel, Kathmandu</span>
          <span className="footer__link">Nepal</span>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Pashupati Planners. All rights reserved.</p>
        <p>Made with ♥ in Kathmandu</p>
      </div>
    </footer>
  );
}