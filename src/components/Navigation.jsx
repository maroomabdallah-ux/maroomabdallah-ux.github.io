import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const items = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Experience', 'experience'], ['Education', 'education'], ['Contact', 'contact']]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id))
    }, { rootMargin: '-38% 0px -55% 0px' })
    items.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  useEffect(() => { document.body.classList.toggle('menu-is-open', open); return () => document.body.classList.remove('menu-is-open') }, [open])
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }

  return <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
    <nav className="container nav" aria-label="Primary navigation">
      <button className="brand" onClick={() => go('home')} aria-label="Return to home"><span>MAROOM</span><small>AI &amp; BACKEND ENGINEER</small></button>
      <div className="nav-links">{items.map(([label, id]) => <button className={active === id ? 'active' : ''} key={id} onClick={() => go(id)}>{label}</button>)}</div>
      <button className="nav-cta" onClick={() => go('contact')}>Get in touch</button>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </nav>
    <div className="mobile-navigation" id="mobile-navigation" aria-hidden={!open}><div className="container mobile-menu-inner">{items.map(([label, id], index) => <button className={active === id ? 'active' : ''} key={id} onClick={() => go(id)}><span>0{index + 1}</span>{label}</button>)}</div></div>
  </header>
}
