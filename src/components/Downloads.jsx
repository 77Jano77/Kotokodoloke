import { useState, useEffect, useRef } from 'react';
import './Downloads.css';
import { database, ref, onValue, set } from '../config/firebase';

const Downloads = ({ audioControls, auth, tournamentData }) => {
  const audioRef = useRef(null);
  const [romSelections, setRomSelections] = useState([]);
  const [showRomModal, setShowRomModal] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [showEmulatorModal, setShowEmulatorModal] = useState(false);

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

  // Escuchar las selecciones de ROMs en Firebase
  useEffect(() => {
    const romSelectionsRef = ref(database, 'romSelections');
    const unsubscribe = onValue(romSelectionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRomSelections(Object.values(data));
      } else {
        setRomSelections([]);
      }
    });
    return () => unsubscribe();
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
      icon: '/sprites/pokemon/porygon.png',
      description: 'Emulador para jugar Pokémon GBA',
      link: null,
      type: 'emulator'
    },
    {
      id: 2,
      title: 'ROMS POKÉMON',
      platform: 'GBA',
      icon: '/sprites/pokemon/porygon2.png',
      description: 'ROMs de Pokémon para el torneo',
      link: 'https://drive.google.com/drive/folders/1arRReS-lCgo3SjGe66ruHtz3GiZoCjKM?usp=sharing'
    },
    {
      id: 3,
      title: 'RADMIN VPN',
      platform: 'Windows',
      icon: '/sprites/pokemon/porygon-z.png',
      description: 'VPN para jugar en red local',
      link: 'https://download.radmin-vpn.com/download/files/Radmin_VPN_2.0.4899.9.exe'
    },
    {
      id: 4,
      title: 'OTROS JUEGOS DE POKÉMON',
      platform: 'Varios',
      icon: '/sprites/pokemon/ditto.png',
      description: 'Más juegos de Pokémon para explorar',
      link: 'https://drive.google.com/drive/folders/1A_n6XjOXfg2nV24ChgHlHr-MhL9k7K9E?usp=sharing'
    },
    {
      id: 5,
      title: 'MANGAS POKÉMON',
      platform: 'Lectura Online',
      icon: '/sprites/pokemon/poliwhirl.png',
      description: 'Lee los mangas de Pokémon Adventures',
      link: 'https://pkproject.net/manga/pokemon-adventures/sagas'
    },
    {
      id: 6,
      title: 'SERIES Y PELÍCULAS',
      platform: 'Ver Online',
      icon: '/sprites/pokemon/lugia.png',
      description: 'Disfruta de series y películas Pokémon',
      link: null,
      type: 'media'
    }
  ];

  const handleDownload = (item) => {
    if (item.id === 2) { // ROMS POKÉMON
      if (!auth.currentUser) {
        alert('⚠️ Debes iniciar sesión para descargar ROMs');
        return;
      }
      console.log('Usuario actual:', auth.currentUser);
      console.log('Jugadores disponibles:', tournamentData.players);
      setShowRomModal(true);
    } else if (item.type === 'media') { // SERIES Y PELÍCULAS
      setShowMediaModal(true);
    } else if (item.type === 'emulator') { // EMULADOR
      setShowEmulatorModal(true);
    } else {
      window.open(item.link, '_blank');
    }
  };

  const handleRomSelection = () => {
    const num = parseInt(selectedNumber);
    if (!num || num < 1 || num > 20) {
      alert('⚠️ Debes elegir un número entre 1 y 20');
      return;
    }

    // Verificar si el número ya está ocupado
    const alreadyTaken = romSelections.find(s => s.number === num);
    if (alreadyTaken) {
      alert(`⚠️ El número ${num} ya ha sido elegido por ${alreadyTaken.playerName}`);
      return;
    }

    console.log('Buscando jugador con userId:', auth.currentUser?.id);
    console.log('Buscando jugador con playerId:', auth.currentUser?.playerId);

    // Buscar por playerId si existe, si no buscar por userId
    let player = null;
    if (auth.currentUser?.playerId) {
      player = (tournamentData.players || []).find(p => p.id === auth.currentUser.playerId);
    } else {
      // Buscar por userId
      player = (tournamentData.players || []).find(p => p.userId === auth.currentUser?.id);
    }

    console.log('Jugador encontrado:', player);

    if (!player) {
      alert('⚠️ No se encontró tu personaje en el torneo. Debes crear un personaje primero en la sección JUGADORES.');
      return;
    }

    const alreadySelected = romSelections.find(s => s.playerId === player.id);
    if (alreadySelected) {
      alert(`⚠️ Ya elegiste el número ${alreadySelected.number}`);
      return;
    }

    // Guardar la selección en Firebase
    const selectionId = Date.now();
    const romSelectionsRef = ref(database, `romSelections/${selectionId}`);
    set(romSelectionsRef, {
      id: selectionId,
      playerId: player.id,
      playerName: player.name,
      number: num,
      timestamp: new Date().toISOString()
    }).then(() => {
      alert(`✅ ¡Número ${num} registrado correctamente!`);
      setShowRomModal(false);
      setSelectedNumber('');
      window.open(downloadLinks[1].link, '_blank');
    }).catch(error => {
      console.error('Error al guardar selección:', error);
      alert('❌ Error al registrar el número. Inténtalo de nuevo.');
    });
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
            <div className="download-icon">
              <img src={item.icon} alt={item.title} className="pokemon-sprite" />
            </div>

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

      {/* ROM Selection Modal */}
      {showRomModal && (
        <div className="modal-overlay" onClick={() => setShowRomModal(false)}>
          <div className="modal-content rom-modal pixel-card" onClick={(e) => e.stopPropagation()}>
            <h2>🔥 SELECCIÓN DE ROM</h2>
            <p className="modal-subtitle">Elige un número del 1 al 20 para tu ROM</p>

            {/* Info del usuario actual */}
            {auth.currentUser && (() => {
              // Buscar por playerId si existe, si no buscar por userId
              let currentPlayer = null;
              if (auth.currentUser.playerId) {
                currentPlayer = (tournamentData.players || []).find(p => p.id === auth.currentUser.playerId);
              } else {
                currentPlayer = (tournamentData.players || []).find(p => p.userId === auth.currentUser.id);
              }
              return (
                <div style={{ background: currentPlayer ? '#e3f2fd' : '#fff3cd', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center' }}>
                  <strong>Seleccionando para:</strong> {currentPlayer?.name || '⚠️ Sin personaje'}
                  <span style={{ fontSize: '0.75rem', color: '#666', marginLeft: '0.5rem' }}>
                    ({auth.currentUser.username})
                  </span>
                  {!currentPlayer && (
                    <div style={{ fontSize: '0.7rem', color: '#856404', marginTop: '0.5rem' }}>
                      Debes crear un personaje primero en la sección JUGADORES
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Números ocupados */}
            {romSelections.length > 0 && (
              <div className="occupied-numbers">
                <h3>❌ Números ya ocupados:</h3>
                <div className="occupied-list">
                  {romSelections
                    .sort((a, b) => a.number - b.number)
                    .map(selection => (
                      <div key={selection.id} className="occupied-item">
                        <span className="occupied-number">#{selection.number}</span>
                        <span className="occupied-player">{selection.playerName}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Selector de número */}
            <div className="number-selector">
              <label htmlFor="rom-number">Tu número (1-20):</label>
              <input
                id="rom-number"
                type="number"
                min="1"
                max="20"
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(e.target.value)}
                className="pixel-input"
                placeholder="Ej: 5"
              />
            </div>

            {/* Grid de números disponibles */}
            <div className="numbers-grid">
              {Array.from({ length: 20 }, (_, i) => i + 1).map(num => {
                const isTaken = romSelections.some(s => s.number === num);
                const takenBy = romSelections.find(s => s.number === num);
                return (
                  <button
                    key={num}
                    className={`number-btn ${isTaken ? 'taken' : ''} ${parseInt(selectedNumber) === num ? 'selected' : ''}`}
                    onClick={() => !isTaken && setSelectedNumber(num.toString())}
                    disabled={isTaken}
                    title={isTaken ? `Ocupado por ${takenBy.playerName}` : `Seleccionar número ${num}`}
                  >
                    {num}
                    {isTaken && <span className="taken-mark">✕</span>}
                  </button>
                );
              })}
            </div>

            {/* Botones de acción */}
            <div className="modal-buttons">
              <button
                className="pixel-button"
                onClick={handleRomSelection}
                disabled={!selectedNumber}
              >
                ✓ CONFIRMAR Y DESCARGAR
              </button>
              <button
                className="pixel-button-secondary"
                onClick={() => {
                  setShowRomModal(false);
                  setSelectedNumber('');
                }}
              >
                ✕ CANCELAR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Media Selection Modal (Series/Películas) */}
      {showMediaModal && (
        <div className="modal-overlay" onClick={() => setShowMediaModal(false)}>
          <div className="modal-content media-modal pixel-card" onClick={(e) => e.stopPropagation()}>
            <h2>🎬 ELIGE TU CONTENIDO</h2>
            <p className="modal-subtitle">¿Qué quieres ver?</p>

            <div className="media-options">
              <button
                className="media-option-btn pixel-button"
                onClick={() => {
                  window.open('https://pkproject.net/episodios/', '_blank');
                  setShowMediaModal(false);
                }}
              >
                <div className="media-icon">📺</div>
                <div className="media-title">SERIES</div>
                <div className="media-description">Ver episodios de Pokémon</div>
              </button>

              <button
                className="media-option-btn pixel-button"
                onClick={() => {
                  window.open('https://pkproject.net/peliculas/', '_blank');
                  setShowMediaModal(false);
                }}
              >
                <div className="media-icon">🎥</div>
                <div className="media-title">PELÍCULAS</div>
                <div className="media-description">Ver películas de Pokémon</div>
              </button>
            </div>

            <button
              className="pixel-button-secondary"
              onClick={() => setShowMediaModal(false)}
              style={{ marginTop: '1rem' }}
            >
              ✕ CANCELAR
            </button>
          </div>
        </div>
      )}

      {/* Emulator Selection Modal */}
      {showEmulatorModal && (
        <div className="modal-overlay" onClick={() => setShowEmulatorModal(false)}>
          <div className="modal-content media-modal pixel-card" onClick={(e) => e.stopPropagation()}>
            <h2>🎮 ELIGE TU DESCARGA</h2>
            <p className="modal-subtitle">¿Qué necesitas descargar?</p>

            <div className="media-options">
              <button
                className="media-option-btn pixel-button"
                onClick={() => {
                  window.open('https://github.com/mgba-emu/mgba/releases/download/0.10.5/mGBA-0.10.5-win32.7z', '_blank');
                  setShowEmulatorModal(false);
                }}
              >
                <div className="media-icon">💻</div>
                <div className="media-title">EMULADOR mGBA</div>
                <div className="media-description">Emulador principal v0.10.5</div>
              </button>

              <button
                className="media-option-btn pixel-button"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1yVHk2n4B9PDVtC2mc2FzNq-rKEPLoGF-/view?usp=sharing', '_blank');
                  setShowEmulatorModal(false);
                }}
              >
                <div className="media-icon">🖥️</div>
                <div className="media-title">LUA SERVER</div>
                <div className="media-description">Para hospedar partidas multijugador</div>
              </button>

              <button
                className="media-option-btn pixel-button"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1jqXNoHKQqlowacVsp_KNqpkuX-HLpAU6/view?usp=sharing', '_blank');
                  setShowEmulatorModal(false);
                }}
              >
                <div className="media-icon">👥</div>
                <div className="media-title">LUA CLIENT</div>
                <div className="media-description">Para unirse a partidas multijugador</div>
              </button>
            </div>

            <button
              className="pixel-button-secondary"
              onClick={() => setShowEmulatorModal(false)}
              style={{ marginTop: '1rem' }}
            >
              ✕ CANCELAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Downloads;
