
import Button from '../components/common/button';

export default function Home() {
  return (
    <div className="hero">
      <div className="container">
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
      </div>
    </div>
  );
}
