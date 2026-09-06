import './AboutContentStyle.css';
import React from 'react';

const AboutContent = () => {
  return (
    <section className='about section'>
      <div className='container about-grid'>
        <div className='section-intro'>
          <p className='eyebrow'>About</p>
          <h2>Cloud data engineering with production ownership.</h2>
        </div>
        <div className='about-copy'>
          <p>
            I am a Data Engineer with 2.6+ years of experience designing, developing,
            and supporting enterprise data solutions at Accenture. I work across Azure
            Data Factory, Azure Databricks, PySpark, Python, SQL, ADLS Gen2, and Azure Synapse.
          </p>
          <p>
            My focus is turning complex source data into trusted analytics assets through
            Medallion Architecture, incremental loading, CDC, dimensional modeling, data
            quality checks, and clear operational support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
