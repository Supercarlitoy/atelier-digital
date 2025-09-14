
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navigation from './navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <Link href="/" className="header__logo">
            Atelier
          </Link>
          <button 
            className="header__menu-trigger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </header>
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
