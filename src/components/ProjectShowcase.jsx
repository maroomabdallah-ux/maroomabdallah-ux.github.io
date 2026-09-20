import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { ProjectVisual } from './ProjectVisual'

export function ProjectShowcase({ project, onOpen }) {
  return <Reveal as="article" className="project-showcase">
    <button className="project-trigger" onClick={() => onOpen(project)} aria-label={`View ${project.title} case study`}>
      <div className="project-visual-wrap" data-scroll-motion><ProjectVisual project={project} /><span className="view-cursor">View case</span></div>
      <div className="project-info" data-scroll-motion>
        <div className="project-heading"><span>{project.number}</span><div><p>{project.subtitle}</p><h3>{project.title}</h3></div><ArrowUpRight /></div>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Project technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </div>
    </button>
  </Reveal>
}
