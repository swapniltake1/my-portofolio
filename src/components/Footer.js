import './FooterStyle.css';
import { FaGithub, FaLinkedin, FaMailBulk, FaYoutube } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container footer-container'>
        <div>
          <h4>Swapnil Take</h4>
          <p>Data Engineer focused on ETL, SQL, Python, data quality, and cloud analytics workflows.</p>
        </div>
        <div className='footer-links'>
          <a href='mailto:swapniltake1@outlook.com' aria-label='Email'><FaMailBulk /></a>
          <a href='https://www.linkedin.com/in/swapniltake1' target='_blank' rel='noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
          <a href='https://github.com/swapniltake1' target='_blank' rel='noreferrer' aria-label='GitHub'><FaGithub /></a>
          <a href='https://www.youtube.com/@thecodebreaker' target='_blank' rel='noreferrer' aria-label='YouTube'><FaYoutube /></a>
        </div>
      </div>
      <div className='container footer-bottom'>
        <p>Copyright {currentYear} Swapnil Take. All rights reserved.</p>
        <a href='/swapniltake/'>Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
