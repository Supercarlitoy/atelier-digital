/**
 * Sample data for Dynamic Marquee components
 * Atelier Agency Theme - Premium Digital Product
 */

import { MarqueeItem } from '@/types/phase3'

export const clientLogos: MarqueeItem[] = [
  {
    id: 'logo-1',
    type: 'logo',
    content: '/images/logos/client-1.svg',
    alt: 'TechCorp Solutions',
    link: 'https://techcorp.example.com'
  },
  {
    id: 'logo-2', 
    type: 'logo',
    content: '/images/logos/client-2.svg',
    alt: 'Innovation Labs',
    link: 'https://innovationlabs.example.com'
  },
  {
    id: 'logo-3',
    type: 'logo', 
    content: '/images/logos/client-3.svg',
    alt: 'Digital Dynamics',
    link: 'https://digitaldynamics.example.com'
  },
  {
    id: 'logo-4',
    type: 'logo',
    content: '/images/logos/client-4.svg',
    alt: 'Future Systems',
    link: 'https://futuresystems.example.com'
  },
  {
    id: 'logo-5',
    type: 'logo',
    content: '/images/logos/client-5.svg', 
    alt: 'Global Enterprises',
    link: 'https://globalenterprises.example.com'
  },
  {
    id: 'logo-6',
    type: 'logo',
    content: '/images/logos/client-6.svg',
    alt: 'Nexus Industries', 
    link: 'https://nexusindustries.example.com'
  }
]

export const testimonialMarquee: MarqueeItem[] = [
  {
    id: 'testimonial-1',
    type: 'testimonial',
    content: 'Their attention to detail and premium craftsmanship elevated our brand beyond expectations.',
    author: 'Sarah Johnson, CEO at TechCorp'
  },
  {
    id: 'testimonial-2', 
    type: 'testimonial',
    content: 'Working with Atelier was like having digital architects build our online presence.',
    author: 'Michael Chen, Founder of Innovation Labs'
  },
  {
    id: 'testimonial-3',
    type: 'testimonial', 
    content: 'The perfect balance of minimalism and functionality. True digital craftsmanship.',
    author: 'Emma Rodriguez, CMO at Digital Dynamics'
  },
  {
    id: 'testimonial-4',
    type: 'testimonial',
    content: 'Every pixel placed with intention. This is what premium design looks like.',
    author: 'David Kim, Design Director at Future Systems'
  }
]

export const servicesMarquee: MarqueeItem[] = [
  {
    id: 'service-1',
    type: 'text',
    content: 'Web Design & Development',
    link: '/services/web-development'
  },
  {
    id: 'service-2',
    type: 'text',
    content: 'Brand Identity Design',
    link: '/services/branding'
  },
  {
    id: 'service-3',
    type: 'text', 
    content: 'Digital Strategy Consulting',
    link: '/services/strategy'
  },
  {
    id: 'service-4',
    type: 'text',
    content: 'User Experience Design',
    link: '/services/ux-design'
  },
  {
    id: 'service-5',
    type: 'text',
    content: 'E-commerce Solutions', 
    link: '/services/ecommerce'
  },
  {
    id: 'service-6',
    type: 'text',
    content: 'Content Management Systems',
    link: '/services/cms'
  }
]

