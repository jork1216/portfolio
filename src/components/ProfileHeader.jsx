import './ProfileHeader.css';
import pfp from '../images/pfp1.jpg';
import banner from '../images/banner1.jpg';

function ProfileHeader() {
  return (
    <div className="profile-window profile-container">
      {/* --- Banner Image Placeholder --- */}
      <div className="banner-placeholder">
        {/* Replace the src with your imported banner image */}
        <img src={banner} alt="Profile Banner" className="banner-img" />
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
              Building cool web applications. Specialized in Javascript, React, Node.js, and MySQL.
            </p>
          </div>

          <div className="profile-actions">
            <button className="contact-btn retro-btn">
              <span className="icon">📞</span> Contact Me
            </button>
            <button className="resume-btn retro-btn">
              <span className="icon">📄</span> View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;