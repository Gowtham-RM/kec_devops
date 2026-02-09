import React from 'react';

const Hero = ({ title, subtitle, showButton, buttonText, buttonLink, variant }) => {
  return (
    <section className={`hero ${variant || 'default'}`}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {showButton && (
          <a href={buttonLink || '#'} className="hero-btn">
            {buttonText || 'Learn More'}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
