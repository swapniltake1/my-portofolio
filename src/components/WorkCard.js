import './WorkCardStyle.css';
import React from 'react';

const WorkCard = (props) => {
  return (
    <article className='project-card'>
      <div className='project-meta'>
        <span>{props.category}</span>
        <span>{props.stack}</span>
      </div>
      <h2 className='project-title'>{props.title}</h2>
      <p className='project-summary'>{props.summary}</p>
      <ul className='project-highlights'>
        {props.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className='pro-btn'>
        <a href={props.view} className='btn btn-light' target='_blank' rel='noopener noreferrer'>
          View Case Study
        </a>
        <a href={props.source} className='btn' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
      </div>
    </article>
  );
};

export default WorkCard;
