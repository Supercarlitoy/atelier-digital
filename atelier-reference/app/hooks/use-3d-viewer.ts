
'use client';

import { useState, useCallback, useRef } from 'react';
import { Model3D, ViewerSettings } from '../types/3d-viewer';

const DEFAULT_SETTINGS: ViewerSettings = {
  enableZoom: true,
  enablePan: true,
  enableRotate: true,
  autoRotate: false,
  autoRotateSpeed: 2,
  enableDamping: true,
  dampingFactor: 0.05,
  minDistance: 2,
  maxDistance: 20,
  backgroundColor: '#f8f9fa',
  showGrid: false,
  showAxes: false,
  environmentPreset: 'studio'
};

interface Use3DViewerState {
  isLoading: boolean;
  error: string | null;
  currentModel: Model3D | null;
  settings: ViewerSettings;
  isFullscreen: boolean;
}

export const use3DViewer = (initialModel?: Model3D) => {
  const [state, setState] = useState<Use3DViewerState>({
    isLoading: false,
    error: null,
    currentModel: initialModel || null,
    settings: DEFAULT_SETTINGS,
    isFullscreen: false
  });

  const viewerRef = useRef<HTMLDivElement>(null);

  const loadModel = useCallback((model: Model3D) => {
    setState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      currentModel: model
    }));

    // Simulate model loading with timeout
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isLoading: false
      }));
    }, 1000);
  }, []);

  const updateSettings = useCallback((newSettings: Partial<ViewerSettings>) => {
    setState(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  }, []);

  const toggleFullscreen = useCallback(() => {
    setState(prev => ({
      ...prev,
      isFullscreen: !prev.isFullscreen
    }));
  }, []);

  const handleError = useCallback((error: Error) => {
    setState(prev => ({
      ...prev,
      isLoading: false,
      error: error.message
    }));
  }, []);

  const resetViewer = useCallback(() => {
    setState(prev => ({
      ...prev,
      isLoading: false,
      error: null,
      settings: DEFAULT_SETTINGS
    }));
  }, []);

  return {
    ...state,
    viewerRef,
    loadModel,
    updateSettings,
    toggleFullscreen,
    handleError,
    resetViewer
  };
};
