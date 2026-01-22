import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/teycie',
      icon: '🐙',
      label: 'Visit my GitHub profile',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/tey.cie',
      icon: '📷',
      label: 'Follow me on Instagram',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '𝕏',
      label: 'Connect with me on Twitter',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/imaosyy',
      icon: 'f',
      label: 'Find me on Facebook',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in <span>Touch</span>
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? Let's connect!
        </motion.p>

        <div className="contact-content">
          {/* Contact Form Section */}
          <motion.div
            className="contact-form-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="contact-info-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3 variants={itemVariants}>Connect With Me</motion.h3>

            <motion.p className="info-text" variants={itemVariants}>
              Follow me on social media or reach out directly. I'm always excited
              to meet new people and explore collaboration opportunities!
            </motion.p>

            <motion.div className="social-links-grid" variants={itemVariants}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-card"
                  aria-label={link.label}
                  title={link.label}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </motion.div>

            <motion.div className="contact-info" variants={itemVariants}>
              <h4>Other Ways to Reach Me</h4>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:trish.castillo@urios.edu.ph">trish.castillo@urios.edu.ph</a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+1234567890">(123) 456-7890</a>
              </p>
              <p>
                <strong>Location:</strong> Butuan City, Philippines
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
