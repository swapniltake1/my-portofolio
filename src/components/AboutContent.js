import "./AboutContentStyle.css";
import React from "react";
import ProfileImg from "./ProfileImg";

const AboutContent = () => {
  return (
    <section className="about section">
      <div className="container about-grid">
        <div className="section-intro">
          <p className="eyebrow">About</p>
          <h2>Cloud data engineering with production ownership.</h2>
        </div>

        <div className="about-card">
          <ProfileImg />

          <div className="about-copy">
            <p>
              I am a <span className="highlight">Data Engineer</span> with
              <span className="highlight"> 2.6+ years</span> of experience
              designing, developing, and supporting enterprise data solutions
              at Accenture. I work across Azure Data Factory, Azure Databricks,
              PySpark, Python, SQL, ADLS Gen2, and Azure Synapse.
            </p>

            <p>
              My focus is turning complex source data into trusted analytics
              assets through Medallion Architecture, incremental loading, CDC,
              dimensional modeling, data quality checks, and clear operational
              support.
            </p>

            <div className="ai-expertise">
              <h3>AI & ML Expertise</h3>
              <p className="expertise-desc">
                Advanced experience in modern AI technologies including{" "}
                <span className="tech-tag">Agentic AI</span>,{" "}
                <span className="tech-tag">RAG (Retrieval Augmented Generation)</span>,{" "}
                <span className="tech-tag">LLM Integration</span>, and{" "}
                <span className="tech-tag">Multi-Agent Orchestration</span>.
                Building intelligent data pipelines that leverage AI for
                enhanced insights and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
