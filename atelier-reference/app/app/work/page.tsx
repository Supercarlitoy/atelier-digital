
"use client";

import ProjectGrid from '../../components/work/project-grid';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Atelier Agency Theme',
    category: 'Website Template',
    description: 'A premium Next.js theme for creative agencies with architectural precision and modern design systems.',
    image: '/images/hero-bg.jpg',
    link: '#',
    tags: ['Next.js', 'React', 'TypeScript', 'SCSS']
  },
  {
    id: '2',
    title: 'Digital Portfolio System',
    category: 'Web Application',
    description: 'Modern portfolio platform with advanced filtering, smooth animations, and responsive design.',
    image: '/images/hero-bg.jpg',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: '3',
    title: 'E-commerce Blueprint',
    category: 'Website Template',
    description: 'Sophisticated e-commerce solution with premium user experience and conversion optimization.',
    image: '/images/hero-bg.jpg',
    link: '#',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL']
  },
  {
    id: '4',
    title: 'SaaS Dashboard Kit',
    category: 'Web Application',
    description: 'Complete dashboard template with analytics, user management, and premium components.',
    image: '/images/hero-bg.jpg',
    link: '#',
    tags: ['React', 'Charts.js', 'Material-UI', 'Firebase']
  },
  {
    id: '5',
    title: 'Corporate Website',
    category: 'Website Template',
    description: 'Professional corporate template with CMS integration and SEO optimization.',
    image: '/images/hero-bg.jpg',
    link: '#',
    tags: ['Next.js', 'Sanity', 'SEO', 'Analytics']
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    category: 'Web Application',
    description: 'Full-stack real estate platform with property listings and virtual tours.',
    image: '/images/hero-bg.jpg',
    link: '#',
    tags: ['React', 'Node.js', 'Maps API', 'WebGL']
  }
];

const categories = ['All', 'Website Template', 'Web Application'];

export default function Work() {
  return (
    <div className="page-content section">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Our Work</h1>
          <p className="page-subtitle">
            Premium digital products crafted with architectural precision and modern web standards. Each project represents our commitment to quality, performance, and exceptional user experience.
          </p>
        </header>
        
        <ProjectGrid projects={projects} categories={categories} />
      </div>
    </div>
  );
}
