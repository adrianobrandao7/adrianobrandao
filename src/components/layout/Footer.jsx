import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand" to="/">AB<span>.</span></Link>
      <span>© {new Date().getFullYear()} Adriano Brandão</span>
      <a href="#main-content">Back to top ↑</a>
    </footer>
  );
}
