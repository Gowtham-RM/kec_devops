import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact', path: '/contact' }
  ];

  const academics = [
    'Undergraduate Programs',
    'Postgraduate Programs',
    'Research & PhD',
    'Academic Calendar',
    'Examinations'
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">🎓</span>
                <h3>Kongu Engineering College</h3>
              </div>
              <p>
                An Autonomous Institution affiliated to Anna University, Chennai. 
                Approved by AICTE and Accredited by NAAC with A++ Grade.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📸</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">▶️</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div className="footer-links">
              <h4>Academics</h4>
              <ul>
                {academics.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-item">
                <span>📍</span>
                <p>Perundurai, Erode - 638060<br />Tamil Nadu, India</p>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <p>+91 4294 226 600</p>
              </div>
              <div className="contact-item">
                <span>📧</span>
                <p>info@kongu.edu</p>
              </div>
              <div className="contact-item">
                <span>🌐</span>
                <p>www.kongu.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2026 Kongu Engineering College. All rights reserved.</p>
            <p>Designed for DevOps CI/CD Demonstration</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
