import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discover the legacy of excellence at Kongu Engineering College</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <span className="section-label">Our Story</span>
              <h2>A Legacy of Excellence Since 1984</h2>
              <p>
                Kongu Engineering College, established in 1984, is a premier autonomous institution 
                affiliated to Anna University, Chennai. Located in Perundurai, Erode District, 
                Tamil Nadu, the college sprawls across 175 acres of lush green campus.
              </p>
              <p>
                With a vision to produce world-class engineers and technologists, KEC has consistently 
                maintained its position among the top engineering institutions in India. The college 
                offers undergraduate, postgraduate, and doctoral programs in various branches of 
                engineering and technology.
              </p>
            </div>
            <div className="intro-stats">
              <div className="intro-stat-item">
                <span className="stat-num">40+</span>
                <span className="stat-text">Years of Excellence</span>
              </div>
              <div className="intro-stat-item">
                <span className="stat-num">175</span>
                <span className="stat-text">Acres Campus</span>
              </div>
              <div className="intro-stat-item">
                <span className="stat-num">A++</span>
                <span className="stat-text">NAAC Grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                To be a globally recognized institution of higher learning, fostering innovation, 
                research, and entrepreneurship while nurturing future leaders who contribute 
                meaningfully to society and industry through technological excellence and ethical values.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-icon">🚀</div>
              <h3>Our Mission</h3>
              <ul>
                <li>Provide quality technical education through innovative teaching methodologies</li>
                <li>Foster research and development activities in emerging technologies</li>
                <li>Strengthen industry-academia collaboration for practical learning</li>
                <li>Develop professionals with ethical values and social responsibility</li>
                <li>Create an inclusive environment promoting holistic development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="chairman-section">
        <div className="container">
          <div className="chairman-card">
            <div className="chairman-image">
              <div className="image-placeholder">👤</div>
            </div>
            <div className="chairman-content">
              <span className="section-label">Leadership</span>
              <h3>Message from the Chairman</h3>
              <blockquote>
                "Education is the most powerful weapon which you can use to change the world. 
                At Kongu Engineering College, we are committed to providing not just education, 
                but an experience that transforms young minds into capable professionals ready 
                to take on global challenges."
              </blockquote>
              <p className="chairman-name">Dr. N. Raman</p>
              <p className="chairman-title">Chairman, Kongu Engineering College</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="campus-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Infrastructure</span>
            <h2 className="section-title">Campus Overview</h2>
          </div>
          <div className="campus-grid">
            <div className="campus-card">
              <span className="campus-icon">🏢</span>
              <h4>Academic Blocks</h4>
              <p>15 state-of-the-art academic buildings with smart classrooms</p>
            </div>
            <div className="campus-card">
              <span className="campus-icon">🔬</span>
              <h4>Research Centers</h4>
              <p>10+ specialized research centers with advanced equipment</p>
            </div>
            <div className="campus-card">
              <span className="campus-icon">📚</span>
              <h4>Central Library</h4>
              <p>Digital library with 1,00,000+ books and e-resources</p>
            </div>
            <div className="campus-card">
              <span className="campus-icon">🏠</span>
              <h4>Hostels</h4>
              <p>Separate hostels for boys and girls with modern amenities</p>
            </div>
            <div className="campus-card">
              <span className="campus-icon">🏥</span>
              <h4>Health Center</h4>
              <p>24/7 medical facility with qualified medical staff</p>
            </div>
            <div className="campus-card">
              <span className="campus-icon">🍽️</span>
              <h4>Cafeteria</h4>
              <p>Multiple food courts serving hygienic and nutritious food</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
