import React, { useState } from 'react';
import './FormStyle.css';

const Form = () => {
  const [copied, setCopied] = useState(false);
  const email = 'swapniltake1@outlook.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className='contact-section section'>
      <div className='container contact-layout'>
        <div className='section-intro'>
          <p className='eyebrow'>Contact</p>
          <h2>Open to data engineering roles and collaborations.</h2>
          <p>
            Best fit: ETL development, SQL engineering, warehouse support, cloud data migration,
            and analytics platform work.
          </p>
        </div>

        <div className='contact-card'>
          <a href={`mailto:${email}`}>{email}</a>
          <a href='https://www.linkedin.com/in/swapniltake1' target='_blank' rel='noreferrer'>LinkedIn</a>
          <a href='https://github.com/swapniltake1' target='_blank' rel='noreferrer'>GitHub</a>
          <a href='https://www.youtube.com/@CodeWithSwap' target='_blank' rel='noreferrer'>YouTube</a>
          <button type='button' onClick={copyEmail}>{copied ? 'Email Copied' : 'Copy Email'}</button>
        </div>
      </div>
    </section>
  );
};

export default Form;
