
"use client";

import ServiceCards from '../../components/about/service-cards';
import TeamCards from '../../components/about/team-cards';
import StatsDisplay from '../../components/common/stats-display';
import Testimonials from '../../components/common/testimonials';

const services = [
  {
    id: '1',
    title: 'Premium Themes',
    description: 'Architecturally sound website templates built with modern frameworks and best practices.',
    features: [
      'Next.js & React architecture',
      'TypeScript integration',
      'Responsive design system',
      'SEO optimization',
      'Performance optimization'
    ],
    icon: '🏗️',
    price: '$299'
  },
  {
    id: '2',
    title: 'Custom Development',
    description: 'Bespoke web applications tailored to your specific business requirements and goals.',
    features: [
      'Full-stack development',
      'Database design',
      'API integration',
      'Cloud deployment',
      'Maintenance & support'
    ],
    icon: '⚙️',
    price: '$5,000'
  },
  {
    id: '3',
    title: 'Consultation',
    description: 'Technical guidance and architectural review for your existing or planned digital projects.',
    features: [
      'Code review & audit',
      'Architecture planning',
      'Performance optimization',
      'Security assessment',
      'Best practices guidance'
    ],
    icon: '🎯',
    price: '$150/hr'
  }
];

const teamMembers = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'Lead Architect',
    bio: 'Frontend specialist with 8+ years crafting pixel-perfect, performant web experiences.',
    image: '/images/hero-bg.jpg', // Placeholder
    skills: ['React', 'TypeScript', 'Next.js', 'Design Systems'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '2',
    name: 'Sarah Martinez',
    role: 'UX Designer',
    bio: 'Design systems expert focused on creating intuitive, accessible digital experiences.',
    image: '/images/hero-bg.jpg', // Placeholder
    skills: ['Figma', 'Design Systems', 'UX Research', 'Prototyping'],
    social: {
      dribbble: 'https://dribbble.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '3',
    name: 'Jordan Kim',
    role: 'Backend Engineer',
    bio: 'Full-stack developer specializing in scalable architectures and cloud infrastructure.',
    image: '/images/hero-bg.jpg', // Placeholder
    skills: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

const stats = [
  { id: '1', label: 'Projects Delivered', value: 127, suffix: '+' },
  { id: '2', label: 'Happy Clients', value: 89, suffix: '+' },
  { id: '3', label: 'Years Experience', value: 8, suffix: '+' },
  { id: '4', label: 'Code Quality', value: 99, suffix: '%' }
];

const testimonials = [
  {
    id: '1',
    name: 'Michael Thompson',
    role: 'CTO',
    company: 'TechStartup Inc.',
    content: 'The Atelier Agency Theme transformed our digital presence. The code quality and attention to detail is exceptional. Our development team was impressed by the architectural decisions and clean implementation.',
    image: '/images/hero-bg.jpg', // Placeholder
    rating: 5
  },
  {
    id: '2',
    name: 'Lisa Rodriguez',
    role: 'Creative Director',
    company: 'Design Studio Pro',
    content: 'Working with Atelier Digital was a game-changer. Their theme provided the perfect foundation for our client projects, saving us countless hours while maintaining our high standards.',
    image: '/images/hero-bg.jpg', // Placeholder
    rating: 5
  },
  {
    id: '3',
    name: 'David Park',
    role: 'Lead Developer',
    company: 'Digital Agency',
    content: 'The level of documentation and component structure is outstanding. We were able to customize and extend the theme effortlessly. Highly recommended for serious developers.',
    image: '/images/hero-bg.jpg', // Placeholder
    rating: 5
  }
];

export default function About() {
  return (
    <div className="page-content">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">About Atelier Digital</h1>
          <p className="page-subtitle">
            Crafting premium website blueprints with architectural precision and digital mastery.
          </p>
        </header>
        
        {/* Philosophy & Values Section */}
        <section className="content-section section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <h2>Our Philosophy</h2>
              <p>
                At Atelier Digital, we believe in "Digital Stonemasonry" – the art of crafting websites 
                with the same precision, durability, and attention to detail that master stonemasons 
                brought to architectural masterpieces.
              </p>
              <p>
                Every line of code is carefully considered, every design element purposefully placed, 
                and every interaction thoughtfully crafted to create digital experiences that stand the test of time.
              </p>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2>What We Offer</h2>
              <p>
                Our flagship product, The Atelier Agency Theme, bridges the gap between cheap templates 
                and expensive custom builds. It's designed for technically proficient developers and 
                small agencies who value quality code and sophisticated design.
              </p>
              <ul className="feature-list">
                <li>Premium Next.js architecture</li>
                <li>Sophisticated design system</li>
                <li>Production-ready components</li>
                <li>Comprehensive documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section">
          <StatsDisplay stats={stats} />
        </section>

        {/* Services Section */}
        <section className="section">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-heading mb-4">Our Services</h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              From premium themes to custom development, we provide architectural solutions for modern web experiences.
            </p>
          </div>
          <ServiceCards services={services} />
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-heading mb-4">Meet Our Team</h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              A diverse team of architects, designers, and engineers committed to digital excellence.
            </p>
          </div>
          <TeamCards members={teamMembers} />
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-heading mb-4">Client Testimonials</h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              Hear what our clients say about working with Atelier Digital.
            </p>
          </div>
          <Testimonials testimonials={testimonials} />
        </section>
      </div>
    </div>
  );
}
