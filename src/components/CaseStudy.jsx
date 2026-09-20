import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { ProjectVisual } from './ProjectVisual'

export function CaseStudy({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0)
  const images = project.images || []

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (images.length && event.key === 'ArrowRight') setActiveImage((value) => (value + 1) % images.length)
      if (images.length && event.key === 'ArrowLeft') setActiveImage((value) => (value - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey) }
  }, [images.length, onClose])

  const visualProject = images.length ? { ...project, coverImage: images[activeImage] } : project
  const sections = [['Problem', project.problem], ['Solution', project.solution], ['My role', project.role], ['Technical approach', project.approach], ['Outcome / what I learned', project.outcome]].filter(([, value]) => value)

  return <div className="case-overlay" role="dialog" aria-modal="true" aria-labelledby="case-title">
    <div className="case-study">
      <button className="case-close" onClick={onClose} aria-label="Close case study"><X /></button>
      <header className="case-hero container">
        <p className="case-label">Case study / {project.number}</p>
        <h2 id="case-title">{project.title}</h2>
        <p className="case-intro">{project.overview}</p>
        <ul className="project-tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </header>
      <div className="case-visual container"><ProjectVisual project={visualProject} large /></div>
      {images.length > 1 && <div className="gallery-controls container">
        <p>{String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</p>
        <div><button onClick={() => setActiveImage((activeImage - 1 + images.length) % images.length)} aria-label="Previous screenshot"><ArrowLeft /></button><button onClick={() => setActiveImage((activeImage + 1) % images.length)} aria-label="Next screenshot"><ArrowRight /></button></div>
      </div>}
      <div className="case-body container">
        {sections.map(([title, copy]) => <section key={title}><h3>{title}</h3><p>{copy}</p></section>)}
        <section className="case-features"><h3>Core features</h3><ol>{project.features?.map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, '0')}</span>{feature}</li>)}</ol></section>
      </div>
      {images.length > 1 && <div className="case-thumbnails container" aria-label="Project screenshots">{images.map((image, index) => <button className={index === activeImage ? 'active' : ''} key={image} onClick={() => setActiveImage(index)} aria-label={`Show screenshot ${index + 1}`}><img src={image} alt="" loading="lazy" /></button>)}</div>}
      <footer className="case-end container"><p>End of case study</p><button onClick={onClose}>Back to selected work <ArrowRight /></button></footer>
    </div>
  </div>
}
