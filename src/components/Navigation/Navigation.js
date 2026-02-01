import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper to scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a href="#home-section" className="nav-logo" onClick={e => { e.preventDefault(); scrollToSection('home-section'); }}>
          My <span>Portfolio</span>
        </a>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home-section" className="nav-link" onClick={e => { e.preventDefault(); scrollToSection('home-section'); }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about-section" className="nav-link" onClick={e => { e.preventDefault(); scrollToSection('about-section'); }}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects-section" className="nav-link" onClick={e => { e.preventDefault(); scrollToSection('projects-section'); }}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact-section" className="nav-link" onClick={e => { e.preventDefault(); scrollToSection('contact-section'); }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
