import React from 'react';
import './CertificationsStyle.css';

const Certifications = () => {
  const focusAreas = [
    'SQL performance tuning',
    'Python for data automation',
    'AWS data engineering fundamentals',
    'Power BI data modeling'
  ];

  return (
    <section className='certifications section'>
      <div className='container cert-band'>
        <div>
          <p className='eyebrow'>Certifications and Learning</p>
          <h2>Focused on production data skills.</h2>
        </div>
        <div className='cert-list'>
          {focusAreas.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
