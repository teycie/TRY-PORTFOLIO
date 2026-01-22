import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="home" id="home">
      <div className="animated-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="gradient-bg"></div>
      </div>

      <motion.div
        className="home-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-image-container" variants={itemVariants}>
          <img
            src="/images/homepage.jpeg"
            alt="Hero - Trish Portfolio"
            className="hero-image"
          />
        </motion.div>

        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="home-heading" variants={itemVariants}>
            Hi, I'm <span>Trish</span>
          </motion.h1>

          <motion.p className="home-subheading" variants={itemVariants}>
            A BSIT Student
          </motion.p>

          <motion.div className="home-buttons" variants={itemVariants}>
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View My Work
            </Link>
          </motion.div>
        </motion.div> {/* ✅ closes home-content */}

      </motion.div> {/* ✅ THIS was missing – closes home-wrapper */}

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down to see more content"
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
}

export default Home;
