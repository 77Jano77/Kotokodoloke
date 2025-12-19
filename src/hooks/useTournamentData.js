import { useState, useEffect } from 'react';
import { database, ref, onValue, set } from '../config/firebase';
import { POKEDEX_DATA } from '../data/pokedex';

const initialData = {
  players: [],
  gallery: [],
  currentPhase: 0,
  captureRecords: [],
};

export const useTournamentData = () => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  // Escuchar cambios en tiempo real de Firebase
  useEffect(() => {
    const tournamentRef = ref(database, 'tournament');

    // Limpiar datos antiguos de LocalStorage
    localStorage.removeItem('pokemon-tournament-data');

    const unsubscribe = onValue(tournamentRef, (snapshot) => {
      const firebaseData = snapshot.val();
      if (firebaseData) {
        setData(firebaseData);
      } else {
        // Si no hay datos, inicializar con datos por defecto
        set(tournamentRef, initialData);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error al leer datos de Firebase:', error);
      setLoading(false);
    });

    // Cleanup: detener escucha cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  // Función para actualizar datos en Firebase
  const updateFirebase = (newData) => {
    const tournamentRef = ref(database, 'tournament');
    set(tournamentRef, newData).catch(error => {
      console.error('Error al actualizar Firebase:', error);
    });
  };

  const addPlayer = (playerData = {}) => {
    const playerId = Date.now();
    const players = data.players || [];
    const newPlayer = {
      id: playerId,
      name: playerData.name || `Jugador ${players.length + 1}`,
      trainerName: playerData.trainerName || '',
      avatarImage: playerData.avatarImage || '',
      fullBodyImage: playerData.fullBodyImage || '',
      mode: playerData.mode || 'hardcore',
      team: Array(6).fill(null),
      badges: Array(8).fill(false),
      rewards: [],
      points: 0,
      matchScores: {},
      manualExtraRolls: 0,
      userId: playerData.userId || null,
      username: playerData.username || '',
      matches: {
        phase1: [],
        phase2: [],
        phase3: [],
        phase4: [],
      },
    };

    const newData = {
      ...data,
      players: [...players, newPlayer],
    };

    updateFirebase(newData);
    return playerId;
  };

  const updatePlayer = (playerId, updates) => {
    const players = data.players || [];
    const oldPlayer = players.find(p => p.id === playerId);

    // Si se está cambiando el nombre, actualizar también el registro de capturas
    let captureRecords = data.captureRecords || [];
    if (updates.name && oldPlayer && oldPlayer.name !== updates.name) {
      captureRecords = captureRecords.map(record =>
        record.playerName === oldPlayer.name
          ? { ...record, playerName: updates.name }
          : record
      );
    }

    const newData = {
      ...data,
      players: players.map(p =>
        p.id === playerId ? { ...p, ...updates } : p
      ),
      captureRecords
    };
    updateFirebase(newData);
  };

  const deletePlayer = (playerId) => {
    const players = data.players || [];
    const playerToDelete = players.find(p => p.id === playerId);

    // Eliminar también el registro de capturas asociado
    const captureRecords = data.captureRecords || [];
    const filteredRecords = playerToDelete
      ? captureRecords.filter(r => r.playerName !== playerToDelete.name)
      : captureRecords;

    const newData = {
      ...data,
      players: players.filter(p => p.id !== playerId),
      captureRecords: filteredRecords
    };
    updateFirebase(newData);
  };

  const addReward = (playerId, reward) => {
    const newData = {
      ...data,
      players: (data.players || []).map(p =>
        p.id === playerId
          ? { ...p, rewards: [...(p.rewards || []), reward] }
          : p
      ),
    };
    updateFirebase(newData);
  };

  const removeReward = (playerId, rewardIndex) => {
    const newData = {
      ...data,
      players: (data.players || []).map(p =>
        p.id === playerId
          ? {
            ...p,
            rewards: (p.rewards || []).filter((_, i) => i !== rewardIndex),
          }
          : p
      ),
    };
    updateFirebase(newData);
  };

  const addGalleryImage = (imageData) => {
    console.log('addGalleryImage llamado con:', imageData);
    console.log('Galería actual:', data.gallery);
    try {
      const newData = {
        ...data,
        gallery: [...(data.gallery || []), imageData],
      };
      console.log('Nueva data a guardar:', newData.gallery.length, 'imágenes');
      updateFirebase(newData);
    } catch (error) {
      console.error('Error en addGalleryImage:', error);
      throw error;
    }
  };

  const deleteGalleryImage = (imageId) => {
    const newData = {
      ...data,
      gallery: (data.gallery || []).filter(img => img.id !== imageId),
    };
    updateFirebase(newData);
  };

  const addComment = (imageId, comment) => {
    const newData = {
      ...data,
      gallery: data.gallery.map(img =>
        img.id === imageId
          ? { ...img, comments: [...img.comments, comment] }
          : img
      ),
    };
    updateFirebase(newData);
  };

  const calculatePlayerPoints = (playerId, filterPhase = null) => {
    let totalPoints = 0;
    const players = data.players || [];

    players.forEach(player => {
      if (!player.matchScores) return;

      Object.entries(player.matchScores).forEach(([key, scores]) => {
        const [phaseStr, id1, id2] = key.split('-');
        const phase = phaseStr.replace('phase', '');

        if (filterPhase !== null && phase !== filterPhase.toString()) return;

        if (parseInt(id1) === playerId) {
          totalPoints += scores.player1 || 0;
        }
        if (parseInt(id2) === playerId) {
          totalPoints += scores.player2 || 0;
        }
      });
    });

    return totalPoints;
  };

  const calculatePlayerWins = (playerId, filterPhase = null) => {
    let totalWins = 0;
    const players = data.players || [];

    players.forEach(player => {
      if (!player.matchScores) return;

      Object.entries(player.matchScores).forEach(([key, scores]) => {
        const [phaseStr, id1, id2] = key.split('-');
        const phase = phaseStr.replace('phase', '');

        if (filterPhase !== null && phase !== filterPhase.toString()) return;

        if (parseInt(id1) === playerId && scores.player1 > scores.player2) {
          totalWins++;
        }
        if (parseInt(id2) === playerId && scores.player2 > scores.player1) {
          totalWins++;
        }
      });
    });

    return totalWins;
  };

  const getSortedPlayers = (filterPhase = null) => {
    const players = data.players || [];
    return [...players].sort((a, b) => {
      // 1. Ordenar por puntos totales (o de la fase específica)
      const pointsA = calculatePlayerPoints(a.id, filterPhase);
      const pointsB = calculatePlayerPoints(b.id, filterPhase);
      if (pointsB !== pointsA) return pointsB - pointsA;

      // 2. En caso de empate, ordenar por victorias (o de la fase específica)
      const winsA = calculatePlayerWins(a.id, filterPhase);
      const winsB = calculatePlayerWins(b.id, filterPhase);
      if (winsB !== winsA) return winsB - winsA;

      // 3. En caso de empate, ordenar por medallas
      const badgesA = (a.badges || []).filter(Boolean).length;
      const badgesB = (b.badges || []).filter(Boolean).length;
      return badgesB - badgesA;
    });
  };

  const getTopPlayers = (limit = 3, filterPhase = null) => {
    return getSortedPlayers(filterPhase).slice(0, limit);
  };

  const getMatchScore = (player1Id, player2Id, phase) => {
    const player = (data.players || []).find(p => p.id === player1Id);
    if (!player || !player.matchScores) return { player1: 0, player2: 0, locked: false };
    const matchKey = `phase${phase}-${player1Id}-${player2Id}`;
    return player.matchScores[matchKey] || { player1: 0, player2: 0, locked: false };
  };

  const updateMatchScore = (phase, player1Id, player2Id, player1Score, player2Score) => {
    const matchKey = `phase${phase}-${player1Id}-${player2Id}`;

    const newData = {
      ...data,
      players: (data.players || []).map(p => {
        if (p.id === player1Id || p.id === player2Id) {
          return {
            ...p,
            matchScores: {
              ...p.matchScores,
              [matchKey]: {
                player1: player1Score,
                player2: player2Score,
              },
            },
          };
        }
        return p;
      }),
    };
    updateFirebase(newData);
  };

  const setCurrentPhase = (phase) => {
    const newData = {
      ...data,
      currentPhase: phase,
    };
    updateFirebase(newData);
  };

  const incrementManualRolls = (playerId) => {
    const newData = {
      ...data,
      players: (data.players || []).map(p =>
        p.id === playerId
          ? { ...p, manualExtraRolls: (p.manualExtraRolls || 0) + 1 }
          : p
      ),
    };
    updateFirebase(newData);
  };

  const decrementManualRolls = (playerId) => {
    const newData = {
      ...data,
      players: (data.players || []).map(p =>
        p.id === playerId && p.manualExtraRolls > 0
          ? { ...p, manualExtraRolls: p.manualExtraRolls - 1 }
          : p
      ),
    };
    updateFirebase(newData);
  };

  const addCaptureRecord = (recordData) => {
    const newRecord = {
      id: Date.now(),
      playerName: recordData.playerName,
      kantoZones: recordData.kantoZones,
      seviZones: recordData.seviZones,
      extraCaptures: 0,
    };

    const newData = {
      ...data,
      captureRecords: [...(data.captureRecords || []), newRecord],
    };

    updateFirebase(newData);
    return newRecord.id;
  };

  const updateCaptureRecord = (recordId, updates) => {
    const newData = {
      ...data,
      captureRecords: (data.captureRecords || []).map(record =>
        record.id === recordId ? { ...record, ...updates } : record
      ),
    };

    updateFirebase(newData);
  };

  const deleteCaptureRecord = (recordId) => {
    const newData = {
      ...data,
      captureRecords: (data.captureRecords || []).filter(record => record.id !== recordId),
    };

    updateFirebase(newData);
  };

  const addExtraCaptureSlot = (playerName, rewardType) => {
    const newData = {
      ...data,
      captureRecords: (data.captureRecords || []).map(record => {
        if (record.playerName === playerName) {
          const newSlot = {
            id: `extra_${Date.now()}`,
            captured: false,
            name: rewardType === '➕ Captura Extra' ? 'Captura Extra' : 'Captura Ruta Anterior',
            isExtra: true,
            rewardType: rewardType // Guardar el tipo de recompensa
          };
          return {
            ...record,
            extraCaptureSlots: [...(record.extraCaptureSlots || []), newSlot]
          };
        }
        return record;
      }),
    };

    updateFirebase(newData);
  };

  const consumeReward = (playerName, rewardType) => {
    // Buscar el jugador por nombre
    const player = (data.players || []).find(p => p.name === playerName);
    if (!player) return;

    // Encontrar el índice de la primera recompensa de este tipo
    const rewardIndex = (player.rewards || []).findIndex(r => r === rewardType);
    if (rewardIndex === -1) return;

    // Eliminar esa recompensa específica
    const newData = {
      ...data,
      players: (data.players || []).map(p =>
        p.id === player.id
          ? {
            ...p,
            rewards: (p.rewards || []).filter((_, i) => i !== rewardIndex),
          }
          : p
      ),
    };

    updateFirebase(newData);
  };



  const togglePokemonDeathStatus = (pokemon) => {
    if (!pokemon.recordId || !pokemon.zoneId || !pokemon.regionKey) {
      console.error('Faltan metadatos para actualizar estado de muerte', pokemon);
      return;
    }

    const { recordId, zoneId, regionKey, isDead } = pokemon;
    const newDeadStatus = !isDead;

    // 1. Obtener el registro completo
    const record = (data.captureRecords || []).find(r => r.id === recordId);
    if (!record) return;

    // 2. Actualizar la zona específica
    const zones = record[regionKey];
    const updatedZones = zones.map(z => {
      if (z.id === zoneId) {
        return {
          ...z,
          capturedPokemon: {
            ...z.capturedPokemon,
            isDead: newDeadStatus
          }
        };
      }
      return z;
    });

    // 3. Guardar cambios en el registro
    updateCaptureRecord(recordId, {
      [regionKey]: updatedZones
    });

    // 4. Si se marcó como muerto y está en el equipo, eliminarlo
    if (newDeadStatus) {
      const player = (data.players || []).find(p => p.name === record.playerName);
      if (player && player.team) {
        const pokemonData = POKEDEX_DATA.find(p => p.number === parseInt(pokemon.pokemon));
        if (pokemonData) {
          let pokemonRemoved = false;
          const updatedTeam = player.team.map(teamPokemon => {
            if (!teamPokemon) return teamPokemon;
            const teamPokemonName = typeof teamPokemon === 'object' ? teamPokemon.name : teamPokemon;

            // Comparar nombres (case insensitive)
            if (teamPokemonName && teamPokemonName.toLowerCase() === pokemonData.name.toLowerCase()) {
              pokemonRemoved = true;
              return null;
            }
            return teamPokemon;
          });

          if (pokemonRemoved) {
            updatePlayer(player.id, { team: updatedTeam });
            alert(`⚰️ ${pokemonData.name} ha muerto y ha sido eliminado del equipo.`);
          }
        }
      }
    }
  };

  const getCapturedPokemonByPlayer = (playerName) => {
    const record = (data.captureRecords || []).find(r =>
      r.playerName.toLowerCase() === playerName.toLowerCase()
    );

    if (!record) return [];

    const capturedPokemon = [];

    // Recopilar Pokémon de Kanto
    (record.kantoZones || []).forEach(zone => {
      if (zone.captured && zone.capturedPokemon) {
        capturedPokemon.push({
          ...zone.capturedPokemon,
          zone: zone.name,
          region: 'Kanto',
          // Metadatos para edición
          recordId: record.id,
          zoneId: zone.id,
          regionKey: 'kantoZones',
          isDead: zone.capturedPokemon.isDead || false
        });
      }
    });

    // Recopilar Pokémon de Sevi
    (record.seviZones || []).forEach(zone => {
      if (zone.captured && zone.capturedPokemon) {
        capturedPokemon.push({
          ...zone.capturedPokemon,
          zone: zone.name,
          region: 'Islas Sevi',
          // Metadatos para edición
          recordId: record.id,
          zoneId: zone.id,
          regionKey: 'seviZones',
          isDead: zone.capturedPokemon.isDead || false
        });
      }
    });

    // Recopilar Pokémon Extra
    (record.extraCaptureSlots || []).forEach(slot => {
      if (slot.captured && slot.capturedPokemon) {
        capturedPokemon.push({
          ...slot.capturedPokemon,
          zone: slot.name,
          region: 'Extra',
          // Metadatos para edición
          recordId: record.id,
          zoneId: slot.id,
          regionKey: 'extraCaptureSlots',
          isDead: slot.capturedPokemon.isDead || false
        });
      }
    });

    return capturedPokemon;
  };

  const updateAdBanners = (selectedAds) => {
    const newData = {
      ...data,
      selectedAdBanners: selectedAds,
    };
    updateFirebase(newData);
  };

  return {
    ...data,
    loading,
    players: data.players,
    gallery: data.gallery,
    currentPhase: data.currentPhase,
    captureRecords: data.captureRecords || [],
    addPlayer,
    updatePlayer,
    deletePlayer,
    addReward,
    removeReward,
    addGalleryImage,
    deleteGalleryImage,
    addComment,
    calculatePlayerPoints,
    calculatePlayerWins,
    getSortedPlayers,
    getTopPlayers,
    getMatchScore,
    updateMatchScore,
    setCurrentPhase,
    incrementManualRolls,
    decrementManualRolls,
    addCaptureRecord,
    updateCaptureRecord,
    deleteCaptureRecord,
    getCapturedPokemonByPlayer,
    addExtraCaptureSlot,
    consumeReward,
    updateAdBanners,
    togglePokemonDeathStatus,
    selectedAdBanners: data.selectedAdBanners || [],
  };
};
