"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface ModelViewer3DProps {
  className?: string;
  poster?: string; // fallback image
  title?: string;
  style?: React.CSSProperties;
}

/**
 * Lightweight 3D-like viewer without external deps.
 * - Uses CSS 3D transforms and parallax on mouse move/touch
 * - Gracefully degrades to a static poster on reduced-motion
 * - Intentionally avoids three.js so it builds with current deps
 */
const ModelViewer3D: React.FC<ModelViewer3DProps> = ({
  className,
  poster = '/images/design-showcase.jpg',
  title = 'Interactive Model',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    setReducedMotion(!!mq?.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq?.addEventListener?.('change', onChange);
    return () => mq?.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    const maxTilt = 10; // degrees
    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = el.getBoundingClientRect();
      const point = 'touches' in e ? e.touches[0] : (e as MouseEvent);
      const x = (point.clientX - rect.left) / rect.width; // 0..1
      const y = (point.clientY - rect.top) / rect.height; // 0..1
      const tiltX = (0.5 - y) * maxTilt * 2; // invert Y for natural tilt
      const tiltY = (x - 0.5) * maxTilt * 2;
      el.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', onLeave, { passive: true });
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchmove', onMove as any);
      el.removeEventListener('touchend', onLeave as any);
    };
  }, [reducedMotion]);

  return (
    <div className={cn('model-viewer-3d', className)} style={style}>
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl border border-[var(--color-border)]"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 200ms ease-out',
          willChange: 'transform',
        }}
        aria-label={title}
      >
        <img
          src={poster}
          alt={title}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
        {/* Subtle reflective overlay for “premium” feel */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.06), transparent 40%, rgba(255,255,255,0.04))',
            mixBlendMode: 'soft-light',
          }}
        />
      </div>
      <div className="text-center mt-3 text-[var(--color-text)] text-sm">
        {reducedMotion ? 'Static preview (reduced motion enabled)' : 'Click and move to explore'}
      </div>
    </div>
  );
};

export default ModelViewer3D;

