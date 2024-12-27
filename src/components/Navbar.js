import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>NGO Name</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/donate">Donate</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
