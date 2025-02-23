import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-to-main">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
        <h1>Privacy Policy for Grade Wizard</h1>
        <div className="last-updated">Last Updated: March 2024</div>
        
        <div className="policy-intro">
          <p>Welcome to Grade Wizard! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). By using the App, you agree to the terms outlined in this policy.</p>
        </div>

        <section>
          <h2><i className="fas fa-user-shield"></i> Information We Collect</h2>
          <div className="subsection">
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us, such as:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Account credentials</li>
              <li>Any other information you voluntarily submit</li>
            </ul>
          </div>
          <div className="subsection">
            <h3>Non-Personal Information</h3>
            <p>We may also collect non-personal information automatically, including:</p>
            <ul>
              <li>Device type and operating system</li>
              <li>Usage data and analytics</li>
              <li>IP address</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2><i className="fas fa-cogs"></i> How We Use Your Information</h2>
          <p>We use the collected data to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Personalize user experience</li>
            <li>Analyze trends and usage</li>
            <li>Communicate with you regarding updates or support</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2><i className="fas fa-share-alt"></i> How We Share Your Information</h2>
          <p>We do not sell your personal information. However, we may share data in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With third-party vendors who assist us in operating the App.</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect our legal rights.</li>
            <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or asset sale.</li>
          </ul>
        </section>

        <section>
          <h2><i className="fas fa-lock"></i> Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. However, no online service is 100% secure, so we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2><i className="fas fa-user-lock"></i> Your Rights and Choices</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal data</li>
            <li>Restrict processing of your information</li>
            <li>Opt-out of certain data collection methods</li>
          </ul>
          <p>To exercise these rights, contact us at support@gradewizard.com</p>
        </section>

        <section>
          <h2><i className="fas fa-link"></i> Third-Party Links and Services</h2>
          <p>The App may contain links to third-party services. We are not responsible for their privacy practices, and we encourage you to review their policies.</p>
        </section>

        <section>
          <h2><i className="fas fa-child"></i> Children's Privacy</h2>
          <p>Our App is not intended for children under 13. We do not knowingly collect personal data from children. If you believe we have collected such information, please contact us immediately.</p>
        </section>

        <section>
          <h2><i className="fas fa-edit"></i> Changes to This Privacy Policy</h2>
          <p>We may update this policy from time to time. We will notify users of significant changes through the App or other communication channels.</p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
