
'use client';

import { useEffect } from 'react';

/**
 * Smooth scrolling hook using Lenis
 * Provides buttery smooth scrolling experience with easing
 */
export function useSmoothScroll(options = {}) {
  useEffect(() => {
    let lenis: any = null;
    let rafId: number | null = null;

    const initLenis = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const Lenis = (await import('@studio-freight/lenis')).default;
        
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical' as const,
          gestureOrientation: 'vertical' as const,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
          ...options
        } as any);

        function raf(time: number) {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Integrate with GSAP ScrollTrigger if available
        if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
          lenis.on('scroll', (window as any).ScrollTrigger.update);
          
          (window as any).gsap?.ticker.lagSmoothing(0);
        }

      } catch (error) {
        console.warn('Lenis smooth scroll failed to initialize:', error);
      }
    };

    // Only initialize on client side
    if (typeof window !== 'undefined') {
      initLenis();
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis?.destroy();
    };
  }, [options]);
}

/**
 * Scroll to element utility
 */
export function useScrollTo() {
  const scrollTo = (target: string | HTMLElement | number, options = {}) => {
    if (typeof window === 'undefined') return;

    // Check if Lenis is available globally
    const lenis = (window as any).lenis;
    
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      });
    } else {
      // Fallback to native smooth scroll
      if (typeof target === 'string') {
        const element = document.querySelector(target);
        element?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else if (typeof target === 'number') {
        window.scrollTo({
          top: target,
          behavior: 'smooth'
        });
      }
    }
  };

  return { scrollTo };
}
