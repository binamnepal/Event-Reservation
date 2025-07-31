import React from "react";
import Logo from '../../assets/Logo.jpg'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Toolbar, InputBase } from "@mui/material";

function Navbar() {
  return (
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <div className="navBar">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Pashupati Planners Logo" className="logo-img" />
        </Link>
        <h1 className="logo-text">Pashupati Planners</h1>
      </div>
      <div className="Navbar-container">
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button id="Navbar-button">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </Toolbar>
  );
}

export default Navbar;
