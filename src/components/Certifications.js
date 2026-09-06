import React from 'react';
import './CertificationsStyle.css';

const Certifications = () => {
  const focusAreas = [
    'Databricks Certified: Data Engineer Associate',
    'Microsoft Certified: Fabric Data Engineer Associate',
    'Microsoft Certified: Azure AI Fundamentals',
    'HackerRank Certified: SQL (Advanced)'
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
