import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollMotion(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const context = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 781px)', () => {
        gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .8 } })
          .to('.hero-copy-block', { yPercent: -18, opacity: .35, ease: 'none' }, 0)
          .to('.hero-system-wrap', { y: 190, scale: 1.04, rotate: 0, ease: 'none' }, 0)
          .to('.story-interface', { x: 95, y: 35, rotate: 0, ease: 'none' }, 0)
          .to('.story-backend', { x: -45, y: -22, rotate: 0, ease: 'none' }, 0)
          .to('.story-intelligence', { x: -115, y: -76, rotate: 0, ease: 'none' }, 0)
          .to('.story-signal span', { y: 330, ease: 'none' }, 0)
          .to('.system-caption, .stack-story-head', { opacity: 0, duration: .35 }, .5)
          .to('.hero-path-progress', { scaleY: 1, ease: 'none' }, 0)

        const firstProject = document.querySelector('.project-story[data-project-index="0"] .project-media')
        if (firstProject) {
          gsap.fromTo(firstProject, { clipPath: 'inset(18% 10% 18% 10%)', opacity: .15, scale: .88 }, {
            clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1,
            ease: 'none', scrollTrigger: { trigger: '.projects', start: 'top bottom', end: 'top 22%', scrub: .75 },
          })
        }
        gsap.utils.toArray('.project-story').forEach((project, index) => {
          gsap.fromTo(project.querySelector('.project-media'), { y: index % 2 ? 70 : 100 }, { y: -30, ease: 'none', scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: .9 } })
          if (index < document.querySelectorAll('.project-story').length - 1) {
            gsap.to(project, { opacity: .35, scale: .97, ease: 'none', scrollTrigger: { trigger: project, start: '65% center', end: 'bottom top', scrub: .7 } })
          }
        })

        gsap.to('.project-story:last-child .project-copy li', {
          x: (index) => (index - 2) * 10, y: 34, stagger: .03, ease: 'none',
          scrollTrigger: { trigger: '.project-story:last-child', start: '60% center', end: 'bottom top', scrub: .7 },
        })
      })
      gsap.fromTo('.skills-path-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.skills-index', start: 'top 75%', end: 'bottom 55%', scrub: true } })
      gsap.fromTo('.timeline-progress', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.experience-timeline', start: 'top 68%', end: 'bottom 58%', scrub: true } })
      gsap.fromTo('.narrative-progress', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.projects', start: 'top 70%', endTrigger: '.contact', end: 'top 40%', scrub: .6 } })
      gsap.fromTo('.narrative-dot', { y: 0 }, { y: 318, ease: 'none', scrollTrigger: { trigger: '.projects', start: 'top 70%', endTrigger: '.contact', end: 'top 40%', scrub: .6 } })
      ;['projects', 'skills', 'experience', 'contact'].forEach((id) => {
        ScrollTrigger.create({ trigger: `#${id}`, start: 'top center', end: 'bottom center', toggleClass: { targets: `.narrative-rail [data-stage="${id}"]`, className: 'is-active' } })
      })
      gsap.utils.toArray('.timeline-entry').forEach((entry) => ScrollTrigger.create({ trigger: entry, start: 'top 62%', end: 'bottom 38%', toggleClass: { targets: entry, className: 'is-active' } }))
      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', refresh, { once: true })
      return () => { window.removeEventListener('load', refresh); mm.revert() }
    }, root)
    return () => context.revert()
  }, [rootRef])
}
