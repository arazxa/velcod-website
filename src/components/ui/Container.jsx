import "./container.css";

export function Container({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag className={`ui-container ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
