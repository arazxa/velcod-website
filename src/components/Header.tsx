'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { navItems } from '../content/home';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSmoothScroll = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', href);
      closeMenu();
    }
  };

  return (
    <header className="header">
      <a className="logo" href="#hero" onClick={(event) => handleSmoothScroll(event, '#hero')}>
        Velcod
      </a>
      <button
        aria-controls="site-nav"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
        className="menu-toggle"
        onClick={() => setIsMenuOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="site-nav" className={isMenuOpen ? 'open' : ''}>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(event) => handleSmoothScroll(event, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
