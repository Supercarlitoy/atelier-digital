
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub', icon: 'GH' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'TW' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'LI' },
    { href: 'https://dribbble.com', label: 'Dribbble', icon: 'DR' },
  ];

  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="footer__social">
          {socialLinks?.map((link) => (
            <li key={link?.label}>
              <a 
                href={link?.href || '#'} 
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link?.label}
              >
                {link?.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer__copyright">
          © {currentYear} Atelier Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
