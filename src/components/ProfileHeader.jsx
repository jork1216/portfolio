import './ProfileHeader.css';
import pfp from '../images/pfp.jpg';
import banner from '../images/banner.jpg';

function ProfileHeader() {
  return (
    <div className="profile-window profile-container">
      {/* --- Banner Image Placeholder --- */}
      <div className="banner-placeholder">
        {/* Replace the src with your imported banner image */}
        <img src={banner} alt="Workspace Banner" className="banner-img" />
      </div>

      <div className="profile-content">
        {/* --- Avatar / Profile Picture --- */}
        <div className="avatar-container">
          <div className="avatar-placeholder">
            {/* Replace the src with your imported profile picture */}
            <img src={pfp} alt="John Carlo" className="avatar-img" />
          </div>
        </div>

        {/* --- Info and Buttons Section --- */}
        <div className="info-section">
          <div className="text-details">
            <h1 className="profile-name">John Carlo N. Ramos</h1>
            <p className="profile-title">Full Stack Web Developer</p>
            <p className="profile-bio">
              Building modern web applications. Specialized in React, Node.js, and MySQL.
            </p>
          </div>

          <div className="profile-actions">
            <button className="retro-btn">
              <span className="icon">📞</span> Contact Me
            </button>
            <button className="retro-btn">
              <span className="icon">📄</span> View Resume
            </button>
          </div>
        </div>
      </div>

      {/* --- Bottom Navigation Bar --- */}
      <div className="bottom-nav">
        <div className="nav-links">
          <span className="nav-item active">Home</span>
          <span className="nav-item">Projects</span>
          <span className="nav-item">Skills</span>
          <span className="nav-item">About</span>
          <span className="nav-item">Contact</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;