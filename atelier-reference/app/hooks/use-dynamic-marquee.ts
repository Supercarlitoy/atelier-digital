
'use client'

import { useCallback, useEffect, useState } from 'react'

interface MarqueeOptions {
  speed: number
  direction: 'left' | 'right'
  pauseOnHover: boolean
}

export const useDynamicMarquee = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const initializeMarquee = useCallback((element: HTMLElement, options: MarqueeOptions) => {
    if (!element || isReducedMotion) return

    const { speed, direction, pauseOnHover } = options
    const content = element.querySelector('.marquee-content') as HTMLElement
    
    if (!content) return

    let animationId: number
    let startTime: number
    let isPaused = false
    let pausedTime = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime

      const elapsed = isPaused ? pausedTime : currentTime - startTime
      const contentWidth = content.offsetWidth / 2 // Divide by 2 because we duplicate content
      
      // Calculate position based on speed and direction
      const distance = (elapsed * speed) / 1000
      let translateX = direction === 'left' ? -distance : distance
      
      // Reset position for seamless loop
      if (direction === 'left' && Math.abs(translateX) >= contentWidth) {
        startTime = currentTime
        translateX = 0
      } else if (direction === 'right' && translateX >= contentWidth) {
        startTime = currentTime
        translateX = 0
      }

      content.style.transform = `translate3d(${translateX}px, 0, 0)`
      
      if (!isPaused) {
        animationId = requestAnimationFrame(animate)
      }
    }

    const handleMouseEnter = () => {
      if (pauseOnHover) {
        isPaused = true
        pausedTime = performance.now() - startTime
        element.classList.add('paused')
      }
    }

    const handleMouseLeave = () => {
      if (pauseOnHover && isPaused) {
        isPaused = false
        startTime = performance.now() - pausedTime
        element.classList.remove('paused')
        animationId = requestAnimationFrame(animate)
      }
    }

    // Add event listeners
    if (pauseOnHover) {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    // Start animation
    animationId = requestAnimationFrame(animate)

    // Cleanup function
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      
      if (pauseOnHover) {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isReducedMotion])

  return {
    initializeMarquee,
    isReducedMotion
  }
}
