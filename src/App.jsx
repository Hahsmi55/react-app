import React from "react";

function App() {
  const stages = [
    { number: "01", name: "Git Commit", description: "Code pushed to GitHub", status: "COMPLETED", icon: "⌘" },
    { number: "02", name: "Jenkins Build", description: "Pipeline triggered, clone the code", status: "COMPLETED", icon: "⚙" },
    { number: "03", name: "Docker Hub", description: "Image build and pushed with latest tag", status: "COMPLETED", icon: "🐳" },
    { number: "04", name: "Production", description: "Application deployed successfully on ec2 or any other service", status: "LIVE", icon: "🚀" },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo"><span className="logo-icon">⚡</span>CI CD</div>
        <div className="nav-right"><span className="live-indicator" /> SYSTEM OPERATIONAL</div>
      </nav>

      <main className="container">
        <section className="hero">
          <div className="badge"><span className="live-indicator" /> CONTINUOUS INTEGRATION &amp; DELIVERY</div>
          <h1>One Commit.<br /><span>One Production Deployment.</span></h1>
          <p>From a single Git commit to a running production application. No manual builds. No manual deployments. Just automation.</p>
          <div className="hero-buttons">
            <a href="#pipeline" className="primary-btn">Explore Pipeline →</a>
            <a href="https://www.jenkins.io/" target="_blank" rel="noreferrer" className="secondary-btn">Jenkins Documentation ↗</a>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card"><span className="stat-label">PIPELINE STATUS</span><h2 className="green">SUCCESS</h2><span className="stat-sub">All stages passed</span></div>
          <div className="stat-card"><span className="stat-label">DOCKER IMAGE</span><h2>latest</h2><span className="stat-sub">Latest image tag</span></div>
          <div className="stat-card"><span className="stat-label">DEPLOYMENT</span><h2 className="green">LIVE</h2><span className="stat-sub">Production environment</span></div>
          <div className="stat-card"><span className="stat-label">TRIGGER</span><h2>GIT PUSH</h2><span className="stat-sub">Automated execution</span></div>
        </section>

        <section className="pipeline-section" id="pipeline">
          <div className="section-heading">
            <div><span className="eyebrow">AUTOMATED WORKFLOW</span><h2>Deployment Pipeline</h2></div>
            <span className="success-badge">● BUILD SUCCESSFUL</span>
          </div>
          <div className="pipeline">
            {stages.map((stage, index) => (
              <React.Fragment key={stage.number}>
                <div className="stage">
                  <div className="stage-icon">{stage.icon}</div>
                  <span className="stage-number">STAGE {stage.number}</span>
                  <h3>{stage.name}</h3>
                  <p>{stage.description}</p>
                  <span className="stage-status">✓ {stage.status}</span>
                </div>
                {index !== stages.length - 1 && <div className="connector"><span>➜</span></div>}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="details">
          <div className="detail-card">
            <div className="card-header"><h3>Commit Information</h3><span className="tag">GITHUB</span></div>
            <div className="info-row"><span>Repository</span><strong>one-commit-to-production</strong></div>
            <div className="info-row"><span>Branch</span><strong>main</strong></div>
            <div className="info-row"><span>Trigger</span><strong>Git Push</strong></div>
            <div className="info-row"><span>Commit message</span><strong>feat: update application</strong></div>
          </div>
          <div className="detail-card">
            <div className="card-header"><h3>Container Information</h3><span className="tag blue">DOCKER</span></div>
            <div className="info-row"><span>Image</span><strong>yourusername/my-app</strong></div>
            <div className="info-row"><span>Image Tag</span><strong>latest</strong></div>
            <div className="info-row"><span>Registry</span><strong>Docker Hub</strong></div>
            <div className="info-row"><span>Environment</span><strong className="green">Production</strong></div>
          </div>
        </section>

        <section className="deployment-banner">
          <div className="rocket">🚀</div>
          <div><span className="eyebrow">THE RESULT</span><h2>Code changed. Production updated.</h2><p>One commit is all it takes to move your code from development to production.</p></div>
          <div className="live-box"><span className="live-indicator" /> LIVE</div>
        </section>

        <footer>
          <p>BUILT WITH REACT • AUTOMATED WITH JENKINS • POWERED BY DOCKER</p>
          <span>ONE COMMIT TO PRODUCTION © 2026</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
