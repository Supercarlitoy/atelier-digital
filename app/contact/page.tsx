
import Button from '../../components/common/button';

export default function Contact() {
  return (
    <div className="section">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="hero__subtitle">
          <p>
            Ready to elevate your web presence with premium blueprints? 
            We're here to help you find the perfect architectural foundation for your project.
          </p>
        </div>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form className="contact-form">
            <div style={{ marginBottom: 'var(--space-base)' }}>
              <label 
                htmlFor="name" 
                style={{ 
                  display: 'block', 
                  marginBottom: 'var(--space-sm)', 
                  color: 'var(--color-heading)',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                style={{
                  width: '100%',
                  padding: 'var(--space-base)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            
            <div style={{ marginBottom: 'var(--space-base)' }}>
              <label 
                htmlFor="email" 
                style={{ 
                  display: 'block', 
                  marginBottom: 'var(--space-sm)', 
                  color: 'var(--color-heading)',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                style={{
                  width: '100%',
                  padding: 'var(--space-base)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label 
                htmlFor="message" 
                style={{ 
                  display: 'block', 
                  marginBottom: 'var(--space-sm)', 
                  color: 'var(--color-heading)',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                Message
              </label>
              <textarea 
                id="message" 
                name="message"
                rows={6}
                required
                style={{
                  width: '100%',
                  padding: 'var(--space-base)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>
            
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
