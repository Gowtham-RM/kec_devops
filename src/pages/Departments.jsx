import React from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const departments = [
    { 
      id: 1, 
      name: 'Computer Science & Engineering', 
      code: 'CSE', 
      icon: '💻',
      desc: 'Focuses on software development, algorithms, AI/ML, cybersecurity, and emerging computing technologies.',
      seats: 180
    },
    { 
      id: 2, 
      name: 'Information Technology', 
      code: 'IT', 
      icon: '🌐',
      desc: 'Covers networking, cloud computing, database management, web technologies, and IT infrastructure.',
      seats: 120
    },
    { 
      id: 3, 
      name: 'Electronics & Communication', 
      code: 'ECE', 
      icon: '📡',
      desc: 'Deals with electronic systems, communication networks, VLSI design, embedded systems, and signal processing.',
      seats: 180
    },
    { 
      id: 4, 
      name: 'Electrical & Electronics', 
      code: 'EEE', 
      icon: '⚡',
      desc: 'Encompasses power systems, electrical machines, control systems, renewable energy, and power electronics.',
      seats: 120
    },
    { 
      id: 5, 
      name: 'Mechanical Engineering', 
      code: 'MECH', 
      icon: '⚙️',
      desc: 'Covers thermal engineering, manufacturing, automobile, robotics, CAD/CAM, and industrial automation.',
      seats: 180
    },
    { 
      id: 6, 
      name: 'Civil Engineering', 
      code: 'CIVIL', 
      icon: '🏗️',
      desc: 'Focuses on structural engineering, construction technology, transportation, environmental engineering.',
      seats: 120
    }
  ];

  return (
    <div className="departments-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Departments</h1>
          <p>Explore our diverse range of engineering programs</p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="departments-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Programs</span>
            <h2 className="section-title">Academic Departments</h2>
            <p className="section-subtitle">
              Each department is equipped with state-of-the-art facilities and experienced faculty
            </p>
          </div>
          
          <div className="departments-grid">
            {departments.map((dept) => (
              <div key={dept.id} className="department-card">
                <div className="dept-header">
                  <span className="dept-icon">{dept.icon}</span>
                  <span className="dept-code">{dept.code}</span>
                </div>
                <h3 className="dept-name">{dept.name}</h3>
                <p className="dept-desc">{dept.desc}</p>
                <div className="dept-info">
                  <span className="dept-seats">🎓 {dept.seats} Seats</span>
                </div>
                <Link to="#" className="dept-btn">View Details →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Programs?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="why-icon">👨‍🏫</span>
              <h4>Expert Faculty</h4>
              <p>Learn from industry experts and PhD holders with years of experience</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🔬</span>
              <h4>Modern Labs</h4>
              <p>Access to cutting-edge laboratories with latest equipment and software</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🤝</span>
              <h4>Industry Connect</h4>
              <p>Strong industry partnerships ensuring practical exposure and internships</p>
            </div>
            <div className="why-card">
              <span className="why-icon">💼</span>
              <h4>100% Placement</h4>
              <p>Excellent placement record with top companies recruiting from campus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
