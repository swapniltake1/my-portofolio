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
            <p className='time'>2024 - Present</p>
            <h3>Data Engineer</h3>
            <p>
              Build and maintain ETL pipelines, optimize SQL transformations, monitor production jobs,
              and automate validation checks for large enterprise datasets.
            </p>
          </article>

          <article>
            <div className='timeline-dot'></div>
            <p className='time'>2023 - 2024</p>
            <h3>Associate Data Engineer</h3>
            <p>
              Supported data warehouse loads, created reusable scripts, fixed reconciliation issues,
              and partnered with reporting teams to deliver analytics-ready tables.
            </p>
          </article>

          <article>
            <div className='timeline-dot'></div>
            <p className='time'>Daily Practices</p>
            <h3>Production Mindset</h3>
            <p>
              Focus on job reliability, clear runbooks, incident resolution, root-cause analysis,
              and measurable improvements to processing time and data accuracy.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
