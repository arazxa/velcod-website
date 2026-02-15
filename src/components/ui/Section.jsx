import "./section.css";
import { Container } from "./Container";

export function Section({ id, tone = "default", className = "", children }) {
  return (
    <section id={id} className={`ui-section ui-section--${tone} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
