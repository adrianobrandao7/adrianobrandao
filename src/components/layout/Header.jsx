import { NavLink } from 'react-router-dom';

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Adriano Brandão home">AB<span>.</span></NavLink>
      <nav aria-label="Main navigation">
        {links.map(link => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
        <NavLink className="nav-resume" to="/resume">Resume <span aria-hidden="true">↗</span></NavLink>
      </nav>
    </header>
  );
}
