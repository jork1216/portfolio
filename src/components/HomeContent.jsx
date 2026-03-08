import './HomeContent.css';
import flowershop from '../images/flowershop.jpg';
import wedding from '../images/wedding.jpg';
import biosensor from '../images/biosensor.jpg';
import pfp from '../images/pfp1.jpg';

function HomeContent() {
  return (
    <div className="main-layout">
      
       {/* Top row: left + right side by side */}
      <div className="top-row">
        {/* ===== LEFT COLUMN ===== */}
        <div className="left-column">

          {/* Intro Panel */}
          <div className="retro-panel">
            <div className="panel-title-bar">Intro</div>
            <div className="panel-body">
            
              <div className="intro-item">
                <span className="intro-icon">🎓</span>
                <span>Studied Computer Engineering at Southern Luzon State University</span>
              </div>
              <div className="intro-item">
                <span className="intro-icon">📍</span>
                <span>Lives in Lucena City, Philippines</span>
              </div>
              <div className="intro-item">
                <span className="intro-icon">🔗</span>
                <span>junkcarlo.dev</span>
              </div>
              <div className="intro-item">
                <span className="intro-icon">🐙</span>
                <span>Github: junkcarlo16</span>
              </div>
              <div className="intro-item">
                <span className="intro-icon">💼</span>
                <span>Linkedin: John Carlo Ramos</span>
              </div>
            </div>
          </div>

          {/* Skills Panel */}
          <div className="retro-panel">
            <div className="panel-title-bar">Skills</div>
            <div className="panel-body">
              <div className="skills-list">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
              </div>
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
                  <div className="pinned-project-thumb">🌻</div>
                  <span className="pinned-project-name">Flower Shop</span>
                </div>
                <div className="pinned-project-card">
                  <div className="pinned-project-thumb">✍️</div>
                  <span className="pinned-project-name">Handwriting App</span>
                </div>
                <div className="pinned-project-card">
                  <div className="pinned-project-thumb">🔬</div>
                  <span className="pinned-project-name">Biosensor</span>
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
                
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ===== MIDDLE COLUMN (Feed) ===== */}
      <div className="middle-column">

        {/* Post Card 1 */}
        <div className="retro-panel post-card">
          <div className="post-header">
            <img src={pfp} alt="avatar" className="post-avatar" />
            <div className="post-meta">
              <span className="post-name">John Carlo N. Ramos</span>
              <span className="post-time">February 2026 · 🌐</span>
            </div>
            <span className="post-more">···</span>
          </div>

          <div className="post-body">
            {/* Featured Project Image Placeholder */}
            <div className="post-image-placeholder">
              <img src={flowershop} alt="Flower Shop PH" className="post-image" />
            </div>
            <div className="post-text">
              <p className="post-project-title">Flower Shop PH</p>
              <p className="post-description">
                A flower shop web application that delivers a responsive front-end design, RESTful APIs, and secure user authentication. 
              </p>
              <div className="post-tags">
                <span className="post-tag">React</span>
                <span className="post-tag">Node.js</span>
                <span className="post-tag">MySQL</span>
                <span className="post-tag">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="post-reactions">
            <span>👍 69</span>
            <span className="post-comments">💬 67 comments</span>
          </div>

          <div className="post-actions">
            <span>👍 Like</span>
            <span>💬 Comment</span>
            <span>↗ Share</span>
          </div>
        </div>

        {/* Post Card 2 */}
        <div className="retro-panel post-card">
          <div className="post-header">
            <img src={pfp} alt="avatar" className="post-avatar" />
            <div className="post-meta">
              <span className="post-name">John Carlo N. Ramos</span>
              <span className="post-time">February 2026 · 🌐</span>
            </div>
            <span className="post-more">···</span>
          </div>

          <div className="post-body">
            {/* Featured Project Image Placeholder */}
            <div className="post-image-placeholder">
              <img src={wedding} alt="Wedding" className="post-image" />
            </div>
            <div className="post-text">
              <p className="post-project-title">Wedding RSVP</p>
              <p className="post-description">
                A wedding RSVP web application using a MySQL database to securely manage guest lists, and event responses.                  </p>
              <div className="post-tags">
                <span className="post-tag">React</span>
                <span className="post-tag">Node.js</span>
                <span className="post-tag">MySQL</span>
                <span className="post-tag">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="post-reactions">
            <span>👍 42</span>
            <span className="post-comments">💬 7 comments</span>
          </div>

          <div className="post-actions">
            <span>👍 Like</span>
            <span>💬 Comment</span>
            <span>↗ Share</span>
          </div>
        </div>

        {/* Post Card 3 */}
        <div className="retro-panel post-card">
          <div className="post-header">
            <img src={pfp} alt="avatar" className="post-avatar" />
            <div className="post-meta">
              <span className="post-name">John Carlo N. Ramos</span>
              <span className="post-time">January 2026 · 🌐</span>
            </div>
            <span className="post-more">···</span>
          </div>

          <div className="post-body">
            {/* Featured Project Image Placeholder */}
            <div className="post-image-placeholder">
              <img src={biosensor} alt="Biosensor" className="post-image" />
            </div>
            <div className="post-text">
              <p className="post-project-title">Real-Time Biosensor Spectrum</p>
              <p className="post-description">
              A web application for monitoring algae health using 
              live serial data streaming from an Arduino Uno and an AS7431 spectral sensor.
              </p>
              <div className="post-tags">
                <span className="post-tag">React</span>
                <span className="post-tag">Node.js</span>
                <span className="post-tag">MySQL</span>
                <span className="post-tag">JavaScript</span>
              </div>
            </div>
          </div>

          <div className="post-reactions">
            <span>👍 12</span>
            <span className="post-comments">💬 3 comments</span>
          </div>

          <div className="post-actions">
            <span>👍 Like</span>
            <span>💬 Comment</span>
            <span>↗ Share</span>
          </div>
        </div>

      </div>

      
    </div>
  );
}

export default HomeContent;