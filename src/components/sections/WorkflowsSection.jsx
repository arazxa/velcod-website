import { Card, Heading, Section } from "../ui";

const steps = [
  "Define and publish global design tokens.",
  "Compose pages from shared primitives.",
  "Scale features with responsive utility classes.",
  "Rely on unified hover, focus, and active behavior.",
];

export function WorkflowsSection() {
  return (
    <Section id="workflows">
      <Heading
        eyebrow="Workflow"
        title="Ship pages confidently with a repeatable implementation path"
        subtitle="A standard section + container + card composition keeps layouts predictable and easy to update."
      />
      <div className="grid grid--2">
        {steps.map((step, index) => (
          <Card key={step} title={`0${index + 1}`}>
            <p>{step}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
