import React from 'react';
import '../src/services.css';

const Services = () => {
  const handleClick = (service) => {
    alert(`You've clicked on ${service}! 🤖`);
  };

  return (
    <div className="services-container">
      <h1>Services</h1>
      <ul className="services-list">
        <li className="service-item" onClick={() => handleClick('Web Development')}>
          <span className="service-icon">💻</span> Web Development
        </li>
        <li className="service-item" onClick={() => handleClick('Mobile App Development')}>
          <span className="service-icon">📱</span> Mobile App Development
        </li>
        <li className="service-item" onClick={() => handleClick('Programming')}>
          <span className="service-icon">🖥️</span> Programming
        </li>
      </ul>
      <p className="more-info">
        Click on the services to know more!
      </p>
    </div>
  );
};

export default Services;
