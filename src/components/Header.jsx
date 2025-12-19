import { FaHome, FaUsers, FaDice, FaTrophy, FaDownload, FaImages, FaSignOutAlt, FaUser } from 'react-icons/fa';

function Header({ currentSection, setCurrentSection, currentUser, onLogout, audioState }) {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: FaHome },
    { id: 'players', label: 'Participantes', icon: FaUsers },
    { id: 'roulette', label: 'Ruleta', icon: FaDice },
    { id: 'standings', label: 'Ranking', icon: FaTrophy },
    { id: 'resources', label: 'Recursos', icon: FaImages },
    { id: 'downloads', label: 'Descargas', icon: FaDownload },
    { id: 'gallery', label: 'Galería', icon: FaImages },
  ];

  return (
    <header className={`pixel-header ${currentUser?.isAdmin ? 'admin-mode' : ''}`}>
      {/* Top Bar: Audio Controls (Left) + User Info (Right) */}
      <div className={`top-control-bar ${currentUser?.isAdmin ? 'admin-bar' : ''}`}>
        {/* Audio Controls - Left Side */}
        {audioState && (
          <div className="audio-controls-left">
            <button
              className="audio-toggle-btn"
              onClick={() => audioState.setIsMuted(!audioState.isMuted)}
              title={audioState.isMuted ? 'Activar música' : 'Silenciar música'}
            >
              {audioState.isMuted ? '🔇' : '🔊'}
            </button>
            <input
              type="range"
              className="audio-volume-slider"
              min="0"
              max="100"
              value={audioState.volume}
              onChange={(e) => audioState.setVolume(Number(e.target.value))}
              title={`Volumen: ${audioState.volume}%`}
            />
          </div>
        )}

        {/* User Info - Right Side */}
        {currentUser && (
          <div className="user-info-right">
            <FaUser className="user-icon" />
            <span className="username">{currentUser.username}</span>
            {currentUser.isAdmin && <span className="admin-badge">👑 ADMIN</span>}
            <button
              className="logout-btn pixel-button"
              onClick={onLogout}
              title="Cerrar sesión"
            >
              <FaSignOutAlt />
            </button>
          </div>
        )}
      </div>

      {/* Title Bar: Centered Large Title */}
      <div className="title-bar">
        <h1 className="main-title">KOTOKODOS CUP</h1>
      </div>

      {/* Navigation Bar: All Buttons in One Row */}
      <nav className="navigation-bar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-button ${currentSection === item.id ? 'active' : ''}`}
              onClick={() => setCurrentSection(item.id)}
            >
              <Icon className="icon" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
