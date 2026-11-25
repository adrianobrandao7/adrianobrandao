import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <section className="section page-container inner-page"><p className="eyebrow">404</p><h1 className="page-title">Page not <span>found.</span></h1><Link className="text-link" to="/">Back to home ↗</Link></section>;
}
