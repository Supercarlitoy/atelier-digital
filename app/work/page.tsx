
import ProjectGrid from '../../components/work/project-grid';
import AnimatedSection from '../../components/animations/AnimatedSection';
import PageTransitionMount from '../../components/animations/PageTransitionMount';

const projects = [
  { id: 'p1', title: 'Atelier Studio', category: 'Web', description: 'Architecture portfolio with performance-first build.', image: '/images/portfolio/project-1.jpg', link: '/work/atelier-studio', tags: ['Next.js', 'Portfolio', 'Accessibility'] },
  { id: 'p2', title: 'Aurum Identity', category: 'Branding', description: 'Premium identity system and microsite launch.', image: '/images/portfolio/project-2.jpg', link: '/work/aurum-identity', tags: ['Branding', 'Design System'] },
  { id: 'p3', title: 'Nimbus Console', category: 'Web', description: 'SaaS dashboard with reusable component library.', image: '/images/portfolio/project-3.jpg', link: '/work/nimbus-console', tags: ['SaaS', 'Design System', 'Charts'] },
  { id: 'p4', title: 'Motion Atelier', category: 'UI', description: 'Micro-interactions, motion studies, and tactile UI.', image: '/images/portfolio/project-4.jpg', link: '/work/motion-atelier', tags: ['UI', 'Animation'] },
  { id: 'p5', title: 'Digital Commerce', category: 'Web', description: 'E-commerce platform with advanced filtering and checkout.', image: '/images/portfolio/project-5.jpg', link: '/work/digital-commerce', tags: ['E-commerce', 'React', 'Stripe'] },
  { id: 'p6', title: 'Brand Evolution', category: 'Branding', description: 'Complete rebrand with digital asset management system.', image: '/images/portfolio/project-6.jpg', link: '/work/brand-evolution', tags: ['Branding', 'CMS', 'Assets'] },
];

const categories = ['All', 'Web', 'Branding', 'UI'];

export default function Work() {
  return (
    <div className="section">
      <PageTransitionMount type="architecturalReveal" />
      <div className="container">
        <AnimatedSection animation="fadeInUp">
          <h1>Our Work</h1>
          <div className="hero__subtitle">
            <p>Explore our premium blueprints. Filter by category and browse selected case studies.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="staggeredReveal">
          <ProjectGrid projects={projects} categories={categories} />
        </AnimatedSection>
      </div>
    </div>
  );
}
