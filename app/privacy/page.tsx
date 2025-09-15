"use client";

import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="page-privacy">
      <div className="container">
        <section className="hero-section hero-section--privacy">
          <h1 className="hero-section__title">Privacy Policy</h1>
          <p className="hero-section__subtitle">
            Your privacy matters. This page explains what data we collect, how we use it, and your rights.
          </p>
        </section>

        <section className="privacy-content">
          <div className="privacy-section">
            <div className="privacy-section__icon">🔒</div>
            <div className="privacy-section__content">
              <h2>Data We Collect</h2>
              <p className="privacy-section__text">
                We collect basic analytics and error logs to improve site performance and user experience. No unnecessary
                personal data is collected without your consent.
              </p>
              <ul>
                <li><strong>Analytics:</strong> Page views, session duration, device type</li>
                <li><strong>Errors:</strong> Anonymized error reports for debugging</li>
                <li><strong>Consent:</strong> Cookie preferences where applicable</li>
              </ul>
            </div>
          </div>

          <div className="privacy-section">
            <div className="privacy-section__icon">🧭</div>
            <div className="privacy-section__content">
              <h2>Your Choices</h2>
              <p className="privacy-section__text">
                You can accept necessary-only cookies or grant analytics/marketing as you prefer. Update preferences any
                time using the consent controls.
              </p>
              <ul>
                <li><strong>Necessary Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us improve features and performance</li>
                <li><strong>Marketing Cookies:</strong> Personalized content and promotions</li>
              </ul>
            </div>
          </div>

          <div className="privacy-section">
            <div className="privacy-section__icon">📬</div>
            <div className="privacy-section__content">
              <h2>Contact</h2>
              <p className="privacy-section__text">
                Questions or requests? Reach our privacy team at privacy@atelier-digital.com.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;

