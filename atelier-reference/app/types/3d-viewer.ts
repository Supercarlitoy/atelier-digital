
// 3D Model Viewer Type Definitions
export interface Model3D {
  id: string;
  name: string;
  description: string;
  modelPath: string;
  thumbnailPath?: string;
  category: 'architecture' | 'product' | 'furniture' | 'abstract';
  tags: string[];
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export interface ViewerSettings {
  enableZoom: boolean;
  enablePan: boolean;
  enableRotate: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  enableDamping: boolean;
  dampingFactor: number;
  minDistance: number;
  maxDistance: number;
  backgroundColor: string;
  showGrid: boolean;
  showAxes: boolean;
  environmentPreset: 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest' | 'apartment' | 'studio' | 'city' | 'park' | 'lobby';
}

export interface ModelViewerProps {
  model: Model3D;
  settings?: Partial<ViewerSettings>;
  className?: string;
  showControls?: boolean;
  showModelInfo?: boolean;
  onModelLoad?: (model: Model3D) => void;
  onError?: (error: Error) => void;
}
