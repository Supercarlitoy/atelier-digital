"use client";

import React from 'react';
import { useMicroAnimation } from '../../hooks/use-gsap-animations';
import Button from '../common/button';
import { cn } from '../../lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'text';
  onClick?: () => void;
  href?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  variant = 'primary',
  onClick,
  href
}) => {
  const ref = useMicroAnimation('buttonHover');

  return (
    <div ref={ref}>
      <Button
        variant={variant}
        onClick={onClick}
        href={href}
        className={cn("transform transition-all duration-300", className)}
      >
        {children}
      </Button>
    </div>
  );
};

export default AnimatedButton;
