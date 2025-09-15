
'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface CursorState {
  x: number
  y: number
  scale: number
  opacity: number
}

export const useInteractiveCursor = () => {
  const [isTouch, setIsTouch] = useState(false)
  const cursorStateRef = useRef<CursorState>({ x: 0, y: 0, scale: 1, opacity: 0 })
  const rafRef = useRef<number>()
  const isMovingRef = useRef(false)

  // Check for touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    
    checkTouch()
    window.addEventListener('resize', checkTouch)
    return () => window.removeEventListener('resize', checkTouch)
  }, [])

  const updateCursor = useCallback((element: HTMLElement) => {
    const state = cursorStateRef.current
    
    if (element) {
      // Smooth easing animation
      const dot = element.querySelector('.cursor-dot') as HTMLElement
      const outline = element.querySelector('.cursor-outline') as HTMLElement
      
      if (dot && outline) {
        dot.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`
        dot.style.opacity = state.opacity.toString()
        
        outline.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale * 0.8})`
        outline.style.opacity = (state.opacity * 0.6).toString()
      }
    }
  }, [])

  const animateCursor = useCallback((element: HTMLElement) => {
    const animate = () => {
      updateCursor(element)
      rafRef.current = requestAnimationFrame(() => animate())
    }
    animate()
  }, [updateCursor])

  const initializeCursor = useCallback((element: HTMLElement) => {
    if (!element || isTouch) return

    let isHovering = false
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const updatePosition = () => {
      currentX = lerp(currentX, targetX, 0.15)
      currentY = lerp(currentY, targetY, 0.15)
      
      cursorStateRef.current = {
        ...cursorStateRef.current,
        x: currentX,
        y: currentY
      }
      
      updateCursor(element)
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      
      if (!isMovingRef.current) {
        cursorStateRef.current = {
          ...cursorStateRef.current,
          opacity: 1
        }
        isMovingRef.current = true
      }
    }

    const handleMouseEnter = () => {
      cursorStateRef.current = {
        ...cursorStateRef.current,
        opacity: 1
      }
    }

    const handleMouseLeave = () => {
      cursorStateRef.current = {
        ...cursorStateRef.current,
        opacity: 0
      }
      isMovingRef.current = false
    }

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, [data-cursor="hover"]')) {
        isHovering = true
        cursorStateRef.current = {
          ...cursorStateRef.current,
          scale: 1.5,
          opacity: 0.8
        }
      }
    }

    const handleElementLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, [data-cursor="hover"]')) {
        isHovering = false
        cursorStateRef.current = {
          ...cursorStateRef.current,
          scale: 1,
          opacity: 1
        }
      }
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleElementHover)
    document.addEventListener('mouseout', handleElementLeave)

    // Start animation loop
    updatePosition()

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleElementHover)
      document.removeEventListener('mouseout', handleElementLeave)
    }
  }, [isTouch, updateCursor])

  return {
    initializeCursor,
    isTouch
  }
}
