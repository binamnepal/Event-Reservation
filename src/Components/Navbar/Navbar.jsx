import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/Logo.jpg';
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Function to handle active link styling
  const isActive = (path) => location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Brand Section */}
        <Link to="/" className="brand">
          <div className="brand-logo-wrapper">
            <img src={Logo} alt="Pashupati Planners Logo" className="brand-logo" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Pashupati Planners</span>
            <span className="brand-tagline">Event Management</span>
          </div>
        </Link>

        {/* Navigation Section */}
        <div className="nav-right">
          <ul className="navbar-links">
            <li><Link to="/" className={isActive("/")}>Home</Link></li>
            <li><Link to="/about" className={isActive("/about")}>About</Link></li>
            <li><Link to="/contact" className={isActive("/contact")}>Contact</Link></li>
          </ul>

          <Link to="/login" className="btn-login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;