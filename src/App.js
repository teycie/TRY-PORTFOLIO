import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  // Scroll to a section based on the current path (supports direct URL and back/forward)
  useEffect(() => {
    const pathToId = (path) => {
      switch (path) {
        case '/about':
          return 'about-section';
        case '/projects':
          return 'projects-section';
        case '/contact':
          return 'contact-section';
        default:
          return 'home-section';
      }
    };

    const scrollToCurrentPath = () => {
      const id = pathToId(window.location.pathname);
      const el = document.getElementById(id);
      if (el) {
        const nav = document.querySelector('.navbar');
        const offset = nav ? nav.offsetHeight : 0;
        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
      }
    };

    // Scroll on initial load
    scrollToCurrentPath();

    // Handle browser back/forward
    window.addEventListener('popstate', scrollToCurrentPath);
    return () => window.removeEventListener('popstate', scrollToCurrentPath);
  }, []);

  return (
    <Router>
      <Navigation />
      <main>
        {/* Stack all pages for scrollable single-page view */}
        <div id="home-section">
          <Home />
        </div>
        <div id="about-section">
          <About />
        </div>
        <div id="projects-section">
          <Projects />
        </div>
        <div id="contact-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
