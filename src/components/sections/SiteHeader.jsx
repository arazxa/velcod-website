import { useEffect, useState } from "react";
import "./site-header.css";
import { Button, Container, NavLink } from "../ui";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const closeOnDesktop = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop, { passive: true });
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.classList.toggle("menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <p className="site-header__brand">Velcod</p>
        <button
          aria-controls="site-nav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="site-header__menu-toggle mobile-only"
          onClick={handleToggleMenu}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          aria-label="Primary"
          className={`site-header__nav ${isMenuOpen ? "site-header__nav--open" : ""}`}
          id="site-nav"
        >
          <NavLink href="#features" isActive onClick={handleCloseMenu}>
            Features
          </NavLink>
          <NavLink href="#workflows" onClick={handleCloseMenu}>
            Workflows
          </NavLink>
          <NavLink href="#pricing" onClick={handleCloseMenu}>
            Pricing
          </NavLink>
          <Button onClick={handleCloseMenu} size="md" variant="secondary">
            Contact sales
          </Button>
        </nav>
      </Container>
    </header>
  );
}
