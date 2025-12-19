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
import Banners from './components/Banners';
import './styles/App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30);
  const [resourceAction, setResourceAction] = useState(null);
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
    resources: <Resources
      audioControls={audioControls}
      tournamentData={tournamentData}
      auth={auth}
      resourceAction={resourceAction}
      setResourceAction={setResourceAction}
    />,
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
        audioState={{ isMuted, setIsMuted, volume, setVolume }}
      />

      <main className="main-content">
        {sections[currentSection]}
      </main>

      {/* Banners System */}
      <Banners
        setCurrentSection={setCurrentSection}
        setResourceAction={setResourceAction}
      />



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
