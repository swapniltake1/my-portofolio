import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading='About Swapnil'
        text='Data Engineer with 2.5 years of experience across ETL, SQL, Python, data quality, and analytics workflows.'
      />
      <AboutContent />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
};

export default About;
