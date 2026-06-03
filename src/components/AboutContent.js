import './AboutContentStyle.css';
import React from 'react';

const AboutContent = () => {
  return (
    <section className='about section'>
      <div className='container about-grid'>
        <div className='section-intro'>
          <p className='eyebrow'>About</p>
          <h2>Data engineering with production ownership.</h2>
        </div>
        <div className='about-copy'>
          <p>
            I am a Data Engineer with 2.5 years of experience designing, developing,
            and supporting data integration solutions for enterprise datasets. My work
            spans SQL-heavy data processing, Python automation, ETL orchestration,
            validation frameworks, reporting support, and production incident handling.
          </p>
          <p>
            I enjoy making data systems cleaner, faster, and easier to operate. That means
            thinking beyond code: clear lineage, stable schedules, reconciliation checks,
            performance tuning, and practical documentation for the people who depend on the data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
