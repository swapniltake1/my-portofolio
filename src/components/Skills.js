import './SkillsStyles.css';
import React from 'react';

const Skills = () => {
  const skills = [
    {
      number: '01',
      title: 'Languages',
      items: 'Python, SQL'
    },
    {
      number: '02',
      title: 'Data Engineering',
      items: 'ETL/ELT, data ingestion, dimensional modeling, fact and dimension tables, schema evolution'
    },
    {
      number: '03',
      title: 'Big Data and Processing',
      items: 'Apache Spark, PySpark, Spark SQL, Delta Lake'
    },
    {
      number: '04',
      title: 'Cloud and Platforms',
      items: 'Azure Data Factory, Azure Databricks, ADLS Gen2, Azure Blob Storage, Azure Synapse'
    },
    {
      number: '05',
      title: 'DevOps and Delivery',
      items: 'Git, CI/CD, Azure DevOps, JIRA, Agile/Scrum'
    },
    {
      number: '06',
      title: 'Data Quality',
      items: 'Validation, reconciliation, logging, auditing, exception handling, CDC, incremental loading'
    }
  ];

  return (
    <section className='skills section section-muted'>
      <div className='container'>
        <div className='section-heading'>
          <p className='eyebrow'>Technical Skills</p>
          <h2>Tools I use to build dependable data platforms.</h2>
        </div>
        <div className='skill-grid'>
          {skills.map((skill) => (
            <article className='skill-card' key={skill.title}>
              <span>{skill.number}</span>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
