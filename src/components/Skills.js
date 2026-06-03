import './SkillsStyles.css';
import React from 'react';

const Skills = () => {
  const skills = [
    {
      number: '01',
      title: 'Languages',
      items: 'Python, SQL, Shell Scripting, Java'
    },
    {
      number: '02',
      title: 'Data Engineering',
      items: 'ETL, ELT, data modeling, data warehousing, reconciliation, data quality rules'
    },
    {
      number: '03',
      title: 'Databases',
      items: 'DB2, Oracle, MySQL, PostgreSQL, query tuning, stored procedures'
    },
    {
      number: '04',
      title: 'Big Data and Cloud',
      items: 'Spark, Hadoop, AWS S3, AWS Glue, Lambda, Azure Data Factory'
    },
    {
      number: '05',
      title: 'Orchestration',
      items: 'Airflow, Control-M, Jenkins, scheduled batch operations, job monitoring'
    },
    {
      number: '06',
      title: 'Analytics',
      items: 'Power BI, Tableau, dashboard-ready datasets, KPI extracts, reporting support'
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
