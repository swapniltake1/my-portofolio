import './WorkCardStyle.css';
import React from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

const Work = () => {
  return (
    <section className='work-container section section-muted'>
      <div className='container'>
        <div className='section-heading'>
          <p className='eyebrow'>Featured Projects</p>
          <h2>Realistic data engineering work samples.</h2>
        </div>
        <div className='project-container'>
          {WorkCardData.map((val) => (
            <WorkCard
              key={val.title}
              title={val.title}
              category={val.category}
              stack={val.stack}
              summary={val.summary}
              highlights={val.highlights}
              view={val.view}
              source={val.source}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
