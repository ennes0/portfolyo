import React from 'react';
import './LegalPages.css';

function DataUsage() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Data Usage Policy</h1>
        <div className="last-updated">Last Updated: March 2024</div>

        <section>
          <h2>1. Data Storage</h2>
          <p>Your data is stored:</p>
          <ul>
            <li>Securely in encrypted cloud servers</li>
            <li>With regular backups</li>
            <li>Following GDPR guidelines</li>
            <li>With strict access controls</li>
          </ul>
        </section>

        <section>
          <h2>2. Data Processing</h2>
          <p>We process data to:</p>
          <ul>
            <li>Train our AI models</li>
            <li>Improve prediction accuracy</li>
            <li>Generate insights</li>
            <li>Enhance user experience</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DataUsage;
