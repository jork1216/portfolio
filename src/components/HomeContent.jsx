import './HomeContent.css';
import flowershop from '../images/flowershop.webp';
import wedding from '../images/wedding.webp';
import biosensor from '../images/biosensor.webp';
import pfp from '../images/pfp.webp';

// ─── Data ────────────────────────────────────────────────────────────────────

const INTRO_ITEMS = [
  { icon: '🎓', text: 'Studied Computer Engineering at Southern Luzon State University' },
  { icon: '📍', text: 'Lives in Lucena City, Philippines' },
  { icon: '🔗', text: 'junkcarlo.dev' },
  { icon: '🐙', text: 'Github: junkcarlo16' },
  { icon: '💼', text: 'Linkedin: John Carlo Ramos' },
];

const SKILLS = ['JavaScript', 'MySQL', 'React', 'Node.js'];

const POSTS = [
  {
    id: 'flowershop',
    image: flowershop,
    imageAlt: 'Flower Shop PH',
    title: 'Flower Shop PH',
    description:
      'A flower shop web application that delivers a responsive front-end design, RESTful APIs, and secure user authentication.',
    tags: ['React', 'Node.js', 'MySQL', 'JavaScript'],
    date: 'February 2026',
    likes: 69,
    comments: 67,
  },
  {
    id: 'wedding',
    image: wedding,
    imageAlt: 'Wedding',
    title: 'Wedding RSVP',
    description:
      'A wedding RSVP web application using a MySQL database to securely manage guest lists, and event responses.',
    tags: ['React', 'Node.js', 'MySQL', 'JavaScript'],
    date: 'February 2026',
    likes: 42,
    comments: 7,
  },
  {
    id: 'biosensor',
    image: biosensor,
    imageAlt: 'Biosensor',
    title: 'Real-Time Biosensor Spectrum',
    description:
      'A web application for monitoring algae health using live serial data streaming from an Arduino Uno and an AS7431 spectral sensor.',
    tags: ['React', 'Node.js', 'MySQL', 'JavaScript'],
    date: 'January 2026',
    likes: 12,
    comments: 3,
  },
];

const PINNED_PROJECTS = [
  { id: 'flower-shop', icon: '🌻', name: 'Flower Shop' },
  { id: 'handwriting', icon: '✍️', name: 'Handwriting App' },
  { id: 'biosensor',   icon: '🔬', name: 'Biosensor' },
];

const TECH_STACK = [
  { id: 'js', label: 'JS', className: 'js-icon' },
  { id: 'py', label: '🐍', className: 'py-icon' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PostCard({ post }) {
  return (
    <div className="retro-panel post-card">
      <div className="post-header">
        <img src={pfp} alt="avatar" className="post-avatar" />
        <div className="post-meta">
          <span className="post-name">John Carlo N. Ramos</span>
          <span className="post-time">{post.date} · 🌐</span>
        </div>
        <span className="post-more">···</span>
      </div>

      <div className="post-body">
        <div className="post-image-placeholder">
          <img src={post.image} alt={post.imageAlt} className="post-image" loading="lazy" />
        </div>
        <div className="post-text">
          <p className="post-project-title">{post.title}</p>
          <p className="post-description">{post.description}</p>
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="post-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="post-reactions">
        <span>👍 {post.likes}</span>
        <span className="post-comments">💬 {post.comments} comments</span>
      </div>

      <div className="post-actions">
        <span>👍 Like</span>
        <span>💬 Comment</span>
        <span>↗ Share</span>
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="left-column">
      <div className="retro-panel">
        <div className="panel-title-bar">Intro</div>
        <div className="panel-body">
          {INTRO_ITEMS.map(({ icon, text }) => (
            <div key={text} className="intro-item">
              <span className="intro-icon">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="retro-panel">
        <div className="panel-title-bar">Skills</div>
        <div className="panel-body">
          <div className="skills-list">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiddleColumn() {
  return (
    <div className="middle-column">
      {POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function RightColumn() {
  return (
    <div className="right-column">
      <div className="retro-panel">
        <div className="panel-title-bar">Pinned Projects</div>
        <div className="panel-body">
          <div className="pinned-projects-grid">
            {PINNED_PROJECTS.map(({ id, icon, name }) => (
              <div key={id} className="pinned-project-card">
                <div className="pinned-project-thumb">{icon}</div>
                <span className="pinned-project-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="retro-panel">
        <div className="panel-title-bar">Contact</div>
        <div className="panel-body">
          <button className="retro-btn contact-btn full-width-btn">
            ✉ Send Message
          </button>
        </div>
      </div>

      <div className="retro-panel">
        <div className="panel-title-bar">Tech Stack</div>
        <div className="panel-body">
          <div className="tech-stack-grid">
            {TECH_STACK.map(({ id, label, className }) => (
              <div key={id} className={`tech-icon ${className}`}>{label}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function HomeContent() {
  return (
    <div className="main-layout">
      <div className="top-row">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default HomeContent;