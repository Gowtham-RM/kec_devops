import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', info: 'Kongu Engineering College, Perundurai, Erode - 638060, Tamil Nadu, India' },
    { icon: '📞', title: 'Phone', info: '+91 4294 226 600 / 226 700' },
    { icon: '📧', title: 'Email', info: 'info@kongu.edu' },
    { icon: '🌐', title: 'Website', info: 'www.kongu.edu' }
  ];

  const departments = [
    { name: 'Admissions Office', email: 'admissions@kongu.edu', phone: '+91 4294 226 601' },
    { name: 'Placement Cell', email: 'placements@kongu.edu', phone: '+91 4294 226 602' },
    { name: 'Examination Cell', email: 'exam@kongu.edu', phone: '+91 4294 226 603' },
    { name: 'Hostel Office', email: 'hostel@kongu.edu', phone: '+91 4294 226 604' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="section-header left">
                <span className="section-label">Get in Touch</span>
                <h2 className="section-title">Send us a Message</h2>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="section-header left">
                <span className="section-label">Information</span>
                <h2 className="section-title">Contact Details</h2>
              </div>
              <div className="contact-info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-card">
                    <span className="info-icon">{item.icon}</span>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p>{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="map-container">
                <div className="map-placeholder">
                  <span className="map-icon">🗺️</span>
                  <p>Google Map Location</p>
                  <small>Kongu Engineering College, Perundurai</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="dept-contacts-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Departments</span>
            <h2 className="section-title">Department Contacts</h2>
          </div>
          <div className="dept-contacts-grid">
            {departments.map((dept, index) => (
              <div key={index} className="dept-contact-card">
                <h4>{dept.name}</h4>
                <p><span>📧</span> {dept.email}</p>
                <p><span>📞</span> {dept.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="hours-section">
        <div className="container">
          <div className="hours-card">
            <h3>🕐 Office Hours</h3>
            <div className="hours-grid">
              <div className="hours-item">
                <h4>Monday - Friday</h4>
                <p>9:00 AM - 5:00 PM</p>
              </div>
              <div className="hours-item">
                <h4>Saturday</h4>
                <p>9:00 AM - 1:00 PM</p>
              </div>
              <div className="hours-item">
                <h4>Sunday</h4>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
