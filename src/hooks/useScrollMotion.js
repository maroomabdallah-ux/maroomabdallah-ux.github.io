import { useEffect } from 'react'

export function useScrollMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0
    const update = () => {
      frame = 0
      const viewport = window.innerHeight
      document.querySelectorAll('[data-scroll-motion]').forEach((element) => {
        const rect = element.getBoundingClientRect()
        const progress = Math.max(-1, Math.min(1, (viewport * 0.5 - (rect.top + rect.height * 0.5)) / viewport))
        element.style.setProperty('--scroll-progress', progress.toFixed(3))
      })
    }
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])
}
