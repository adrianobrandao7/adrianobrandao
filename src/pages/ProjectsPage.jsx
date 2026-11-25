import Eyebrow from '../components/ui/Eyebrow';
import ProjectGrid from '../features/projects/ProjectGrid';
import { projects } from '../features/projects/projects.data';

export default function ProjectsPage() {
  return (
    <section className="section page-container inner-page">
      <Eyebrow>PORTFOLIO</Eyebrow>
      <h1 className="page-title">Selected <span>projects.</span></h1>
      <p className="page-lead">A collection of practical software projects focused on business workflows, reliable data, and thoughtful engineering.</p>
      <ProjectGrid projects={projects} />
    </section>
  );
}
