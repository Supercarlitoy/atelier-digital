
"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Animation presets aligned with "Digital Stonemasonry" philosophy
export const animations = {
  // Stone-like reveal - solid, foundational
  stoneReveal: {
    duration: 1.2,
    ease: "power3.out",
    y: 60,
    opacity: 0,
    stagger: 0.1
  },

  // Architectural slide - precise, structural
  architecturalSlide: {
    duration: 1.0,
    ease: "power2.inOut",
    x: 80,
    opacity: 0,
    stagger: 0.15
  },

  // Foundation build - bottom-up construction
  foundationBuild: {
    duration: 1.4,
    ease: "power3.out",
    y: 100,
    scale: 0.9,
    opacity: 0,
    stagger: 0.2
  },

  // Precision craft - refined, deliberate
  precisionCraft: {
    duration: 0.8,
    ease: "power2.out",
    scale: 0.95,
    opacity: 0,
    rotationY: 5
  },

  // Masonry cascade - structured flow
  masonryCascade: {
    duration: 1.0,
    ease: "power2.out",
    y: 40,
    x: -20,
    opacity: 0,
    stagger: {
      amount: 0.6,
      from: "start"
    }
  }
};

// Scroll-triggered animation utilities
export class ScrollAnimations {
  static init() {
    if (typeof window === 'undefined') return;

    // Refresh ScrollTrigger on route changes
    ScrollTrigger.refresh();
  }

  static fadeInUp(elements: string | Element | Element[], options = {}) {
    if (typeof window === 'undefined') return;

    return gsap.fromTo(elements, 
      { 
        y: 80, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          ...options
        }
      }
    );
  }

  static slideInFromLeft(elements: string | Element | Element[], options = {}) {
    if (typeof window === 'undefined') return;

    return gsap.fromTo(elements,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          toggleActions: "play none none reverse",
          ...options
        }
      }
    );
  }

  static slideInFromRight(elements: string | Element | Element[], options = {}) {
    if (typeof window === 'undefined') return;

    return gsap.fromTo(elements,
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          toggleActions: "play none none reverse",
          ...options
        }
      }
    );
  }

  static staggeredReveal(elements: string | Element | Element[], options = {}) {
    if (typeof window === 'undefined') return;

    return gsap.fromTo(elements,
      {
        y: 60,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: elements,
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...options
        }
      }
    );
  }

  static parallaxMove(elements: string | Element | Element[], speed = 0.5) {
    if (typeof window === 'undefined') return;

    return gsap.to(elements, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: elements,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }
}

// Page transition animations
export class PageTransitions {
  static fadeIn(duration = 0.6) {
    if (typeof window === 'undefined') return;

    return gsap.fromTo("main", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration,
        ease: "power2.out"
      }
    );
  }

  static slideUp(duration = 0.8) {
    if (typeof window === 'undefined') return;

    return gsap.fromTo("main",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: "power3.out"
      }
    );
  }

  static architecturalReveal(duration = 1.0) {
    if (typeof window === 'undefined') return;

    const tl = gsap.timeline();
    
    tl.fromTo("main",
      { opacity: 0, clipPath: "inset(100% 0 0 0)" },
      { 
        opacity: 1, 
        clipPath: "inset(0% 0 0 0)",
        duration,
        ease: "power3.out"
      }
    );

    return tl;
  }
}

// Micro-interaction utilities
export class MicroAnimations {
  static buttonHover(element: string | Element) {
    if (typeof window === 'undefined') return;

    const btn = typeof element === 'string' ? document.querySelector(element) : element;
    if (!btn) return;

    const tl = gsap.timeline({ paused: true });
    
    tl.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(btn, {
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      duration: 0.3,
      ease: "power2.out"
    }, 0);

    btn.addEventListener('mouseenter', () => tl.play());
    btn.addEventListener('mouseleave', () => tl.reverse());

    return tl;
  }

  static cardHover(element: string | Element) {
    if (typeof window === 'undefined') return;

    const card = typeof element === 'string' ? document.querySelector(element) : element;
    if (!card) return;

    const tl = gsap.timeline({ paused: true });
    
    tl.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out"
    })
    .to(card, {
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      duration: 0.4,
      ease: "power2.out"
    }, 0);

    card.addEventListener('mouseenter', () => tl.play());
    card.addEventListener('mouseleave', () => tl.reverse());

    return tl;
  }

  static textReveal(element: string | Element, delay = 0) {
    if (typeof window === 'undefined') return;

    return gsap.fromTo(element,
      {
        opacity: 0,
        y: 30,
        clipPath: "inset(100% 0 0 0)"
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
        duration: 1.0,
        delay,
        ease: "power3.out"
      }
    );
  }

  static countUp(element: string | Element, endValue: number, duration = 2.0) {
    if (typeof window === 'undefined') return;

    const target = typeof element === 'string' ? document.querySelector(element) : element;
    if (!target) return;

    const obj = { value: 0 };
    
    return gsap.to(obj, {
      value: endValue,
      duration,
      ease: "power2.out",
      onUpdate: function() {
        if (target.textContent !== null) {
          target.textContent = Math.round(obj.value).toString();
        }
      },
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }
}

// Cleanup utility
export const cleanupAnimations = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf("*");
  }
};

// Initialize animations on mount
export const initializeAnimations = () => {
  if (typeof window === 'undefined') return;
  
  ScrollAnimations.init();
  
  // Set default GSAP settings for consistent performance
  gsap.defaults({
    duration: 1,
    ease: "power2.out"
  });
};
