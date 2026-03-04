import './HomeContent.css';

function HomeContent() {
  return (
    <div className="main-layout">

      {/* ===== LEFT COLUMN ===== */}
      <div className="left-column">

        {/* Intro Panel */}
        <div className="retro-panel">
          <div className="panel-title-bar">Intro</div>
          <div className="panel-body">
            <div className="intro-item">
              <span className="intro-icon">💼</span>
              <span>Works at TechCorp (since 2021)</span>
            </div>
            <div className="intro-item">
              <span className="intro-icon">🎓</span>
              <span>Studied Computer Science at Stanford University</span>
            </div>
            <div className="intro-item">
              <span className="intro-icon">📍</span>
              <span>Lives in San Francisco, CA</span>
            </div>
            <div className="intro-item">
              <span className="intro-icon">🔗</span>
              <span>cev-alew.cevr</span>
            </div>
            <div className="intro-item">
              <span className="intro-icon">🐙</span>
              <span>Github: alexdevr</span>
            </div>
            <div className="intro-item">
              <span className="intro-icon">💼</span>
              <span>Linkedin: injalexdevr</span>
            </div>
          </div>
        </div>

        {/* Skills Panel */}
        <div className="retro-panel">
          <div className="panel-title-bar">Skills</div>
          <div className="panel-body">
            <div className="skills-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
        </div>

      </div>

      {/* ===== MIDDLE COLUMN (Feed) ===== */}
      <div className="middle-column">

        {/* Post Card 1 */}
        <div className="retro-panel post-card">
          <div className="post-header">
            <div className="post-avatar">AR</div>
            <div className="post-meta">
              <span className="post-name">Alex Rodriguez</span>
              <span className="post-time">20h · 🌐</span>
            </div>
            <span className="post-more">···</span>
          </div>

          <div className="post-body">
            {/* Featured Project Image Placeholder */}
            <div className="post-image-placeholder">
              <span>📸 Project Screenshot</span>
            </div>
            <div className="post-text">
              <p className="post-project-title">Featured Project: DevFlow Collaboration Platform</p>
              <p className="post-description">
                Building modern web applications. Specialized in React, Node.js, AWS, and modern full-stack.
              </p>
              <div className="post-tags">
                <span className="post-tag">React</span>
                <span className="post-tag">Node</span>
                <span className="post-tag">GraphQL</span>
                <span className="post-tag">AWS</span>
              </div>
            </div>
          </div>

          <div className="post-reactions">
            <span>👍 42</span>
            <span className="post-comments">💬 7 comments</span>
          </div>

          <div className="post-actions">
            <button className="retro-btn post-action-btn">👍 Like</button>
            <button className="retro-btn post-action-btn">💬 Comment</button>
            <button className="retro-btn post-action-btn">↗ Share</button>
          </div>
        </div>

        {/* Post Card 2 */}
        <div className="retro-panel post-card">
          <div className="post-header">
            <div className="post-avatar">AR</div>
            <div className="post-meta">
              <span className="post-name">Alex Rodriguez</span>
              <span className="post-time">25h · 🌐</span>
            </div>
            <span className="post-more">···</span>
          </div>

          <div className="post-body">
            <div className="post-image-placeholder">
              <span>📸 Project Screenshot</span>
            </div>
            <div className="post-text">
              <p className="post-project-title">E-commerce Site Launch</p>
              <p className="post-description">
                Just launched a new e-commerce platform built with Next.js and Stripe integration.
              </p>
              <div className="post-tags">
                <span className="post-tag">Next.js</span>
                <span className="post-tag">Stripe</span>
                <span className="post-tag">MySQL</span>
              </div>
            </div>
          </div>

          <div className="post-reactions">
            <span>👍 18</span>
            <span className="post-comments">💬 3 comments</span>
          </div>

          <div className="post-actions">
            <button className="retro-btn post-action-btn">👍 Like</button>
            <button className="retro-btn post-action-btn">💬 Comment</button>
            <button className="retro-btn post-action-btn">↗ Share</button>
          </div>
        </div>

      </div>

      {/* ===== RIGHT COLUMN ===== */}
      <div className="right-column">

        {/* Pinned Projects Panel */}
        <div className="retro-panel">
          <div className="panel-title-bar">Pinned Projects</div>
          <div className="panel-body">
            <div className="pinned-projects-grid">
              <div className="pinned-project-card">
                <div className="pinned-project-thumb">📊</div>
                <span className="pinned-project-name">FitTrack</span>
              </div>
              <div className="pinned-project-card">
                <div className="pinned-project-thumb">💬</div>
                <span className="pinned-project-name">ChatApp</span>
              </div>
              <div className="pinned-project-card">
                <div className="pinned-project-thumb">🌐</div>
                <span className="pinned-project-name">Portfolio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Panel */}
        <div className="retro-panel">
          <div className="panel-title-bar">Contact</div>
          <div className="panel-body">
            <button className="retro-btn contact-btn full-width-btn">
              ✉ Send Message
            </button>
          </div>
        </div>

        {/* Tech Stack Panel */}
        <div className="retro-panel">
          <div className="panel-title-bar">Tech Stack</div>
          <div className="panel-body">
            <div className="tech-stack-grid">
              <div className="tech-icon js-icon">JS</div>
              <div className="tech-icon py-icon">🐍</div>
              <div className="tech-icon db-icon">🗄️</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeContent;