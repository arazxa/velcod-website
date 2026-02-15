import { testimonialsContent } from '../content/home';

const Testimonials = () => (
  <section id="testimonials" className="section">
    <h2>{testimonialsContent.heading}</h2>
    <p>{testimonialsContent.body}</p>
    <div className="card-grid">
      {testimonialsContent.items.map((item) => (
        <blockquote key={item.author} className="card quote">
          <p>“{item.quote}”</p>
          <footer>
            <strong>{item.author}</strong>
            <span>{item.role}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;
