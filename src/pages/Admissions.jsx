import React from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const courses = [
    { name: 'B.E. Computer Science & Engineering', duration: '4 Years', seats: 180, fee: '₹1,25,000/year' },
    { name: 'B.E. Information Technology', duration: '4 Years', seats: 120, fee: '₹1,25,000/year' },
    { name: 'B.E. Electronics & Communication', duration: '4 Years', seats: 180, fee: '₹1,20,000/year' },
    { name: 'B.E. Electrical & Electronics', duration: '4 Years', seats: 120, fee: '₹1,20,000/year' },
    { name: 'B.E. Mechanical Engineering', duration: '4 Years', seats: 180, fee: '₹1,15,000/year' },
    { name: 'B.E. Civil Engineering', duration: '4 Years', seats: 120, fee: '₹1,15,000/year' },
    { name: 'M.E. Computer Science', duration: '2 Years', seats: 24, fee: '₹85,000/year' },
    { name: 'M.E. VLSI Design', duration: '2 Years', seats: 18, fee: '₹85,000/year' },
  ];

  const steps = [
    { step: 1, title: 'Online Registration', desc: 'Visit our admission portal and create your account' },
    { step: 2, title: 'Fill Application', desc: 'Complete the application form with accurate details' },
    { step: 3, title: 'Upload Documents', desc: 'Upload required certificates and photographs' },
    { step: 4, title: 'Pay Application Fee', desc: 'Submit the application fee online' },
    { step: 5, title: 'Counseling', desc: 'Attend counseling session for seat allocation' }
  ];

  const dates = [
    { event: 'Application Start Date', date: 'March 1, 2026' },
    { event: 'Application Last Date', date: 'May 31, 2026' },
    { event: 'Counseling Begins', date: 'June 15, 2026' },
    { event: 'Classes Commence', date: 'August 1, 2026' },
  ];

  return (
    <div className="admissions-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Admissions 2026-27</h1>
          <p>Begin your journey to excellence at KEC</p>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Requirements</span>
            <h2 className="section-title">Eligibility Criteria</h2>
          </div>
          <div className="eligibility-grid">
            <div className="eligibility-card">
              <span className="elig-icon">📝</span>
              <h4>UG Programs (B.E./B.Tech)</h4>
              <ul>
                <li>Passed 10+2 with Physics, Chemistry, and Mathematics</li>
                <li>Minimum 60% aggregate marks (55% for reserved categories)</li>
                <li>Valid TNEA counseling rank / JEE Main score</li>
                <li>Age: Below 21 years as of July 1st of admission year</li>
              </ul>
            </div>
            <div className="eligibility-card">
              <span className="elig-icon">🎓</span>
              <h4>PG Programs (M.E./M.Tech)</h4>
              <ul>
                <li>Bachelor's degree in relevant engineering discipline</li>
                <li>Minimum 55% aggregate marks (50% for reserved)</li>
                <li>Valid TANCET / GATE score</li>
                <li>No age restriction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Table */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Programs</span>
            <h2 className="section-title">Courses Offered</h2>
          </div>
          <div className="table-wrapper">
            <table className="courses-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Seats</th>
                  <th>Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.name}</td>
                    <td>{course.duration}</td>
                    <td>{course.seats}</td>
                    <td>{course.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 className="section-title">How to Apply</h2>
          </div>
          <div className="steps-grid">
            {steps.map((item) => (
              <div key={item.step} className="step-card">
                <span className="step-number">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a href="#" className="btn btn-primary">Apply Online Now</a>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Calendar</span>
            <h2 className="section-title">Important Dates</h2>
          </div>
          <div className="dates-grid">
            {dates.map((item, index) => (
              <div key={index} className="date-card">
                <span className="date-icon">📅</span>
                <div className="date-info">
                  <h4>{item.event}</h4>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h3>Need Help with Admissions?</h3>
            <p>Our admissions team is here to assist you with any queries</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <a href="tel:+914294226600" className="btn btn-secondary">📞 +91 4294 226 600</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
