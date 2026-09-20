import { useEffect, useState } from 'react'

export function ProjectPreview({ project, large = false }) {
  const images = project.images || (project.coverImage ? [project.coverImage] : [])
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing || images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setActive((value) => (value + 1) % Math.min(images.length, 4)), 1350)
    return () => window.clearInterval(timer)
  }, [images.length, playing])

  if (!images.length) return null

  return <div
    className={`project-preview ${large ? 'is-large' : ''}`}
    onPointerEnter={(event) => event.pointerType === 'mouse' && setPlaying(true)}
    onPointerLeave={() => { setPlaying(false); setActive(0) }}
  >
    <div className="preview-chrome"><span>{String(project.number).padStart(2, '0')}</span><i>{project.slug}.studio</i><b>{playing ? 'PLAYING' : 'PREVIEW'}</b></div>
    <div className="preview-stage">
      {images.slice(0, Math.max(active + 1, 1)).map((image, index) => <img
        className={index === active ? 'is-active' : ''}
        key={image}
        src={image}
        alt={index === 0 ? project.imageAlt : ''}
        loading={index === 0 ? 'eager' : 'lazy'}
      />)}
      <div className="preview-shade" />
      <p>Hover to explore <span>{String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span></p>
    </div>
  </div>
}
