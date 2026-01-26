import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVCICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);

        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(() => {
        setError('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef} noValidate>
      <h3>Send Me a Message</h3>

      {submitted && (
        <motion.div
          className="success-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          aria-live="polite"
        >
          ✓ Thank you! Your message has been sent successfully.
        </motion.div>
      )}

      {error && (
        <motion.div
          className="error-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          aria-live="assertive"
        >
          ✗ {error}
        </motion.div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Message Subject"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        />
      </div>

      <button type="submit" className="submit-btn" aria-label="Send message" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
