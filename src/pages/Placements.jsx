import React from 'react';

const Placements = () => {
  const stats = [
    { label: 'Students Placed', value: '1,200+', icon: '👨‍🎓' },
    { label: 'Highest Package', value: '₹45 LPA', icon: '🏆' },
    { label: 'Average Package', value: '₹6.5 LPA', icon: '📊' },
    { label: 'Companies Visited', value: '300+', icon: '🏢' }
  ];

  const topRecruiters = [
    'Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro',
    'Cognizant', 'HCL', 'Accenture', 'IBM', 'Zoho', 'L&T',
    'Capgemini', 'Tech Mahindra', 'Mindtree', 'Mphasis',
    'Dell', 'HP', 'Oracle', 'SAP', 'Deloitte', 'PayPal',
    'Bosch', 'Caterpillar'
  ];

  const training = [
    { title: 'Aptitude Training', desc: 'Comprehensive training on quantitative aptitude, logical reasoning, and verbal ability', icon: '🧮' },
    { title: 'Technical Training', desc: 'Programming languages, data structures, algorithms, and system design', icon: '💻' },
    { title: 'Soft Skills', desc: 'Communication skills, group discussions, and presentation techniques', icon: '🗣️' },
    { title: 'Mock Interviews', desc: 'Regular mock interviews with industry experts and HR professionals', icon: '🎯' },
    { title: 'Industry Workshops', desc: 'Hands-on workshops conducted by industry professionals', icon: '🔧' },
    { title: 'Internship Programs', desc: 'Internship opportunities with leading companies during summer breaks', icon: '📋' }
  ];

  const yearlyStats = [
    { year: '2025-26', placed: '1,200', highest: '45 LPA', average: '6.5 LPA' },
    { year: '2024-25', placed: '1,150', highest: '42 LPA', average: '6.2 LPA' },
    { year: '2023-24', placed: '1,100', highest: '38 LPA', average: '5.8 LPA' },
    { year: '2022-23', placed: '1,050', highest: '35 LPA', average: '5.5 LPA' }
  ];

  return (
    <div className="placements-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Placements</h1>
          <p>Launching careers with top companies worldwide</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="placement-stats-section">
        <div className="container">
          <div className="placement-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="placement-stat-card">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Statistics */}
      <section className="yearly-stats-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Track Record</span>
            <h2 className="section-title">Placement Statistics</h2>
          </div>
          <div className="table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Academic Year</th>
                  <th>Students Placed</th>
                  <th>Highest Package</th>
                  <th>Average Package</th>
                </tr>
              </thead>
              <tbody>
                {yearlyStats.map((row, index) => (
                  <tr key={index}>
                    <td>{row.year}</td>
                    <td>{row.placed}</td>
                    <td>{row.highest}</td>
                    <td>{row.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="recruiters-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Partners</span>
            <h2 className="section-title">Our Top Recruiters</h2>
            <p className="section-subtitle">Leading companies that recruit from our campus</p>
          </div>
          <div className="recruiters-grid large">
            {topRecruiters.map((company, index) => (
              <div key={index} className="recruiter-card">
                <span className="company-name">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Activities */}
      <section className="training-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Preparation</span>
            <h2 className="section-title">Training & Development</h2>
            <p className="section-subtitle">Comprehensive training programs to make students industry-ready</p>
          </div>
          <div className="training-grid">
            {training.map((item, index) => (
              <div key={index} className="training-card">
                <span className="training-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Placement Process</h2>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-circle">1</div>
              <h4>Pre-Placement Talk</h4>
              <p>Companies introduce themselves and job roles</p>
            </div>
            <div className="process-step">
              <div className="step-circle">2</div>
              <h4>Online Assessment</h4>
              <p>Aptitude and technical screening tests</p>
            </div>
            <div className="process-step">
              <div className="step-circle">3</div>
              <h4>Technical Interview</h4>
              <p>In-depth technical knowledge evaluation</p>
            </div>
            <div className="process-step">
              <div className="step-circle">4</div>
              <h4>HR Interview</h4>
              <p>Final discussion and offer release</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h3>For Recruiters</h3>
            <p>Partner with us to hire talented engineers from our campus</p>
            <div className="cta-buttons">
              <a href="mailto:placements@kongu.edu" className="btn btn-primary">Contact Placement Cell</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
