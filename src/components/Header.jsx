import './Header.css';
import { FaHome, FaUsers, FaDice, FaTrophy, FaDownload, FaImages, FaSignOutAlt, FaUser } from 'react-icons/fa';

function Header({ currentSection, setCurrentSection, currentUser, onLogout }) {
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
      {currentUser && (
        <div className="user-info-bar">
          <div className="user-info-content">
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
        <div className="kakuna-logo">
          <img src="/recursos/kakuna.gif" alt="Kakuna" className="logo-gif" />
        </div>
        <h1 className="pixel-title">KOTOKODOS CUP</h1>

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
};

export default Header;
