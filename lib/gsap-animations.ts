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

  static staggeredReveal(elements: Element[] | string, options = {}) {
    if (typeof window === 'undefined') return;

    const targets = Array.isArray(elements) ? elements : Array.from(document.querySelectorAll(elements as string));
    return gsap.fromTo(targets,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: targets[0] || elements as any,
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...options
        }
      }
    );
  }

  static parallaxMove(element: Element, speed = 0.5) {
    if (typeof window === 'undefined') return;

    return gsap.to(element, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        scrub: true
      }
    });
  }
}

// Micro-interactions
export class MicroAnimations {
  static buttonHover(element: Element) {
    if (typeof window === 'undefined') return;
    return gsap.fromTo(element, { scale: 1 }, { scale: 1.02, duration: 0.2, ease: 'power2.out', paused: true });
  }

  static cardHover(element: Element) {
    if (typeof window === 'undefined') return;
    return gsap.fromTo(element, { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }, { y: -6, duration: 0.3, ease: 'power2.out' });
  }

  static textReveal(element: Element, delay = 0) {
    if (typeof window === 'undefined') return;
    return gsap.fromTo(element, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay, ease: 'power2.out' });
  }

  static countUp(element: Element, endValue: number, duration = 2.0) {
    if (typeof window === 'undefined') return;
    const obj = { val: 0 };
    return gsap.to(obj, {
      val: endValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        (element as HTMLElement).textContent = Math.floor(obj.val).toString();
      }
    });
  }
}

// Page transitions
export class PageTransitions {
  static fadeIn() {
    if (typeof window === 'undefined') return;
    return gsap.fromTo('main', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' });
  }

  static slideUp() {
    if (typeof window === 'undefined') return;
    return gsap.fromTo('main', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
  }

  static architecturalReveal() {
    if (typeof window === 'undefined') return;
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'linear-gradient(135deg, rgba(194,168,120,0.15), rgba(25,25,25,0.85))';
    overlay.style.zIndex = '9999';
    overlay.style.pointerEvents = 'none';
    overlay.setAttribute('data-transition-overlay', 'true');
    document.body.appendChild(overlay);
    
    const tl = gsap.timeline({ onComplete: () => overlay.remove() });
    tl.fromTo(overlay, { clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'power3.inOut' });
    return tl;
  }
}

export const initializeAnimations = () => {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
};

export const cleanupAnimations = () => {
  if (typeof window === 'undefined') return;
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
