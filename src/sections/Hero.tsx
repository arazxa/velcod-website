import { heroContent } from '../content/home';

const Hero = () => (
  <section id="hero" className="section hero">
    <div className="section-copy">
      <p className="eyebrow">{heroContent.eyebrow}</p>
      <h1>{heroContent.heading}</h1>
      <p>{heroContent.body}</p>
      <div className="button-group">
        <a className="btn primary" href="#cta">
          {heroContent.primaryCta}
        </a>
        <a className="btn secondary" href="#portfolio">
          {heroContent.secondaryCta}
        </a>
      </div>
      <div className="metric-grid">
        {heroContent.metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>
    </div>
    <img src="/images/hero-illustration.svg" alt="Abstract web project illustration" />
  </section>
);

export default Hero;
