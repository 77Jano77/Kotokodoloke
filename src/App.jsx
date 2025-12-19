import { useState } from 'react';
import { useTournamentData } from './hooks/useTournamentData';
import { useAuth } from './hooks/useAuth';
import Auth from './components/Auth';
import Header from './components/Header';
import Home from './components/Home';
import Players from './components/Players';
import Roulette from './components/Roulette';
import Standings from './components/Standings';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Downloads from './components/Downloads';
import Banners from './components/Banners';
import './styles/App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30);
  const tournamentData = useTournamentData();
  const auth = useAuth();

  // Si no hay usuario logueado, mostrar pantalla de login
  if (!auth.currentUser) {
    return (
      <Auth
        onLogin={auth.login}
        onRegister={auth.register}
        onRecover={auth.recoverPassword}
      />
    );
  }

  const audioControls = { isMuted, volume };

  const sections = {
    home: <Home tournamentData={tournamentData} audioControls={audioControls} auth={auth} />,
    players: <Players tournamentData={tournamentData} audioControls={audioControls} auth={auth} />,
    roulette: <Roulette tournamentData={tournamentData} audioControls={audioControls} auth={auth} />,
    standings: <Standings tournamentData={tournamentData} audioControls={audioControls} auth={auth} />,
    resources: <Resources audioControls={audioControls} tournamentData={tournamentData} auth={auth} />,
    downloads: <Downloads audioControls={audioControls} auth={auth} tournamentData={tournamentData} />,
    gallery: <Gallery tournamentData={tournamentData} audioControls={audioControls} auth={auth} />,
  };

  return (
    <div className="app-container pixel-bg">
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        currentUser={auth.currentUser}
        onLogout={auth.logout}
      />

      <main className="main-content">
        {sections[currentSection]}
      </main>

      {/* Banners System */}
      <Banners
        setCurrentSection={setCurrentSection}
      />

      <div className="audio-controls">
        <button
          className="audio-control-btn"
          onClick={() => setIsMuted(!isMuted)}
          title={isMuted ? 'Activar música' : 'Silenciar música'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <input
          type="range"
          className="volume-slider"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          title={`Volumen: ${volume}%`}
        />
        <span className="volume-label">{volume}%</span>
      </div>

      <footer className="pixel-footer">
        <div className="footer-content">
          <p className="pixel-text">🎮 TORNEO POKÉMON NUZLOCKE 2025</p>
          <p className="mt-1">¡QUE GANE EL MEJOR ENTRENADOR!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
