
import TeamCards from '../../components/about/team-cards';
import AnimatedSection from '../../components/animations/AnimatedSection';
import PageTransitionMount from '../../components/animations/PageTransitionMount';
import Testimonials from '../../components/common/testimonials';

const team = [
  { id: 't1', name: 'Sarah Chen', role: 'Creative Director', bio: 'Leads brand direction and design quality.', image: '/images/team/member-1.svg', skills: ['Branding', 'Art Direction', 'UX'], social: { linkedin: '#', dribbble: '#' } },
  { id: 't2', name: 'Marcus Rodriguez', role: 'Lead Developer', bio: 'Architects modern web stacks and performance.', image: '/images/team/member-2.svg', skills: ['Next.js', 'Performance', 'APIs'], social: { github: '#', linkedin: '#' } },
  { id: 't3', name: 'Elena Kowalski', role: 'UX Researcher', bio: 'Turns user insights into product improvements.', image: '/images/team/member-3.svg', skills: ['Research', 'Analytics', 'Workshops'], social: { linkedin: '#' } },
];

const testimonials = [
  { id: 'ta1', name: 'Noah Sinclair', role: 'COO', company: 'Vertex Group', content: 'Atelier translated our vision into a premium digital experience with surgical precision.', image: '/images/avatars/avatar-1.svg', rating: 5 },
  { id: 'ta2', name: 'Iris Nakamura', role: 'Head of Product', company: 'Nimbus Labs', content: 'Every interaction feels intentional. The craft shows in the details.', image: '/images/avatars/avatar-2.svg', rating: 5 },
  { id: 'ta3', name: 'Jonah Patel', role: 'Marketing Director', company: 'Helios', content: 'Elegant, fast, and built right. A reliable foundation for our growth.', image: '/images/avatars/avatar-3.svg', rating: 4 },
];

export default function About() {
  return (
    <div className="section">
      <PageTransitionMount type="architecturalReveal" />
      <div className="container">
        <AnimatedSection animation="fadeInUp">
          <h1>About Atelier Digital</h1>
          <div className="hero__subtitle">
            <p>
              We believe in digital stonemasonry – the art of crafting websites with architectural precision, 
              tactile interactions, and minimalist luxury. Our philosophy bridges the gap between mass-produced 
              templates and costly custom development.
            </p>
            <p>
              Every blueprint we create follows principles of structural integrity, aesthetic harmony, 
              and functional excellence.
            </p>
          </div>
        </AnimatedSection>

        <div className="section" style={{ paddingTop: 'var(--space-3xl)' }}>
          <AnimatedSection animation="staggeredReveal">
            <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--space-xl)' }}>Our Team</h2>
            <TeamCards members={team} />
          </AnimatedSection>
        </div>

        <div className="section" style={{ paddingTop: 'var(--space-3xl)' }}>
          <AnimatedSection animation="fadeInUp">
            <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--space-xl)' }}>What Clients Say</h2>
            <Testimonials testimonials={testimonials} />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
