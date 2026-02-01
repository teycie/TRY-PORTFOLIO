import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Prototyping',
      description:
        '“Creating interactive mockups to visualize user flows and design functionality.',
      technologies: ['Figma', 'Canva', 'Adobe Express'],
      link: 'https://www.figma.com/proto/DlUFAetfljE5AGIU45Ud8q/PROJECT?node-id=84-364&starting-point-node-id=84%3A364',
      image: '/images/prototyping.png',
    },
    {
      id: 2,
      title: 'Wireframing',
      description:
        'A full-stack task management application with user authentication, database integration, and real-time updates.',
      technologies: ['Figma'],
      link: 'https://www.figma.com/design/I2vF7nd01ADtlWzmozkzWW/Untitled?node-id=0-1&t=fy4tFx7NotPGiILV-1',
      image: '/images/wireframe.png',
    },

    {
      id: 3,
      title: 'E-Commerce Platform',
      description:
        'An e-commerce web application featuring product catalogs, shopping cart functionality, and payment integration.',
      technologies: ['React', 'Python', 'MySQL'],
      link: 'https://github.com',
      image: 'https://via.placeholder.com/300x200/8b5fbf/ffffff?text=E-Commerce',
    },
    
  ];

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

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span>Projects</span>
        </motion.h2>

        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing my work and achievements
        </motion.p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
