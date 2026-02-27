import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll helper that also updates the URL so routing + scrolling both work
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Account for sticky nav by scrolling to top minus navbar height
      const nav = document.querySelector('.navbar');
      const offset = nav ? nav.offsetHeight : 0;
      window.scrollTo({ top: section.offsetTop - offset, behavior: 'smooth' });
      closeMenu();

      const pathMap = {
        'home-section': '/',
        'about-section': '/about',
        'projects-section': '/projects',
        'contact-section': '/contact',
      };

      const newPath = pathMap[id] || '/';
      if (window.location.pathname !== newPath) {
        window.history.pushState({}, '', newPath);
      }
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a
          href="#home-section"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home-section');
          }}>
          My <span>Portfolio</span>
        </a>
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a
              href="#home-section"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home-section');
              }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about-section"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about-section');
              }}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects-section"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects-section');
              }}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact-section"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact-section');
              }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
