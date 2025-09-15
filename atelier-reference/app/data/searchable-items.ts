
/**
 * Searchable Items Data - Phase 3A Support
 * Sample data for LiveSearch functionality
 * Part of Atelier Agency Theme - Premium Digital Product
 */

import { SearchableItem } from '../types/phase3';

/**
 * Professional sample data showcasing various content types
 * Real-world ready data structure for CMS integration
 */
export const searchableItems: SearchableItem[] = [
  // Featured Projects
  {
    id: 'project-1',
    title: 'Architectural Portfolio Website',
    description: 'Modern architecture firm portfolio with 3D model integration and interactive galleries.',
    category: 'project',
    url: '/work/architectural-portfolio',
    tags: ['architecture', 'portfolio', '3d-models', 'interactive'],
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Luxury Hotel Brand Identity',
    description: 'Complete brand identity and digital experience for premium hospitality group.',
    category: 'project',
    url: '/work/luxury-hotel-brand',
    tags: ['branding', 'hospitality', 'luxury', 'digital-experience'],
    featured: true,
  },
  {
    id: 'project-3',
    title: 'SaaS Dashboard Design System',
    description: 'Comprehensive design system and dashboard interface for B2B software platform.',
    category: 'project',
    url: '/work/saas-dashboard',
    tags: ['saas', 'dashboard', 'design-system', 'b2b'],
    featured: true,
  },
  {
    id: 'project-4',
    title: 'E-commerce Platform Redesign',
    description: 'Complete redesign and optimization of high-traffic e-commerce platform.',
    category: 'project',
    url: '/work/ecommerce-redesign',
    tags: ['ecommerce', 'optimization', 'conversion', 'ux'],
  },
  {
    id: 'project-5',
    title: 'Medical Device Interface',
    description: 'User interface design for critical medical diagnostic equipment.',
    category: 'project',
    url: '/work/medical-device',
    tags: ['medical', 'interface', 'healthcare', 'critical'],
  },

  // Team Members
  {
    id: 'team-1',
    title: 'Sarah Chen',
    description: 'Creative Director with 15 years experience in luxury brand design.',
    category: 'team',
    url: '/about#sarah-chen',
    tags: ['creative-director', 'branding', 'luxury', 'strategy'],
    featured: true,
  },
  {
    id: 'team-2',
    title: 'Marcus Rodriguez',
    description: 'Lead Developer specializing in performance optimization and modern web technologies.',
    category: 'team',
    url: '/about#marcus-rodriguez',
    tags: ['developer', 'performance', 'react', 'optimization'],
  },
  {
    id: 'team-3',
    title: 'Elena Kowalski',
    description: 'UX Researcher focused on user behavior analysis and conversion optimization.',
    category: 'team',
    url: '/about#elena-kowalski',
    tags: ['ux-research', 'analytics', 'conversion', 'behavior'],
  },
  {
    id: 'team-4',
    title: 'David Park',
    description: 'Motion Designer creating premium animations and interactive experiences.',
    category: 'team',
    url: '/about#david-park',
    tags: ['motion', 'animation', 'interactive', 'premium'],
  },

  // Pages
  {
    id: 'page-home',
    title: 'Home',
    description: 'Discover premium website blueprints and digital architecture solutions.',
    category: 'page',
    url: '/',
    tags: ['home', 'overview', 'premium', 'blueprints'],
    featured: true,
  },
  {
    id: 'page-work',
    title: 'Our Work',
    description: 'Portfolio of premium projects and client success stories.',
    category: 'page',
    url: '/work',
    tags: ['portfolio', 'projects', 'case-studies'],
  },
  {
    id: 'page-about',
    title: 'About Us',
    description: 'Meet our team of digital craftspeople and learn our story.',
    category: 'page',
    url: '/about',
    tags: ['team', 'story', 'culture', 'expertise'],
  },
  {
    id: 'page-contact',
    title: 'Contact',
    description: 'Get in touch to discuss your premium digital project.',
    category: 'page',
    url: '/contact',
    tags: ['contact', 'consultation', 'inquiry'],
  },
  {
    id: 'page-services',
    title: 'Services',
    description: 'Comprehensive digital services from strategy to implementation.',
    category: 'page',
    url: '/services',
    tags: ['services', 'strategy', 'design', 'development'],
  },

  // Services
  {
    id: 'service-1',
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategy and market positioning for premium brands.',
    category: 'service',
    url: '/services#digital-strategy',
    tags: ['strategy', 'positioning', 'market-analysis', 'branding'],
  },
  {
    id: 'service-2',
    title: 'Brand Identity Design',
    description: 'Complete brand identity systems that elevate your market presence.',
    category: 'service',
    url: '/services#brand-identity',
    tags: ['branding', 'identity', 'logo', 'visual-system'],
  },
  {
    id: 'service-3',
    title: 'Web Development',
    description: 'Custom web development with focus on performance and user experience.',
    category: 'service',
    url: '/services#web-development',
    tags: ['development', 'performance', 'custom', 'modern'],
  },
  {
    id: 'service-4',
    title: 'UX/UI Design',
    description: 'User-centered design that drives engagement and conversions.',
    category: 'service',
    url: '/services#ux-ui-design',
    tags: ['ux', 'ui', 'user-experience', 'interface'],
  },
  {
    id: 'service-5',
    title: 'Motion Design',
    description: 'Premium animations and micro-interactions that enhance user experience.',
    category: 'service',
    url: '/services#motion-design',
    tags: ['motion', 'animation', 'micro-interactions', 'premium'],
  },
  {
    id: 'service-6',
    title: 'Performance Optimization',
    description: 'Technical optimization for speed, SEO, and conversion rates.',
    category: 'service',
    url: '/services#performance',
    tags: ['performance', 'optimization', 'seo', 'speed'],
  },

  // Additional searchable content
  {
    id: 'methodology',
    title: 'Digital Stonemasonry Methodology',
    description: 'Our unique approach to building premium digital experiences.',
    category: 'page',
    url: '/methodology',
    tags: ['methodology', 'process', 'stone-masonry', 'craftsmanship'],
  },
  {
    id: 'case-study-1',
    title: 'Fortune 500 Digital Transformation',
    description: 'Complete digital transformation for multinational corporation.',
    category: 'project',
    url: '/work/fortune-500-transformation',
    tags: ['enterprise', 'transformation', 'fortune-500', 'scale'],
  },
  {
    id: 'insights',
    title: 'Design Insights',
    description: 'Latest thoughts and insights on premium digital design.',
    category: 'page',
    url: '/insights',
    tags: ['insights', 'blog', 'thoughts', 'industry'],
  },
];

/**
 * Get featured items for empty search state
 */
export const getFeaturedItems = (): SearchableItem[] => {
  return searchableItems.filter(item => item.featured);
};

/**
 * Get items by category for filtering
 */
export const getItemsByCategory = (category: string): SearchableItem[] => {
  return searchableItems.filter(item => item.category === category);
};

/**
 * Get popular search tags
 */
export const getPopularTags = (): string[] => {
  const allTags = searchableItems.flatMap(item => item.tags || []);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([tag]) => tag);
};

export default searchableItems;
