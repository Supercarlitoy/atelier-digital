
import ProjectGrid from '../../components/work/project-grid';
import AnimatedSection from '../../components/animations/AnimatedSection';
import PageTransitionMount from '../../components/animations/PageTransitionMount';

const projects = [
  { id: 'p1', title: 'Atelier Studio', category: 'Web', description: 'Architecture portfolio with performance-first build.', image: '/images/projects/proj-1.svg', link: '/work/atelier-studio', tags: ['Next.js', 'Portfolio', 'Accessibility'] },
  { id: 'p2', title: 'Aurum Identity', category: 'Branding', description: 'Premium identity system and microsite launch.', image: '/images/projects/proj-2.svg', link: '/work/aurum-identity', tags: ['Branding', 'Design System'] },
  { id: 'p3', title: 'Nimbus Console', category: 'Web', description: 'SaaS dashboard with reusable component library.', image: '/images/projects/proj-3.svg', link: '/work/nimbus-console', tags: ['SaaS', 'Design System', 'Charts'] },
  { id: 'p4', title: 'Motion Atelier', category: 'UI', description: 'Micro-interactions, motion studies, and tactile UI.', image: '/images/projects/proj-4.svg', link: '/work/motion-atelier', tags: ['UI', 'Animation'] },
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
