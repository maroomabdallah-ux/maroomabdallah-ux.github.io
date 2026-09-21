const code = [
  ['01', 'from agents import Agent, Tool'],
  ['02', 'agent = Agent(tools=[search, analyze])'],
  ['03', 'context = retrieve(user_request)'],
  ['04', 'plan = agent.reason(context)'],
  ['05', 'result = agent.execute(plan)'],
  ['06', 'return validate(result)'],
]

/** Illustrative AI-agent workflow, not a live execution or a project screenshot. */
export function BuildLaptop() {
  return <div className="build-laptop" aria-label="Illustration of an AI agent being programmed and executing a workflow">
    <div className="laptop-lid"><div className="laptop-bezel">
      <span className="laptop-camera" aria-hidden="true" />
      <div className="laptop-display">
        <div className="laptop-editor" aria-hidden="true">
          <div className="editor-top"><span className="editor-dots"><i /><i /><i /></span><span>agent.py</span><span>● DESIGNING</span></div>
          <div className="editor-body">{code.map(([number, line], index) => <div className="code-line" key={number} style={{ '--line': index }}><span className="line-number">{number}</span><span className="agent-code-text">{line}</span>{index === 5 && <i className="editor-caret" />}</div>)}</div>
          <div className="editor-status">PYTHON · AGENT WORKFLOW <span>Illustrative demo</span></div>
        </div>
        <div className="laptop-live-preview" aria-hidden="true">
          <div className="agent-preview"><div className="agent-preview-head"><span className="agent-pulse"/> AI AGENT / WORKFLOW <small>CONCEPT DEMO</small></div>
            <div className="agent-preview-title">From intent to action<span>.</span></div>
            <div className="agent-flow"><div className="agent-node"><small>01 / INPUT</small><strong>User request</strong></div><i>→</i><div className="agent-node agent-node-active"><small>02 / REASON</small><strong>AI Agent</strong></div><i>→</i><div className="agent-node"><small>03 / TOOLS</small><strong>Safe actions</strong></div></div>
            <div className="agent-preview-foot"><span>CONTEXT → PLAN → VALIDATE</span><span className="agent-progress"><i/></span></div>
          </div>
        </div>
        <div className="laptop-build-caption" aria-hidden="true">CODE <span>→</span> AGENT</div>
      </div>
    </div></div>
    <div className="laptop-base"><div className="laptop-trackpad" /></div><div className="laptop-foot" />
    <p className="laptop-undertext"><span>01 / WRITE</span><span>02 / REASON</span><span>03 / EXECUTE</span></p>
  </div>
}
