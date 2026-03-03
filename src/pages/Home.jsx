import './Home.css';

function Home() {
    return (
    // Main container for the retro window
    <div className="retro-window">
      
      {/* --- Title Bar Section --- */}
      <div className="title-bar">
        
        {/* Left side: Icon and Window Title */}
        <div className="title-bar-left">
          <div className="title-icon">JC</div>
          <div className="title-text">Portfolio.exe</div>
        </div>
        
        {/* Right side: Minimize, Maximize, and Close buttons */}
        <div className="title-bar-controls">
          <button className="control-btn minimize" aria-label="Minimize"></button>
          <button className="control-btn maximize" aria-label="Maximize"></button>
          <button className="control-btn close" aria-label="Close">
            <span className="close-x">×</span>
          </button>
        </div>
      </div>

      {/* --- Menu Bar Section --- */}
      <div className="menu-bar">
        {/* Using <u> tag to underline the shortcut key letters */}
        <div className="menu-item"><u>H</u>ome</div>
        <div className="menu-item"><u>P</u>rojects</div>
        <div className="menu-item"><u>S</u>kills</div>
        <div className="menu-item"><u>A</u>bout</div>
        <div className="menu-item"><u>C</u>ontact</div>
      </div>
      
    </div>
  );
}

export default Home;