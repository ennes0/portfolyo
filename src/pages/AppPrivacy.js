import React from 'react';
import './LegalPages.css';

function AppPrivacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>App Privacy Details</h1>
        <div className="last-updated">Last Updated: March 2024</div>

        <section>
          <h2>1. App Permissions</h2>
          <p>Grade Wizard requires access to:</p>
          <ul>
            <li>Camera (optional, for document scanning)</li>
            <li>Storage (for saving documents)</li>
            <li>Internet connection</li>
            <li>Push notifications</li>
          </ul>
        </section>

        <section>
          <h2>2. Data Collection</h2>
          <p>Our app collects:</p>
          <ul>
            <li>User-provided academic information</li>
            <li>App usage statistics</li>
            <li>Device information</li>
            <li>Performance metrics</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AppPrivacy;
