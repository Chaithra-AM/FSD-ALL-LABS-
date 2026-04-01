import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link nav-home">Home</Link>
      <Link to="/about" className="nav-link nav-about">About</Link>
      <Link to="/contact" className="nav-link nav-contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
