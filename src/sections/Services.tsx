import { servicesContent } from '../content/home';

const Services = () => (
  <section id="services" className="section">
    <h2>{servicesContent.heading}</h2>
    <p>{servicesContent.body}</p>
    <div className="card-grid">
      {servicesContent.items.map((item) => (
        <article key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
