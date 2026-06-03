import React from 'react';
import './HeroImg2Styles.css';

const HeroImg2 = ({ heading, text }) => {
  return (
    <section className='hero-img'>
      <div className='heading container'>
        <p className='eyebrow'>Portfolio</p>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default HeroImg2;
