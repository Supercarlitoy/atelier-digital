'use client'

import React, { useRef, useEffect } from 'react'
import { useDynamicMarquee } from '@/hooks/use-dynamic-marquee'
import { MarqueeItem } from '@/types/phase3'

interface DynamicMarqueeProps {
  items: MarqueeItem[]
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
  itemClassName?: string
}

export const DynamicMarquee: React.FC<DynamicMarqueeProps> = ({
  items,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  itemClassName = ''
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const { initializeMarquee, isReducedMotion } = useDynamicMarquee()

  useEffect(() => {
    if (!marqueeRef.current) return

    const cleanup = initializeMarquee(marqueeRef.current, {
      speed,
      direction,
      pauseOnHover
    })

    return cleanup
  }, [speed, direction, pauseOnHover, initializeMarquee])

  // Fallback for reduced motion preferences
  if (isReducedMotion) {
    return (
      <div className={`dynamic-marquee static ${className}`}>
        <div className="marquee-content static">
          {items.slice(0, 3).map((item, index) => (
            <div key={`${item.id}-static-${index}`} className={`marquee-item ${itemClassName}`}>
              {item.type === 'text' && <span>{item.content}</span>}
              {item.type === 'logo' && (
                <img 
                  src={item.content} 
                  alt={item.alt || 'Client logo'} 
                  className="marquee-logo"
                />
              )}
              {item.type === 'testimonial' && (
                <blockquote className="marquee-quote">
                  "{item.content}"
                  {item.author && <cite>— {item.author}</cite>}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={marqueeRef}
      className={`dynamic-marquee ${className}`}
      data-direction={direction}
      data-speed={speed}
    >
      <div className="marquee-track">
        <div className="marquee-content">
          {/* First set of items */}
          {items.map((item, index) => (
            <div key={`${item.id}-1-${index}`} className={`marquee-item ${itemClassName}`}>
              {item.type === 'text' && <span>{item.content}</span>}
              {item.type === 'logo' && (
                <img 
                  src={item.content} 
                  alt={item.alt || 'Client logo'} 
                  className="marquee-logo"
                />
              )}
              {item.type === 'testimonial' && (
                <blockquote className="marquee-quote">
                  "{item.content}"
                  {item.author && <cite>— {item.author}</cite>}
                </blockquote>
              )}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <div key={`${item.id}-2-${index}`} className={`marquee-item ${itemClassName}`}>
              {item.type === 'text' && <span>{item.content}</span>}
              {item.type === 'logo' && (
                <img 
                  src={item.content} 
                  alt={item.alt || 'Client logo'} 
                  className="marquee-logo"
                />
              )}
              {item.type === 'testimonial' && (
                <blockquote className="marquee-quote">
                  "{item.content}"
                  {item.author && <cite>— {item.author}</cite>}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Fade edges */}
      <div className="marquee-fade marquee-fade-left" />
      <div className="marquee-fade marquee-fade-right" />
    </div>
  )
}

export default DynamicMarquee

