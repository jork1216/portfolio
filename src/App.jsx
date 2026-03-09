import { useState, useRef } from 'react'
import './App.css'
import Home from './pages/Home'
import wallpaper from './images/wallpaper1.webp'
import myportfolio from './images/myportfolio.webp'
import bgMusic from './music/sans.mp3'  // 👈 add this

function App() {
  const [showHome, setShowHome] = useState(false)
  const audioRef = useRef(null)

  const handleIconClick = () => {
    setShowHome(prev => {
      const next = !prev
      if (next && audioRef.current) {
        audioRef.current.volume = .5  // adjust volume (0.0 – 1.0)
        setTimeout(() => {
          audioRef.current.play()
        }, 800)
      } else if (!next && audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      return next
    })
  }

  return (
    <div className="app-wrapper" style={{ backgroundImage: `url(${wallpaper})` }}>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={bgMusic} />

      <div className="desktop-layer">
        <div
          className={`app-icon-wrapper ${showHome ? 'selected' : ''}`}
          onClick={handleIconClick}
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