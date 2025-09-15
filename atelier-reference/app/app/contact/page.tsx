
"use client";

import { useState } from 'react';
import Button from '../../components/common/button';
import { useFormValidation, FormField } from '../../components/forms/form-validation';
import LoadingSkeleton from '../../components/common/loading-skeleton';

const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'theme-purchase', label: 'Theme Purchase Inquiry' },
  { value: 'custom-project', label: 'Custom Project' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership Opportunity' }
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    isValid
  } = useFormValidation({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationRules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 50
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        custom: (value: string) => {
          if (value && !value.includes('.')) {
            return 'Please enter a valid email address';
          }
          return null;
        }
      },
      subject: {
        required: true
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 1000
      }
    }
  });

  const onSubmit = async (formData: typeof values) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send this to your API
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitStatus('idle');
        reset();
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="page-content section">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Ready to elevate your digital presence with architectural precision? Let's discuss your project.
          </p>
        </header>
        
        <div className="contact-content">
          <div className="contact-grid">
            <div className="contact-info fade-in-up">
              <h2>Let's Build Something Exceptional</h2>
              <p>
                Whether you're looking for a premium website template or need guidance 
                implementing our digital blueprints, we're here to help you create 
                something truly remarkable.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method__icon">📧</div>
                  <div className="contact-method__content">
                    <h3>Email</h3>
                    <p>hello@atelierdigital.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-method__icon">⏰</div>
                  <div className="contact-method__content">
                    <h3>Response Time</h3>
                    <p>Within 24 hours</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-method__icon">🚀</div>
                  <div className="contact-method__content">
                    <h3>Project Timeline</h3>
                    <p>2-4 weeks typically</p>
                  </div>
                </div>
              </div>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="status-message status-message--success">
                  <strong>Message sent successfully!</strong>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message status-message--error">
                  <strong>Error sending message.</strong>
                  <p>Please try again or contact us directly.</p>
                </div>
              )}
            </div>
            
            <div className="contact-form-wrapper fade-in-up" style={{ animationDelay: '200ms' }}>
              {isSubmitting ? (
                <div className="form-loading">
                  <LoadingSkeleton variant="card" />
                  <p className="loading-text">Sending your message...</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(onSubmit);
                }}>
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    value={values.name}
                    error={errors.name}
                    touched={touched.name}
                    placeholder="Your full name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    placeholder="your.email@example.com"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  
                  <FormField
                    label="Subject"
                    name="subject"
                    type="select"
                    value={values.subject}
                    error={errors.subject}
                    touched={touched.subject}
                    options={subjectOptions}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  
                  <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    value={values.message}
                    error={errors.message}
                    touched={touched.message}
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                    rows={6}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  
                  <div className="form-footer">
                    <Button 
                      type="submit" 
                      variant="primary"
                      disabled={!isValid || isSubmitting}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                    
                    <p className="form-note">
                      We respect your privacy and will never share your information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
