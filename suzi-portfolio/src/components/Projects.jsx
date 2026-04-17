import './Projects.css'
import { PROJECTS } from '../constants'
import YellowArrowButton from './shared/YellowArrowButton'

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2.5 12.5L12.5 2.5M12.5 2.5H4.5M12.5 2.5V10.5"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      className="project-card"
      aria-label={project.title}
    >
      <div
        className="project-card-image"
        style={{
          '--ratio': project.imageRatio || '16/10',
        }}
      >
        <div className="project-card-icon">
          <img src={project.image} alt={project.title} />
        </div>
        <span className="project-card-link">
          <ArrowIcon />
        </span>
      </div>

      <div className="project-card-footer">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-meta">
          {project.tags.map((tag, i) => (
            <span key={tag}>
              {i > 0 && <span className="project-meta-dot" aria-hidden="true"> • </span>}
              {tag}
            </span>
          ))}
        </p>
      </div>
    </a>
  )
}

export default function Projects() {
  const leftProjects  = PROJECTS.filter((_, i) => i % 2 === 0)
  const rightProjects = PROJECTS.filter((_, i) => i % 2 !== 0)

  return (
    <section id="projects" className="section-container">
      <div className="content-container">

        {/* Section header */}
        <div className="projects-header">
          <div className="projects-header-left">
            <p className="eyebrow">— Projects</p>
            <h2 className="title">What I've Built</h2>
          </div>
          <YellowArrowButton href="#">
            View All Projects
          </YellowArrowButton>
        </div>

        {/* Two-column masonry grid */}
        <div className="projects-cols">
          <div className="projects-col">
            {leftProjects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
          <div className="projects-col">
            {rightProjects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>

      </div>
    </section>
  )
}
