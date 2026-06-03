const ProjectCardData = [
  {
    title: 'Enterprise Data Warehouse Pipeline',
    category: 'Batch ETL',
    stack: 'SQL, Python, DB2, Control-M',
    summary:
      'Designed a staged ingestion pipeline that loads source data, applies transformations, validates counts, and publishes curated warehouse tables for reporting.',
    highlights: [
      'Added source-to-target reconciliation checks.',
      'Automated duplicate and null validations.',
      'Created restart-friendly processing steps.'
    ],
    source: 'https://github.com/swapniltake1',
    view: 'https://github.com/swapniltake1'
  },
  {
    title: 'Customer Analytics ETL Framework',
    category: 'Analytics ETL',
    stack: 'Oracle, SQL, Power BI',
    summary:
      'Built reusable transformations for customer activity metrics, dimension enrichment, and dashboard-ready KPI tables consumed by reporting teams.',
    highlights: [
      'Improved joins and indexes for faster loads.',
      'Standardized metric definitions across reports.',
      'Documented lineage from source to dashboard.'
    ],
    source: 'https://github.com/swapniltake1',
    view: 'https://github.com/swapniltake1'
  },
  {
    title: 'Automated Data Quality Monitoring',
    category: 'Data Quality',
    stack: 'Python, Airflow, SQL',
    summary:
      'Implemented automated checks for nulls, duplicates, schema drift, thresholds, and load freshness before downstream jobs were triggered.',
    highlights: [
      'Generated daily validation summaries.',
      'Added severity levels for critical datasets.',
      'Improved failure messages for production triage.'
    ],
    source: 'https://github.com/swapniltake1',
    view: 'https://github.com/swapniltake1'
  },
  {
    title: 'Cloud Data Lake Migration',
    category: 'Cloud Data Platform',
    stack: 'AWS S3, Glue, Spark',
    summary:
      'Planned a cloud-ready landing zone for structured data with raw, cleansed, and curated zones, catalog tables, and partitioned storage.',
    highlights: [
      'Defined storage standards for new sources.',
      'Mapped warehouse entities to data lake zones.',
      'Prepared cost-aware batch processing patterns.'
    ],
    source: 'https://github.com/swapniltake1',
    view: 'https://github.com/swapniltake1'
  }
];

export default ProjectCardData;
