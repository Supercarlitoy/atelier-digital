
import Button from '../components/common/button';
import ServiceCards from '../components/about/service-cards';
import StatsDisplay from '../components/common/stats-display';
import DynamicMarquee from '../components/interactive/DynamicMarquee';
import ImageHotspots from '../components/interactive/ImageHotspots';
import Testimonials from '../components/common/testimonials';
import { clientLogos } from '../data/marquee-items';
import AnimatedSection from '../components/animations/AnimatedSection';
import PageTransitionMount from '../components/animations/PageTransitionMount';
import ModelViewer3D from '../components/interactive/ModelViewer3D';
import { webDesignHotspots } from '../data/hotspot-samples';

const featuredServices = [
  {
    id: '1',
    title: 'Premium Themes',
    description: 'Architecture-first website blueprints—built on Next.js and crafted for performance.',
    features: [
      'Next.js & React architecture',
      'TypeScript integration',
      'Responsive design system',
      'SEO optimization',
    ],
    icon: '/images/services/web-design-icon.svg',
    iconType: 'image' as const,
    price: '$299',
  },
  {
    id: '2',
    title: 'Custom Development',
    description: 'Bespoke applications engineered to your domain—stable, scalable, and maintainable.',
    features: [
      'Full-stack development',
      'Database design',
      'API integration',
      'Cloud deployment',
    ],
    icon: '/images/services/development-icon.svg',
    iconType: 'image' as const,
  },
  {
    id: '3',
    title: 'Architecture Consulting',
    description: 'Technical direction, codebase audits, and system design with clear next steps.',
    features: [
      'Code review & audit',
      'Architecture planning',
      'Performance optimization',
      'Security assessment',
    ],
    icon: '/images/services/consulting-icon.svg',
    iconType: 'image' as const,
    price: '$150/hr',
  },
];

const stats = [
  { id: '1', label: 'Projects Delivered', value: 127, suffix: '+' },
  { id: '2', label: 'Happy Clients', value: 89, suffix: '+' },
  { id: '3', label: 'Years Experience', value: 8, suffix: '+' },
  { id: '4', label: 'Code Quality', value: 99, suffix: '%' },
];

const testimonials = [
  { id: 'tt1', name: 'Ava Carter', role: 'CEO', company: 'TechCorp', content: 'Their attention to detail elevated our brand.', image: '/images/team/founder.jpg', rating: 5 },
  { id: 'tt2', name: 'Liam Patel', role: 'Founder', company: 'Innovation Labs', content: 'True digital craftsmanship across the board.', image: '/images/team/founder.jpg', rating: 5 },
  { id: 'tt3', name: 'Maya Rossi', role: 'Design Director', company: 'Future Systems', content: 'Minimalism with purpose. Flawless execution.', image: '/images/team/founder.jpg', rating: 4 },
];

export default function Home() {
  return (
    <div className="hero" style={{
      backgroundImage: 'url(/images/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <PageTransitionMount type="architecturalReveal" />
      <AnimatedSection className="container" animation="fadeInUp">
        <h1 className="hero__title">
          Digital Stonemasonry for the Modern Web
        </h1>
        <p className="hero__subtitle">
          Premium website blueprints that bridge the gap between cheap templates and expensive custom builds. 
          Architectural precision meets digital craftsmanship.
        </p>
        <div className="hero__actions">
          <Button href="/work" variant="primary">
            View Our Work
          </Button>
          <Button href="/about" variant="text">
            Learn More
          </Button>
        </div>
      </AnimatedSection>
      {/* Stats Section */}
      <section className="section">
        <AnimatedSection className="container" animation="fadeInUp">
          <StatsDisplay stats={stats} />
        </AnimatedSection>
      </section>
      {/* Client Logos Marquee */}
      <section className="section">
        <AnimatedSection className="container text-center" animation="fadeInUp">
          <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-heading)' }}>
            Trusted by Industry Leaders
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp">
          <DynamicMarquee items={clientLogos} speed={40} direction="left" pauseOnHover className="client-marquee" />
        </AnimatedSection>
      </section>

  {/* Design Showcase with Interactive Hotspots */}
  <section className="section">
        <div className="container">
          <AnimatedSection className="text-center" animation="fadeInUp">
            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-heading)', marginBottom: 'var(--space-sm)' }}>
              Precision in Every Pixel
            </h2>
            <p className="hero__subtitle">
              Explore the detailed craftsmanship behind our design systems. Click the hotspots to discover the thought
              process behind each design decision.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <ImageHotspots
              imageSrc="/images/design-showcase.jpg"
              imageAlt="Premium web design showcase with interactive hotspots"
              hotspots={webDesignHotspots}
              aspectRatio="aspect-video"
              className="design-showcase"
            />
          </div>
          </AnimatedSection>
        </div>
  </section>

  {/* Interactive 3D-like Viewer (lightweight, no deps) */}
  <section className="section">
    <div className="container">
      <AnimatedSection className="text-center" animation="fadeInUp">
        <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-heading)', marginBottom: 'var(--space-sm)' }}>
          Interactive Viewer
        </h2>
        <p className="hero__subtitle" style={{ maxWidth: '56ch', marginLeft: 'auto', marginRight: 'auto' }}>
          Explore a lightweight 3D-like presentation with parallax tilt and premium sheen. Fully accessible with
          graceful fallback for reduced-motion.
        </p>
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp">
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <ModelViewer3D poster="/images/design-showcase.jpg" title="Premium Design Preview" />
        </div>
      </AnimatedSection>
    </div>
  </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="text-center" animation="fadeInUp">
            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-heading)', marginBottom: 'var(--space-sm)' }}>
              Our Services
            </h2>
            <p className="hero__subtitle" style={{ maxWidth: '56ch', marginLeft: 'auto', marginRight: 'auto' }}>
              From premium themes to custom development, we provide architectural solutions for modern web experiences.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="staggeredReveal">
            <ServiceCards services={featuredServices} />
          </AnimatedSection>
          <AnimatedSection className="text-center" animation="fadeInUp">
            <div className="text-center" style={{ marginTop: 'var(--space-lg)' }}>
              <Button href="/about" variant="text">
                Learn More About Our Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section surface-elevated">
        <AnimatedSection className="container text-center" animation="fadeInUp">
          <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-heading)' }}>What Our Clients Say</h2>
        </AnimatedSection>
        <AnimatedSection className="container" animation="fadeInUp">
          <Testimonials testimonials={testimonials} />
        </AnimatedSection>
      </section>
    </div>
  );
}
