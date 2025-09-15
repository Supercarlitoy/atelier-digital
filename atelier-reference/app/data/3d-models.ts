
import { Model3D } from '../types/3d-viewer';

export const sample3DModels: Model3D[] = [
  {
    id: 'modern-house',
    name: 'Modern House',
    description: 'Contemporary residential architecture with clean lines and large windows.',
    modelPath: '/models/modern-house.glb', // Placeholder path
    thumbnailPath: '/images/3d-thumbnails/modern-house.jpg',
    category: 'architecture',
    tags: ['modern', 'residential', 'contemporary', 'glass'],
    scale: 1,
    position: [0, -1, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 'office-chair',
    name: 'Executive Office Chair',
    description: 'Ergonomic executive office chair with premium leather upholstery.',
    modelPath: '/models/office-chair.glb',
    thumbnailPath: '/images/3d-thumbnails/office-chair.jpg',
    category: 'furniture',
    tags: ['furniture', 'office', 'chair', 'leather', 'ergonomic'],
    scale: 1.2,
    position: [0, -0.5, 0],
    rotation: [0, Math.PI / 4, 0]
  },
  {
    id: 'smartphone',
    name: 'Smartphone Pro',
    description: 'Latest generation smartphone with advanced camera system.',
    modelPath: '/models/smartphone.glb',
    thumbnailPath: '/images/3d-thumbnails/smartphone.jpg',
    category: 'product',
    tags: ['technology', 'smartphone', 'mobile', 'device'],
    scale: 2,
    position: [0, 0, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 'abstract-sculpture',
    name: 'Digital Sculpture',
    description: 'Abstract digital sculpture representing the intersection of art and technology.',
    modelPath: '/models/abstract-sculpture.glb',
    thumbnailPath: '/images/3d-thumbnails/abstract-sculpture.jpg',
    category: 'abstract',
    tags: ['art', 'sculpture', 'abstract', 'digital'],
    scale: 1.5,
    position: [0, 0, 0],
    rotation: [0, Math.PI / 6, 0]
  },
  {
    id: 'coffee-machine',
    name: 'Premium Coffee Machine',
    description: 'Professional-grade espresso machine for the perfect cup.',
    modelPath: '/models/coffee-machine.glb',
    thumbnailPath: '/images/3d-thumbnails/coffee-machine.jpg',
    category: 'product',
    tags: ['appliance', 'coffee', 'kitchen', 'premium'],
    scale: 1,
    position: [0, -0.8, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 'pavilion',
    name: 'Garden Pavilion',
    description: 'Minimalist garden pavilion with sustainable materials.',
    modelPath: '/models/pavilion.glb',
    thumbnailPath: '/images/3d-thumbnails/pavilion.jpg',
    category: 'architecture',
    tags: ['architecture', 'pavilion', 'sustainable', 'minimal'],
    scale: 0.8,
    position: [0, -1.5, 0],
    rotation: [0, Math.PI / 8, 0]
  }
];

export const get3DModelById = (id: string): Model3D | undefined => {
  return sample3DModels.find(model => model.id === id);
};

export const get3DModelsByCategory = (category: Model3D['category']): Model3D[] => {
  return sample3DModels.filter(model => model.category === category);
};

export const getRandomModel = (): Model3D => {
  const randomIndex = Math.floor(Math.random() * sample3DModels.length);
  return sample3DModels[randomIndex];
};
