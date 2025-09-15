"use client";

import { useCallback, useState } from 'react'
import { HotspotItem } from '@/types/phase3'

interface TooltipPosition {
  x: number
  y: number
}

export const useImageHotspots = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ x: 0, y: 0 })
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotItem | null>(null)

  const calculateTooltipPosition = useCallback((element: HTMLElement, event: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const tooltipWidth = 250 // Approximate tooltip width
    const tooltipHeight = 80 // Approximate tooltip height
    const offset = 15

    let x = event.clientX - rect.left
    let y = event.clientY - rect.top

    // Adjust for viewport boundaries
    if (x + tooltipWidth > rect.width) {
      x = x - tooltipWidth - offset
    } else {
      x = x + offset
    }

    if (y - tooltipHeight < 0) {
      y = y + offset
    } else {
      y = y - tooltipHeight - offset
    }

    return { x, y }
  }, [])

  const handleHotspotHover = useCallback((hotspot: HotspotItem, event: MouseEvent) => {
    if (!event.target) return
    
    const target = event.target as HTMLElement
    const container = target.closest('.image-hotspots') as HTMLElement
    if (!container) return

    setActiveHotspot(hotspot.id)
    setShowTooltip(true)
    
    const position = calculateTooltipPosition(container, event)
    setTooltipPosition(position)
  }, [calculateTooltipPosition])

  const handleHotspotLeave = useCallback(() => {
    setActiveHotspot(null)
    setShowTooltip(false)
  }, [])

  const handleHotspotClick = useCallback((hotspot: HotspotItem) => {
    setSelectedHotspot(hotspot)
    setShowTooltip(false)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedHotspot(null)
  }, [])

  const initializeHotspots = useCallback((container: HTMLElement, hotspots: HotspotItem[]) => {
    if (!container) return

    // Add keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedHotspot && event.key === 'Escape') {
        closeModal()
      }
    }

    // Add touch support for mobile
    const handleTouchStart = (event: TouchEvent) => {
      const target = event.target as HTMLElement
      if (target.classList.contains('hotspot-dot')) {
        event.preventDefault()
        const hotspotId = target.getAttribute('data-hotspot-id')
        const hotspot = hotspots.find(h => h.id === hotspotId)
        if (hotspot) {
          handleHotspotClick(hotspot)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    container.addEventListener('touchstart', handleTouchStart, { passive: false })

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      container.removeEventListener('touchstart', handleTouchStart)
    }
  }, [selectedHotspot, closeModal, handleHotspotClick])

  return {
    initializeHotspots,
    activeHotspot,
    showTooltip,
    tooltipPosition,
    handleHotspotClick,
    handleHotspotHover,
    handleHotspotLeave,
    selectedHotspot,
    closeModal
  }
}

export default useImageHotspots

