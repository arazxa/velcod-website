import "./hero-section.css";
import { Button, Card, Heading, Section } from "../ui";

export function HeroSection() {
  return (
    <Section tone="brand">
      <div className="hero-section__layout">
        <div>
          <Heading
            as="h1"
            eyebrow="Launch faster"
            title="Build a polished web experience with reusable foundations."
            subtitle="Velcod ships with production-ready primitives, scalable tokens, and responsive patterns that keep design and engineering aligned."
          />
          <div className="hero-section__actions">
            <Button size="lg">Get started</Button>
            <Button variant="secondary" size="lg">
              View demo
            </Button>
          </div>
        </div>
        <Card className="hero-section__preview" title="Live system health">
          <p className="hero-section__metric">Design token usage: 96% coverage</p>
          <p className="hero-section__metric">Component reuse rate: +48% this month</p>
          <p className="hero-section__metric">Release confidence: high</p>
        </Card>
      </div>
    </Section>
  );
}
