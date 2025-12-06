import { useEffect, useRef } from 'react';
import './Downloads.css';

const Downloads = ({ audioControls }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioControls.volume / 100;
      audioRef.current.muted = audioControls.isMuted;
      audioRef.current.play().catch(err => console.log('Audio play prevented:', err));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioControls.volume / 100;
      audioRef.current.muted = audioControls.isMuted;
    }
  }, [audioControls.volume, audioControls.isMuted]);

  const downloadLinks = [
    {
      id: 1,
      title: 'EMULADOR',
      platform: 'Windows/Mac/Linux',
      icon: '🎮',
      description: 'Emulador para jugar Pokémon GBA',
      link: 'https://drive.google.com/drive/folders/1Z6o-fGIKCEfEC55hwgW-0jOULh0se3XN?usp=sharing'
    },
    {
      id: 2,
      title: 'ROMS POKÉMON',
      platform: 'GBA',
      icon: '🔥',
      description: 'ROMs de Pokémon para el torneo',
      link: 'https://drive.google.com/drive/folders/1arRReS-lCgo3SjGe66ruHtz3GiZoCjKM?usp=sharing'
    },
    {
      id: 3,
      title: 'RADMIN VPN',
      platform: 'Windows',
      icon: '🌐',
      description: 'VPN para jugar en red local',
      link: 'https://download.radmin-vpn.com/download/files/Radmin_VPN_2.0.4899.9.exe'
    }
  ];

  const handleDownload = (item) => {
    window.open(item.link, '_blank');
  };

  return (
    <div className="downloads-container">
      <audio ref={audioRef} loop>
        <source src="/music/Recursos y descargas.mp3" type="audio/mpeg" />
      </audio>
      <div className="downloads-header">
        <h1 className="pixel-text">📥 DESCARGAS</h1>
        <p className="header-description">
          Recursos y herramientas para el torneo Nuzlocke
        </p>
      </div>

      {/* Downloads Grid */}
      <div className="downloads-grid">
        {downloadLinks.map(item => (
          <div key={item.id} className="download-card pixel-card">
            <div className="download-icon">{item.icon}</div>
            
            <div className="download-info">
              <h3 className="download-title">{item.title}</h3>
              <span className="download-platform">{item.platform}</span>
              <p className="download-description">{item.description}</p>
            </div>

            <button 
              className="pixel-button download-btn"
              onClick={() => handleDownload(item)}
            >
              📥 DESCARGAR
            </button>
          </div>
        ))}
      </div>

      {/* Resources Info */}
      <div className="resources-info pixel-card">
        <h2>ℹ️ INFORMACIÓN IMPORTANTE</h2>
        <div className="info-content">
          <div className="info-section">
            <h3>🎮 EMULADORES</h3>
            <p>
              Los emuladores son legales siempre que poseas una copia original del juego.
              VisualBoy Advance es el emulador más estable para Game Boy Advance.
            </p>
          </div>

          <div className="info-section">
            <h3>📝 REGLAS DEL TORNEO</h3>
            <p>
              Consulta la guía de Nuzlocke para conocer todas las reglas específicas
              de este torneo y maximizar tus posibilidades de victoria.
            </p>
          </div>

          <div className="info-section">
            <h3>🔧 HERRAMIENTAS</h3>
            <p>
              Las calculadoras de IVs y mapas interactivos son recursos valiosos
              para planificar tu estrategia y optimizar tu equipo.
            </p>
          </div>

          <div className="info-section">
            <h3>⚠️ AVISO LEGAL</h3>
            <p>
              Todo el contenido es solo para fines educativos. Respeta los derechos
              de autor de Nintendo y Game Freak. Apoya a los creadores comprando
              juegos oficiales.
            </p>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="external-links pixel-card">
        <h2>🔗 ENLACES ÚTILES</h2>
        <div className="links-grid">
          <a href="https://pokemon.com" target="_blank" rel="noopener noreferrer" className="external-link">
            <span className="link-icon">🌐</span>
            <span className="link-text">Sitio Oficial Pokémon</span>
          </a>
          <a href="https://bulbapedia.bulbagarden.net" target="_blank" rel="noopener noreferrer" className="external-link">
            <span className="link-icon">📚</span>
            <span className="link-text">Bulbapedia</span>
          </a>
          <a href="https://pokemondb.net" target="_blank" rel="noopener noreferrer" className="external-link">
            <span className="link-icon">💾</span>
            <span className="link-text">Pokémon Database</span>
          </a>
          <a href="https://serebii.net" target="_blank" rel="noopener noreferrer" className="external-link">
            <span className="link-icon">🔍</span>
            <span className="link-text">Serebii.net</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
