
import Link from 'next/link';
import { Github, Twitter, Linkedin, Dribbble } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub', icon: Github },
    { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://dribbble.com', label: 'Dribbble', icon: Dribbble },
  ];

  const footerLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ];

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__title">Atelier Digital</h3>
            <p className="footer__description">
              Premium website blueprints and digital architecture solutions.
            </p>
          </div>
          
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="footer__link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="footer__social-section">
            <h4 className="footer__social-title">Follow Us</h4>
            <ul className="footer__social">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="footer__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${link.label}`}
                    >
                      <IconComponent size={20} />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Atelier Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
