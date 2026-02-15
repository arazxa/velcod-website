import "./features-section.css";
import { Card, Heading, Section } from "../ui";

const features = [
  {
    title: "Composable primitives",
    body: "Buttons, cards, sections, and headings share one interaction language so new pages look consistent by default.",
  },
  {
    title: "Token-driven styling",
    body: "Centralized color, spacing, type, radius, and elevation tokens make themes easy to maintain and evolve.",
  },
  {
    title: "Responsive by design",
    body: "Utility classes and fluid scales support desktop, tablet, and mobile layouts without custom one-off breakpoints.",
  },
];

export function FeaturesSection() {
  return (
    <Section id="features" tone="muted">
      <Heading
        eyebrow="Foundation"
        title="Everything needed to build a coherent product surface"
        subtitle="Refactored sections now consume shared UI primitives instead of ad hoc styles, reducing drift and duplication."
      />
      <div className="grid grid--3 features-section__cards">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title}>
            <p>{feature.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
