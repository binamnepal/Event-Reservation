import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Toolbar, InputBase } from "@mui/material";
function Navbar() {
  return (
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div className="navBar">
    <h1 className="logo">Pashupati Planers</h1>
    </div>
        <InputBase placeholder="Search events" />
    <div className="Navbar-container">
    <nav className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
     
    </nav>
        <button id='Navbar-button'>  <Link to="/login">Login</Link></button>
    </div>
    </Toolbar>
  );
}

export default Navbar;
