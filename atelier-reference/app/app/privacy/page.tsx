
/**
 * Privacy Policy Page - Supporting Phase 3A Cookie Consent
 * GDPR/CCPA compliant privacy policy page
 * Part of Atelier Agency Theme - Premium Digital Product
 */

import React from 'react';
import { Shield, Cookie, Lock, Eye, UserCheck, Mail } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="page-privacy">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section hero-section--privacy">
          <div className="hero-section__content">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-primary" size={32} />
              <h1 className="hero-section__title">Privacy Policy</h1>
            </div>
            <p className="hero-section__subtitle">
              Your privacy is fundamental to our relationship. This policy explains how we collect, 
              use, and protect your personal information with transparency and respect.
            </p>
            <div className="text-sm text-text-secondary mt-4">
              Last updated: September 14, 2025
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="main-section">
          <div className="privacy-content">
            
            {/* Information We Collect */}
            <div className="privacy-section" id="information-collection">
              <div className="privacy-section__icon">
                <Eye size={24} className="text-primary" />
              </div>
              <div className="privacy-section__content">
                <h2>Information We Collect</h2>
                <div className="privacy-section__text">
                  <h3>Personal Information</h3>
                  <p>When you interact with our services, we may collect:</p>
                  <ul>
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Professional information (company name, job title)</li>
                    <li>Project requirements and preferences</li>
                    <li>Communication history and feedback</li>
                  </ul>

                  <h3>Technical Information</h3>
                  <p>To improve our services and user experience, we automatically collect:</p>
                  <ul>
                    <li>Device and browser information</li>
                    <li>IP address and location data</li>
                    <li>Website usage patterns and preferences</li>
                    <li>Performance metrics and error reports</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="privacy-section" id="information-use">
              <div className="privacy-section__icon">
                <UserCheck size={24} className="text-primary" />
              </div>
              <div className="privacy-section__content">
                <h2>How We Use Your Information</h2>
                <div className="privacy-section__text">
                  <p>We use your information to provide exceptional service:</p>
                  <ul>
                    <li><strong>Service Delivery:</strong> To provide and improve our digital services</li>
                    <li><strong>Communication:</strong> To respond to inquiries and provide updates</li>
                    <li><strong>Personalization:</strong> To tailor our services to your needs</li>
                    <li><strong>Analytics:</strong> To understand and improve user experience</li>
                    <li><strong>Legal Compliance:</strong> To meet legal and regulatory requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Policy */}
            <div className="privacy-section" id="cookies">
              <div className="privacy-section__icon">
                <Cookie size={24} className="text-primary" />
              </div>
              <div className="privacy-section__content">
                <h2>Cookie Policy</h2>
                <div className="privacy-section__text">
                  <p>We use cookies and similar technologies to enhance your browsing experience:</p>
                  
                  <h3>Essential Cookies</h3>
                  <p>Required for basic website functionality. These cannot be disabled:</p>
                  <ul>
                    <li>Authentication and security</li>
                    <li>Form submissions and preferences</li>
                    <li>Load balancing and performance</li>
                  </ul>

                  <h3>Analytics Cookies</h3>
                  <p>Help us understand how visitors use our website:</p>
                  <ul>
                    <li>Page views and user behavior</li>
                    <li>Performance monitoring</li>
                    <li>Error tracking and debugging</li>
                  </ul>

                  <h3>Marketing Cookies</h3>
                  <p>Used to deliver relevant content and advertisements:</p>
                  <ul>
                    <li>Personalized content recommendations</li>
                    <li>Social media integration</li>
                    <li>Advertising campaign measurement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="privacy-section" id="data-protection">
              <div className="privacy-section__icon">
                <Lock size={24} className="text-primary" />
              </div>
              <div className="privacy-section__content">
                <h2>Data Protection & Security</h2>
                <div className="privacy-section__text">
                  <p>We implement industry-leading security measures:</p>
                  <ul>
                    <li><strong>Encryption:</strong> All data transmitted using SSL/TLS encryption</li>
                    <li><strong>Access Control:</strong> Strict access controls and authentication</li>
                    <li><strong>Regular Audits:</strong> Continuous security monitoring and updates</li>
                    <li><strong>Data Minimization:</strong> We collect only necessary information</li>
                    <li><strong>Secure Storage:</strong> Data stored in secure, compliant facilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="privacy-section" id="your-rights">
              <div className="privacy-section__icon">
                <UserCheck size={24} className="text-primary" />
              </div>
              <div className="privacy-section__content">
                <h2>Your Rights & Choices</h2>
                <div className="privacy-section__text">
                  <p>Under GDPR, CCPA, and other privacy laws, you have the right to:</p>
                  <ul>
                    <li><strong>Access:</strong> Request copies of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate personal information</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Restriction:</strong> Limit how we process your data</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                  </ul>
                  
                  <p>To exercise these rights, please contact us using the information below.</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="privacy-section" id="contact">
              <div className="privacy-section__icon">
                <Mail size={24} className="text-primary" />
              </div>
              <div className="privacy-section__content">
                <h2>Contact Us</h2>
                <div className="privacy-section__text">
                  <p>For questions about this privacy policy or to exercise your rights:</p>
                  <ul>
                    <li><strong>Email:</strong> privacy@atelier-digital.com</li>
                    <li><strong>Address:</strong> 123 Digital Avenue, Tech District, TD 12345</li>
                    <li><strong>Data Protection Officer:</strong> dpo@atelier-digital.com</li>
                  </ul>
                  
                  <p>We aim to respond to all privacy requests within 30 days.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
