import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pokemon-tournament-data';

const initialData = {
  players: [],
  gallery: [],
  currentPhase: 0,
};

export const useTournamentData = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

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

    setData(prev => ({
      ...prev,
      players: [...prev.players, newPlayer],
    }));

    return playerId;
  };

  const updatePlayer = (playerId, updates) => {
    setData(prev => ({
      ...prev,
      players: prev.players.map(p =>
        p.id === playerId ? { ...p, ...updates } : p
      ),
    }));
  };

  const deletePlayer = (playerId) => {
    setData(prev => ({
      ...prev,
      players: prev.players.filter(p => p.id !== playerId),
    }));
  };

  const addReward = (playerId, reward) => {
    setData(prev => ({
      ...prev,
      players: prev.players.map(p =>
        p.id === playerId
          ? { ...p, rewards: [...p.rewards, reward] }
          : p
      ),
    }));
  };

  const removeReward = (playerId, rewardIndex) => {
    setData(prev => ({
      ...prev,
      players: prev.players.map(p =>
        p.id === playerId
          ? {
              ...p,
              rewards: p.rewards.filter((_, i) => i !== rewardIndex),
            }
          : p
      ),
    }));
  };

  const addGalleryImage = (imageData) => {
    setData(prev => ({
      ...prev,
      gallery: [...prev.gallery, imageData],
    }));
  };

  const addComment = (imageId, comment) => {
    setData(prev => ({
      ...prev,
      gallery: prev.gallery.map(img =>
        img.id === imageId
          ? { ...img, comments: [...img.comments, comment] }
          : img
      ),
    }));
  };

  const calculatePlayerPoints = (playerId, filterPhase = null) => {
    let totalPoints = 0;
    
    // Recorrer todos los jugadores para encontrar todos los enfrentamientos
    data.players.forEach(player => {
      if (!player.matchScores) return;
      
      Object.entries(player.matchScores).forEach(([key, scores]) => {
        // El key tiene formato: phase#-player1Id-player2Id
        const [phaseStr, id1, id2] = key.split('-');
        const phase = phaseStr.replace('phase', '');
        
        // Si filterPhase está definido, solo contar esa fase
        if (filterPhase !== null && phase !== filterPhase.toString()) return;
        
        // Si este jugador es player1 en este enfrentamiento
        if (parseInt(id1) === playerId) {
          totalPoints += scores.player1 || 0;
        }
        // Si este jugador es player2 en este enfrentamiento
        if (parseInt(id2) === playerId) {
          totalPoints += scores.player2 || 0;
        }
      });
    });
    
    return totalPoints;
  };

  const calculatePlayerWins = (playerId, filterPhase = null) => {
    let totalWins = 0;
    
    data.players.forEach(player => {
      if (!player.matchScores) return;
      
      Object.entries(player.matchScores).forEach(([key, scores]) => {
        const [phaseStr, id1, id2] = key.split('-');
        const phase = phaseStr.replace('phase', '');
        
        // Si filterPhase está definido, solo contar esa fase
        if (filterPhase !== null && phase !== filterPhase.toString()) return;
        
        // Si este jugador es player1 y ganó (score1 === 6)
        if (parseInt(id1) === playerId && scores.player1 === 6) {
          totalWins++;
        }
        // Si este jugador es player2 y ganó (score2 === 6)
        if (parseInt(id2) === playerId && scores.player2 === 6) {
          totalWins++;
        }
      });
    });
    
    return totalWins;
  };

  const getDirectMatchResult = (player1Id, player2Id) => {
    // Buscar el resultado del enfrentamiento directo entre estos dos jugadores
    let player1Total = 0;
    let player2Total = 0;
    
    data.players.forEach(player => {
      if (!player.matchScores) return;
      
      Object.entries(player.matchScores).forEach(([key, scores]) => {
        const [, id1, id2] = key.split('-');
        
        // Encontrar enfrentamientos directos entre estos dos jugadores
        if ((parseInt(id1) === player1Id && parseInt(id2) === player2Id) ||
            (parseInt(id1) === player2Id && parseInt(id2) === player1Id)) {
          if (parseInt(id1) === player1Id) {
            player1Total += scores.player1 || 0;
            player2Total += scores.player2 || 0;
          } else {
            player1Total += scores.player2 || 0;
            player2Total += scores.player1 || 0;
          }
        }
      });
    });
    
    return player1Total - player2Total; // Positivo si player1 ganó, negativo si player2 ganó
  };

  const getSortedPlayers = (filterPhase = null) => {
    return [...data.players].sort((a, b) => {
      // 1. Ordenar por puntos totales (o de la fase específica)
      const pointsA = calculatePlayerPoints(a.id, filterPhase);
      const pointsB = calculatePlayerPoints(b.id, filterPhase);
      if (pointsB !== pointsA) return pointsB - pointsA;
      
      // 2. En caso de empate, ordenar por victorias (o de la fase específica)
      const winsA = calculatePlayerWins(a.id, filterPhase);
      const winsB = calculatePlayerWins(b.id, filterPhase);
      if (winsB !== winsA) return winsB - winsA;
      
      // 3. En caso de empate, ordenar por enfrentamiento directo
      const directResult = getDirectMatchResult(a.id, b.id);
      return -directResult; // Negativo porque queremos que el mayor vaya primero
    });
  };

  const getTopPlayers = (count = 3, filterPhase = null) => {
    return getSortedPlayers(filterPhase).slice(0, count);
  };

  const updateMatchScore = (player1Id, player2Id, phase, score1, score2) => {
    const isLocked = score1 === 6 || score2 === 6;
    
    setData(prev => ({
      ...prev,
      players: prev.players.map(p => {
        if (p.id === player1Id) {
          const matchKey = `phase${phase}-${player1Id}-${player2Id}`;
          return {
            ...p,
            matchScores: {
              ...p.matchScores,
              [matchKey]: { player1: score1, player2: score2, locked: isLocked }
            }
          };
        }
        return p;
      })
    }));
  };

  const resetMatchScore = (player1Id, player2Id, phase) => {
    setData(prev => ({
      ...prev,
      players: prev.players.map(p => {
        if (p.id === player1Id) {
          const matchKey = `phase${phase}-${player1Id}-${player2Id}`;
          const newScores = { ...p.matchScores };
          delete newScores[matchKey];
          return {
            ...p,
            matchScores: newScores
          };
        }
        return p;
      })
    }));
  };

  const addManualExtraRoll = (playerId) => {
    setData(prev => ({
      ...prev,
      players: prev.players.map(p => 
        p.id === playerId 
          ? { ...p, manualExtraRolls: (p.manualExtraRolls || 0) + 1 }
          : p
      )
    }));
  };

  const getMatchScore = (player1Id, player2Id, phase) => {
    const player = data.players.find(p => p.id === player1Id);
    if (!player || !player.matchScores) return { player1: 0, player2: 0 };
    const matchKey = `phase${phase}-${player1Id}-${player2Id}`;
    return player.matchScores[matchKey] || { player1: 0, player2: 0 };
  };

  return {
    players: data.players,
    gallery: data.gallery,
    currentPhase: data.currentPhase,
    addPlayer,
    updatePlayer,
    deletePlayer,
    addReward,
    removeReward,
    addGalleryImage,
    addComment,
    getSortedPlayers,
    getTopPlayers,
    updateMatchScore,
    resetMatchScore,
    getMatchScore,
    calculatePlayerPoints,
    calculatePlayerWins,
    addManualExtraRoll,
    setData,
  };
};
