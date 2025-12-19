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
      {currentUser && (
        <div className={`user-info-bar ${currentUser.isAdmin ? 'admin-bar' : ''}`}>
          <div className="user-info-content">
            {/* Audio Controls (Top Bar) */}
            {audioState && (
              <div className="top-audio-controls">
                <button
                  className="top-mute-btn"
                  onClick={() => audioState.setIsMuted(!audioState.isMuted)}
                  title={audioState.isMuted ? 'Activar música' : 'Silenciar música'}
                >
                  {audioState.isMuted ? '🔇' : '🔊'}
                </button>
                <input
                  type="range"
                  className="top-volume-slider"
                  min="0"
                  max="100"
                  value={audioState.volume}
                  onChange={(e) => audioState.setVolume(Number(e.target.value))}
                  title={`Volumen: ${audioState.volume}%`}
                />
              </div>
            )}

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
        </div>
      )}

      <div className="header-content">
        <div className="header-main-group">
          <div className="header-brand">
            <img src="/recursos/copakakuna.jpg" alt="Copa Kakuna" className="logo-img logo-left" />
            <h1 className="pixel-title">KOTOKODOS CUP</h1>
            <img src="/recursos/copakakuna.jpg" alt="Copa Kakuna" className="logo-img logo-right" />
          </div>

          <nav className="pixel-nav">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`pixel-button ${currentSection === item.id ? 'active' : ''}`}
                  onClick={() => setCurrentSection(item.id)}
                >
                  <Icon className="icon" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
