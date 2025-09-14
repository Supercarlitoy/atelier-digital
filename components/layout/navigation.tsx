
"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation = ({ isOpen, onClose }: NavigationProps) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`nav-overlay ${isOpen ? 'is-open' : ''}`}>
      <button 
        className="nav-overlay__close"
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>
      <nav className="nav-overlay__nav">
        <ul className="nav-overlay__list">
          {navItems?.map((item) => (
            <li key={item?.href} className="nav-overlay__item">
              <Link 
                href={item?.href || '/'} 
                className={`nav-overlay__link ${pathname === item?.href ? 'is-active' : ''}`}
                onClick={onClose}
              >
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
