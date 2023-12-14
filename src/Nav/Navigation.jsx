import React, { useState } from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fade-in-element'>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={isMenuOpen ? 'nav-links show' : 'nav-links'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;