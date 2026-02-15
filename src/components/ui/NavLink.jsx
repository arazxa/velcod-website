import "./nav-link.css";

export function NavLink({ href, children, isActive = false, ...props }) {
  return (
    <a
      href={href}
      className={`ui-nav-link ${isActive ? "ui-nav-link--active" : ""}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
