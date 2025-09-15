
'use client';

import { useEffect, useRef } from 'react';

/**
 * Enhanced scroll reveal hook with GSAP integration
 * Provides sophisticated scroll-triggered animations
 */
export function useScrollReveal(options: {
  selector?: string;
  stagger?: number;
  duration?: number;
  blur?: boolean;
  scale?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
} = {}) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let gsap: any = null;
    let ScrollTrigger: any = null;

    const initAnimation = async () => {
      try {
        // Dynamic imports to avoid SSR issues
        gsap = (await import('gsap')).gsap;
        ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current) return;

        const {
          selector = '.scroll-reveal',
          stagger = 0.1,
          duration = 0.8,
          blur = true,
          scale = false,
          direction = 'up',
          threshold = 0.1
        } = options;

        const elements = containerRef.current.querySelectorAll(selector);
        
        if (elements.length === 0) return;

        // Calculate transform values based on direction
        const getTransform = (dir: string) => {
          switch (dir) {
            case 'down': return { y: -50 };
            case 'left': return { x: 50 };
            case 'right': return { x: -50 };
            default: return { y: 50 }; // up
          }
        };

        const fromTransform = getTransform(direction);
        const toTransform = { x: 0, y: 0 };

        // Build animation properties
        const fromProps: any = {
          opacity: 0,
          ...fromTransform
        };

        const toProps: any = {
          opacity: 1,
          ...toTransform,
          duration,
          ease: 'power2.out',
          stagger: {
            amount: stagger * elements.length,
            from: 'start'
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top ${100 - (threshold * 100)}%`,
            toggleActions: 'play none none reverse',
            once: true
          }
        };

        // Add blur effect if enabled
        if (blur) {
          fromProps.filter = 'blur(5px)';
          toProps.filter = 'blur(0px)';
        }

        // Add scale effect if enabled
        if (scale) {
          fromProps.scale = 0.95;
          toProps.scale = 1;
        }

        // Apply animation
        gsap.fromTo(elements, fromProps, toProps);

      } catch (error) {
        console.warn('Scroll reveal animation failed to initialize:', error);
      }
    };

    initAnimation();

    return () => {
      // Cleanup ScrollTrigger instances
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.trigger === containerRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [options]);

  return containerRef;
}

/**
 * Simple intersection observer hook for basic reveal animations
 */
export function useIntersectionReveal(options: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
} = {}) {
  const ref = useRef<HTMLElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const {
      threshold = 0.1,
      rootMargin = '0px 0px -10% 0px',
      triggerOnce = true
    } = options;

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          isVisibleRef.current = true;
          
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          entry.target.classList.remove('is-visible');
          isVisibleRef.current = false;
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible: isVisibleRef.current };
}

/**
 * Parallax scroll effect hook
 */
export function useParallax(options: {
  speed?: number;
  direction?: 'up' | 'down';
} = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let gsap: any = null;
    let ScrollTrigger: any = null;

    const initParallax = async () => {
      try {
        gsap = (await import('gsap')).gsap;
        ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        if (!ref.current) return;

        const { speed = 0.5, direction = 'up' } = options;
        const multiplier = direction === 'up' ? -1 : 1;

        gsap.to(ref.current, {
          y: `${speed * 100 * multiplier}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });

      } catch (error) {
        console.warn('Parallax effect failed to initialize:', error);
      }
    };

    initParallax();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.trigger === ref.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [options]);

  return ref;
}
