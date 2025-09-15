'use client'

import React, { useEffect, useRef } from 'react'
import { useInteractiveCursor } from '@/hooks/use-interactive-cursor'

interface InteractiveCursorProps {
  className?: string
  disabled?: boolean
}

export const InteractiveCursor: React.FC<InteractiveCursorProps> = ({ 
  className = '',
  disabled = false 
}) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const { initializeCursor, isTouch } = useInteractiveCursor()

  useEffect(() => {
    if (disabled || isTouch) return

    const cleanup = initializeCursor(cursorRef.current!)
    return cleanup
  }, [disabled, isTouch, initializeCursor])

  // Don't render on touch devices or when disabled
  if (disabled || isTouch) return null

  return (
    <div
      ref={cursorRef}
      className={`interactive-cursor ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="cursor-dot" />
      <div className="cursor-outline" />
    </div>
  )
}

export default InteractiveCursor

