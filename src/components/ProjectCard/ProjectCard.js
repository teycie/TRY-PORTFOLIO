import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const cardVariants = {
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

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            View on Figma
          </a>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
