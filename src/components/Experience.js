import React from 'react';
import './ExperienceStyle.css';

const Experience = () => {
  return (
    <section className='experience section'>
      <div className='container experience-grid'>
        <div className='section-intro'>
          <p className='eyebrow'>Experience</p>
          <h2>Hands-on delivery from pipeline build to production support.</h2>
        </div>

        <div className='timeline'>
          <article>
            <div className='timeline-dot'></div>
            <p className='time'>05/2026 - Present · Accenture</p>
            <h3>Packaged App Development Analyst</h3>
            <p>
              Develop end-to-end ETL/ELT pipelines for finance and marketing data, integrate 5+ source
              types, and build fact and dimension tables with Azure Data Factory, Databricks, PySpark,
              Python, SQL, and ADLS Gen2.
            </p>
          </article>

          <article>
            <div className='timeline-dot'></div>
            <p className='time'>04/2024 - 04/2026 · Accenture</p>
            <h3>Packaged App Development Associate</h3>
            <p>
              Developed reusable PySpark transformations and parameterized ETL workflows using Azure
              Data Factory, ADLS Gen2, Azure Synapse, and SQL, reducing development effort by 30%.
            </p>
          </article>

          <article>
            <div className='timeline-dot'></div>
            <p className='time'>Impact delivered</p>
            <h3>Optimization and production support</h3>
            <p>
              Applied PySpark and SQL optimization to reduce processing time by 40% and improve
              reporting performance by 50%, while supporting monitoring, troubleshooting, and releases.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
