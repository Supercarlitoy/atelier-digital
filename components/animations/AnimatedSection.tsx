"use client";

import React from 'react';
import { useScrollAnimation } from '../../hooks/use-gsap-animations';
import { cn } from '../../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'slideInFromLeft' | 'slideInFromRight' | 'staggeredReveal';
  className?: string;
  delay?: number;
  options?: Record<string, any>;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  className,
  options = {}
}) => {
  const ref = useScrollAnimation(animation, options);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default AnimatedSection;

