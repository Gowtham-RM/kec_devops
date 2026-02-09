import React from 'react';

const Card = ({ icon, title, description, children, variant, onClick }) => {
  return (
    <div className={`card ${variant || ''}`} onClick={onClick}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
