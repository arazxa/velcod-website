import "./button.css";

export function Button({ children, variant = "primary", size = "md", ...props }) {
  const className = `ui-button ui-button--${variant} ui-button--${size} ${props.className ?? ""}`.trim();
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
