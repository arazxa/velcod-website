import "./heading.css";

export function Heading({ as: Tag = "h2", eyebrow, title, subtitle, align = "left" }) {
  return (
    <header className={`ui-heading ui-heading--${align}`}>
      {eyebrow ? <p className="ui-heading__eyebrow">{eyebrow}</p> : null}
      <Tag className="ui-heading__title">{title}</Tag>
      {subtitle ? <p className="ui-heading__subtitle">{subtitle}</p> : null}
    </header>
  );
}
