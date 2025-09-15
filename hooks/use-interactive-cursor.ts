"use client";

import { useCallback, useEffect, useMemo, useRef } from 'react'

type Cleanup = () => void

export const useInteractiveCursor = () => {
  const isTouch = useMemo(() => {
    if (typeof window === 'undefined') return false
    const coarse = window.matchMedia?.('(hover: none) and (pointer: coarse)')
    return coarse?.matches || 'ontouchstart' in window
  }, [])

  const lastMove = useRef<number>(0)

  const initializeCursor = useCallback((el: HTMLDivElement): Cleanup => {
    if (!el || typeof window === 'undefined') return () => {}

    let rafId: number | null = null
    let x = 0
    let y = 0
    let visible = false

    const dot = el.querySelector('.cursor-dot') as HTMLElement | null
    const outline = el.querySelector('.cursor-outline') as HTMLElement | null

    const setPos = (nx: number, ny: number) => {
      x = nx
      y = ny
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMove = (e: MouseEvent) => {
      lastMove.current = performance.now()
      if (!visible) {
        visible = true
        el.classList.add('active')
      }
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => setPos(e.clientX, e.clientY))
    }

    const onEnterInteractive = () => {
      el.classList.add('hovering')
    }
    const onLeaveInteractive = () => {
      el.classList.remove('hovering')
    }

    const addHoverListeners = () => {
      document.querySelectorAll<HTMLElement>(
        'a, button, [role="button"], .is-interactive'
      ).forEach((node) => {
        node.addEventListener('mouseenter', onEnterInteractive)
        node.addEventListener('mouseleave', onLeaveInteractive)
      })
    }

    const removeHoverListeners = () => {
      document.querySelectorAll<HTMLElement>(
        'a, button, [role="button"], .is-interactive'
      ).forEach((node) => {
        node.removeEventListener('mouseenter', onEnterInteractive)
        node.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    addHoverListeners()

    // Cleanup
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      removeHoverListeners()
      el.classList.remove('active', 'hovering')
      if (dot) dot.removeAttribute('style')
      if (outline) outline.removeAttribute('style')
    }
  }, [])

  // Ensure listeners are cleaned up when unmounting all consumers
  useEffect(() => {
    return () => {}
  }, [])

  return { initializeCursor, isTouch }
}

export default useInteractiveCursor

