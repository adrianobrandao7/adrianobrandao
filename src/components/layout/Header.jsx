
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
      <NavLink
        className="brand"
        to="/"
        aria-label="Adriano Brandão home"
        onClick={closeMenu}
      >
        AB<span>.</span>
      </NavLink>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span />
        <span />
      </button>

      <nav id="primary-navigation" aria-label="Main navigation">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}

        <NavLink
          className="nav-resume"
          to="/resume"
          onClick={closeMenu}
        >
          Resume <span aria-hidden="true">↗</span>
        </NavLink>
      </nav>
    </header>
  );
}
