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
      // One short, reversible scroll scene. No autoplay and no long pinning.
      // The laptop starts closed on the right, opens as it travels to center,
      // then the existing, real skill groups appear around it.
      const laptop = root.querySelector('.hero-system-wrap')
      const lid = root.querySelector('.laptop-lid')
      const notes = gsap.utils.toArray('.hero-skill-note', root)

      // Desktop and mobile use separate coordinates so the same story remains
      // legible at every size without borrowing desktop positioning on phones.
      mm.add('(min-width: 781px)', () => {
        gsap.set(laptop, { left: '73%', top: '57%', scale: .9, xPercent: -50, yPercent: -50 })
        gsap.set(lid, { scaleY: .77, transformOrigin: 'center bottom', rotateX: 0 })
        gsap.set(notes, { autoAlpha: 0, y: 12 })
        gsap.set('.build-laptop', { '--build': .08 })
        const heroStory = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: {
          trigger: '.hero', start: 'top top', end: 'bottom bottom', scrub: .18,
          invalidateOnRefresh: true,
        } })
        heroStory
          .to('.hero-copy-block', { autoAlpha: 0, y: -25, duration: .23 }, .08)
          .to(laptop, { left: '50%', top: '50%', scale: 1.1, duration: .34 }, .04)
          .to(lid, { scaleY: 1, rotateX: 0, duration: .32 }, .05)
          .to('.build-laptop', { '--build': .72, duration: .32 }, .08)
          .to('.hero-path-progress', { scaleY: 1, duration: .85 }, 0)
          .to('.scroll-invitation', { autoAlpha: 0, duration: .1 }, .1)
        notes.forEach((note, index) => {
          heroStory.to(note, { autoAlpha: 1, y: 0, duration: .08 }, .38 + index * .085)
        })
        heroStory.to('.build-laptop', { '--build': 1, duration: .16 }, .72)
        heroStory.to('.laptop-live-preview', { opacity: 1, duration: .18 }, .74)
        heroStory.to('.laptop-editor', { opacity: 0, duration: .18 }, .74)
      })

      mm.add('(max-width: 780px)', () => {
        const copy = root.querySelector('.hero-copy-block')
        const build = root.querySelector('.build-laptop')
        const editor = root.querySelector('.laptop-editor')
        const preview = root.querySelector('.laptop-live-preview')
        const invitation = root.querySelector('.scroll-invitation')
        gsap.set(copy, { autoAlpha: 1, y: 0 })
        gsap.set(laptop, { left: '50%', top: '91%', xPercent: -50, yPercent: -50, scale: .62 })
        gsap.set(lid, { scaleY: .78, transformOrigin: 'center bottom', rotateX: 0 })
        gsap.set(notes, { autoAlpha: 0, y: 14 })
        gsap.set(build, { '--build': .08 })
        gsap.set(editor, { opacity: 1 })
        gsap.set(preview, { opacity: 0 })
        const story = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: {
          trigger: '.hero', start: 'top top', end: 'bottom bottom', scrub: .22,
          invalidateOnRefresh: true,
        } })
        story.to(copy, { autoAlpha: 0, y: -34, duration: .2, pointerEvents: 'none' }, .04)
          .to(invitation, { autoAlpha: 0, duration: .1 }, .06)
          .to(laptop, { top: '52%', scale: 1, duration: .32 }, .24)
          .to(lid, { scaleY: 1, duration: .3 }, .24)
          .to(build, { '--build': .75, duration: .36 }, .24)
        notes.forEach((note, index) => story.to(note, {
          autoAlpha: 1, y: 0, duration: .085,
        }, .56 + index * .07))
        story.to(build, { '--build': 1, duration: .12 }, .84)
          .to(preview, { opacity: 1, duration: .12 }, .85)
          .to(editor, { opacity: 0, duration: .12 }, .85)
      })
      mm.add('(min-width: 781px)', () => {
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
      gsap.fromTo('.narrative-dot', { y: 0 }, { y: () => Math.max(0, document.querySelector('.narrative-track').getBoundingClientRect().height - 9), ease: 'none', scrollTrigger: { trigger: '.projects', start: 'top 70%', endTrigger: '.contact', end: 'top 40%', scrub: .6 } })
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
