"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ScrollAnimations, 
  MicroAnimations, 
  PageTransitions,
  initializeAnimations,
  cleanupAnimations 
} from '../lib/gsap-animations';

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  animationType: 'fadeInUp' | 'slideInFromLeft' | 'slideInFromRight' | 'staggeredReveal',
  options = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (!elementRef.current) return;

    let animation: gsap.core.Timeline | gsap.core.Tween | undefined;

    switch (animationType) {
      case 'fadeInUp':
        animation = ScrollAnimations.fadeInUp(elementRef.current, options);
        break;
      case 'slideInFromLeft':
        animation = ScrollAnimations.slideInFromLeft(elementRef.current, options);
        break;
      case 'slideInFromRight':
        animation = ScrollAnimations.slideInFromRight(elementRef.current, options);
        break;
      case 'staggeredReveal':
        animation = ScrollAnimations.staggeredReveal(Array.from(elementRef.current.children), options);
        break;
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [animationType, options]);

  return elementRef;
};

// Hook for micro-interactions
export const useMicroAnimation = (
  animationType: 'buttonHover' | 'cardHover' | 'textReveal',
  delay = 0
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (!elementRef.current) return;

    let animation: gsap.core.Timeline | gsap.core.Tween | undefined;

    switch (animationType) {
      case 'buttonHover':
        animation = MicroAnimations.buttonHover(elementRef.current);
        break;
      case 'cardHover':
        animation = MicroAnimations.cardHover(elementRef.current);
        break;
      case 'textReveal':
        animation = MicroAnimations.textReveal(elementRef.current, delay);
        break;
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [animationType, delay]);

  return elementRef;
};

// Hook for page transitions
export const usePageTransition = (
  transitionType: 'fadeIn' | 'slideUp' | 'architecturalReveal' = 'fadeIn'
) => {
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    let animation: gsap.core.Timeline | gsap.core.Tween | undefined;

    switch (transitionType) {
      case 'fadeIn':
        animation = PageTransitions.fadeIn();
        break;
      case 'slideUp':
        animation = PageTransitions.slideUp();
        break;
      case 'architecturalReveal':
        animation = PageTransitions.architecturalReveal();
        break;
    }

    return () => {
      if (animation) {
        animation.kill();
      }
      if (typeof document !== 'undefined') {
        document
          .querySelectorAll('[data-transition-overlay]')
          .forEach((el) => el.parentElement?.removeChild(el));
      }
    };
  }, [transitionType]);
};

// Hook for counter animations
export const useCountAnimation = (endValue: number, duration = 2.0) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      elementRef.current.textContent = String(endValue);
      return;
    }

    const animation = MicroAnimations.countUp(elementRef.current, endValue, duration);

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [endValue, duration]);

  return elementRef;
};

// Hook for parallax effects
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const animation = ScrollAnimations.parallaxMove(elementRef.current, speed);

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [speed]);

  return elementRef;
};

// Master animation hook for managing all animations
export const useGSAPAnimations = () => {
  useEffect(() => {
    // Initialize animations
    initializeAnimations();

    // Cleanup on unmount
    return () => {
      cleanupAnimations();
    };
  }, []);

  // Return utilities for manual animation control
  return {
    ScrollAnimations,
    MicroAnimations,
    PageTransitions,
    cleanup: cleanupAnimations
  };
};

// Hook for staggered children animations
export const useStaggeredChildren = (
  selector: string,
  animationProps = {},
  staggerAmount = 0.1
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use direct children if selector is '*' or '> *'
    let children: Element[];
    if (selector === '*' || selector === '> *') {
      children = Array.from(containerRef.current.children);
    } else {
      children = Array.from(containerRef.current.querySelectorAll(selector));
    }
    
    if (children.length === 0) return;

    const animation = gsap.fromTo(children,
      {
        y: 40,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: staggerAmount,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        ...animationProps
      }
    );

    return () => {
      animation.kill();
    };
  }, [selector, animationProps, staggerAmount]);

  return containerRef;
};
