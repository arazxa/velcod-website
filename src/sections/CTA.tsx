import { ctaContent } from '../content/home';

const CTA = () => (
  <section id="cta" className="section cta">
    <h2>{ctaContent.heading}</h2>
    <p>{ctaContent.body}</p>
    <div className="button-group centered">
      <a className="btn primary" href="mailto:hello@velcod.com">
        {ctaContent.secondaryCta}
      </a>
      <a className="btn secondary" href="#hero">
        {ctaContent.primaryCta}
      </a>
    </div>
  </section>
);

export default CTA;
