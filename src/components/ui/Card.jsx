import "./card.css";

export function Card({ title, children, className = "" }) {
  return (
    <article className={`ui-card ${className}`.trim()}>
      {title ? <h3 className="ui-card__title">{title}</h3> : null}
      <div className="ui-card__content">{children}</div>
    </article>
  );
}
