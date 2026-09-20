export function ProjectVisual({ project, large = false }) {
  if (project.images?.length) {
    return <div className={`project-screen ${large ? 'is-large' : ''}`}>
      <div className="browser-bar"><i /><i /><i /><span>{project.slug}.workspace</span></div>
      <img src={project.coverImage || project.images[0]} alt={project.imageAlt} loading="lazy" />
    </div>
  }

  if (project.kind === 'agent') {
    return <div className="agent-visual" aria-label="Abstract Mini-ERP AI Agent interface">
      <div className="agent-head"><span className="status-dot" /> Operational assistant <small>Secure session</small></div>
      <div className="agent-message user-message">Show today’s inventory risks</div>
      <div className="agent-message ai-message"><span>{project.monogram}</span><p>I found 3 items below reorder level. Access checked against your role.</p></div>
      <div className="tool-flow"><span>QUERY</span><i /><span>RBAC</span><i /><span>RESULT</span></div>
    </div>
  }

  return <div className="career-visual" aria-label="Abstract CareerPilot recommendation interface">
    <div className="career-top"><span>{project.monogram}</span><p>CAREER<br />INTELLIGENCE</p><small>PROFILE MATCH / 01</small></div>
    <div className="profile-line"><b>Backend Engineer</b><span>Amman · Remote</span></div>
    <div className="match-grid"><div><strong>94</strong><small>MATCH</small></div><div><span>CV UNDERSTANDING</span><i /><span>LOCATION SIGNAL</span><i /><span>ROLE PREFERENCE</span></div></div>
    <div className="career-foot">REAL OPPORTUNITIES <span>→</span></div>
  </div>
}
