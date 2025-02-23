import React from 'react';
import './LegalPages.css';

function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <div className="last-updated">Last Updated: March 2024</div>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Grade Wizard, you agree to these terms and conditions.</p>
        </section>

        <section>
          <h2>2. Service Description</h2>
          <p>Grade Wizard provides:</p>
          <ul>
            <li>Academic performance tracking</li>
            <li>Grade prediction services</li>
            <li>Study recommendations</li>
            <li>Performance analytics</li>
          </ul>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>Users must:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain account security</li>
            <li>Comply with app guidelines</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Terms;
