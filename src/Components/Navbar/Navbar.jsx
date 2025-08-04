import React from "react";
import Logo from '../../assets/Logo.jpg'
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <div className="navbar-toolbar">
      <div className="navBar">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Pashupati Planners Logo" className="logo-img" />
        </Link>
        <h1 className="logo-text">Pashupati Planners</h1>
      </div>
      <div className="Navbar-container">
        <nav className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <button className="navbar-login-button">
          <Link to="/login" className="login-link">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;