"use client";

import { usePageTransition } from '../../hooks/use-gsap-animations';

interface PageTransitionMountProps {
  type?: 'fadeIn' | 'slideUp' | 'architecturalReveal';
}

const PageTransitionMount = ({ type = 'architecturalReveal' }: PageTransitionMountProps) => {
  usePageTransition(type);
  return null;
};

export default PageTransitionMount;

