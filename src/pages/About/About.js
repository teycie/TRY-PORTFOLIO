import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    'Problem Solving',
    'Database Design',
    'Team Collaboration',
    'Prototyping & Wireframing',
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2 className="about-title" variants={itemVariants}>
            About <span>Me</span>
          </motion.h2>

          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-intro">
              I'm <strong>Trish Castillo</strong>, a third-year BSIT student,
              passionate about technology and eager to learn new skills.
            </p>
            <p>
              I am dedicated, motivated, and always strive to expand my knowledge
              in the field of information technology. Throughout my academic journey,
              I've developed a strong foundation in web development, problem-solving,
              and programming concepts.
            </p>
            <p>
              My goal is to become a skilled software developer who can create
              innovative solutions that make a positive impact. I'm excited to
              collaborate with others, contribute to meaningful projects, and
              continuously grow as a professional.
            </p>
          </motion.div>

          <motion.div className="skills-section" variants={itemVariants}>
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="education-section" variants={itemVariants}>
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Science in Information Technology</h4>
              <p className="education-school">Father Saturnino Urios University</p>
              <p className="education-year">Expected Graduation: 2027</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
