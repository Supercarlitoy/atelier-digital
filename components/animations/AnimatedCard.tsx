"use client";

import React from 'react';
import { useMicroAnimation } from '../../hooks/use-gsap-animations';
import { cn } from '../../lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  hover = true
}) => {
  const ref = useMicroAnimation(hover ? 'cardHover' : 'textReveal');

  return (
    <div ref={ref} className={cn("transition-all duration-300", className)}>
      {children}
    </div>
  );
};

export default AnimatedCard;

