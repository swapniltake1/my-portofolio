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
        <p className='eyebrow'>Data Engineer · Accenture · Pune, India</p>
        <h1>Engineering dependable data products from source to insight.</h1>
        <p className='hero-copy'>
          Data Engineer with 2.6+ years of experience building scalable ETL/ELT pipelines
          and cloud data solutions with Azure, PySpark, Python, and SQL.
        </p>

        <div className='hero-actions'>
          <Link to='/swapniltake/project' className='btn'>View Projects</Link>
          <Link to='/swapniltake/contact' className='btn btn-light'>Contact Me</Link>
          <a href='/resume.html' className='btn btn-light'>View Resume</a>
        </div>
      </div>

      <div className='hero-kpis container'>
        <article>
            <strong>5+</strong>
            <span>source types integrated into ingestion workflows</span>
        </article>
        <article>
            <strong>40%</strong>
            <span>faster PySpark processing through optimization</span>
        </article>
        <article>
            <strong>50%</strong>
            <span>reporting performance improvement delivered</span>
        </article>
      </div>
    </div>
  );
};

export default HeroImg;
