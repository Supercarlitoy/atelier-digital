"use client";

import { useState, useEffect, useRef } from 'react';

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface StatsDisplayProps {
  stats: Stat[];
  animationDuration?: number;
}

const StatsDisplay = ({ stats, animationDuration = 2000 }: StatsDisplayProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (!prefersReduced) animateValues();
          else {
            // Set final values immediately
            const finalValues = stats.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {} as { [key: string]: number });
            setAnimatedValues(finalValues);
          }
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [isVisible, animationDuration, stats]);

  const animateValues = () => {
    const start = performance.now();
    const duration = Math.max(600, animationDuration);

    const frame = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const values = stats.reduce((acc, s) => {
        acc[s.id] = Math.floor(s.value * eased);
        return acc;
      }, {} as { [key: string]: number });
      setAnimatedValues(values);
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  return (
    <div ref={statsRef} className="stats-display">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-value">
              {stat.prefix}
              <span className="stat-number">
                {animatedValues[stat.id] || 0}
              </span>
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsDisplay;
