import { processContent } from '../content/home';

const Process = () => (
  <section id="process" className="section">
    <h2>{processContent.heading}</h2>
    <p>{processContent.body}</p>
    <ol className="process-list">
      {processContent.steps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default Process;
