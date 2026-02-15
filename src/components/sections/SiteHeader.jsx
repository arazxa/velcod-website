import "./site-header.css";
import { Button, Container, NavLink } from "../ui";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <p className="site-header__brand">Velcod</p>
        <nav className="site-header__nav">
          <NavLink href="#features" isActive>
            Features
          </NavLink>
          <NavLink href="#workflows">Workflows</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <Button variant="secondary" size="md">
            Contact sales
          </Button>
        </nav>
      </Container>
    </header>
  );
}
