import { useState, useEffect } from 'react';
import { database, ref, onValue, set, update } from '../config/firebase';

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
    const newPlayer = {
      id: playerId,
      name: playerData.name || `Jugador ${data.players.length + 1}`,
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
      players: [...data.players, newPlayer],
    };

    updateFirebase(newData);
    return playerId;
  };

  const updatePlayer = (playerId, updates) => {
    const newData = {
      ...data,
      players: data.players.map(p =>
        p.id === playerId ? { ...p, ...updates } : p
      ),
    };
    updateFirebase(newData);
  };

  const deletePlayer = (playerId) => {
    const newData = {
      ...data,
      players: data.players.filter(p => p.id !== playerId),
    };
    updateFirebase(newData);
  };

  const addReward = (playerId, reward) => {
    const newData = {
      ...data,
      players: data.players.map(p =>
        p.id === playerId
          ? { ...p, rewards: [...p.rewards, reward] }
          : p
      ),
    };
    updateFirebase(newData);
  };

  const removeReward = (playerId, rewardIndex) => {
    const newData = {
      ...data,
      players: data.players.map(p =>
        p.id === playerId
          ? {
              ...p,
              rewards: p.rewards.filter((_, i) => i !== rewardIndex),
            }
          : p
      ),
    };
    updateFirebase(newData);
  };

  const addGalleryImage = (imageData) => {
    const newData = {
      ...data,
      gallery: [...data.gallery, imageData],
    };
    updateFirebase(newData);
  };

  const deleteGalleryImage = (imageId) => {
    const newData = {
      ...data,
      gallery: data.gallery.filter(img => img.id !== imageId),
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

  const getTopPlayers = (limit = 3) => {
    const players = data.players || [];
    return [...players]
      .sort((a, b) => {
        const pointsA = calculatePlayerPoints(a.id);
        const pointsB = calculatePlayerPoints(b.id);
        if (pointsB !== pointsA) {
          return pointsB - pointsA;
        }
        const winsA = calculatePlayerWins(a.id);
        const winsB = calculatePlayerWins(b.id);
        if (winsB !== winsA) {
          return winsB - winsA;
        }
        const badgesA = a.badges.filter(Boolean).length;
        const badgesB = b.badges.filter(Boolean).length;
        return badgesB - badgesA;
      })
      .slice(0, limit);
  };

  const updateMatchScore = (phase, player1Id, player2Id, player1Score, player2Score) => {
    const matchKey = `phase${phase}-${player1Id}-${player2Id}`;
    
    const newData = {
      ...data,
      players: data.players.map(p => {
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
      players: data.players.map(p =>
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
      players: data.players.map(p =>
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
    getTopPlayers,
    updateMatchScore,
    setCurrentPhase,
    incrementManualRolls,
    decrementManualRolls,
    addCaptureRecord,
    updateCaptureRecord,
    deleteCaptureRecord,
  };
};
