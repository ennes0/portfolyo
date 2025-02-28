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
        
        <h1>Grade Wizard: Privacy Policy</h1>
        <div className="last-updated">
          Effective Date: March 15, 2024<br/>
          Last Updated: March 15, 2024
        </div>
        
        <div className="policy-intro">
          <p>Grade Wizard ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our application operates and ensures the security of your personal information. By using our app, you agree to the terms outlined in this policy.</p>
        </div>

        <section>
          <h2><i className="fas fa-shield-alt"></i> Information We Do Not Collect</h2>
          <p>We respect user privacy and do not collect, store, or share any personal information. Our app operates entirely offline and does not require users to provide personal data such as names, email addresses, phone numbers, or location information.</p>
          <p>Additionally, we do not collect or track:</p>
          <ul>
            <li>Account details (email, password, or login credentials)</li>
            <li>Device information (IP address, operating system, device ID)</li>
            <li>Geolocation data</li>
            <li>Contact lists, calendar events, or messages</li>
            <li>Payment or financial details</li>
            <li>Exam results, progress, or user inputs</li>
          </ul>
        </section>

        <section>
          <h2><i className="fas fa-chart-line"></i> No Third-Party Tracking or Analytics</h2>
          <p>Our app does not use third-party tracking tools such as Google Analytics, Facebook Pixel, or any advertising networks. No data is transmitted to external servers or third-party services.</p>
        </section>

        <section>
          <h2><i className="fas fa-cogs"></i> App Functionality Without Data Collection</h2>
          <p>Our app provides AI-powered predictions, career insights, quizzes, and study planning without storing or transmitting any user information. All calculations and processing occur locally on the device to ensure maximum privacy.</p>
        </section>

        <section>
          <h2><i className="fas fa-key"></i> Permissions Used in the App</h2>
          <p>While our app may request access to certain device features, these permissions are solely for functional purposes and do not collect any personal data.</p>
          <ul>
            <li>Camera (if applicable) – Used for scanning barcodes</li>
            <li>Storage (if applicable) – Used for saving study plans and progress locally on the device</li>
            <li>Internet Access (if applicable) – Only used for app updates and not for data collection or tracking</li>
          </ul>
        </section>

        <section>
          <h2><i className="fas fa-child"></i> Children's Privacy</h2>
          <p>Our app is designed for users of all ages and does not collect any data from children under the age of 13 (or the applicable age in your region). Since we do not collect any personal information, we comply fully with the Children's Online Privacy Protection Act (COPPA) and the General Data Protection Regulation (GDPR) regarding child privacy.</p>
        </section>

        <section>
          <h2><i className="fas fa-lock"></i> Security</h2>
          <p>Even though we do not collect any data, we ensure that our app follows strict security measures to protect users from unauthorized access, malware, or data breaches.</p>
        </section>

        <section>
          <h2><i className="fas fa-edit"></i> Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected in this document, and we encourage users to review it periodically. Continued use of our app after an update constitutes acceptance of the revised policy.</p>
        </section>

        <section>
          <h2><i className="fas fa-envelope"></i> Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our commitment to privacy, please contact us at:</p>
          <ul>
            <li>Email: support@gradewizard.com</li>
            <li>Website: www.gradewizard.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
