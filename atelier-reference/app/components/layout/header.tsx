
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navigation from './navigation';
import { SearchTrigger } from '../interactive/SearchTrigger';
import { ThemeToggle } from '../interactive/ThemeToggle';
import { useLiveSearch } from '../../hooks/use-live-search';
import { searchableItems } from '../../data/searchable-items';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Phase 3A - LiveSearch integration
  const { openSearch } = useLiveSearch(searchableItems);

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
          
          {/* Phase 3A - Search and Theme Controls */}
          <div className="header__controls">
            <SearchTrigger
              onClick={openSearch}
              variant="icon"
              className="hidden md:flex"
            />
            
            <ThemeToggle
              variant="minimal"
              size="md"
              config={{
                showSystemOption: true,
                defaultTheme: 'system',
              }}
            />
            
            <button 
              className="header__menu-trigger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
