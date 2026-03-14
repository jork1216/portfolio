import { useState, useRef, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import wallpaper from './images/wallpaper1.webp'
import myportfolio from './images/myportfolio.webp'
import bgMusic from './music/sans.mp3'
import bootingGif from './images/booting.gif'  // 👈 add this

function App() {
  const [showHome, setShowHome] = useState(false)
  const [booting, setBooting] = useState(true)      // boot screen visible
  const [fadingOut, setFadingOut] = useState(false)  // triggers fade CSS
  const audioRef = useRef(null)

  useEffect(() => {
    // After 5 seconds, start the 1s fade-out
    const fadeTimer = setTimeout(() => {
      setFadingOut(true)
    }, 5000)

    // After 5s + 1s fade, fully remove boot screen
    const removeTimer = setTimeout(() => {
      setBooting(false)
    }, 6000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  const handleIconClick = () => {
    setShowHome(prev => {
      const next = !prev
      if (next && audioRef.current) {
        audioRef.current.volume = 0.5
        setTimeout(() => audioRef.current.play(), 800)
      } else if (!next && audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      return next
    })
  }

  return (
    <div className="app-wrapper" style={{ backgroundImage: `url(${wallpaper})` }}>

      {/* Boot screen overlay */}
      {booting && (
        <div className={`boot-screen ${fadingOut ? 'fade-out' : ''}`}>
          <img src={bootingGif} alt="Booting..." className="boot-gif" />
        </div>
      )}

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