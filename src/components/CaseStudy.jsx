import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { ProjectVisual } from './ProjectVisual'

export function CaseStudy({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0)
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const images = project.images || []

  useEffect(() => {
    const previous = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (images.length && event.key === 'ArrowRight') setActiveImage((value) => (value + 1) % images.length)
      if (images.length && event.key === 'ArrowLeft') setActiveImage((value) => (value - 1 + images.length) % images.length)
      if (event.key === 'Tab') {
        const controls = [...dialogRef.current.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])')]
        const first = controls[0]
        const last = controls.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      previousFocus?.focus?.()
    }
  }, [images.length, onClose])

  useEffect(() => setActiveImage(0), [project.slug])

  const visualProject = images.length ? { ...project, coverImage: images[activeImage] } : project
  const sections = [
    ['Business problem', project.problem],
    ['Solution', project.solution],
    ['Architecture', project.architecture],
    ['Integrated AI agent', project.agent],
    ['Security & access', project.security],
    ['My role', project.role],
    ['Technical approach', project.approach],
    ['Outcome / what I learned', project.outcome],
  ].filter(([, value]) => value)

  return createPortal(<div ref={dialogRef} className="case-overlay" role="dialog" aria-modal="true" aria-labelledby="case-title">
    <div className="case-study">
      <button ref={closeRef} type="button" className="case-close" onClick={onClose} aria-label="Close case study"><X /></button>
      <header className="case-hero container">
        <p className="case-label">Case study / {project.number}</p>
        <h2 id="case-title">{project.title}</h2>
        <p className="case-intro">{project.overview}</p>
        <ul className="project-tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </header>
      <div className="case-visual container"><ProjectVisual project={visualProject} large /></div>
      {images.length > 1 && <div className="gallery-controls container">
        <p>{String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</p>
        <div><button type="button" onClick={() => setActiveImage((activeImage - 1 + images.length) % images.length)} aria-label="Previous screenshot"><ArrowLeft /></button><button type="button" onClick={() => setActiveImage((activeImage + 1) % images.length)} aria-label="Next screenshot"><ArrowRight /></button></div>
      </div>}
      <div className="case-body container">
        {sections.map(([title, copy]) => <section key={title}><h3>{title}</h3><p>{copy}</p></section>)}
        <section className="case-features"><h3>Core features</h3><ol>{project.features?.map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, '0')}</span>{feature}</li>)}</ol></section>
      </div>
      {images.length > 1 && <div className="case-thumbnails container" aria-label="Project screenshots">{images.map((image, index) => <button type="button" className={index === activeImage ? 'active' : ''} key={image} onClick={() => setActiveImage(index)} aria-label={`Show screenshot ${index + 1}`}><img src={image} alt="" loading="lazy" /></button>)}</div>}
      <footer className="case-end container"><p>End of case study</p><button type="button" onClick={onClose}>Back to selected work <ArrowRight /></button></footer>
    </div>
  </div>, document.body)
}
