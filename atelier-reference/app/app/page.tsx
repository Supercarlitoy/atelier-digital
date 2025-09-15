
"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import ServiceCards from '../components/about/service-cards';
import StatsDisplay from '../components/common/stats-display';
import DynamicMarquee from '../components/interactive/DynamicMarquee';
import ImageHotspots from '../components/interactive/ImageHotspots';
import dynamic from 'next/dynamic';

// New animation components
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedCard from '../components/animations/AnimatedCard';
import AnimatedButton from '../components/animations/AnimatedButton';
import AnimatedCounter from '../components/animations/AnimatedCounter';
import AnimatedText from '../components/animations/AnimatedText';
import ParallaxSection from '../components/animations/ParallaxSection';
import StaggeredGrid from '../components/animations/StaggeredGrid';
import { useGSAPAnimations, usePageTransition } from '../hooks/use-gsap-animations';

// Dynamically import 3D components with SSR disabled
const ModelViewer3D = dynamic(
  () => import('../components/interactive/ModelViewer3D'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-muted-foreground">Loading 3D Viewer...</div>
        </div>
      </div>
    )
  }
);
import { clientLogos, testimonialMarquee } from '../data/marquee-items';
import { webDesignHotspots } from '../data/hotspot-samples';
import { sample3DModels } from '../data/3d-models';

const featuredServices = [
  {
    id: '1',
    title: 'Premium Themes',
    description: 'Architecturally sound website templates built with modern frameworks and best practices.',
    features: [
      'Next.js & React architecture',
      'TypeScript integration',
      'Responsive design system',
      'SEO optimization'
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
      'Custom API integration',
      'Database design',
      'Performance optimization'
    ],
    icon: '⚙️',
    price: '$2,999'
  },
  {
    id: '3',
    title: 'Design Systems',
    description: 'Comprehensive design systems that ensure consistency and scalability across all touchpoints.',
    features: [
      'Component libraries',
      'Design tokens',
      'Style guides',
      'Brand guidelines'
    ],
    icon: '🎨',
    price: '$1,499'
  }
];

const stats = [
  { label: 'Projects Completed', value: '150+', icon: '📊' },
  { label: 'Happy Clients', value: '98%', icon: '😊' },
  { label: 'Years of Experience', value: '8+', icon: '🏆' },
  { label: 'Team Members', value: '15', icon: '👥' }
];

export default function HomePage() {
  // Initialize GSAP animations and page transitions
  useGSAPAnimations();
  usePageTransition('architecturalReveal');

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="hero relative overflow-hidden">
        <ParallaxSection speed={0.5} className="hero__background">
          <Image
            src="/images/hero-bg.jpg"
            alt="Modern minimalist architectural background"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </ParallaxSection>
        <div className="hero__overlay" />
        <AnimatedSection 
          animation="fadeInUp" 
          className="container hero__content relative z-10"
        >
          <AnimatedText 
            animation="slideUpLines" 
            className="hero__title mb-6"
          >
            Digital Stonemasonry for the Modern Web
          </AnimatedText>
          <AnimatedText 
            animation="fadeInWords" 
            className="hero__subtitle mb-8"
          >
            Premium website blueprints that bridge the gap between cheap templates and expensive custom builds. 
            Architectural precision meets digital craftsmanship.
          </AnimatedText>
          <div className="hero__actions flex gap-4">
            <AnimatedButton href="/work" variant="primary">
              View Our Work
            </AnimatedButton>
            <AnimatedButton href="/about" variant="text">
              Learn More
            </AnimatedButton>
          </div>
        </AnimatedSection>
      </section>

      {/* Enhanced Stats Section */}
      <AnimatedSection animation="staggeredReveal" className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCard className="p-6">
              <AnimatedCounter 
                endValue={150} 
                suffix="+" 
                className="text-3xl font-bold text-primary mb-2 block"
              />
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </AnimatedCard>
            <AnimatedCard className="p-6">
              <AnimatedCounter 
                endValue={98} 
                suffix="%" 
                className="text-3xl font-bold text-primary mb-2 block"
              />
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </AnimatedCard>
            <AnimatedCard className="p-6">
              <AnimatedCounter 
                endValue={50} 
                suffix="+" 
                className="text-3xl font-bold text-primary mb-2 block"
              />
              <p className="text-sm text-muted-foreground">Active Clients</p>
            </AnimatedCard>
            <AnimatedCard className="p-6">
              <AnimatedCounter 
                endValue={24} 
                suffix="/7" 
                className="text-3xl font-bold text-primary mb-2 block"
              />
              <p className="text-sm text-muted-foreground">Support Available</p>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Animated Client Marquee */}
      <AnimatedSection animation="slideInFromLeft" className="section">
        <div className="container text-center mb-8">
          <AnimatedText 
            animation="fadeInWords" 
            className="text-xl font-medium text-muted-foreground mb-6"
          >
            Trusted by Industry Leaders
          </AnimatedText>
        </div>
        <DynamicMarquee 
          items={clientLogos}
          speed={40}
          direction="left"
          pauseOnHover={true}
          className="client-marquee"
        />
      </AnimatedSection>

      {/* Animated Services Preview */}
      <AnimatedSection animation="fadeInUp" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedText 
              animation="slideUpLines" 
              className="text-3xl font-semibold text-heading mb-4"
            >
              Our Services
            </AnimatedText>
            <AnimatedText 
              animation="fadeInWords" 
              className="text-lg text-text max-w-2xl mx-auto"
            >
              From premium themes to custom development, we provide architectural solutions for modern web experiences.
            </AnimatedText>
          </div>
          
          <StaggeredGrid gridCols={3} className="mb-12">
            {featuredServices.map((service) => (
              <AnimatedCard key={service.id} hover className="bg-card p-8 rounded-lg border">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </AnimatedCard>
            ))}
          </StaggeredGrid>
          
          <div className="text-center">
            <AnimatedButton href="/about" variant="secondary">
              Learn More About Our Services
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Design Showcase with Interactive Hotspots */}
      <AnimatedSection animation="slideInFromRight" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <AnimatedText 
              animation="typewriter" 
              className="text-3xl font-semibold text-heading mb-4"
            >
              Precision in Every Pixel
            </AnimatedText>
            <AnimatedText 
              animation="fadeInWords" 
              className="text-lg text-text max-w-2xl mx-auto"
            >
              Explore the detailed craftsmanship behind our design systems. Click the hotspots to discover the thought process behind each design decision.
            </AnimatedText>
          </div>
          <AnimatedCard className="max-w-4xl mx-auto">
            <ImageHotspots 
              imageSrc="/images/design-showcase.jpg"
              imageAlt="Premium web design showcase with interactive hotspots"
              hotspots={webDesignHotspots}
              aspectRatio="aspect-video"
              className="design-showcase"
            />
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Enhanced 3D Model Showcase */}
      <AnimatedSection animation="staggeredReveal" className="section surface-elevated">
        <div className="container">
          <div className="text-center mb-12">
            <AnimatedText 
              animation="splitChars" 
              className="text-3xl font-semibold text-heading mb-4"
            >
              Dimensional Design
            </AnimatedText>
            <AnimatedText 
              animation="fadeInWords" 
              className="text-lg text-text max-w-2xl mx-auto"
            >
              Showcase of interactive 3D model capabilities for architectural and product designs.
            </AnimatedText>
          </div>
          
          <StaggeredGrid gridCols={3} className="max-w-4xl mx-auto mb-12">
            {sample3DModels.slice(0, 3).map((model) => (
              <AnimatedCard key={model.id} hover className="bg-card rounded-lg p-6 text-center border">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {model.category === 'architecture' && '🏗️'}
                    {model.category === 'product' && '📱'}
                    {model.category === 'abstract' && '✨'}
                    {model.category === 'furniture' && '🪑'}
                  </span>
                </div>
                <h3 className="font-semibold text-heading mb-2">{model.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {model.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </StaggeredGrid>
          
          <div className="text-center">
            <AnimatedButton href="/work" variant="secondary">
              View Our Portfolio
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Animated Testimonial Marquee */}
      <AnimatedSection animation="slideInFromLeft" className="section surface-elevated">
        <div className="container text-center mb-8">
          <AnimatedText 
            animation="fadeInWords" 
            className="text-xl font-medium text-heading mb-6"
          >
            What Our Clients Say
          </AnimatedText>
        </div>
        <DynamicMarquee 
          items={testimonialMarquee}
          speed={30}
          direction="right"
          pauseOnHover={true}
          className="testimonial-marquee"
          itemClassName="testimonial-item"
        />
      </AnimatedSection>

      {/* Enhanced Call to Action */}
      <AnimatedSection animation="fadeInUp" className="section surface-elevated">
        <div className="container">
          <AnimatedCard className="text-center max-w-4xl mx-auto">
            <AnimatedText 
              animation="slideUpLines" 
              className="text-3xl font-semibold text-heading mb-6"
            >
              Ready to Build Something Exceptional?
            </AnimatedText>
            <AnimatedText 
              animation="fadeInWords" 
              className="text-lg text-text mb-8"
            >
              Whether you need a premium theme or custom development, we're here to help you create 
              digital experiences that stand the test of time.
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/work" variant="primary">
                View Our Portfolio
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary">
                Start a Project
              </AnimatedButton>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>
    </>
  );
}
