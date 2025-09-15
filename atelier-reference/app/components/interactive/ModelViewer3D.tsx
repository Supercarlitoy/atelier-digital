
'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Html, useProgress } from '@react-three/drei';
import { Loader2, Maximize2, RotateCcw, Settings } from 'lucide-react';
import { Model3D, ModelViewerProps } from '../../types/3d-viewer';
import { use3DViewer } from '../../hooks/use-3d-viewer';

// Loading component for 3D models
function ModelLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin mb-2" />
        <div className="text-sm text-muted-foreground">
          Loading 3D Model... {Math.round(progress)}%
        </div>
        <div className="w-32 h-1 bg-muted rounded-full mt-2">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
}

// Simple 3D scene with basic geometry (placeholder for actual models)
function Scene({ model, settings }: { model: Model3D; settings: any }) {
  const meshRef = useRef<any>();

  return (
    <>
      {/* Basic lighting setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Environment map */}
      <Environment preset={settings.environmentPreset} />

      {/* Placeholder geometry - in real implementation, this would load actual 3D models */}
      <mesh ref={meshRef} position={model.position || [0, 0, 0]} scale={model.scale || 1}>
        {model.category === 'architecture' && (
          <boxGeometry args={[2, 3, 1.5]} />
        )}
        {model.category === 'product' && (
          <cylinderGeometry args={[1, 1, 2, 32]} />
        )}
        {model.category === 'furniture' && (
          <boxGeometry args={[1.5, 0.5, 2]} />
        )}
        {model.category === 'abstract' && (
          <icosahedronGeometry args={[1.2, 2]} />
        )}
        <meshStandardMaterial 
          color="#8b7355" 
          roughness={0.3} 
          metalness={0.1} 
        />
      </mesh>

      {/* Grid helper */}
      {settings.showGrid && (
        <gridHelper args={[20, 20, '#666666', '#888888']} />
      )}

      {/* Axes helper */}
      {settings.showAxes && (
        <axesHelper args={[2]} />
      )}
    </>
  );
}

// Control panel component
function ControlPanel({ 
  settings, 
  onSettingsChange, 
  onToggleFullscreen, 
  onReset 
}: {
  settings: any;
  onSettingsChange: (settings: any) => void;
  onToggleFullscreen: () => void;
  onReset: () => void;
}) {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2">
      <button
        onClick={onToggleFullscreen}
        className="p-2 bg-background/80 backdrop-blur-sm border rounded-lg hover:bg-background transition-colors"
        title="Toggle Fullscreen"
      >
        <Maximize2 className="w-4 h-4" />
      </button>
      
      <button
        onClick={onReset}
        className="p-2 bg-background/80 backdrop-blur-sm border rounded-lg hover:bg-background transition-colors"
        title="Reset View"
      >
        <RotateCcw className="w-4 h-4" />
      </button>

      <div className="relative group">
        <button className="p-2 bg-background/80 backdrop-blur-sm border rounded-lg hover:bg-background transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        
        {/* Settings dropdown - simplified for this implementation */}
        <div className="absolute right-0 top-full mt-1 bg-background border rounded-lg shadow-lg p-3 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="space-y-3">
            <label className="flex items-center justify-between text-sm">
              <span>Auto Rotate</span>
              <input
                type="checkbox"
                checked={settings.autoRotate}
                onChange={(e) => onSettingsChange({ autoRotate: e.target.checked })}
                className="ml-2"
              />
            </label>
            
            <label className="flex items-center justify-between text-sm">
              <span>Show Grid</span>
              <input
                type="checkbox"
                checked={settings.showGrid}
                onChange={(e) => onSettingsChange({ showGrid: e.target.checked })}
                className="ml-2"
              />
            </label>
            
            <label className="flex items-center justify-between text-sm">
              <span>Show Axes</span>
              <input
                type="checkbox"
                checked={settings.showAxes}
                onChange={(e) => onSettingsChange({ showAxes: e.target.checked })}
                className="ml-2"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

// Model info panel
function ModelInfo({ model }: { model: Model3D }) {
  return (
    <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border rounded-lg p-3 max-w-xs">
      <h3 className="font-semibold text-sm mb-1">{model.name}</h3>
      <p className="text-xs text-muted-foreground mb-2">{model.description}</p>
      <div className="flex flex-wrap gap-1">
        {model.tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Main 3D Model Viewer Component
export default function ModelViewer3D({ 
  model, 
  settings: propSettings = {},
  className = '',
  showControls = true,
  showModelInfo = true,
  onModelLoad,
  onError
}: ModelViewerProps) {
  const {
    isLoading,
    error,
    settings,
    isFullscreen,
    viewerRef,
    updateSettings,
    toggleFullscreen,
    resetViewer
  } = use3DViewer(model);

  const finalSettings = { ...settings, ...propSettings };

  React.useEffect(() => {
    if (model && onModelLoad) {
      onModelLoad(model);
    }
  }, [model, onModelLoad]);

  if (error) {
    return (
      <div className={`relative bg-muted rounded-lg flex items-center justify-center min-h-[400px] ${className}`}>
        <div className="text-center">
          <div className="text-destructive mb-2">Failed to load 3D model</div>
          <div className="text-sm text-muted-foreground">{error}</div>
          <button 
            onClick={resetViewer}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={viewerRef}
      className={`relative bg-gradient-to-br from-muted/50 to-muted rounded-lg overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50' : 'min-h-[400px]'
      } ${className}`}
    >
      <Canvas
        camera={{ position: [5, 5, 5], fov: 60 }}
        style={{ background: finalSettings.backgroundColor }}
      >
        <PerspectiveCamera makeDefault />
        
        <OrbitControls
          enableZoom={finalSettings.enableZoom}
          enablePan={finalSettings.enablePan}
          enableRotate={finalSettings.enableRotate}
          autoRotate={finalSettings.autoRotate}
          autoRotateSpeed={finalSettings.autoRotateSpeed}
          enableDamping={finalSettings.enableDamping}
          dampingFactor={finalSettings.dampingFactor}
          minDistance={finalSettings.minDistance}
          maxDistance={finalSettings.maxDistance}
        />

        <Suspense fallback={<ModelLoader />}>
          <Scene model={model} settings={finalSettings} />
        </Suspense>
      </Canvas>

      {showControls && (
        <ControlPanel
          settings={finalSettings}
          onSettingsChange={updateSettings}
          onToggleFullscreen={toggleFullscreen}
          onReset={resetViewer}
        />
      )}

      {showModelInfo && !isFullscreen && (
        <ModelInfo model={model} />
      )}

      {isLoading && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Initializing 3D Viewer...</div>
          </div>
        </div>
      )}
    </div>
  );
}
