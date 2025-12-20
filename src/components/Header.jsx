import { FaHome, FaUsers, FaDice, FaTrophy, FaDownload, FaImages, FaSignOutAlt, FaUser } from 'react-icons/fa';
import './Header.css';

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
    <header className="pixel-header">
      {/* Top Bar: Audio + User Info */}
      {currentUser && (
        <div className="user-info-bar">
          <div className="user-info-content">
            {/* Audio Controls */}
            {audioState && (
              <div className="audio-controls">
                <button
                  className="audio-btn"
                  onClick={() => audioState.setIsMuted(!audioState.isMuted)}
                  title={audioState.isMuted ? 'Activar música' : 'Silenciar música'}
                >
                  {audioState.isMuted ? '🔇' : '🔊'}
                </button>
                <input
                  type="range"
                  className="volume-slider"
                  min="0"
                  max="100"
                  value={audioState.volume}
                  onChange={(e) => audioState.setVolume(Number(e.target.value))}
                  title={`Volumen: ${audioState.volume}%`}
                />
              </div>
            )}

            {/* User Info */}
            <FaUser className="user-icon" />
            <span className="username">{currentUser.username}</span>
            {currentUser.isAdmin && <span className="admin-badge">👑 ADMIN</span>}
            <button className="logout-btn" onClick={onLogout} title="Cerrar sesión">
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      )}

      {/* Main Header Content */}
      <div className="header-content">
        {/* Title with Kakuna sprites on both sides */}
        <div className="header-brand">
          <img
            src="/recursos/kakuna.gif"
            alt="Kakuna"
            className="kakuna-logo kakuna-left"
            onClick={() => setCurrentSection('home')}
            style={{ cursor: 'pointer' }}
            title="Ir a Inicio"
          />
          <h1 className="pixel-title">KOTOKODOS CUP</h1>
          <img
            src="/recursos/kakuna.gif"
            alt="Kakuna"
            className="kakuna-logo kakuna-right"
            onClick={() => setCurrentSection('home')}
            style={{ cursor: 'pointer' }}
            title="Ir a Inicio"
          />
        </div>

        {/* Navigation buttons below */}
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
    </header>
  );
}

export default Header;
