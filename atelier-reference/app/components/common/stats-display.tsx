

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateValues();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateValues = () => {
    stats.forEach((stat) => {
      let startValue = 0;
      const increment = stat.value / (animationDuration / 16); // 60fps
      
      const timer = setInterval(() => {
        startValue += increment;
        
        if (startValue >= stat.value) {
          startValue = stat.value;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => ({
          ...prev,
          [stat.id]: Math.floor(startValue)
        }));
      }, 16);
    });
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
