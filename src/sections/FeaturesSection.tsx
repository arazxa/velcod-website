const features = [
  'Composable section architecture',
  'Type-safe App Router foundation',
  'Production-ready scripts for deployment'
];

export function FeaturesSection() {
  return (
    <section className="section">
      <h2>Core Features</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}
