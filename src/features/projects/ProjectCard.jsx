import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span>{project.number} / CASE STUDY</span>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-mark" aria-hidden="true">{project.number === '01' ? 'W.' : 'P.'}</div>
      <p className="project-type">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tags">
        {project.technologies.map(technology => <span key={technology}>{technology}</span>)}
      </div>
      <div className="project-foot">
        <Link to={`/projects/${project.slug}`}>View project <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
