import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import AboutContent from '../components/AboutContent';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Certifications from '../components/Certifications';
import Form from '../components/Form';

export const home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutContent />
      <Skills />
      <Experience />
      <Work />
      <Certifications />
      <Form />
      <Footer />
    </div>
  );
};

export default home;
