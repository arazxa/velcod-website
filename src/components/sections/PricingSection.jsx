import { Button, Card, Heading, Section } from "../ui";

export function PricingSection() {
  return (
    <Section id="pricing" tone="muted">
      <Heading
        align="center"
        eyebrow="Pricing"
        title="Simple plans for teams of every size"
        subtitle="All plans include the same design system primitives and interaction states."
      />
      <div className="grid grid--3">
        <Card title="Starter">
          <p>For small teams validating a product idea.</p>
          <Button variant="secondary">Choose Starter</Button>
        </Card>
        <Card title="Growth">
          <p>For scaling teams shipping multiple product surfaces.</p>
          <Button>Choose Growth</Button>
        </Card>
        <Card title="Enterprise">
          <p>For organizations standardizing UX across many squads.</p>
          <Button variant="secondary">Contact us</Button>
        </Card>
      </div>
    </Section>
  );
}
