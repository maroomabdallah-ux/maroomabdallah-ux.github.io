import { useState } from 'react'

/** Each preview is bound to its own project's real cover image. */
export function ProjectPreview({ project, large = false }) {
  const cover = project.coverImage || project.images?.[0]
  const [failed, setFailed] = useState(false)
  if (!cover) return <div className="preview-unavailable">{project.title} · Preview unavailable</div>

  return <div className={`project-preview ${large ? 'is-large' : ''}`}>
    <div className="preview-chrome"><span>{project.number}</span><i>{project.title} / interface</i><b>PROJECT PREVIEW</b></div>
    <div className="preview-stage">
      {failed ? <div className="preview-unavailable">{project.title} · Preview unavailable</div> :
        <img src={cover} alt={project.imageAlt || `${project.title} interface`} loading="lazy" onError={() => setFailed(true)} />}
      <p><span>{project.title}</span><span>View case study ↗</span></p>
    </div>
  </div>
}
