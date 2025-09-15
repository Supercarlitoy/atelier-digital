
"use client";

import React from 'react';
import { useCountAnimation } from '../../hooks/use-gsap-animations';
import { cn } from '../../lib/utils';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  duration = 2.0,
  className,
  prefix = '',
  suffix = ''
}) => {
  const ref = useCountAnimation(endValue, duration);

  return (
    <span className={cn("font-bold", className)}>
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
