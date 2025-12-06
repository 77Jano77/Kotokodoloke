import { useEffect, useRef, useState } from 'react';
import './Home.css';
import { POKEDEX_DATA } from '../data/pokedex';

const KANTO_BADGES = [
  { id: 'boulder', name: 'Roca', image: '/recursos/roca.png' },
  { id: 'cascade', name: 'Cascada', image: '/recursos/cascada.png' },
  { id: 'thunder', name: 'Trueno', image: '/recursos/Trueno.png' },
  { id: 'rainbow', name: 'Arcoíris', image: '/recursos/arcoiris.png' },
  { id: 'soul', name: 'Alma', image: '/recursos/alma.png' },
  { id: 'marsh', name: 'Pantano', image: '/recursos/Pantano.png' },
  { id: 'volcano', name: 'Volcán', image: '/recursos/Volcan.png' },
  { id: 'earth', name: 'Tierra', image: '/recursos/Tierra.png' }
];

const Home = ({ tournamentData, audioControls, auth }) => {
  const audioRef = useRef(null);
  const topPlayers = tournamentData.getTopPlayers(3) || [];
  const [selectedRule, setSelectedRule] = useState(null);
  const [videoVersion, setVideoVersion] = useState(1); // 1, 2, or 3
  const [newComment, setNewComment] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Obtener últimas 3 imágenes de la galería
  const latestImages = (tournamentData.gallery || [])
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 3);

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

  const handleAddComment = (imageId) => {
    const commentText = newComment[imageId];
    if (!commentText || !commentText.trim()) return;
    if (!auth.currentUser) {
      alert('⚠️ Debes estar logueado para comentar');
      return;
    }

    tournamentData.addComment(imageId, {
      username: auth.currentUser.username,
      text: commentText.trim(),
      timestamp: Date.now()
    });

    setNewComment({ ...newComment, [imageId]: '' });
  };
  
  // Asegurar que tenemos 3 slots (pueden estar vacíos)
  const podiumPlayers = [
    topPlayers[0] || null, // 1er lugar
    topPlayers[1] || null, // 2do lugar
    topPlayers[2] || null, // 3er lugar
  ];

  const renderPodiumPlayer = (player, position) => {
    if (!player) {
      return (
        <div className="podium-empty">
          <div className="empty-icon">?</div>
          <p>SIN JUGADOR</p>
        </div>
      );
    }

    const medals = ['🥇', '🥈', '🥉'];
    const badgeCount = (player.badges || []).filter(Boolean).length;

    return (
      <div className="podium-player-card">
        <div className="podium-medal">{medals[position]}</div>
        
        <div className="player-avatar-frame">
          {player.avatarImage ? (
            <img src={player.avatarImage} alt={player.name} />
          ) : (
            <div className="avatar-placeholder">👤</div>
          )}
          <span className={`mode-indicator ${player.mode}`}>
            {player.mode === 'hardcore' ? 'HARD' : 'SOFT'}
          </span>
        </div>

        <h3 className="player-name pixel-text-outline">{player.name}</h3>
        {player.trainerName && (
          <p className="trainer-name">"{player.trainerName}"</p>
        )}
        
        <div className="player-stats">
          <div className="stat-row">
            <div className="stat-badge stat-points">
              <span className="stat-value-big">{tournamentData.calculatePlayerPoints(player.id)}</span>
              <span className="stat-label-small">PTS</span>
            </div>
            <div className="stat-badge stat-wins">
              <span className="stat-value-big">{tournamentData.calculatePlayerWins(player.id)}</span>
              <span className="stat-label-small">WINS</span>
            </div>
          </div>
          <div className="stat-badges-display">
            <span className="badges-label">MEDALLAS</span>
            <div className="badges-mini">
              {KANTO_BADGES.map((badge, i) => (
                (player.badges || [])[i] ? (
                  <img 
                    key={i} 
                    src={badge.image} 
                    alt={badge.name} 
                    className="badge-mini-image"
                    title={badge.name}
                  />
                ) : null
              ))}
              {(player.badges || []).filter(Boolean).length === 0 && (
                <span className="no-badges-text">Ninguna</span>
              )}
            </div>
          </div>
          
          {/* Equipo Pokémon */}
          <div className="team-sprites-display">
            <span className="team-label">EQUIPO</span>
            <div className="team-sprites">
              {(player.team || []).slice(0, 6).map((pokemon, idx) => {
                if (!pokemon) return <div key={idx} className="team-sprite-empty">?</div>;
                const pokemonName = typeof pokemon === 'object' ? pokemon.name : pokemon;
                const pokemonData = POKEDEX_DATA.find(p => p.name === pokemonName);
                if (!pokemonData) return <div key={idx} className="team-sprite-empty">?</div>;
                
                return (
                  <div key={idx} className="team-sprite-slot" title={pokemonData.name}>
                    <img 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.number}.png`}
                      alt={pokemonData.name}
                      className="team-sprite-mini"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <audio ref={audioRef} loop>
        <source src="/music/Inicio.mp3" type="audio/mpeg" />
      </audio>
      {/* Hero Banner */}
      <section className="hero-banner pixel-card">
        <div className="hero-content">
          <h1 className="hero-title pixel-text">
            KOTOKODOS CUP
          </h1>
          <p className="hero-subtitle">4 SEMANAS · 8 MEDALLAS · 1 CAMPEÓN</p>
          
          <div className="hero-description">
            <p>
              SOBREVIVE AL DESAFÍO MÁS EXTREMO DE POKÉMON. CAPTURA SOLO EL
              PRIMER POKÉMON DE CADA RUTA, ENFRENTA A TUS RIVALES Y GANA PUNTOS.
            </p>
            <p className="hero-highlight">
              ¿TIENES LO NECESARIO PARA LLEGAR A LA LIGA?
            </p>
          </div>
        </div>
      </section>

      {/* Video Intro Section */}
      <section className="video-section">
        <div className="video-toggle-buttons">
          <button 
            className={`pixel-button toggle-btn ${videoVersion === 1 ? 'active' : ''}`}
            onClick={() => setVideoVersion(1)}
          >
            📹 Video Intro
          </button>
          <button 
            className={`pixel-button toggle-btn ${videoVersion === 2 ? 'active' : ''}`}
            onClick={() => setVideoVersion(2)}
          >
            🖼️ Video Intro 2
          </button>
          <button 
            className={`pixel-button toggle-btn ${videoVersion === 3 ? 'active' : ''}`}
            onClick={() => setVideoVersion(3)}
          >
            🎬 Video Intro 3
          </button>
        </div>
        
        <div className="video-container">
          <video 
            autoPlay
            loop
            muted
            playsInline
            key={`video${videoVersion}`}
          >
            <source 
              src={videoVersion === 1 ? "/recursos/video intro.mp4" : videoVersion === 2 ? "/recursos/Video intro 2.mp4" : "/recursos/Video Intro 3.mp4"} 
              type="video/mp4" 
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>

      {/* Rules Info */}
      <section className="rules-section-compact">
        <h2 className="rules-compact-title pixel-text">NORMAS DEL TORNEO</h2>
        <div className="rules-grid-compact">
          <button 
            className="rule-button-compact pixel-button"
            onClick={() => setSelectedRule('modalidades')}
          >
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
              alt="Pikachu"
              className="rule-pokemon-sprite"
            />
            <span className="rule-title-compact">MODALIDADES</span>
          </button>

          <button 
            className="rule-button-compact pixel-button"
            onClick={() => setSelectedRule('compartida')}
          >
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png" 
              alt="Exeggcute"
              className="rule-pokemon-sprite"
            />
            <span className="rule-title-compact">EXP. COMPARTIDA</span>
          </button>

          <button 
            className="rule-button-compact pixel-button"
            onClick={() => setSelectedRule('aliento')}
          >
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" 
              alt="Chansey"
              className="rule-pokemon-sprite"
            />
            <span className="rule-title-compact">ÚLTIMO ALIENTO</span>
          </button>

          <button 
            className="rule-button-compact pixel-button"
            onClick={() => setSelectedRule('niveles')}
          >
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" 
              alt="Mewtwo"
              className="rule-pokemon-sprite"
            />
            <span className="rule-title-compact">NIVEL MÁX. GYM</span>
          </button>
        </div>
      </section>

      {/* Latest Gallery Posts */}
      {latestImages.length > 0 && (
        <section className="latest-posts-section">
          <h2 className="section-title pixel-text">📸 ÚLTIMAS PUBLICACIONES</h2>
          
          <div className="latest-posts-grid">
            {latestImages.map(image => (
              <div key={image.id} className="post-card pixel-card">
                <div className="post-header">
                  <span className="post-title">{image.description || 'Sin título'}</span>
                </div>
                
                <div className="post-image-container" onClick={() => setSelectedImage(image)}>
                  <img src={image.url} alt={image.description} className="post-image" />
                </div>
                
                {image.description && (
                  <p className="post-description">{image.description}</p>
                )}
                
                <div className="post-comments">
                  <h4 className="comments-title">💬 Comentarios ({(image.comments || []).length})</h4>
                  
                  <div className="comments-list">
                    {(image.comments || []).map((comment, idx) => (
                      <div key={idx} className="comment-item">
                        <span className="comment-author">{comment.username}:</span>
                        <span className="comment-text">{comment.text}</span>
                        <span className="comment-date">
                          {new Date(comment.timestamp).toLocaleString('es-ES', {
                            day: '2-digit',
                            month: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    ))}
                    
                    {(image.comments || []).length === 0 && (
                      <p className="no-comments">Sin comentarios aún</p>
                    )}
                  </div>
                  
                  {auth.currentUser && (
                    <div className="comment-input-group">
                      <input
                        type="text"
                        className="comment-input pixel-input"
                        placeholder="Escribe un comentario..."
                        value={newComment[image.id] || ''}
                        onChange={(e) => setNewComment({ ...newComment, [image.id]: e.target.value })}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddComment(image.id)}
                      />
                      <button
                        className="comment-btn pixel-button"
                        onClick={() => handleAddComment(image.id)}
                      >
                        ENVIAR
                      </button>
                    </div>
                  )}
                  
                  {!auth.currentUser && (
                    <p className="login-prompt">Inicia sesión para comentar</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Top 3 Podium */}
      <section className="podium-section">
        <h2 className="section-title pixel-text">🏆 TOP 3 JUGADORES 🏆</h2>
        
        <div className="podium-container">
          {/* 2nd Place */}
          <div className="podium-spot podium-2">
            <div className="podium-base">
              <span className="podium-rank">2</span>
            </div>
            {renderPodiumPlayer(podiumPlayers[1], 1)}
          </div>

          {/* 1st Place */}
          <div className="podium-spot podium-1">
            <div className="podium-base">
              <span className="podium-rank">1</span>
            </div>
            {renderPodiumPlayer(podiumPlayers[0], 0)}
          </div>

          {/* 3rd Place */}
          <div className="podium-spot podium-3">
            <div className="podium-base">
              <span className="podium-rank">3</span>
            </div>
            {renderPodiumPlayer(podiumPlayers[2], 2)}
          </div>
        </div>
      </section>

      {/* Rule Details Modal */}
      {selectedRule && (
        <div className="modal-overlay" onClick={() => setSelectedRule(null)}>
          <div className="modal-content rule-modal pixel-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal-btn"
              onClick={() => setSelectedRule(null)}
            >
              ✕
            </button>

            {selectedRule === 'modalidades' && (
              <>
                <div className="modal-icon">⚔️</div>
                <h2>MODALIDADES DEL TORNEO</h2>
                
                <div className="rule-detail-section">
                  <h3>🔥 Nuzlocke (Hard/Soft)</h3>
                  <p><strong>Nuzlocke Hardcore:</strong> Si un Pokémon llega a 0 PV en cualquier situación (combates salvajes, entrenadores, gimnasios), se considera muerto permanentemente.</p>
                  <p><strong>Nuzlocke Softcore:</strong> Los Pokémon solo mueren si caen en batallas clave (gimnasios, rivales, liga). En combates normales, puedes seguir usándolos.</p>
                  <p className="rule-note">⚠️ Reglas básicas: Solo puedes capturar el primer Pokémon de cada ruta/zona. Debes ponerle un apodo en MAYÚSCULAS.</p>
                </div>

                <div className="rule-detail-section">
                  <h3>🎯 Sistema de PVP con recompensas</h3>
                  <p>Cada 2 gimnasios completados, habrá un corte donde todos los participantes se enfrentarán entre sí.</p>
                  <p><strong>Puntuación:</strong></p>
                  <ul>
                    <li>Ganador de cada combate: <strong>6 puntos</strong></li>
                    <li>Los 2 mejores clasificados tendrán un combate extra</li>
                    <li>Todos contra todos: máxima competitividad</li>
                  </ul>
                </div>

                <div className="rule-detail-section">
                  <h3>🏆 Premio para el ganador</h3>
                  <p>El entrenador que acumule más puntos al final del torneo será coronado como el campeón y recibirá un premio especial.</p>
                  <p className="highlight-text">¡La gloria y las recompensas te esperan!</p>
                </div>
              </>
            )}

            {selectedRule === 'compartida' && (
              <>
                <div className="modal-icon">👥</div>
                <h2>EXPERIENCIA COMPARTIDA</h2>
                
                <div className="rule-detail-section">
                  <h3>🎮 Jugar en compañía</h3>
                  <p className="emphasis-text">Es <strong>OBLIGATORIO</strong> jugar compartiendo pantalla con al menos otro participante del torneo.</p>
                  <p>Este torneo no se trata solo de ganar, sino de disfrutar la experiencia juntos:</p>
                  <ul>
                    <li>Comparte tus momentos épicos en tiempo real</li>
                    <li>Celebra las victorias y sufre las derrotas con tus compañeros</li>
                    <li>Crea estrategias y recibe consejos en vivo</li>
                    <li>Vive la emoción del Nuzlocke como una experiencia social</li>
                  </ul>
                  <p className="highlight-text">💬 Pueden usar Discord, llamada, streaming o cualquier plataforma que permita compartir pantalla.</p>
                </div>

                <div className="rule-detail-section">
                  <h3>✨ ¿Por qué es importante?</h3>
                  <p>El Nuzlocke es una experiencia que se vive mejor en compañía. Los momentos de tensión, las capturas legendarias, las muertes inesperadas... todo es más memorable cuando lo compartes con otros entrenadores.</p>
                </div>
              </>
            )}

            {selectedRule === 'aliento' && (
              <>
                <div className="modal-icon">💫</div>
                <h2>REGLA DEL ÚLTIMO ALIENTO</h2>
                
                <div className="rule-detail-section">
                  <h3>⚡ Segunda oportunidad</h3>
                  <p className="emphasis-text">Si tu equipo completo cae en combate y quedas sin Pokémon vivos, NO pierdes automáticamente.</p>
                  <p>Esta regla especial te da una última oportunidad para recuperarte del desastre:</p>
                </div>

                <div className="rule-detail-section">
                  <h3>🔄 ¿Cómo funciona?</h3>
                  <ol className="detailed-steps">
                    <li>
                      <strong>Elige un Pokémon caído:</strong> De todos los Pokémon que murieron, puedes seleccionar UNO para revivir y mantener en tu equipo.
                    </li>
                    <li>
                      <strong>Lanza el dado:</strong> Tira un dado de 5 caras (1d5). El resultado indica cuántas capturas extra obtienes.
                    </li>
                    <li>
                      <strong>Captura en zonas exploradas:</strong> Solo puedes realizar estas capturas especiales en rutas/zonas que ya hayas visitado anteriormente. No puedes ir a zonas nuevas.
                    </li>
                    <li>
                      <strong>Reconstruye tu equipo:</strong> Con tu Pokémon revivido y las nuevas capturas, tienes una nueva oportunidad de continuar tu aventura.
                    </li>
                  </ol>
                </div>

                <div className="rule-detail-section">
                  <h3>⚠️ IMPORTANTE</h3>
                  <p className="warning-text">Esta regla SOLO se puede usar <strong>UNA VEZ</strong> durante toda tu partida. Úsala sabiamente.</p>
                  <p>Si vuelves a perder todo tu equipo después de usar el Último Aliento, tu aventura habrá terminado definitivamente.</p>
                </div>

                <div className="rule-detail-section">
                  <h3>💡 Ejemplo</h3>
                  <div className="example-box">
                    <p>Pierdes contra un gimnasio y todo tu equipo cae. Decides usar el Último Aliento:</p>
                    <ul>
                      <li>Revives a tu Charizard (tu favorito que cayó)</li>
                      <li>Lanzas 1d5 y obtienes un 3</li>
                      <li>Vuelves a Ruta 1, Ruta 2 y Bosque Verde (zonas ya exploradas)</li>
                      <li>Capturas 3 nuevos Pokémon para reconstruir tu equipo</li>
                      <li>Continúas tu aventura con renovadas esperanzas</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {selectedRule === 'niveles' && (
              <>
                <div className="modal-icon">📊</div>
                <h2>NIVEL MÁXIMO PARA CADA GYM</h2>
                
                <div className="rule-detail-section important-section">
                  <p className="emphasis-text">⚠️ IMPORTANTE: No puedes entrar a enfrentarte a un líder de gimnasio si tus Pokémon superan el nivel máximo establecido.</p>
                </div>

                <div className="gym-levels-grid">
                  <div className="gym-level-card">
                    <img src="/lideres/Brock.jpg" alt="Brock" className="gym-leader-avatar" />
                    <h3>Brock</h3>
                    <p className="gym-location">Ciudad Plateada</p>
                    <div className="level-display">Nivel: <strong>14</strong></div>
                  </div>

                  <div className="gym-level-card">
                    <img src="/lideres/misty.jpg" alt="Misty" className="gym-leader-avatar" />
                    <h3>Misty</h3>
                    <p className="gym-location">Ciudad Celeste</p>
                    <div className="level-display">Nivel: <strong>21</strong></div>
                  </div>

                  <div className="gym-level-card">
                    <img src="/lideres/Surge.jpg" alt="Lt. Surge" className="gym-leader-avatar" />
                    <h3>Lt. Surge</h3>
                    <p className="gym-location">Ciudad Carmín</p>
                    <div className="level-display">Nivel: <strong>24</strong></div>
                  </div>

                  <div className="gym-level-card">
                    <img src="/lideres/Erika.jpg" alt="Erika" className="gym-leader-avatar" />
                    <h3>Erika</h3>
                    <p className="gym-location">Ciudad Azulona</p>
                    <div className="level-display">Nivel: <strong>29</strong></div>
                  </div>

                  <div className="gym-level-card">
                    <img src="/lideres/Koga.jpg" alt="Koga" className="gym-leader-avatar" />
                    <h3>Koga</h3>
                    <p className="gym-location">Ciudad Fucsia</p>
                    <div className="level-display">Nivel: <strong>43</strong></div>
                  </div>

                  <div className="gym-level-card">
                    <img src="/lideres/Sabrina.jpg" alt="Sabrina" className="gym-leader-avatar" />
                    <h3>Sabrina</h3>
                    <p className="gym-location">Ciudad Azafrán</p>
                    <div className="level-display">Nivel: <strong>43</strong></div>
                  </div>

                  <div className="gym-level-card">
                    <img src="/lideres/unnamed.jpg" alt="Blaine" className="gym-leader-avatar" />
                    <h3>Blaine</h3>
                    <p className="gym-location">Isla Canela</p>
                    <div className="level-display">Nivel: <strong>47</strong></div>
                  </div>

                  <div className="gym-level-card gym-level-card-final">
                    <img src="/lideres/Giovanni.jpg" alt="Giovanni" className="gym-leader-avatar" />
                    <h3>Giovanni</h3>
                    <p className="gym-location">Ciudad Verde</p>
                    <div className="level-display">Nivel: <strong>50</strong></div>
                  </div>
                </div>

                <div className="rule-detail-section">
                  <h3>💡 Consejos</h3>
                  <ul>
                    <li>Planifica bien tu entrenamiento antes de cada gimnasio</li>
                    <li>No subas demasiado de nivel o no podrás entrar</li>
                    <li>Usa las Rare Candies con cuidado</li>
                    <li>Considera el nivel de tus Pokémon antes de combates largos</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.description} 
              className="image-modal-full"
              onClick={() => setSelectedImage(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
