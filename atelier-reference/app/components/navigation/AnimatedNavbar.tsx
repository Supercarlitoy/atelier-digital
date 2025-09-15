
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import { cn } from '../../lib/utils';
import Button from '../common/button';
import LiveSearch from '../interactive/LiveSearch';
import ThemeToggle from '../interactive/ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const AnimatedNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation on mount
    const tl = gsap.timeline();
    
    if (logoRef.current) {
      tl.fromTo(logoRef.current, 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    if (linksRef.current) {
      const links = linksRef.current.querySelectorAll('a');
      tl.fromTo(links,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        0.2
      );
    }

    if (actionsRef.current) {
      tl.fromTo(actionsRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        0.4
      );
    }

    // Scroll-triggered navbar transformation
    if (navRef.current) {
      ScrollTrigger.create({
        trigger: "body",
        start: "100px top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const shouldBeScrolled = self.progress > 0;
          if (shouldBeScrolled !== isScrolled) {
            setIsScrolled(shouldBeScrolled);
            
            gsap.to(navRef.current, {
              backgroundColor: shouldBeScrolled 
                ? "rgba(255, 255, 255, 0.95)" 
                : "rgba(255, 255, 255, 0)",
              backdropFilter: shouldBeScrolled ? "blur(12px)" : "blur(0px)",
              boxShadow: shouldBeScrolled 
                ? "0 1px 3px rgba(0, 0, 0, 0.1)" 
                : "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isScrolled]);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    
    if (mobileMenuRef.current) {
      if (!isMobileOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  };

  const handleNavClick = (href: string) => {
    // Smooth page transition
    gsap.to("main", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        router.push(href);
        gsap.to("main", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "border-b border-transparent",
          isScrolled && "backdrop-blur-md bg-white/95 border-gray-200/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div ref={logoRef} className="flex-shrink-0">
              <div 
                onClick={() => handleNavClick('/')}
                className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
              >
                Atelier
              </div>
            </div>

            {/* Desktop Navigation */}
            <div ref={linksRef} className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div ref={actionsRef} className="hidden md:flex items-center space-x-4">
              <LiveSearch items={[]} />
              <ThemeToggle />
              <Button 
                variant="primary" 
                onClick={() => handleNavClick('/contact')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 relative">
                  <span 
                    className={cn(
                      "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                      isMobileOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                    )}
                  />
                  <span 
                    className={cn(
                      "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                      isMobileOpen ? "opacity-0" : "opacity-100"
                    )}
                  />
                  <span 
                    className={cn(
                      "absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                      isMobileOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-white border-t border-gray-200/50 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsMobileOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-2">
                <div className="flex items-center justify-between px-3">
                  <ThemeToggle />
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      handleNavClick('/contact');
                      setIsMobileOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16" />
    </>
  );
};

export default AnimatedNavbar;
