import './App.css'
import Home from './pages/Home'
import wallpaper from './images/wallpaper.jpg'

function App() {
  return (
    <div className="app-wrapper" style={{ backgroundImage: `url(${wallpaper})` }} >
      <Home/>
    </div>
  )
}

export default App