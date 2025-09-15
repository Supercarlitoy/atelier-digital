/**
 * Sample hotspot data for Interactive Image components  
 * Atelier Agency Theme - Premium Digital Product
 */

import { HotspotItem } from '@/types/phase3'

export const architectureHotspots: HotspotItem[] = [
  {
    id: 'arch-1',
    x: 25,
    y: 40,
    title: 'Foundation Structure',
    description: 'Reinforced concrete foundation with modern thermal isolation technology.',
    details: [
      { label: 'Material', value: 'Reinforced Concrete C30/37' },
      { label: 'Depth', value: '2.5 meters' },
      { label: 'Insulation', value: 'XPS Thermal Boards' },
      { label: 'Completion', value: 'March 2024' }
    ],
    image: '/images/details/foundation-detail.jpg',
    category: 'structural'
  },
  {
    id: 'arch-2',
    x: 65,
    y: 30,
    title: 'Glass Facade System',
    description: 'Triple-glazed curtain wall system with automated climate control integration.',
    details: [
      { label: 'Glass Type', value: 'Low-E Triple Glazed' },
      { label: 'Frame Material', value: 'Aluminum with Thermal Break' },
      { label: 'U-Value', value: '0.8 W/m²K' },
      { label: 'Automation', value: 'Smart Tinting System' }
    ],
    image: '/images/details/facade-detail.jpg',
    category: 'facade'
  },
  {
    id: 'arch-3',
    x: 80,
    y: 60,
    title: 'Rooftop Garden',
    description: 'Sustainable green roof system with integrated rainwater collection.',
    details: [
      { label: 'Area', value: '450 m²' },
      { label: 'Plants', value: 'Native Species Selection' },
      { label: 'Irrigation', value: 'Rainwater Harvesting System' },
      { label: 'Maintenance', value: 'Automated Drip System' }
    ],
    image: '/images/details/rooftop-detail.jpg',
    category: 'sustainability'
  },
  {
    id: 'arch-4',
    x: 40,
    y: 75,
    title: 'Interior Atrium',
    description: 'Central light well featuring natural stone and water elements.',
    details: [
      { label: 'Height', value: '12 meters' },
      { label: 'Stone', value: 'Travertine Natural Finish' },
      { label: 'Lighting', value: 'Skylight with LED Accent' },
      { label: 'Water Feature', value: 'Cascading Wall Element' }
    ],
    image: '/images/details/atrium-detail.jpg',
    category: 'interior'
  }
]

export const webDesignHotspots: HotspotItem[] = [
  {
    id: 'web-1',
    x: 30,
    y: 20,
    title: 'Navigation Design',
    description: 'Minimalist navigation with micro-interactions and smooth transitions.',
    details: [
      { label: 'Animation', value: 'GSAP Timeline' },
      { label: 'Duration', value: '0.6s Ease-out' },
      { label: 'Accessibility', value: 'ARIA Compliant' },
      { label: 'Mobile', value: 'Touch-optimized' }
    ],
    category: 'ui-design'
  },
  {
    id: 'web-2',
    x: 70,
    y: 45,
    title: 'Typography System',
    description: 'Fluid typography scale with perfect vertical rhythm and readability.',
    details: [
      { label: 'Typeface', value: 'Custom Sans-serif' },
      { label: 'Scale', value: 'Modular 1.25 Ratio' },
      { label: 'Leading', value: '1.6 Line Height' },
      { label: 'Contrast', value: 'WCAG AAA Compliant' }
    ],
    category: 'typography'
  },
  {
    id: 'web-3',
    x: 20,
    y: 70,
    title: 'Color Palette',
    description: 'Sophisticated color system inspired by natural stone materials.',
    details: [
      { label: 'Primary', value: '#D4AF37 (Gold Accent)' },
      { label: 'Background', value: '#191919 (Charcoal)' },
      { label: 'Surface', value: '#212121 (Stone Gray)' },
      { label: 'Accessibility', value: '4.5:1 Contrast Ratio' }
    ],
    category: 'design-system'
  },
  {
    id: 'web-4',
    x: 85,
    y: 80,
    title: 'Interactive Elements',
    description: 'Premium hover effects and transitions that enhance user engagement.',
    details: [
      { label: 'Hover Duration', value: '300ms' },
      { label: 'Easing', value: 'Cubic-bezier Custom' },
      { label: 'Touch Feedback', value: 'Haptic Support' },
      { label: 'Performance', value: 'GPU Accelerated' }
    ],
    category: 'interaction'
  }
]

export const brandingHotspots: HotspotItem[] = [
  {
    id: 'brand-1',
    x: 50,
    y: 25,
    title: 'Logo Construction',
    description: 'Geometric logo design based on golden ratio proportions.',
    details: [
      { label: 'Ratio', value: '1.618 Golden Section' },
      { label: 'Grid', value: '24x24 Base Unit' },
      { label: 'Minimum Size', value: '16px Digital, 8mm Print' },
      { label: 'Formats', value: 'SVG, PNG, PDF, AI' }
    ],
    category: 'logo-design'
  },
  {
    id: 'brand-2',
    x: 25,
    y: 60,
    title: 'Brand Colors',
    description: 'Primary color palette with accessibility and reproduction guidelines.',
    details: [
      { label: 'Primary Gold', value: '#D4AF37' },
      { label: 'Secondary Gray', value: '#8A8A8A' },
      { label: 'Print CMYK', value: '15, 15, 85, 5' },
      { label: 'Accessibility', value: 'WCAG AA Compliant' }
    ],
    category: 'color-system'
  },
  {
    id: 'brand-3',
    x: 75,
    y: 55,
    title: 'Typography Hierarchy',
    description: 'Complete typographic system for digital and print applications.',
    details: [
      { label: 'Headline Font', value: 'Custom Sans Display' },
      { label: 'Body Font', value: 'System Sans Stack' },
      { label: 'Scale Ratio', value: '1.25 Major Third' },
      { label: 'Line Height', value: '1.6 Optimal Readability' }
    ],
    category: 'typography'
  }
]

