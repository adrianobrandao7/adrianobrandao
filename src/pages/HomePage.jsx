import { Link } from 'react-router-dom';
import Eyebrow from '../components/ui/Eyebrow';
import ProjectGrid from '../features/projects/ProjectGrid';
import { projects } from '../features/projects/projects.data';

export default function HomePage() {
  return (
    <>
      <section className="hero page-container">
        <Eyebrow><span className="status-dot" /> OPEN TO INTERNATIONAL OPPORTUNITIES</Eyebrow>
        <h1>Adriano<br /><span>Brandão.</span></h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-copy">I build practical, reliable software that solves real-world business problems — from the first idea to a working application.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">Explore my work <span aria-hidden="true">↓</span></Link>
          <Link className="text-link" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-meta">
          <span><i>01</i> Based in Brazil</span>
          <span><i>02</i> Working toward global opportunities</span>
        </div>
        <div className="hero-orb" aria-hidden="true"><div className="orb-inner">AB</div></div>
      </section>
      <section className="stack-strip">
        <span>FOCUSED ON</span>
        <div>JavaScript <b>·</b> Node.js <b>·</b> PostgreSQL <b>·</b> Docker <b>·</b> React</div>
      </section>
      <section className="section page-container" id="featured-projects">
        <div className="section-heading">
          <div><Eyebrow>SELECTED WORK</Eyebrow><h2>Projects built<br />around real needs.</h2></div>
          <p className="section-intro">I use software to solve problems I understand firsthand. These projects are shaped by real operational workflows, not just tutorial exercises.</p>
        </div>
        <ProjectGrid projects={projects.filter(project => project.featured)} />
        <p className="portfolio-note"><Link to="/projects">Explore all projects →</Link></p>
      </section>
      <section className="about-section">
        <div className="about-label"><Eyebrow>A LITTLE ABOUT ME</Eyebrow><span className="about-index">03 — 04</span></div>
        <div className="about-content">
          <h2>Business context.<br /><span>Engineering mindset.</span></h2>
          <p>I’m a developer and business owner who enjoys turning complex, everyday processes into clear and useful software. Working close to a real business gives me a practical perspective on requirements, usability, and the impact of technology.</p>
          <p>My current focus is full stack development, backend engineering, and building maintainable applications with a strong foundation in data and deployment.</p>
          <div className="principles"><span>Understand the problem</span><span>Build with purpose</span><span>Keep improving</span></div>
        </div>
      </section>
      <section className="contact-cta">
        <Eyebrow>LET'S CONNECT</Eyebrow>
        <h2>Have a problem<br />worth solving?</h2>
        <Link className="button button-dark" to="/contact">Get in touch ↗</Link>
      </section>
    </>
  );
}
