"use client";

import React from 'react';
import { useParallax } from '../../hooks/use-gsap-animations';
import { cn } from '../../lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className
}) => {
  const ref = useParallax(speed);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
};

export default ParallaxSection;

