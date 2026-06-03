import './HeroImgStyle.css';
import '../index.css';
import React from 'react';
import intro from '../assets/data-engineering-hero.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={intro} alt='Data engineering workspace with pipelines and dashboards' />
      </div>

      <div className='content'>
        <p className='eyebrow'>2.5 years of practical data engineering experience</p>
        <h1>Building reliable pipelines that turn enterprise data into decisions.</h1>
        <p className='hero-copy'>
          Data Engineer focused on SQL optimization, ETL development, data quality automation,
          warehousing, and cloud-ready analytics workflows.
        </p>

        <div className='hero-actions'>
          <Link to='/swapniltake/project' className='btn'>View Projects</Link>
          <Link to='/swapniltake/contact' className='btn btn-light'>Contact Me</Link>
          <a href='/resume.html' className='btn btn-light'>View Resume</a>
        </div>
      </div>

      <div className='hero-kpis container'>
        <article>
          <strong>25M+</strong>
          <span>records processed across batch pipelines</span>
        </article>
        <article>
          <strong>18+</strong>
          <span>ETL workflows delivered and maintained</span>
        </article>
        <article>
          <strong>99.5%</strong>
          <span>pipeline availability target supported</span>
        </article>
      </div>
    </div>
  );
};

export default HeroImg;
