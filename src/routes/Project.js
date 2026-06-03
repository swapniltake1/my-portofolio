import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading='Data Engineering Projects'
        text='Production-style ETL, warehouse, data quality, and cloud migration case studies.'
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
