import { useState, useEffect, useRef } from 'react';
import './Players.css';
import { ABILITIES_DATA } from '../data/abilities';
import { POKEDEX_DATA } from '../data/pokedex';
import { safeTeamToArray } from '../utils/teamHelpers';

const AVAILABLE_SPRITES = [
  { id: 'aleja', name: 'Aleja', image: '/sprites/Aleja.jpg' },
  { id: 'gonzalez', name: 'Gonzalez', image: '/sprites/Gonzalez.jpg' },
  { id: 'jano', name: 'Jano', image: '/sprites/Jano.jpg' },
  { id: 'josama', name: 'Josama', image: '/sprites/Josama.jpg' },
  { id: 'koke', name: 'Koke', image: '/sprites/Koke.jpg' },
  { id: 'marionetty', name: 'Marionetty', image: '/sprites/Marionetty.jpg' },
  { id: 'palenx', name: 'Palenx', image: '/sprites/Palenx.jpg' },
  { id: 'patris', name: 'Patris', image: '/sprites/Patris.jpg' },
  { id: 'pescador_jano', name: 'Pescador Jano', image: '/sprites/Pescador Jano.jpg' },
  { id: 'rupert', name: 'Rupert', image: '/sprites/Rupert.jpg' },
  { id: 'smoke', name: 'Smoke', image: '/sprites/Smoke.jpg' },
  { id: 'yas', name: 'Yas', image: '/sprites/Yas.jpg' },
  { id: 'zainys', name: 'Zainys', image: '/sprites/Zainys.jpg' },
  { id: 'dano', name: 'Dano', image: '/sprites/Dano.jpg' },
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

const CARD_BACKGROUNDS = [
  { id: 'default', name: 'Predeterminado', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 'fire', name: 'Fuego', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 'water', name: 'Agua', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 'grass', name: 'Planta', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { id: 'electric', name: 'Eléctrico', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  { id: 'psychic', name: 'Psíquico', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
  { id: 'dark', name: 'Oscuro', gradient: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)' },
  { id: 'dragon', name: 'Dragón', gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff4e50 100%)' },
  { id: 'fairy', name: 'Hada', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { id: 'steel', name: 'Acero', gradient: 'linear-gradient(135deg, #d7d2cc 0%, #304352 100%)' },
];

const CARD_BORDERS = [
  { id: 'default', name: 'Normal', style: '4px solid var(--shadow-dark)' },
  { id: 'double', name: 'Doble', style: '6px double #fbbf24' },
  { id: 'dashed', name: 'Punteado', style: '4px dashed #10b981' },
  { id: 'thick', name: 'Grueso', style: '8px solid #ef4444' },
  { id: 'glow', name: 'Brillante', style: '4px solid #8b5cf6', shadow: '0 0 20px rgba(139, 92, 246, 0.6)' },
  { id: 'gold', name: 'Oro', style: '5px solid #fbbf24', shadow: '0 0 15px rgba(251, 191, 36, 0.5)' },
  { id: 'silver', name: 'Plata', style: '5px solid #e5e7eb', shadow: '0 0 15px rgba(229, 231, 235, 0.5)' },
  { id: 'neon', name: 'Neón', style: '3px solid #06b6d4', shadow: '0 0 25px rgba(6, 182, 212, 0.8)' },
];

// Extraer todos los nombres de Pokémon de Gen 1-3 desde la Pokédex
const POKEMON_LIST = POKEDEX_DATA
  .filter(pokemon => pokemon.generation >= 1 && pokemon.generation <= 3)
  .map(pokemon => pokemon.name);

// Función para identificar Pokémon que son primera fase de línea evolutiva de 3
const getThreeStageStarters = () => {
  const starters = [];

  POKEDEX_DATA.forEach(pokemon => {
    // Verificar si este Pokémon evoluciona
    const evolutionMatch = pokemon.evolution.match(/Evoluciona a (\w+)/);
    if (!evolutionMatch) return;

    const secondStageName = evolutionMatch[1];
    const secondStage = POKEDEX_DATA.find(p => p.name === secondStageName);

    if (!secondStage) return;

    // Verificar si la segunda fase también evoluciona
    const secondEvolutionMatch = secondStage.evolution.match(/Evoluciona a (\w+)/);
    if (!secondEvolutionMatch) return;

    const thirdStageName = secondEvolutionMatch[1];
    const thirdStage = POKEDEX_DATA.find(p => p.name === thirdStageName);

    // Verificar que la tercera fase no evoluciona más (línea completa de 3)
    if (thirdStage && thirdStage.evolution === 'No evoluciona') {
      // Verificar que sea Gen 1-3
      if (pokemon.generation >= 1 && pokemon.generation <= 3) {
        starters.push(pokemon);
      }
    }
  });

  return starters;
};

const VALID_STARTERS = getThreeStageStarters();

const Players = ({ tournamentData, audioControls, auth }) => {
  const audioRef = useRef(null);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [pokemonSearchValues, setPokemonSearchValues] = useState({});
  const [abilitySearchValues, setAbilitySearchValues] = useState({});
  const [showCapturedModal, setShowCapturedModal] = useState(null); // {playerId, playerName}
  const [showStarterModal, setShowStarterModal] = useState(null); // playerId
  const [starterSearchTerm, setStarterSearchTerm] = useState('');
  const [showCustomizeModal, setShowCustomizeModal] = useState(null); // playerId
  const [showAddRewardModal, setShowAddRewardModal] = useState(null); // playerId
  const [selectedReward, setSelectedReward] = useState('');
  const [showDeathInsuranceModal, setShowDeathInsuranceModal] = useState(null); // {playerId, playerName}
  const [selectedInsurancePokemon, setSelectedInsurancePokemon] = useState([]); // Selección temporal de seguros

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

    const team = safeTeamToArray(player.team);
    const newTeam = [...team];
    if (pokemonName) {
      newTeam[slotIndex] = typeof newTeam[slotIndex] === 'object'
        ? { ...newTeam[slotIndex], name: pokemonName }
        : { name: pokemonName, ability: null };
    } else {
      newTeam[slotIndex] = null;
    }

    // Limpiar undefined
    const cleanTeam = newTeam.map(slot => slot === undefined ? null : slot);

    tournamentData.updatePlayer(playerId, { team: cleanTeam });

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

    const team = safeTeamToArray(player.team);
    const newTeam = [...team];
    if (newTeam[slotIndex]) {
      newTeam[slotIndex] = typeof newTeam[slotIndex] === 'object'
        ? { ...newTeam[slotIndex], ability: abilityName || null }
        : { name: newTeam[slotIndex], ability: abilityName || null };
    }

    // Limpiar undefined
    const cleanTeam = newTeam.map(slot => slot === undefined ? null : slot);

    tournamentData.updatePlayer(playerId, { team: cleanTeam });
  };

  const handleNicknameChange = (playerId, slotIndex, nickname) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    const team = safeTeamToArray(player.team);
    const newTeam = [...team];
    if (newTeam[slotIndex]) {
      newTeam[slotIndex] = typeof newTeam[slotIndex] === 'object'
        ? { ...newTeam[slotIndex], nickname: nickname || null }
        : { name: newTeam[slotIndex], nickname: nickname || null };
    }

    // Limpiar undefined
    const cleanTeam = newTeam.map(slot => slot === undefined ? null : slot);

    tournamentData.updatePlayer(playerId, { team: cleanTeam });
  };

  const handleRemoveFromTeam = (playerId, slotIndex) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    const team = safeTeamToArray(player.team);
    const newTeam = [...team];
    newTeam[slotIndex] = null;

    // Limpiar undefined
    const cleanTeam = newTeam.map(slot => slot === undefined ? null : slot);

    tournamentData.updatePlayer(playerId, { team: cleanTeam });
  };

  const handleChangeBackground = (playerId, backgroundId) => {
    const background = CARD_BACKGROUNDS.find(bg => bg.id === backgroundId);
    if (background) {
      tournamentData.updatePlayer(playerId, {
        cardBackground: backgroundId,
        cardBackgroundGradient: background.gradient
      });
    }
  };

  const handleChangeBorder = (playerId, borderId) => {
    const border = CARD_BORDERS.find(b => b.id === borderId);
    if (border) {
      tournamentData.updatePlayer(playerId, {
        cardBorder: borderId,
        cardBorderStyle: border.style,
        cardBorderShadow: border.shadow || null
      });
    }
  };

  const handleChangeAvatarBorder = (playerId, borderId) => {
    const border = CARD_BORDERS.find(b => b.id === borderId);
    if (border) {
      tournamentData.updatePlayer(playerId, {
        avatarBorder: borderId,
        avatarBorderStyle: border.style,
        avatarBorderShadow: border.shadow || null
      });
    }
  };

  // Helper function to update captured Pokémon evolution
  const updateCapturedPokemonEvolution = (playerName, oldPokemonNumber, newPokemonNumber, zone) => {
    const record = (tournamentData.captureRecords || []).find(r =>
      r.playerName.toLowerCase() === playerName.toLowerCase()
    );

    if (!record) return; // Pokémon not in capture records (e.g., starter)

    const updateZone = (zones) => zones.map(z => {
      if (z.captured && z.capturedPokemon &&
        parseInt(z.capturedPokemon.pokemon) === oldPokemonNumber &&
        z.name === zone) {
        return {
          ...z,
          capturedPokemon: {
            ...z.capturedPokemon,
            pokemon: newPokemonNumber.toString()
          }
        };
      }
      return z;
    });

    const updatedRecord = {
      kantoZones: updateZone(record.kantoZones || []),
      seviZones: updateZone(record.seviZones || []),
      extraCaptureSlots: updateZone(record.extraCaptureSlots || [])
    };

    tournamentData.updateCaptureRecord(record.id, updatedRecord);
  };

  const handleEvolvePokemon = (playerId, slotIndex) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    const team = safeTeamToArray(player.team);
    const currentPokemon = team[slotIndex];
    const pokemonName = typeof currentPokemon === 'object' ? currentPokemon.name : currentPokemon;
    const currentPokemonData = POKEDEX_DATA.find(p => p.name === pokemonName);

    if (!currentPokemonData) return;

    // Buscar la evolución en la descripción del campo evolution
    const evolutionMatch = currentPokemonData.evolution.match(/Evoluciona a (\w+)/);

    if (!evolutionMatch) {
      alert('🚫 Este Pokémon no puede evolucionar más');
      return;
    }

    const evolvedPokemonName = evolutionMatch[1];
    const evolvedPokemonData = POKEDEX_DATA.find(p => p.name === evolvedPokemonName);

    if (!evolvedPokemonData) {
      alert('❌ Error al encontrar la evolución');
      return;
    }

    // Actualizar equipo
    const newTeam = [...team];
    newTeam[slotIndex] = typeof currentPokemon === 'object'
      ? { ...currentPokemon, name: evolvedPokemonName }
      : evolvedPokemonName;

    // Limpiar undefined
    const cleanTeam = newTeam.map(slot => slot === undefined ? null : slot);

    tournamentData.updatePlayer(playerId, { team: cleanTeam });

    // Actualizar Pokémon capturado si existe
    const capturedPokemon = tournamentData.getCapturedPokemonByPlayer(player.name);
    const captured = capturedPokemon.find(p => {
      const capPokemonData = POKEDEX_DATA.find(pd => pd.number === parseInt(p.pokemon));
      return capPokemonData && capPokemonData.name === pokemonName;
    });

    if (captured) {
      updateCapturedPokemonEvolution(
        player.name,
        currentPokemonData.number,
        evolvedPokemonData.number,
        captured.zone
      );

      // Transferir seguro de muerte si existe
      const oldIdentifier = `captured-${playerId}-${currentPokemonData.number}-${captured.zone}`;
      const newIdentifier = `captured-${playerId}-${evolvedPokemonData.number}-${captured.zone}`;

      if (tournamentData.hasDeathInsurance(playerId, oldIdentifier)) {
        const insuranceId = tournamentData.getInsuranceId(playerId, oldIdentifier);
        tournamentData.removeDeathInsurance(playerId, oldIdentifier);

        // Añadir seguro a la evolución con el mismo insuranceId
        const deathInsurances = player.deathInsurances || [];
        const newInsurance = {
          identifier: newIdentifier,
          insuranceId: insuranceId,
          addedAt: Date.now()
        };

        tournamentData.updatePlayer(playerId, {
          deathInsurances: [...deathInsurances.filter(ins => ins.identifier !== oldIdentifier), newInsurance]
        });
      }
    }

    alert(`✨ ${pokemonName} ha evolucionado a ${evolvedPokemonName}!`);
  };

  const handleDevolvePokemon = (playerId, slotIndex) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    const team = safeTeamToArray(player.team);
    const currentPokemon = team[slotIndex];
    const pokemonName = typeof currentPokemon === 'object' ? currentPokemon.name : currentPokemon;
    const currentPokemonData = POKEDEX_DATA.find(p => p.name === pokemonName);

    if (!currentPokemonData) return;

    // Buscar todas las evoluciones previas
    let previousPokemon = null;

    for (const pokemon of POKEDEX_DATA) {
      const evolutionMatch = pokemon.evolution.match(/Evoluciona a (\w+)/);
      if (evolutionMatch && evolutionMatch[1] === pokemonName) {
        previousPokemon = pokemon;
        break;
      }
    }

    if (!previousPokemon) {
      alert('🚫 Este Pokémon no tiene forma previa');
      return;
    }

    // Actualizar equipo
    const newTeam = [...team];
    newTeam[slotIndex] = typeof currentPokemon === 'object'
      ? { ...currentPokemon, name: previousPokemon.name }
      : previousPokemon.name;

    // Limpiar undefined
    const cleanTeam = newTeam.map(slot => slot === undefined ? null : slot);

    tournamentData.updatePlayer(playerId, { team: cleanTeam });

    // Actualizar Pokémon capturado si existe
    const capturedPokemon = tournamentData.getCapturedPokemonByPlayer(player.name);
    const captured = capturedPokemon.find(p => {
      const capPokemonData = POKEDEX_DATA.find(pd => pd.number === parseInt(p.pokemon));
      return capPokemonData && capPokemonData.name === pokemonName;
    });

    if (captured) {
      updateCapturedPokemonEvolution(
        player.name,
        currentPokemonData.number,
        previousPokemon.number,
        captured.zone
      );

      // Transferir seguro de muerte si existe
      const oldIdentifier = `captured-${playerId}-${currentPokemonData.number}-${captured.zone}`;
      const newIdentifier = `captured-${playerId}-${previousPokemon.number}-${captured.zone}`;

      if (tournamentData.hasDeathInsurance(playerId, oldIdentifier)) {
        const insuranceId = tournamentData.getInsuranceId(playerId, oldIdentifier);
        tournamentData.removeDeathInsurance(playerId, oldIdentifier);

        // Añadir seguro a la forma previa con el mismo insuranceId
        const deathInsurances = player.deathInsurances || [];
        const newInsurance = {
          identifier: newIdentifier,
          insuranceId: insuranceId,
          addedAt: Date.now()
        };

        tournamentData.updatePlayer(playerId, {
          deathInsurances: [...deathInsurances.filter(ins => ins.identifier !== oldIdentifier), newInsurance]
        });
      }
    }

    alert(`🔙 ${pokemonName} ha devuelto a ${previousPokemon.name}!`);
  };

  const handleAddStarter = (playerId, starterName) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    const team = player.team || [];

    // Buscar primer slot vacío
    const emptySlotIndex = team.findIndex(slot => !slot);

    if (emptySlotIndex === -1 && team.length >= 6) {
      alert('❌ El equipo está completo (6 Pokémon)');
      return;
    }

    const newTeam = [...team];
    if (emptySlotIndex !== -1) {
      newTeam[emptySlotIndex] = starterName;
    } else {
      newTeam.push(starterName);
    }

    // Rellenar con null hasta tener 6 slots
    while (newTeam.length < 6) {
      newTeam.push(null);
    }

    tournamentData.updatePlayer(playerId, { team: newTeam });
    setShowStarterModal(null);
    alert(`🎉 ¡${starterName} ha sido añadido al equipo!`);
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

  const handleSyncTeam = (playerId) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return;

    if (!confirm('¿Sincronizar equipo con Pokémon capturados? Esto eliminará del equipo cualquier Pokémon que no esté en tus zonas capturadas.')) {
      return;
    }

    // Obtener todos los Pokémon capturados del jugador
    const capturedPokemon = tournamentData.getCapturedPokemonByPlayer(player.name);
    const capturedPokemonNames = capturedPokemon.map(p => {
      const pokemonData = POKEDEX_DATA.find(pd => pd.number === parseInt(p.pokemon));
      return pokemonData ? pokemonData.name : null;
    }).filter(name => name !== null);

    // Filtrar el equipo para solo mantener Pokémon capturados
    const syncedTeam = safeTeamToArray(player.team).map(pokemon => {
      if (!pokemon) return null;
      const pokemonName = typeof pokemon === 'object' ? pokemon.name : pokemon;
      // Mantener solo si está en los capturados
      if (capturedPokemonNames.includes(pokemonName)) {
        return pokemon;
      }
      return null;
    });

    tournamentData.updatePlayer(playerId, { team: syncedTeam });
    alert('✅ Equipo sincronizado correctamente');
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
            <div
              key={player.id}
              className={`player-card pixel-card ${!canEdit ? 'read-only' : ''} ${isAdmin && canEdit ? 'admin-editable' : ''}`}
              style={{
                background: player.cardBackgroundGradient || CARD_BACKGROUNDS[0].gradient,
                border: player.cardBorderStyle || CARD_BORDERS[0].style,
                boxShadow: player.cardBorderShadow || 'none'
              }}
            >
              {/* Card Header */}
              <div className="player-card-header">
                <div className="player-info-top">
                  <h2 className="player-name">
                    {player.name}
                    {isAdmin && canEdit && player.id !== auth.currentUser?.playerId && (
                      <span className="admin-control-badge" title="Controlado por admin">👑</span>
                    )}
                  </h2>
                  {player.trainerName && (
                    <p className="trainer-name">"{player.trainerName}"</p>
                  )}
                  <span className={`mode-badge ${player.mode}`}>
                    {player.mode === 'hardcore' ? 'HARDCORE' : 'SOFTCORE'}
                  </span>
                  {!canEdit && <span className="view-only-badge">👁️ SOLO LECTURA</span>}
                </div>

                {canEdit && (
                  <div className="card-actions">
                    <button
                      className="customize-btn pixel-button"
                      onClick={() => setShowCustomizeModal(player.id)}
                      title="Personalizar ficha"
                    >
                      🎨
                    </button>
                    <button
                      className="delete-btn pixel-button-danger"
                      onClick={async () => {
                        if (confirm(`¿Eliminar a ${player.name}?`)) {
                          tournamentData.deletePlayer(player.id);
                          if (player.id === auth.currentUser?.playerId) {
                            await auth.deleteUserPlayer();
                            alert('✅ Jugador eliminado correctamente. Ahora puedes crear uno nuevo.');
                            // Forzar recarga de la página para actualizar el estado
                            window.location.reload();
                          }
                        }
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                )}
              </div>

              {/* Avatar Section */}
              <div className="player-avatar-section">
                <label>AVATAR / SPRITE</label>
                {player.avatarImage ? (
                  <div
                    className="avatar-preview"
                    style={{
                      border: player.avatarBorderStyle || CARD_BORDERS[0].style,
                      boxShadow: player.avatarBorderShadow || 'none'
                    }}
                  >
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
                <div className="team-section-header">
                  <h3>EQUIPO POKÉMON</h3>
                  <div className="team-buttons">
                    <button
                      className="pixel-btn captured-btn"
                      onClick={() => setShowCapturedModal({ playerId: player.id, playerName: player.name })}
                    >
                      📦 CAPTURADOS
                    </button>
                    <button
                      className="pixel-btn starter-btn"
                      onClick={() => setShowStarterModal(player.id)}
                    >
                      🎓 STARTER OAK
                    </button>
                    {canEdit && (
                      <button
                        className="pixel-btn sync-btn"
                        onClick={() => handleSyncTeam(player.id)}
                        title="Limpiar Pokémon no capturados del equipo"
                      >
                        🔄 SINCRONIZAR
                      </button>
                    )}
                  </div>
                </div>
                <div className="pokemon-slots">
                  {safeTeamToArray(player.team).map((pokemon, index) => {
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
                                <>
                                  <button
                                    className="remove-pokemon-btn"
                                    onClick={() => handleRemoveFromTeam(player.id, index)}
                                  >
                                    ✕
                                  </button>
                                </>
                              )}
                            </div>

                            {/* Botones de evolución */}
                            {canEdit && (
                              <div className="evolution-buttons">
                                <button
                                  className="evolve-btn"
                                  onClick={() => handleEvolvePokemon(player.id, index)}
                                  title="Evolucionar"
                                >
                                  ⬆️ Evolucionar
                                </button>
                                <button
                                  className="devolve-btn"
                                  onClick={() => handleDevolvePokemon(player.id, index)}
                                  title="Devolver"
                                >
                                  ⬇️ Devolver
                                </button>
                              </div>
                            )}

                            {/* Sprite del Pokémon */}
                            {pokemonData && (() => {
                              const pokemonName = typeof pokemon === 'object' ? pokemon.name : pokemon;
                              // Buscar el Pokémon en capturados para obtener su identificador original
                              const capturedPokemon = tournamentData.getCapturedPokemonByPlayer(player.name);
                              const captured = capturedPokemon.find(p => {
                                const capPokemonData = POKEDEX_DATA.find(pd => pd.number === parseInt(p.pokemon));
                                return capPokemonData && capPokemonData.name === pokemonName;
                              });

                              // Usar identificador basado en zona de captura si existe, sino usar genérico
                              const pokemonIdentifier = captured
                                ? `captured-${player.id}-${captured.pokemon}-${captured.zone}`
                                : `team-${player.id}-${pokemonName}`;
                              const hasInsurance = tournamentData.hasDeathInsurance(player.id, pokemonIdentifier);

                              return (
                                <div className="pokemon-sprite-container">
                                  <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.number}.png`}
                                    alt={pokemonData.name}
                                    className="pokemon-team-sprite"
                                  />
                                  {hasInsurance && (
                                    <div
                                      className="death-insurance-badge"
                                      onClick={() => {
                                        if (confirm('¿Has utilizado ya tu seguro de muerte?')) {
                                          tournamentData.removeDeathInsurance(player.id, pokemonIdentifier);
                                          alert('🛡️ Seguro de muerte utilizado');
                                        }
                                      }}
                                      title="Seguro de muerte activo - Click si lo has usado"
                                    >
                                      🛡️
                                    </div>
                                  )}
                                </div>
                              );
                            })()}

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
                <h3>MEDALLAS ({(player.badges || []).filter(Boolean).length}/8)</h3>
                <div className="badges-grid">
                  {KANTO_BADGES.map((badge, index) => (
                    <button
                      key={badge.id}
                      className={`badge-btn ${(player.badges || [])[index] ? 'obtained' : ''} ${!canEdit ? 'disabled' : ''}`}
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
                <div className="section-header">
                  <h3>RECOMPENSAS ({(player.rewards || []).length})</h3>
                  {isAdmin && (
                    <button
                      className="add-manual-reward-btn pixel-button"
                      onClick={() => {
                        setShowAddRewardModal(player.id);
                        setSelectedReward('');
                      }}
                      title="Añadir recompensa manualmente"
                    >
                      ➕
                    </button>
                  )}
                </div>
                {(player.rewards || []).length > 0 ? (
                  <ul className="rewards-list">
                    {(() => {
                      const displayRewards = [];
                      const deletedInsurances = player.deletedInsurances || [];

                      (player.rewards || []).forEach((reward, index) => {
                        // Detectar seguros por patrón (🛡️ Seguro #N)
                        const isInsuranceReward = reward.startsWith('🛡️ Seguro #');

                        if (isInsuranceReward) {
                          // Solo mostrar si no ha sido eliminado
                          if (!deletedInsurances.includes(reward)) {
                            displayRewards.push({
                              originalIndex: index,
                              displayText: reward,
                              insuranceId: reward,
                              isInsurance: true
                            });
                          }
                        } else {
                          displayRewards.push({
                            originalIndex: index,
                            displayText: reward,
                            insuranceId: null,
                            isInsurance: false
                          });
                        }
                      });

                      return displayRewards.map((item, displayIndex) => {
                        // Para seguros, verificar si este seguro específico ha sido usado
                        let isUsed;
                        if (item.isInsurance) {
                          // Verificar si este insuranceId específico está en algún deathInsurance
                          const deathInsurances = player.deathInsurances || [];
                          isUsed = deathInsurances.some(ins => ins.insuranceId === item.insuranceId);
                        } else {
                          // Para otras recompensas, usar el sistema normal
                          isUsed = (player.usedRewards || []).includes(item.originalIndex);
                        }

                        return (
                          <li key={`${item.originalIndex}-${displayIndex}`} className={`reward-item ${isUsed ? 'used' : ''} ${item.isInsurance ? 'insurance-item' : ''}`}>
                            <div className="reward-content">
                              {canEdit && !item.isInsurance && (
                                <input
                                  type="checkbox"
                                  className="reward-checkbox"
                                  checked={isUsed}
                                  onChange={() => tournamentData.toggleRewardUsed(player.id, item.originalIndex)}
                                  title={isUsed ? "Marcar como no usada" : "Marcar como usada"}
                                />
                              )}
                              <span
                                className={`reward-text ${item.isInsurance && !isUsed ? 'clickable-insurance' : ''}`}
                                onClick={() => {
                                  if (item.isInsurance && !isUsed && canEdit) {
                                    // Abrir modal para aplicar este seguro específico
                                    setShowDeathInsuranceModal({
                                      playerId: player.id,
                                      playerName: player.name,
                                      insuranceId: item.insuranceId
                                    });
                                  }
                                }}
                                title={item.isInsurance && !isUsed ? "Click para aplicar este seguro a un Pokémon" : ""}
                              >
                                {isUsed && item.isInsurance && '✅ '}
                                {item.displayText}
                              </span>
                            </div>
                            {/* Admin puede eliminar seguros */}
                            {isAdmin && item.isInsurance && (
                              <button
                                className="remove-reward-btn"
                                onClick={() => {
                                  if (confirm(`¿Eliminar el seguro "${item.displayText}"?${isUsed ? ' Esto también eliminará el seguro del Pokémon que lo tenga.' : ''}`)) {
                                    if (isUsed) {
                                      // Encontrar y eliminar el seguro del Pokémon
                                      const deathInsurances = player.deathInsurances || [];
                                      const insuranceToRemove = deathInsurances.find(ins => ins.insuranceId === item.insuranceId);
                                      if (insuranceToRemove) {
                                        tournamentData.removeDeathInsurance(player.id, insuranceToRemove.identifier);
                                      }
                                    }

                                    // Eliminar el item de la lista de recompensas
                                    handleRemoveReward(player.id, item.originalIndex);
                                    alert('✅ Seguro eliminado correctamente');
                                  }
                                }}
                                title={`Eliminar seguro (Admin)${isUsed ? ' - Usado' : ' - Disponible'}`}
                              >
                                ✕
                              </button>
                            )}
                            {canEdit && !item.isInsurance && (
                              <button
                                className="remove-reward-btn"
                                onClick={() => {
                                  if (confirm(`¿Eliminar la recompensa "${item.displayText}"?`)) {
                                    handleRemoveReward(player.id, item.originalIndex);
                                    alert('✅ Recompensa eliminada correctamente');
                                  }
                                }}
                                title="Eliminar recompensa"
                              >
                                ✕
                              </button>
                            )}
                          </li>
                        );
                      });
                    })()}
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

      {/* Captured Pokemon Modal */}
      {showCapturedModal && (
        <div className="modal-overlay" onClick={() => setShowCapturedModal(null)}>
          <div className="modal-content pixel-card captured-modal" onClick={(e) => e.stopPropagation()}>
            <h2>📦 POKÉMON CAPTURADOS</h2>
            <p className="modal-subtitle">{showCapturedModal.playerName}</p>

            {(() => {
              const capturedPokemon = tournamentData.getCapturedPokemonByPlayer(showCapturedModal.playerName);
              const canEdit = isAdmin || showCapturedModal.playerId === auth.currentUser?.playerId;

              if (capturedPokemon.length === 0) {
                return (
                  <div className="empty-captured">
                    <p className="empty-icon">📭</p>
                    <p>No hay Pokémon capturados registrados</p>
                    <p className="hint">Ve a "RECURSOS" → "REGISTRO ZONAS" para registrar capturas</p>
                  </div>
                );
              }

              return (
                <div className="captured-pokemon-grid">
                  {capturedPokemon.map((pokemon, index) => {
                    const pokemonData = POKEDEX_DATA.find(p => p.number === parseInt(pokemon.pokemon));
                    return (
                      <div key={index} className={`captured-pokemon-card pixel-card ${pokemon.isDead ? 'is-dead' : ''}`}>
                        <div className="captured-sprite">
                          <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon}.png`}
                            alt={`#${pokemon.pokemon}`}
                          />
                          {pokemon.isDead && <div className="dead-overlay">💀</div>}
                          {(() => {
                            const pokemonName = pokemonData ? pokemonData.name : `#${pokemon.pokemon}`;
                            const pokemonIdentifier = `captured-${showCapturedModal.playerId}-${pokemon.pokemon}-${pokemon.zone}`;
                            const hasInsurance = tournamentData.hasDeathInsurance(showCapturedModal.playerId, pokemonIdentifier);

                            return hasInsurance && (
                              <div
                                className="death-insurance-badge"
                                onClick={() => {
                                  if (confirm('¿Has utilizado ya tu seguro de muerte?')) {
                                    tournamentData.removeDeathInsurance(showCapturedModal.playerId, pokemonIdentifier);
                                    alert('🛡️ Seguro de muerte utilizado');
                                  }
                                }}
                                title="Seguro de muerte activo - Click si lo has usado"
                              >
                                🛡️
                              </div>
                            );
                          })()}
                        </div>
                        <div className="captured-info">
                          <h4>{pokemon.nickname || (pokemonData ? pokemonData.name : `#${pokemon.pokemon}`)}</h4>
                          {pokemon.nickname && pokemonData && (
                            <p className="pokemon-species">{pokemonData.name}</p>
                          )}
                          {pokemon.ability && (
                            <span className="pokemon-ability">⚡ {pokemon.ability}</span>
                          )}
                          <span className="pokemon-location">📍 {pokemon.zone}</span>
                          <span className="pokemon-region">{pokemon.region}</span>
                        </div>
                        {canEdit && (
                          <div className="captured-actions">
                            <button
                              className={`status-toggle-btn pixel-button ${pokemon.isDead ? 'dead' : 'alive'}`}
                              onClick={() => tournamentData.togglePokemonDeathStatus(pokemon)}
                              title={pokemon.isDead ? "Revivir Pokémon" : "Marcar como muerto"}
                            >
                              {pokemon.isDead ? "💀 MUERTO" : "❤️ VIVO"}
                            </button>

                            <button
                              className="add-to-team-btn pixel-button"
                              disabled={pokemon.isDead}
                              onClick={() => {
                                console.log('🔍 DEBUG: Botón añadir clickeado');
                                // Añadir al equipo (solo si no está muerto)
                                if (pokemon.isDead) {
                                  console.log('❌ Pokémon está muerto');
                                  return;
                                }

                                const player = (tournamentData.players || []).find(p => p.id === showCapturedModal.playerId);
                                console.log('🔍 DEBUG: Player encontrado:', player);
                                if (!player) {
                                  console.log('❌ Player no encontrado');
                                  return;
                                }

                                const team = safeTeamToArray(player.team);
                                console.log('🔍 DEBUG: Team actual:', team);

                                // Buscar primer slot vacío
                                const emptySlotIndex = team.findIndex(slot => !slot);
                                console.log('🔍 DEBUG: Empty slot index:', emptySlotIndex);

                                if (emptySlotIndex === -1 && team.length >= 6) {
                                  alert('❌ El equipo está completo (6 Pokémon)');
                                  return;
                                }

                                const pokemonToAdd = {
                                  name: pokemonData ? pokemonData.name : `#${pokemon.pokemon}`,
                                  nickname: pokemon.nickname || '',
                                  ability: pokemon.ability || ''
                                };
                                console.log('🔍 DEBUG: Pokemon a añadir:', pokemonToAdd);

                                const newTeam = [...team];
                                if (emptySlotIndex !== -1) {
                                  newTeam[emptySlotIndex] = pokemonToAdd;
                                } else {
                                  newTeam.push(pokemonToAdd);
                                }

                                // Rellenar con null hasta tener 6 slots
                                // IMPORTANTE: Firebase no acepta undefined, solo null
                                while (newTeam.length < 6) {
                                  newTeam.push(null);
                                }

                                // Asegurarse de que no hay undefined en el array
                                const cleanTeam = newTeam.map(slot => slot === undefined ? null : slot);

                                console.log('🔍 DEBUG: Nuevo team:', cleanTeam);
                                console.log('🔍 DEBUG: Llamando updatePlayer con playerId:', player.id);
                                tournamentData.updatePlayer(player.id, { team: cleanTeam });
                                alert('✅ Pokémon añadido al equipo');
                              }}
                            >
                              {pokemon.isDead ? "🚫 NO DISP." : "➕ AÑADIR"}
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            <button
              className="close-modal-btn pixel-button"
              onClick={() => setShowCapturedModal(null)}
            >
              ✕ CERRAR
            </button>
          </div>
        </div>
      )}

      {/* Starter Selection Modal */}
      {showStarterModal && (
        <div className="modal-overlay" onClick={() => { setShowStarterModal(null); setStarterSearchTerm(''); }}>
          <div className="modal-content pixel-card starter-modal" onClick={(e) => e.stopPropagation()}>
            <h2>🎓 SELECCIONA TU STARTER DEL LABORATORIO OAK</h2>
            <p className="modal-subtitle">Primera fase de líneas evolutivas de 3 etapas (Gen 1-3)</p>

            <div className="starter-search">
              <input
                type="text"
                className="pixel-input"
                placeholder="🔍 Buscar por nombre..."
                value={starterSearchTerm}
                onChange={(e) => setStarterSearchTerm(e.target.value)}
              />
            </div>

            <div className="starter-pokemon-grid">
              {VALID_STARTERS
                .filter(pokemon => {
                  if (!starterSearchTerm) return true;
                  return pokemon.name.toLowerCase().includes(starterSearchTerm.toLowerCase());
                })
                .sort((a, b) => a.number - b.number)
                .map(pokemon => (
                  <div
                    key={pokemon.number}
                    className="starter-pokemon-card pixel-card"
                    onClick={() => handleAddStarter(showStarterModal, pokemon.name)}
                  >
                    <div className="starter-sprite">
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
                        alt={pokemon.name}
                      />
                    </div>
                    <div className="starter-info">
                      <span className="pokemon-number">#{pokemon.number.toString().padStart(3, '0')}</span>
                      <h4>{pokemon.name}</h4>
                      <div className="pokemon-types">
                        {pokemon.types.map(type => (
                          <span key={type} className={`type-badge type-${type.toLowerCase()}`}>
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <button
              className="close-modal-btn pixel-button"
              onClick={() => { setShowStarterModal(null); setStarterSearchTerm(''); }}
            >
              ✕ CERRAR
            </button>
          </div>
        </div>
      )}

      {/* Customize Card Modal */}
      {showCustomizeModal && (() => {
        const player = (tournamentData.players || []).find(p => p.id === showCustomizeModal);
        if (!player) return null;

        return (
          <div className="modal-overlay" onClick={() => setShowCustomizeModal(null)}>
            <div className="modal-content pixel-card customize-modal" onClick={(e) => e.stopPropagation()}>
              <h2>🎨 PERSONALIZAR FICHA</h2>
              <p className="modal-subtitle">Personaliza el fondo y el marco de tu ficha de personaje</p>

              <div className="customize-section">
                <h3>🌈 FONDO DE LA FICHA</h3>
                <div className="background-options">
                  {CARD_BACKGROUNDS.map(bg => (
                    <div
                      key={bg.id}
                      className={`background-option ${player.cardBackground === bg.id ? 'selected' : ''}`}
                      style={{ background: bg.gradient }}
                      onClick={() => handleChangeBackground(showCustomizeModal, bg.id)}
                      title={bg.name}
                    >
                      {player.cardBackground === bg.id && <span className="check-icon">✓</span>}
                      <span className="bg-name">{bg.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="customize-section">
                <h3>🖼️ MARCO DE LA FICHA</h3>
                <div className="border-options">
                  {CARD_BORDERS.map(border => (
                    <div
                      key={border.id}
                      className={`border-option ${player.cardBorder === border.id ? 'selected' : ''}`}
                      onClick={() => handleChangeBorder(showCustomizeModal, border.id)}
                    >
                      <div
                        className="border-preview"
                        style={{
                          border: border.style,
                          boxShadow: border.shadow || 'none'
                        }}
                      >
                        {player.cardBorder === border.id && <span className="check-icon">✓</span>}
                      </div>
                      <span className="border-name">{border.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="customize-section">
                <h3>📷 MARCO DEL AVATAR</h3>
                <div className="border-options">
                  {CARD_BORDERS.map(border => (
                    <div
                      key={border.id}
                      className={`border-option ${player.avatarBorder === border.id ? 'selected' : ''}`}
                      onClick={() => handleChangeAvatarBorder(showCustomizeModal, border.id)}
                    >
                      <div
                        className="border-preview avatar-border-preview"
                        style={{
                          border: border.style,
                          boxShadow: border.shadow || 'none'
                        }}
                      >
                        {player.avatarBorder === border.id && <span className="check-icon">✓</span>}
                        {player.avatarImage && (
                          <img
                            src={player.avatarImage}
                            alt="Avatar preview"
                            className="avatar-mini-preview"
                          />
                        )}
                      </div>
                      <span className="border-name">{border.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="customize-section">
                <h3>🎭 SPRITE DEL PERSONAJE</h3>
                <div className="sprite-selection-grid">
                  {AVAILABLE_SPRITES.map(sprite => (
                    <div
                      key={sprite.id}
                      className={`sprite-option ${player.avatarImage === sprite.image ? 'selected' : ''}`}
                      onClick={() => tournamentData.updatePlayer(player.id, { avatarImage: sprite.image })}
                    >
                      <div className="sprite-preview">
                        <img src={sprite.image} alt={sprite.name} />
                        {player.avatarImage === sprite.image && <span className="check-icon">✓</span>}
                      </div>
                      <span className="sprite-name">{sprite.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="close-modal-btn pixel-button"
                onClick={() => setShowCustomizeModal(null)}
              >
                ✓ GUARDAR Y CERRAR
              </button>
            </div>
          </div>
        );
      })()}

      {/* Add Reward Modal */}
      {showAddRewardModal && (
        <div className="modal-overlay" onClick={() => setShowAddRewardModal(null)}>
          <div className="modal-content pixel-card" onClick={(e) => e.stopPropagation()}>
            <h2>➕ AÑADIR RECOMPENSA</h2>
            <p className="modal-subtitle">Selecciona una recompensa de la ruleta</p>

            <div className="form-group">
              <label>RECOMPENSA</label>
              <select
                className="pixel-input"
                value={selectedReward}
                onChange={(e) => setSelectedReward(e.target.value)}
              >
                <option value="">-- Selecciona una recompensa --</option>
                <option value="🛒 Artículo de Tienda">🛒 Artículo de Tienda</option>
                <option value="➕ Captura Extra">➕ Captura Extra</option>
                <option value="🔙 Captura Ruta Anterior">🔙 Captura Ruta Anterior</option>
                <option value="💚 Revivir Pokémon">💚 Revivir Pokémon</option>
                <option value="🛡️ 2 Seguros de Muerte">🛡️ 2 Seguros de Muerte</option>
              </select>
            </div>

            <div className="modal-buttons">
              <button
                className="pixel-button"
                onClick={() => {
                  if (!selectedReward) {
                    alert('⚠️ Por favor selecciona una recompensa');
                    return;
                  }
                  tournamentData.addRouletteReward(showAddRewardModal, selectedReward);
                  alert(`✅ Recompensa "${selectedReward}" añadida correctamente`);
                  setShowAddRewardModal(null);
                  setSelectedReward('');
                }}
                disabled={!selectedReward}
              >
                ✓ AÑADIR RECOMPENSA
              </button>
              <button
                className="pixel-button-danger"
                onClick={() => {
                  setShowAddRewardModal(null);
                  setSelectedReward('');
                }}
              >
                ✕ CANCELAR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Death Insurance Modal */}
      {showDeathInsuranceModal && (() => {
        const player = (tournamentData.players || []).find(p => p.id === showDeathInsuranceModal.playerId);
        if (!player) return null;

        const insuranceId = showDeathInsuranceModal.insuranceId; // ID del seguro específico que se clickeó
        const team = safeTeamToArray(player.team).filter(p => p); // Pokémon en el equipo
        const capturedPokemon = tournamentData.getCapturedPokemonByPlayer(showDeathInsuranceModal.playerName);
        const aliveCaptured = capturedPokemon.filter(p => !p.isDead); // Solo vivos
        const currentInsurances = player.deathInsurances || [];

        const handleApplyInsurance = (pokemonIdentifier) => {
          // Verificar que el Pokémon no tenga ya seguro
          if (currentInsurances.some(ins => ins.identifier === pokemonIdentifier)) {
            alert('⚠️ Este Pokémon ya tiene seguro de muerte');
            return;
          }

          // Aplicar el seguro con el ID específico
          const success = tournamentData.addDeathInsurance(player.id, pokemonIdentifier, insuranceId);

          if (success) {
            alert(`✅ Seguro de muerte aplicado a este Pokémon`);
            setShowDeathInsuranceModal(null);
          }
        };

        const handleCloseModal = () => {
          setShowDeathInsuranceModal(null);
        };

        return (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content pixel-card death-insurance-modal" onClick={(e) => e.stopPropagation()}>
              <h2>🛡️ APLICAR SEGURO DE MUERTE</h2>
              <p className="modal-subtitle">
                {insuranceId}
                <br />
                <small>Selecciona un Pokémon vivo para proteger</small>
              </p>

              {/* Equipo */}
              {team.length > 0 && (
                <div className="insurance-section">
                  <h3>👥 EQUIPO</h3>
                  <div className="insurance-pokemon-grid">
                    {team.map((pokemon, index) => {
                      const pokemonName = typeof pokemon === 'object' ? pokemon.name : pokemon;
                      const pokemonData = POKEDEX_DATA.find(p => p.name === pokemonName);

                      // Buscar en capturados para obtener identificador original
                      const captured = capturedPokemon.find(p => {
                        const capPokemonData = POKEDEX_DATA.find(pd => pd.number === parseInt(p.pokemon));
                        return capPokemonData && capPokemonData.name === pokemonName;
                      });

                      const pokemonIdentifier = captured
                        ? `captured-${player.id}-${captured.pokemon}-${captured.zone}`
                        : `team-${player.id}-${pokemonName}`;
                      const hasInsurance = currentInsurances.some(ins => ins.identifier === pokemonIdentifier);

                      return pokemonData && (
                        <div
                          key={index}
                          className={`insurance-pokemon-card ${hasInsurance ? 'has-insurance' : 'clickable'}`}
                          onClick={() => {
                            if (hasInsurance) {
                              alert('⚠️ Este Pokémon ya tiene seguro de muerte');
                              return;
                            }
                            handleApplyInsurance(pokemonIdentifier);
                          }}
                        >
                          <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.number}.png`}
                            alt={pokemonName}
                          />
                          <span>{pokemonName}</span>
                          {hasInsurance && <div className="insurance-badge">🛡️</div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Capturados */}
              {aliveCaptured.length > 0 && (
                <div className="insurance-section">
                  <h3>📦 CAPTURADOS VIVOS</h3>
                  <div className="insurance-pokemon-grid">
                    {aliveCaptured.map((pokemon, index) => {
                      const pokemonData = POKEDEX_DATA.find(p => p.number === parseInt(pokemon.pokemon));
                      const pokemonName = pokemonData ? pokemonData.name : `#${pokemon.pokemon}`;
                      const pokemonIdentifier = `captured-${player.id}-${pokemon.pokemon}-${pokemon.zone}`;
                      const hasInsurance = currentInsurances.some(ins => ins.identifier === pokemonIdentifier);

                      return pokemonData && (
                        <div
                          key={index}
                          className={`insurance-pokemon-card ${hasInsurance ? 'has-insurance' : 'clickable'}`}
                          onClick={() => {
                            if (hasInsurance) {
                              alert('⚠️ Este Pokémon ya tiene seguro de muerte');
                              return;
                            }
                            handleApplyInsurance(pokemonIdentifier);
                          }}
                        >
                          <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon}.png`}
                            alt={pokemonName}
                          />
                          <span>{pokemon.nickname || pokemonName}</span>
                          {hasInsurance && <div className="insurance-badge">🛡️</div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                className="close-modal-btn pixel-button"
                onClick={handleCloseModal}
              >
                ✕ CANCELAR
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default Players;
