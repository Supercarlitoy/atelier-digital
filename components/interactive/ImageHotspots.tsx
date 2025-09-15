'use client'

import React, { useRef, useEffect } from 'react'
import { useImageHotspots } from '@/hooks/use-image-hotspots'
import { HotspotItem } from '@/types/phase3'

interface ImageHotspotsProps {
  imageSrc: string
  imageAlt: string
  hotspots: HotspotItem[]
  className?: string
  aspectRatio?: string
}

export const ImageHotspots: React.FC<ImageHotspotsProps> = ({
  imageSrc,
  imageAlt,
  hotspots,
  className = '',
  aspectRatio = 'aspect-video'
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { 
    initializeHotspots, 
    activeHotspot, 
    showTooltip, 
    tooltipPosition,
    handleHotspotClick,
    handleHotspotHover,
    handleHotspotLeave,
    selectedHotspot,
    closeModal
  } = useImageHotspots()

  useEffect(() => {
    if (!containerRef.current) return
    
    const cleanup = initializeHotspots(containerRef.current, hotspots)
    return cleanup
  }, [hotspots, initializeHotspots])

  return (
    <>
      <div 
        ref={containerRef}
        className={`image-hotspots ${aspectRatio} ${className}`}
      >
        {/* Main Image */}
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="hotspots-image"
        />

        {/* Hotspot Dots */}
        {hotspots.map((hotspot) => (
          <button
            key={hotspot.id}
            className={`hotspot-dot ${activeHotspot === hotspot.id ? 'active' : ''}`}
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`
            }}
            onClick={() => handleHotspotClick(hotspot)}
            onMouseEnter={(e) => handleHotspotHover(hotspot, e.nativeEvent)}
            onMouseLeave={handleHotspotLeave}
            aria-label={`View details: ${hotspot.title}`}
          >
            <span className="hotspot-pulse" />
            <span className="hotspot-inner" />
          </button>
        ))}

        {/* Tooltip */}
        {showTooltip && activeHotspot && (
          <div 
            className="hotspot-tooltip"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y
            }}
          >
            {(() => {
              const hotspot = hotspots.find(h => h.id === activeHotspot)
              return hotspot ? (
                <>
                  <h4 className="tooltip-title">{hotspot.title}</h4>
                  <p className="tooltip-description">{hotspot.description}</p>
                </>
              ) : null
            })()}
          </div>
        )}
      </div>

      {/* Modal for detailed view */}
      {selectedHotspot && (
        <div className="hotspot-modal-overlay" onClick={closeModal}>
          <div className="hotspot-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="modal-content">
              <h3 className="modal-title">{selectedHotspot.title}</h3>
              <p className="modal-description">{selectedHotspot.description}</p>
              
              {selectedHotspot.details && (
                <div className="modal-details">
                  {selectedHotspot.details.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <strong>{detail.label}:</strong> {detail.value}
                    </div>
                  ))}
                </div>
              )}
              
              {selectedHotspot.image && (
                <div className="modal-image">
                  <img 
                    src={selectedHotspot.image} 
                    alt={selectedHotspot.title}
                    className="detail-image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageHotspots

