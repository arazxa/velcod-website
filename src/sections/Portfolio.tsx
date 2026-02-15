import { portfolioContent } from '../content/home';

const Portfolio = () => (
  <section id="portfolio" className="section">
    <h2>{portfolioContent.heading}</h2>
    <p>{portfolioContent.body}</p>
    <div className="card-grid">
      {portfolioContent.projects.map((project) => (
        <article key={project.name} className="card">
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.result}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Portfolio;
