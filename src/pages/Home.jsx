import './Home.css';
import ProfileHeader from '../components/ProfileHeader';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="home-desktop">
      <Navbar />
      <ProfileHeader />
    </div>
  );
}

export default Home;