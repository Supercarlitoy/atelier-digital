"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

interface AnimatedTextProps {
  children: React.ReactNode;
  animation?: 'typewriter' | 'fadeInWords' | 'slideUpLines' | 'splitChars';
  className?: string;
  delay?: number;
  stagger?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  animation = 'fadeInWords',
  className,
  delay = 0,
  stagger = 0.05
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || typeof window === 'undefined') return;

    const element = textRef.current;
    const text = element.textContent || '';

    let animation_timeline: gsap.core.Timeline | undefined;

    switch (animation) {
      case 'typewriter':
        gsap.set(element, { opacity: 1 });
        animation_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        animation_timeline.from(element, {
          duration: text.length * 0.05,
          ease: "none",
          delay,
          text: {
            value: "",
            delimiter: ""
          }
        });
        break;

      case 'fadeInWords':
        // Split text into words
        element.innerHTML = text.replace(/\S+/g, '<span class="word">$&</span>');
        const words = element.querySelectorAll('.word');
        
        gsap.set(words, { opacity: 0, y: 20 });
        animation_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        animation_timeline.to(words, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          stagger: stagger,
          ease: "power2.out"
        });
        break;

      case 'slideUpLines':
        // Split text into lines
        const lines = text.split('\n');
        element.innerHTML = lines.map(line => `<div class="line overflow-hidden"><span>${line}</span></div>`).join('');
        const lineSpans = element.querySelectorAll('.line span');
        
        gsap.set(lineSpans, { y: '100%' });
        animation_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        animation_timeline.to(lineSpans, {
          y: '0%',
          duration: 0.8,
          delay,
          stagger: stagger * 2,
          ease: "power3.out"
        });
        break;

      case 'splitChars':
        // Split text into characters
        element.innerHTML = text.replace(/\S/g, '<span class="char">$&</span>');
        const chars = element.querySelectorAll('.char');
        
        gsap.set(chars, { opacity: 0, rotationY: 90, transformOrigin: "center" });
        animation_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        animation_timeline.to(chars, {
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          delay,
          stagger: stagger,
          ease: "back.out(1.7)"
        });
        break;
    }

    return () => {
      if (animation_timeline) {
        animation_timeline.kill();
      }
    };
  }, [animation, delay, stagger]);

  return (
    <div ref={textRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
};

export default AnimatedText;

