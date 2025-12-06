import { useState, useEffect, useRef } from 'react';
import './Players.css';
import { ABILITIES_DATA } from '../data/abilities';
import { POKEDEX_DATA } from '../data/pokedex';

const AVAILABLE_SPRITES = [
  { id: 'aleja', name: 'Aleja', image: '/sprites/Aleja.jpg' },
  { id: 'gonzalez', name: 'Gonzalez', image: '/sprites/Gonzalez.jpg' },
  { id: 'jano', name: 'Jano', image: '/sprites/Jano.jpg' },
  { id: 'josama', name: 'Josama', image: '/sprites/Josama.jpg' },
  { id: 'marionetty', name: 'Marionetty', image: '/sprites/Marionetty.jpg' },
  { id: 'palenx', name: 'Palenx', image: '/sprites/Palenx.jpg' },
  { id: 'patris', name: 'Patris', image: '/sprites/Patris.jpg' },
  { id: 'pescador_jano', name: 'Pescador Jano', image: '/sprites/Pescador Jano.jpg' },
  { id: 'rupert', name: 'Rupert', image: '/sprites/Rupert.jpg' },
  { id: 'smoke', name: 'Smoke', image: '/sprites/Smoke.jpg' },
  { id: 'yas', name: 'Yas', image: '/sprites/Yas.jpg' },
  { id: 'zainys', name: 'Zainys', image: '/sprites/Zainys.jpg' },
];

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

// Extraer todos los nombres de Pokémon de Gen 1-3 desde la Pokédex
const POKEMON_LIST = POKEDEX_DATA
  .filter(pokemon => pokemon.generation >= 1 && pokemon.generation <= 3)
  .map(pokemon => pokemon.name);

const Players = ({ tournamentData, audioControls, auth }) => {
  const audioRef = useRef(null);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [pokemonSearchValues, setPokemonSearchValues] = useState({});
  const [abilitySearchValues, setAbilitySearchValues] = useState({});

  // Verificar si el usuario ya tiene un jugador creado
  const userPlayer = auth.currentUser?.hasPlayer 
    ? (tournamentData.players || []).find(p => p.id === auth.currentUser.playerId)
    : null;
  
  const isAdmin = auth.currentUser?.isAdmin;

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

  const handleAddPlayer = (e) => {
    e.preventDefault();

    // Verificar que el usuario no tenga ya un jugador (excepto si es admin)
    if (!isAdmin && auth.currentUser?.hasPlayer) {
      alert('⚠️ Ya tienes un personaje creado. Solo puedes crear uno por cuenta.');
      return;
    }

    const formData = new FormData(e.target);
    const selectedSprite = formData.get('sprite');
    
    if (!selectedSprite) {
      alert('⚠️ Debes seleccionar un sprite');
      return;
    }

    const newPlayer = {
      name: formData.get('name'),
      trainerName: formData.get('trainerName'),
      mode: formData.get('mode'),
      avatarImage: selectedSprite,
      userId: auth.currentUser.id,
      username: auth.currentUser.username,
      createdByAdmin: isAdmin
    };

    const playerId = tournamentData.addPlayer(newPlayer);
    // Solo actualizar el user player si no es admin o si es su primer personaje
    if (!isAdmin) {
      auth.updateUserPlayer(playerId);
    }
    setShowAddForm(false);
    e.target.reset();
  };

  const handleImageUpload = (e, field, playerId) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (playerId) {
        tournamentData.updatePlayer(playerId, { [field]: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleTeamChange = (playerId, slotIndex, pokemonName) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    // Validar que el Pokémon sea válido
    if (pokemonName && !POKEMON_LIST.includes(pokemonName)) {
      alert('⚠️ Por favor selecciona un Pokémon válido de la lista');
      return;
    }

    const newTeam = [...player.team];
    if (pokemonName) {
      newTeam[slotIndex] = typeof newTeam[slotIndex] === 'object' 
        ? { ...newTeam[slotIndex], name: pokemonName }
        : { name: pokemonName, ability: null };
    } else {
      newTeam[slotIndex] = null;
    }
    tournamentData.updatePlayer(playerId, { team: newTeam });
    
    // Limpiar el valor temporal de búsqueda
    const key = `${playerId}-${slotIndex}`;
    setPokemonSearchValues(prev => ({ ...prev, [key]: '' }));
  };

  const handleAbilityChange = (playerId, slotIndex, abilityName) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    // Validar que la habilidad sea válida (si no está vacía)
    if (abilityName && !ABILITIES_DATA.find(a => a.name === abilityName)) {
      alert('⚠️ Por favor selecciona una habilidad válida de la lista');
      return;
    }

    const newTeam = [...player.team];
    if (newTeam[slotIndex]) {
      newTeam[slotIndex] = typeof newTeam[slotIndex] === 'object'
        ? { ...newTeam[slotIndex], ability: abilityName || null }
        : { name: newTeam[slotIndex], ability: abilityName || null };
    }
    tournamentData.updatePlayer(playerId, { team: newTeam });
  };

  const handleNicknameChange = (playerId, slotIndex, nickname) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    const newTeam = [...player.team];
    if (newTeam[slotIndex]) {
      newTeam[slotIndex] = typeof newTeam[slotIndex] === 'object'
        ? { ...newTeam[slotIndex], nickname: nickname || null }
        : { name: newTeam[slotIndex], nickname: nickname || null };
    }
    tournamentData.updatePlayer(playerId, { team: newTeam });
  };

  const handleRemoveFromTeam = (playerId, slotIndex) => {
    handleTeamChange(playerId, slotIndex, null);
  };

  const handleBadgeToggle = (playerId, badgeIndex) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    const newBadges = [...player.badges];
    newBadges[badgeIndex] = !newBadges[badgeIndex];
    tournamentData.updatePlayer(playerId, { badges: newBadges });
  };

  const handleRemoveReward = (playerId, rewardIndex) => {
    tournamentData.removeReward(playerId, rewardIndex);
  };

  return (
    <div className="players-container">
      <audio ref={audioRef} loop>
        <source src="/music/Jugadores.mp3" type="audio/mpeg" />
      </audio>
      <div className="players-header">
        <h1 className="pixel-text">👥 GESTIÓN DE JUGADORES</h1>
        {isAdmin ? (
          <button 
            className="pixel-button add-player-btn admin-add-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? '✕ CANCELAR' : '👑 CREAR JUGADOR'}
          </button>
        ) : userPlayer ? (
          <div className="user-player-badge">
            <span className="badge-icon">✅</span>
            <span className="badge-text">Tu personaje: {userPlayer.name}</span>
          </div>
        ) : (
          <button 
            className="pixel-button add-player-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? '✕ CANCELAR' : '+ CREAR MI PERSONAJE'}
          </button>
        )}
      </div>

      {!isAdmin && !userPlayer && (
        <div className="info-banner pixel-card">
          <p>⚠️ Solo puedes crear un personaje por cuenta</p>
        </div>
      )}

      {isAdmin && (
        <div className="info-banner admin-banner pixel-card">
          <p>👑 Modo administrador: Puedes crear y editar todos los jugadores</p>
        </div>
      )}

      {/* Add Player Form */}
      {showAddForm && (isAdmin || !userPlayer) && (
        <form className="player-form pixel-card" onSubmit={handleAddPlayer}>
          <h2>AGREGAR NUEVO JUGADOR</h2>
          
          <div className="form-group">
            <label>NOMBRE COMPLETO *</label>
            <input 
              type="text" 
              name="name" 
              className="pixel-input" 
              required 
              placeholder="Ej: ASH KETCHUM"
            />
          </div>

          <div className="form-group">
            <label>APODO DE ENTRENADOR</label>
            <input 
              type="text" 
              name="trainerName" 
              className="pixel-input" 
              placeholder="Ej: El Elegido"
            />
          </div>

          <div className="form-group">
            <label>MODO DE JUEGO *</label>
            <select name="mode" className="pixel-input" required>
              <option value="hardcore">HARDCORE</option>
              <option value="softcore">SOFTCORE</option>
            </select>
          </div>

          <div className="form-group">
            <label>SELECCIONA TU SPRITE *</label>
            <div className="sprite-selection-grid">
              {AVAILABLE_SPRITES.map(sprite => (
                <label key={sprite.id} className="sprite-option">
                  <input 
                    type="radio" 
                    name="sprite" 
                    value={sprite.image}
                    required
                  />
                  <div className="sprite-preview">
                    <img src={sprite.image} alt={sprite.name} />
                    <span className="sprite-name">{sprite.name}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="pixel-button">
            ✓ CREAR JUGADOR
          </button>
        </form>
      )}

      {/* Players Grid */}
      <div className="players-grid">
        {(tournamentData.players || []).map(player => {
          const canEdit = isAdmin || player.id === auth.currentUser?.playerId;
          
          return (
          <div key={player.id} className={`player-card pixel-card ${!canEdit ? 'read-only' : ''}`}>
            {/* Card Header */}
            <div className="player-card-header">
              <div className="player-info-top">
                <h2 className="player-name">{player.name}</h2>
                {player.trainerName && (
                  <p className="trainer-name">"{player.trainerName}"</p>
                )}
                <span className={`mode-badge ${player.mode}`}>
                  {player.mode === 'hardcore' ? 'HARDCORE' : 'SOFTCORE'}
                </span>
                {!canEdit && <span className="view-only-badge">👁️ SOLO LECTURA</span>}
              </div>

              {canEdit && (
                <button 
                  className="delete-btn pixel-button-danger"
                  onClick={() => {
                    if (confirm(`¿Eliminar a ${player.name}?`)) {
                      tournamentData.deletePlayer(player.id);
                      if (player.id === auth.currentUser?.playerId) {
                        auth.deleteUserPlayer();
                      }
                    }
                  }}
                >
                  🗑️
                </button>
              )}
            </div>

            {/* Avatar Section */}
            <div className="player-avatar-section">
              <label>AVATAR / SPRITE</label>
              {player.avatarImage ? (
                <div className="avatar-preview">
                  <img src={player.avatarImage} alt="Avatar" />
                  {canEdit && (
                    <button 
                      className="change-avatar-btn pixel-button"
                      onClick={() => document.getElementById(`avatar-${player.id}`).click()}
                    >
                      CAMBIAR
                    </button>
                  )}
                </div>
              ) : (
                canEdit && (
                  <button 
                    className="upload-avatar-btn pixel-button"
                    onClick={() => document.getElementById(`avatar-${player.id}`).click()}
                  >
                    <span className="upload-icon">📷</span>
                    <span>SUBIR AVATAR</span>
                  </button>
                )
              )}
              {canEdit && (
                <input 
                  type="file" 
                  id={`avatar-${player.id}`}
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageUpload(e, 'avatarImage', player.id)}
                />
              )}
            </div>

            {/* Team Section */}
            <div className="team-section">
              <h3>EQUIPO POKÉMON</h3>
              <div className="pokemon-slots">
                {player.team.map((pokemon, index) => {
                  const pokemonData = pokemon ? POKEDEX_DATA.find(p => p.name === (typeof pokemon === 'object' ? pokemon.name : pokemon)) : null;
                  
                  return (
                  <div key={index} className="pokemon-slot">
                    <label>SLOT {index + 1}</label>
                    {pokemon ? (
                      <div className="pokemon-with-ability">
                        {/* Campo de apodo */}
                        <input 
                          type="text"
                          className="pixel-input nickname-input"
                          placeholder="Apodo (opcional)"
                          value={typeof pokemon === 'object' ? (pokemon.nickname || '') : ''}
                          onChange={(e) => handleNicknameChange(player.id, index, e.target.value)}
                          disabled={!canEdit}
                        />
                        
                        {/* Nombre del Pokémon */}
                        <div className="pokemon-selected">
                          <span>{typeof pokemon === 'object' ? pokemon.name : pokemon}</span>
                          {canEdit && (
                            <button 
                              className="remove-pokemon-btn"
                              onClick={() => handleRemoveFromTeam(player.id, index)}
                            >
                              ✕
                            </button>
                          )}
                        </div>
                        
                        {/* Sprite del Pokémon */}
                        {pokemonData && (
                          <div className="pokemon-sprite-container">
                            <img 
                              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.number}.png`}
                              alt={pokemonData.name}
                              className="pokemon-team-sprite"
                            />
                          </div>
                        )}
                        
                        {/* Selector de habilidad con búsqueda */}
                        <div className="searchable-select">
                          <input 
                            type="text"
                            list={`abilities-${player.id}-${index}`}
                            className="pixel-input ability-select"
                            placeholder="Buscar habilidad..."
                            value={abilitySearchValues[`${player.id}-${index}`] !== undefined 
                              ? abilitySearchValues[`${player.id}-${index}`]
                              : (typeof pokemon === 'object' ? (pokemon.ability || '') : '')}
                            onChange={(e) => {
                              const key = `${player.id}-${index}`;
                              setAbilitySearchValues(prev => ({ ...prev, [key]: e.target.value }));
                            }}
                            onBlur={(e) => {
                              const value = e.target.value.trim();
                              if (value === '') {
                                handleAbilityChange(player.id, index, '');
                                const key = `${player.id}-${index}`;
                                setAbilitySearchValues(prev => ({ ...prev, [key]: undefined }));
                                return;
                              }
                              if (ABILITIES_DATA.find(a => a.name === value)) {
                                handleAbilityChange(player.id, index, value);
                                const key = `${player.id}-${index}`;
                                setAbilitySearchValues(prev => ({ ...prev, [key]: undefined }));
                              } else {
                                alert('⚠️ Por favor selecciona una habilidad válida de la lista');
                                const key = `${player.id}-${index}`;
                                setAbilitySearchValues(prev => ({ ...prev, [key]: typeof pokemon === 'object' ? (pokemon.ability || '') : '' }));
                              }
                            }}
                            disabled={!canEdit}
                          />
                          <datalist id={`abilities-${player.id}-${index}`}>
                            <option value="">Sin habilidad</option>
                            {ABILITIES_DATA.map(ability => (
                              <option key={ability.id} value={ability.name} />
                            ))}
                          </datalist>
                        </div>
                      </div>
                    ) : (
                      canEdit && (
                        <div className="searchable-select">
                          <input 
                            type="text"
                            list={`pokemon-${player.id}-${index}`}
                            className="pixel-input"
                            placeholder="Buscar Pokémon..."
                            value={pokemonSearchValues[`${player.id}-${index}`] || ''}
                            onChange={(e) => {
                              const key = `${player.id}-${index}`;
                              setPokemonSearchValues(prev => ({ ...prev, [key]: e.target.value }));
                            }}
                            onBlur={(e) => {
                              const value = e.target.value.trim();
                              if (value === '') {
                                return; // No hacer nada si está vacío
                              }
                              if (POKEMON_LIST.includes(value)) {
                                handleTeamChange(player.id, index, value);
                              } else {
                                alert('⚠️ Por favor selecciona un Pokémon válido de la lista');
                                const key = `${player.id}-${index}`;
                                setPokemonSearchValues(prev => ({ ...prev, [key]: '' }));
                                e.target.value = '';
                              }
                            }}
                          />
                          <datalist id={`pokemon-${player.id}-${index}`}>
                            <option value="">VACÍO</option>
                            {POKEMON_LIST.map(poke => (
                              <option key={poke} value={poke} />
                            ))}
                          </datalist>
                        </div>
                      )
                    )}
                  </div>
                );
                })}
              </div>
            </div>

            {/* Badges Section */}
            <div className="badges-section">
              <h3>MEDALLAS ({player.badges.filter(Boolean).length}/8)</h3>
              <div className="badges-grid">
                {KANTO_BADGES.map((badge, index) => (
                  <button
                    key={badge.id}
                    className={`badge-btn ${player.badges[index] ? 'obtained' : ''} ${!canEdit ? 'disabled' : ''}`}
                    onClick={() => canEdit && handleBadgeToggle(player.id, index)}
                    title={badge.name}
                    disabled={!canEdit}
                  >
                    <img src={badge.image} alt={badge.name} className="badge-image" />
                  </button>
                ))}
              </div>
            </div>

            {/* Rewards Section */}
            <div className="rewards-section">
              <h3>RECOMPENSAS ({player.rewards.length})</h3>
              {player.rewards.length > 0 ? (
                <ul className="rewards-list">
                  {player.rewards.map((reward, index) => (
                    <li key={index} className="reward-item">
                      <span>{reward}</span>
                      {canEdit && (
                        <button 
                          className="remove-reward-btn"
                          onClick={() => handleRemoveReward(player.id, index)}
                        >
                          ✕
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-rewards">SIN RECOMPENSAS</p>
              )}
            </div>

            {/* Stats Footer */}
            <div className="player-stats-footer">
              <div className="stat">
                <span className="stat-label">PUNTOS</span>
                <span className="stat-value">{player.points}</span>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      {(tournamentData.players || []).length === 0 && !showAddForm && (
        <div className="empty-state pixel-card">
          <p className="empty-icon">👤</p>
          <h3>NO HAY JUGADORES</h3>
          <p>Haz clic en "NUEVO JUGADOR" para comenzar</p>
        </div>
      )}
    </div>
  );
};

export default Players;
