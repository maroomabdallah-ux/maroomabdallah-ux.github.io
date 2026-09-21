import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import { ArrowRight, ArrowUp, ArrowUpRight, Download, GraduationCap, MapPin, Send } from 'lucide-react'
import { Navigation } from './components/Navigation'
import { CaseStudy } from './components/CaseStudy'
import { ProjectPreview } from './components/ProjectPreview'
import { BuildLaptop } from './components/BuildLaptop'
import { Reveal } from './components/Reveal'
import { GithubIcon, LinkedinIcon } from './components/SocialIcons'
import { experience, profile, projects, skills } from './data/portfolio'
import { useScrollMotion } from './hooks/useScrollMotion'
import './styles.css'

const roles = ['AI Engineer', 'Full-Stack Web Developer', 'Backend Developer']

function SectionHeader({ index, label, title, subtitle }) {
  return <Reveal className="section-header"><p className="section-eyebrow"><span>{index}</span> / {label}</p><h2>{title}</h2><p>{subtitle}</p></Reveal>
}

function SystemCanvas() {
  return <div className="stack-story" aria-label="A product moving through the full-stack engineering process">
    <div className="stack-story-head"><span>PRODUCT SYSTEM / 001</span><i>FROM IDEA TO REALITY</i></div>
    <div className="stack-window story-interface"><small>01 — EXPERIENCE</small><div className="mini-nav"><i /><i /><i /></div><div className="mini-hero"><b>Useful ideas,<br />made tangible.</b><span /></div></div>
    <div className="stack-code story-backend"><small>02 — APPLICATION LAYER</small><p><em>POST</em> /api/agent/run</p><p><em>GET</em> /api/products</p><p><b>def</b> build_useful_system():</p><p>&nbsp;&nbsp;return <mark>clarity + logic</mark></p></div>
    <div className="stack-data story-intelligence"><small>03 — INTELLIGENCE + DATA</small><div><span>context</span><i>→</i><span>agent</span><i>→</i><span>action</span></div><p>PostgreSQL · tools · guardrails</p></div>
    <div className="story-signal" aria-hidden="true"><span /><i /></div>
    <p className="system-caption"><b>Full-stack, with intelligence built in.</b><span>Designing the complete journey—not an isolated layer.</span></p>
  </div>
}

function NarrativeRail() {
  return <aside className="narrative-rail" aria-hidden="true"><div className="narrative-track"><i className="narrative-progress" /><b className="narrative-dot" /></div><span data-stage="projects">work</span><span data-stage="skills">tools</span><span data-stage="experience">path</span><span data-stage="contact">connect</span></aside>
}

function Hero({ onOpen }) {
  const heroRef = useRef(null)
  const [role, setRole] = useState(0)
  const [displayRole, setDisplayRole] = useState(roles[0])
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = window.matchMedia('(pointer: coarse)').matches
    const cursor = hero.querySelector('.virtual-cursor')
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let scrambleTween
    const scramble = (next) => {
      const target = roles[next]
      let frame = 0
      scrambleTween?.kill()
      scrambleTween = gsap.to({}, { duration: .6, ease: 'none', onUpdate() {
        frame = Math.min(target.length, Math.floor(this.progress() * (target.length + 2)))
        setDisplayRole(target.split('').map((letter, i) => letter === ' ' || i < frame ? letter : letters[Math.floor(Math.random() * letters.length)]).join(''))
      }, onComplete: () => setDisplayRole(target) })
      setRole(next)
    }
    if (reduce) return undefined
    if (touch) {
      // Touch devices get a short, visible identity sequence without a fake mouse pointer.
      const roleSequence = gsap.timeline({ delay: .25 })
      ;[1, 2, 0].forEach((index) => roleSequence.call(() => scramble(index)).to({}, { duration: .8 }))
      return () => { roleSequence.kill(); scrambleTween?.kill() }
    }

    const buttons = [...hero.querySelectorAll('.identity-option')]
    const heading = hero.querySelector('.hero-heading')
    const workLink = hero.querySelector('.primary-link')
    const point = (element) => {
      const rect = element.getBoundingClientRect()
      return { x: rect.left + rect.width * .7, y: rect.top + rect.height * .55 }
    }
    const railPoint = () => {
      const dot = document.querySelector('.narrative-dot')
      if (dot && getComputedStyle(document.querySelector('.narrative-rail')).display !== 'none') {
        const rect = dot.getBoundingClientRect()
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      }
      return { x: window.innerWidth - 36, y: window.innerHeight * .5 }
    }
    let following = false
    let timeline
    let context
    let raf = 0
    const follow = () => {
      if (!following) return
      const target = railPoint()
      gsap.to(cursor, { ...target, duration: .55, ease: 'power2.out', overwrite: 'auto' })
    }
    const onScroll = () => {
      if (!following) {
        timeline?.kill()
        following = true
        cursor.classList.add('is-following')
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(follow)
    }
    const finish = () => {
      following = true
      cursor.classList.add('is-following')
      gsap.to(cursor, { ...railPoint(), duration: .85, ease: 'power3.inOut', overwrite: 'auto' })
    }
    context = gsap.context(() => {
      gsap.set(cursor, { ...point(buttons[0]), xPercent: -15, yPercent: -10, opacity: 1 })
      if (window.scrollY > 80) {
        finish()
        return
      }
      timeline = gsap.timeline({ delay: .35, onComplete: finish })
      buttons.forEach((button, index) => {
        timeline.to(cursor, { ...point(button), duration: .68, ease: 'power2.inOut' })
          .to(cursor, { scale: .72, duration: .1 })
          .call(() => scramble(index))
          .fromTo(button, { '--click-ring': 0 }, { '--click-ring': 1, duration: .25 }, '<')
          .to(cursor, { scale: 1, duration: .16 })
      })
      timeline.to(cursor, { ...point(heading), duration: .75, ease: 'power2.inOut' })
        .to(cursor, { ...point(workLink), duration: .75, ease: 'power2.inOut' })
        .to(workLink, { scale: .97, duration: .12 })
        .to(workLink, { scale: 1, duration: .16 })
    }, hero)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
      scrambleTween?.kill()
      context?.revert()
    }
  }, [])

  return <section className="hero" id="home" ref={heroRef}>
    <div className="hero-custard-field" aria-hidden="true" />
    <div className="container hero-layout"><div className="hero-copy-block"><p className="hero-kicker"><span>maroom.</span><span>Portfolio / 2026</span></p>
      <div className="identity-switcher" aria-label={`Professional identity: ${roles[role]}`}>{roles.map((item, index) => <button className={`identity-option ${role === index ? 'is-active' : ''}`} onClick={() => scramble(index)} key={item}><i />{item}</button>)}</div>
      <p className="hero-live-role" aria-live="off"><span className="live-indicator" />{displayRole}<span className="type-caret" /></p>
      <h1 className="hero-heading">Turning ideas into<br /><em>intelligent experiences.</em></h1><p className="hero-intro">I’m Maroom Abdalla. I build AI-powered systems, reliable backends, and thoughtful web experiences.</p>
      <div className="hero-actions"><a className="primary-link" href="#projects">Explore my work <ArrowRight /></a><a className="text-link" href={profile.cv} target="_blank" rel="noreferrer"><Download /> Download CV</a></div></div>
      <div className="hero-system-wrap"><div className="hero-preview-label"><span>THE BUILD / 001</span><span>AI AGENT / CONCEPT ↗</span></div><BuildLaptop /><div className="hero-preview-foot">SCROLL TO BUILD THE STACK <ArrowRight size={15} /></div></div>
      <div className="hero-skill-stream" aria-hidden="true">{skills.map((group, index) => <div className={`hero-skill-note ${index % 2 ? 'skill-right' : 'skill-left'}`} data-skill-step={index} key={group.title}><span>0{index + 1}</span><div><b>{group.title}</b><p>{group.items.slice(0, 4).join(' · ')}</p></div></div>)}</div>
    </div><a className="scroll-invitation" href="#projects" aria-label="Scroll to selected work"><span>SCROLL TO EXPLORE</span><i><ArrowRight size={17} /></i></a><div className="virtual-cursor" aria-hidden="true"><svg viewBox="0 0 24 28"><path d="M2 2v21l5.3-5.1 3.8 8 4-2-3.8-7.6H19L2 2Z" /></svg><span>explore</span></div>
  </section>
}

function Projects({ onOpen }) {
  return <section className="page-section projects" id="projects"><div className="container"><SectionHeader index="01" label="SELECTED WORK" title="Systems in practice." subtitle="Real applications where product thinking, engineering, and AI meet." /><div className="project-list">
    {projects.map((project, index) => <article className={`project-story ${index % 2 ? 'is-reverse' : ''}`} data-project-index={index} key={project.slug}><button className="project-media" onClick={() => onOpen(project)} aria-label={`Open ${project.title} case study`}><ProjectPreview project={project} /></button><Reveal className="project-copy"><p className="project-index"><span>{project.number}</span>{project.subtitle}</p><h3>{project.title}</h3><p>{project.description}</p><ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><button className="details-link" onClick={() => onOpen(project)}>View case study <ArrowRight /></button></Reveal></article>)}
  </div><div className="project-skill-bridge" aria-hidden="true"><span>Built with</span><i /></div></div></section>
}

function Skills() {
  const [active, setActive] = useState(0)
  return <section className="page-section skills" id="skills"><div className="container"><SectionHeader index="02" label="CAPABILITIES" title="The tools behind the work." subtitle="A working stack organized by what it helps me build." /><div className="skills-index"><div className="skills-path" aria-hidden="true"><i className="skills-path-fill" /></div>
    {skills.map((group, index) => <article className={`skill-row ${active === index ? 'is-active' : ''}`} key={group.title}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index} aria-controls={`skill-panel-${index}`}><span>0{index + 1}</span><h3>{group.title}</h3><i>{active === index ? '−' : '+'}</i></button><div className="skill-panel" id={`skill-panel-${index}`}><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}
  </div></div></section>
}

function Experience() {
  return <section className="page-section experience" id="experience"><div className="experience-transition" aria-hidden="true" /><div className="container narrow-container"><SectionHeader index="03" label="EXPERIENCE" title="A path built by doing." subtitle="Professional experience across full-stack systems, AI, and backend engineering." /><div className="experience-timeline"><div className="timeline-line" aria-hidden="true"><i className="timeline-progress" /></div>
    {experience.map((item, index) => <article className="timeline-entry" key={item.company}><span className="timeline-node">{String(index + 1).padStart(2, '0')}</span><div className="timeline-period"><time>{item.period}</time>{item.status && <b>{item.status}</b>}</div><div className="timeline-content"><p>{item.company}</p><h3>{item.role}</h3><span>{item.summary}</span><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}
    <a className="timeline-cta" href="#contact"><span>Let’s build what’s next</span><ArrowRight /></a></div></div></section>
}

function Education() {
  return <section className="page-section education" id="education"><div className="container narrow-container"><SectionHeader index="04" label="EDUCATION" title="Grounded in fundamentals." subtitle="Computer science, strengthened through practical product engineering." /><Reveal className="education-editorial"><GraduationCap /><p>Bachelor of Science</p><h3>Computer Science</h3><span>The World Islamic Sciences and Education University (WISE)</span><time>2026</time><div><b>89% GPA</b><b>2nd in CS cohort</b><b>English instruction</b></div></Reveal></div></section>
}

function Contact() {
  const submit = (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${data.get('name')}`)}&body=${encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)}` }
  return <section className="page-section contact" id="contact"><div className="container"><SectionHeader index="05" label="CONTACT" title="Make something meaningful." subtitle="Have an opportunity, project, or thoughtful idea? My inbox is open." /><div className="contact-grid"><Reveal className="contact-details"><p className="availability-line"><i />Available for the right opportunity</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a><div className="contact-meta"><span><MapPin />Amman, Jordan</span><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon />LinkedIn</a></div></Reveal><Reveal className="contact-form" delay={100}><form onSubmit={submit}><label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me about your idea or opportunity" /></label><button className="primary-link" type="submit">Open email draft <Send /></button><p>This opens your email app. Nothing is stored.</p></form></Reveal></div></div></section>
}

function Footer() { return <footer><div className="container footer-main"><div><strong>maroom.</strong><span>AI · FULL-STACK · BACKEND</span></div><nav><a href="#projects">Work</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><a href="#home">Back to top <ArrowUp /></a></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Maroom Abdalla</p><p>Designed &amp; built in Amman</p></div></footer> }

function App() { const [activeProject, setActiveProject] = useState(null); const rootRef = useRef(null); useScrollMotion(rootRef); return <div className="site-shell" ref={rootRef}><a className="skip-link" href="#projects">Skip to selected work</a><Navigation /><NarrativeRail /><main><Hero onOpen={setActiveProject} /><Projects onOpen={setActiveProject} /><Skills /><Experience /><Education /><Contact /></main><Footer />{activeProject && <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />}</div> }

export default App
