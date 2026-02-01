import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
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
