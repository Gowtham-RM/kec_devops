import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    { id: 1, icon: '🏛️', title: 'Autonomous', desc: 'Autonomous Institution since 2006' },
    { id: 2, icon: '⭐', title: 'NAAC A++', desc: 'Highest Grade Accreditation' },
    { id: 3, icon: '✅', title: 'NBA Accredited', desc: 'All Major Programs Accredited' },
    { id: 4, icon: '🏆', title: 'NIRF Ranked', desc: 'Top 100 Engineering Colleges' }
  ];

  const facilities = [
    { id: 1, icon: '📚', title: 'Central Library', desc: 'Over 1,00,000+ books, e-journals, and digital resources' },
    { id: 2, icon: '🏠', title: 'Hostel Facilities', desc: 'Separate hostels for boys and girls with modern amenities' },
    { id: 3, icon: '🔬', title: 'Research Labs', desc: '50+ well-equipped laboratories with latest technology' },
    { id: 4, icon: '⚽', title: 'Sports Complex', desc: 'Indoor & outdoor sports facilities, gymnasium, swimming pool' }
  ];

  const stats = [
    { id: 1, number: '15,000+', label: 'Students' },
    { id: 2, number: '500+', label: 'Faculty Members' },
    { id: 3, number: '300+', label: 'Recruiters' },
    { id: 4, number: '25+', label: 'Courses Offered' }
  ];

  const recruiters = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL', 'Accenture',
    'IBM', 'Amazon', 'Microsoft', 'Google', 'Zoho', 'L&T'
  ];

  const news = [
    { id: 1, date: 'Feb 05, 2026', title: 'Admissions Open for 2026-27 Academic Year' },
    { id: 2, date: 'Jan 28, 2026', title: 'KEC Ranks 45th in NIRF Engineering Rankings' },
    { id: 3, date: 'Jan 15, 2026', title: 'International Conference on AI & ML - March 2026' },
    { id: 4, date: 'Jan 10, 2026', title: 'Campus Placement Drive: 500+ Students Placed' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">🎓 NAAC A++ Accredited | Autonomous Institution</span>
          <h1 className="hero-title">Kongu Engineering College</h1>
          <p className="hero-subtitle">Empowering Young Engineers Since 1984</p>
          <p className="hero-tagline">
            Shaping tomorrow's innovators through excellence in education, research, and industry collaboration
          </p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/about" className="btn btn-secondary">Explore Campus</Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item) => (
              <div key={item.id} className="highlight-card">
                <span className="highlight-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Campus Life</span>
            <h2 className="section-title">World-Class Facilities</h2>
            <p className="section-subtitle">Experience excellence with our modern infrastructure</p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility) => (
              <div key={facility.id} className="facility-card">
                <div className="facility-icon">{facility.icon}</div>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section-alt">
        <div className="container">
          <div className="section-header light">
            <h2 className="section-title">KEC at a Glance</h2>
            <p className="section-subtitle">Numbers that speak for our excellence</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="recruiters-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Placements</span>
            <h2 className="section-title">Our Top Recruiters</h2>
            <p className="section-subtitle">Trusted by leading companies worldwide</p>
          </div>
          <div className="recruiters-grid">
            {recruiters.map((company, index) => (
              <div key={index} className="recruiter-card">
                <span className="company-name">{company}</span>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/placements" className="btn btn-outline">View All Recruiters</Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Updates</span>
            <h2 className="section-title">News & Announcements</h2>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <div key={item.id} className="news-card">
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">{item.title}</h3>
                <a href="#" className="news-link">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
