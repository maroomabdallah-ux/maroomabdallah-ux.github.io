import { useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { Navigation } from "./components/Navigation";
import { CaseStudy } from "./components/CaseStudy";
import { ProjectPreview } from "./components/ProjectPreview";
import { Reveal } from "./components/Reveal";
import { GithubIcon, LinkedinIcon } from "./components/SocialIcons";
import { experience, profile, projects, skills } from "./data/portfolio";
import { useScrollMotion } from "./hooks/useScrollMotion";
import "./styles.css";

function SectionHeader({ index, label, title, subtitle }) {
  return (
    <Reveal className="section-header">
      <p className="section-eyebrow">
        <span>{index}</span> / {label}
      </p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-kicker"><span>Independent portfolio / 2026</span><span>Amman, Jordan</span></div>
        <div className="hero-title-wrap" data-scroll-motion>
          <h1><span>Building digital</span><em>experiences.</em></h1>
          <div className="hero-seal" aria-hidden="true"><Sparkles /><span>AI<br />BACKEND<br />SYSTEMS</span></div>
        </div>
        <div className="hero-bottom">
          <div><p className="hero-name">Maroom Abdalla</p><p className="hero-role">AI &amp; Backend Engineer</p></div>
          <p className="hero-copy">I shape intelligent applications, agentic workflows, and scalable backend systems into focused digital products.</p>
          <a className="circle-link" href="#projects" aria-label="Explore selected work"><ArrowRight /><span>Explore<br />work</span></a>
        </div>
        <a className="scroll-cue" href="#about"><i /> Scroll to discover</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section about" id="about">
      <div className="container">
        <SectionHeader
          index="01"
          label="ABOUT"
          title="About Me"
          subtitle="Get to know the engineer behind the systems."
        />
        <div className="about-grid">
          <Reveal className="about-profile">
            <h3>I connect backend engineering with practical AI.</h3>
            <p>
              I’m a Computer Science graduate focused on AI engineering, backend
              development, and intelligent software systems.
            </p>
            <p>
              I build AI-powered applications, agentic workflows, APIs,
              database-driven systems, and full-stack products—with a strong
              focus on software that solves real-world problems.
            </p>
            <div className="profile-links">
              <span>
                <MapPin /> Amman, Jordan
              </span>
              <a href={`mailto:${profile.email}`}>
                <Mail /> {profile.email}
              </a>
              <a href={profile.cv} target="_blank" rel="noreferrer">
                <Download /> Download CV
              </a>
            </div>
          </Reveal>
        <div className="stats-grid" data-scroll-motion>
            <Reveal className="stat-card" delay={60}>
              <strong>
                AI +<br />
                BACKEND
              </strong>
              <span>Primary Focus</span>
            </Reveal>
            <Reveal className="stat-card" delay={120}>
              <strong>4+</strong>
              <span>Major Projects</span>
            </Reveal>
            <Reveal className="stat-card" delay={180}>
              <strong>10+</strong>
              <span>Technologies</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="page-section skills" id="skills">
      <div className="container">
        <SectionHeader
          index="02"
          label="SKILLS"
          title="My Tech Stack"
          subtitle="Technologies and tools I use to build intelligent systems."
        />
        <div className="skills-grid">
          {skills.map((group, index) => {
            return (
              <Reveal
                as="article"
                className="skill-card"
                delay={index * 70}
                key={group.title}
              >
                <span className="card-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }) {
  return (
    <section className="page-section projects" id="projects">
      <div className="container">
        <SectionHeader
          index="03"
          label="PROJECTS"
          title="Featured Projects"
          subtitle="Intelligent systems and applications I’ve built."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              className={`project-card ${index % 2 ? 'is-reverse' : ''}`}
              delay={(index % 3) * 70}
              key={project.slug}
            >
              <button
                className="project-card-open"
                onClick={() => onOpen(project)}
                aria-label={`Open ${project.title} project details`}
              >
                <div className="project-media" data-scroll-motion>
                  <ProjectPreview project={project} />
                  {project.featured && (
                    <span className="featured-label">Featured</span>
                  )}
                </div>
                <div className="project-card-body">
                  <p className="project-category"><span>{project.number}</span>{project.subtitle}</p>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <ArrowUpRight />
                  </div>
                  <p>{project.description}</p>
                  <ul>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <span className="details-link">
                    Project details <ArrowRight />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="page-section experience" id="experience">
      <div className="container narrow-container">
        <SectionHeader
          index="04"
          label="EXPERIENCE"
          title="Work Experience"
          subtitle="My journey building a foundation across AI and software engineering."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal
              as="article"
              className="timeline-entry"
              delay={index * 80}
              key={item.company}
            >
              <div className="timeline-marker">
                <span>{index + 1}</span>
              </div>
              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <p>{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <time>{item.period}</time>
                </div>
                <p className="timeline-summary">{item.summary}</p>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="page-section education" id="education">
      <div className="container narrow-container">
        <SectionHeader
          index="05"
          label="EDUCATION"
          title="Education"
          subtitle="Academic background and continuous learning."
        />
        <Reveal className="education-card">
          <div className="education-icon">
            <GraduationCap />
          </div>
          <div className="education-main">
            <p>Bachelor of Science</p>
            <h3>Computer Science</h3>
            <span>
              The World Islamic Sciences and Education University (WISE)
            </span>
          </div>
          <time>2026</time>
          <div className="education-facts">
            <span>
              <strong>89%</strong> GPA
            </span>
            <span>
              <strong>2nd</strong> in Computer Science cohort
            </span>
            <span>
              <strong>English</strong> Language of instruction
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio message from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section className="page-section contact" id="contact">
      <div className="container">
        <SectionHeader
          index="06"
          label="CONTACT"
          title="Let’s Connect"
          subtitle="Have an opportunity, project, or idea in mind? I’d love to hear from you."
        />
        <div className="contact-grid">
          <Reveal className="contact-details">
            <p className="availability-line">
              <i /> Available for the right opportunity
            </p>
            <a href={`mailto:${profile.email}`}>
              <Mail />
              <span>
                <small>Email</small>
                {profile.email}
              </span>
            </a>
            <span>
              <MapPin />
              <span>
                <small>Location</small>Amman, Jordan
              </span>
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              <span>
                <small>GitHub</small>maroomabdallah-ux
              </span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
              <span>
                <small>LinkedIn</small>Maroom Abdalla
              </span>
            </a>
          </Reveal>
        <Reveal className="contact-form" delay={100}>
            <form onSubmit={submit}>
              <label>
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea or opportunity"
                />
              </label>
              <button className="button button-primary" type="submit">
                Send message <Send />
              </button>
              <p>This opens your email app—no information is stored.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-brand">
          <strong>MAROOM ABDALLA</strong>
          <span>AI &amp; BACKEND ENGINEER</span>
        </div>
        <nav aria-label="Footer navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Maroom Abdalla</p>
        <p>Designed &amp; built by Maroom Abdalla</p>
        <a href="#home">
          Back to top <ArrowUp />
        </a>
      </div>
    </footer>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  useScrollMotion();
  return (
    <div className="site-shell">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={setActiveProject} />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      {activeProject && (
        <CaseStudy
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

export default App;
