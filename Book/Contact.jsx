import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-feedback-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please fill out the form below.</p>
      
      <form className="contact-feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Feedback</button>
      </form>

      <footer>
        <p>&copy; 2024 QuickBus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
