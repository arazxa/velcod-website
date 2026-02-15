import type { MouseEvent } from 'react';
import { navItems } from '../content/home';

const Header = () => {
  const handleSmoothScroll = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <header className="header">
      <a className="logo" href="#hero" onClick={(event) => handleSmoothScroll(event, '#hero')}>
        Velcod
      </a>
      <nav>
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
