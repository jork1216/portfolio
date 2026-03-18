import './Home.css';
import ProfileHeader from '../components/ProfileHeader';
import HomeContent from '../components/HomeContent';
import Navbar from '../components/Navbar';

function Home({ onClose }) {
  return (
    <div className="home-wrapper">
      <Navbar onClose={onClose} />

      <div className="scroll-area">
        <ProfileHeader />
        <HomeContent />
      </div>

      <div className="window-bottom-bar"></div>
    </div>
  );
}

export default Home;