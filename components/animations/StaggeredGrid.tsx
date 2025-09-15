"use client";

import React from 'react';
import { useStaggeredChildren } from '../../hooks/use-gsap-animations';
import { cn } from '../../lib/utils';

interface StaggeredGridProps {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
  staggerAmount?: number;
  gridCols?: 1 | 2 | 3 | 4;
}

const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className,
  itemSelector = '*',
  staggerAmount = 0.15,
  gridCols = 3
}) => {
  const ref = useStaggeredChildren(itemSelector, {}, staggerAmount);

  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  } as const;

  return (
    <div 
      ref={ref} 
      className={cn(
        "grid gap-6",
        gridClass[gridCols],
        className
      )}
    >
      {children}
    </div>
  );
};

export default StaggeredGrid;

