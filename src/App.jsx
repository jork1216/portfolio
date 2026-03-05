import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import wallpaper from './images/wallpaper.jpg'
import myportfolio from './images/myportfolio.png'

function App() {
  const [showHome, setShowHome] = useState(false)

return (
  <div className="app-wrapper" style={{ backgroundImage: `url(${wallpaper})` }}>
    
    <div className="desktop-layer">
      <div className={`app-icon-wrapper ${showHome ? 'selected' : ''}`}
        onClick={() => setShowHome(prev => !prev)}
      >
        <img src={myportfolio} alt="My Portfolio" className="app-icon-img" />
        <span className="app-icon-label">My Portfolio</span>
      </div>
    </div>

    <div className="home-layer">
      {showHome && <Home />}
    </div>

  </div>
)
}

export default App