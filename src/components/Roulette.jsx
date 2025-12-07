import { useState, useEffect, useRef } from 'react';
import './Roulette.css';

const REWARDS = [
  { id: 1, name: '🛒 Artículo de Tienda', probability: 4 },
  { id: 2, name: '➕ Captura Extra', probability: 4 },
  { id: 3, name: '🔙 Captura Ruta Anterior', probability: 2 },
  { id: 4, name: '💚 Revivir Pokémon', probability: 1 },
  { id: 5, name: '🛡️ 2 Seguros de Muerte', probability: 1 }
];

const DICE_FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

const Roulette = ({ tournamentData, audioControls, auth }) => {
  const audioRef = useRef(null);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [isRolling, setIsRolling] = useState(false);
  const [currentDice, setCurrentDice] = useState('⚅');
  const [result, setResult] = useState(null);

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

  // Calcular tiradas extra para un jugador
  const getPlayerExtraRolls = (playerId) => {
    let extraRolls = 0;
    
    // Revisar cada fase (1-4)
    for (let phase = 1; phase <= 4; phase++) {
      const phaseWinners = tournamentData.getSortedPlayers(phase);
      if (phaseWinners.length > 0 && phaseWinners[0].id === playerId) {
        // Solo contar si tiene al menos 1 punto en esa fase
        if (tournamentData.calculatePlayerPoints(playerId, phase) > 0) {
          extraRolls++;
        }
      }
    }
    
    return extraRolls;
  };

  // Obtener tiradas disponibles
  const getAvailableRolls = (playerId) => {
    const player = (tournamentData.players || []).find(p => p.id === playerId);
    if (!player) return 0;
    
    const phaseWins = getPlayerExtraRolls(playerId); // Tiradas por ganar fases
    const badgeCount = (player.badges || []).filter(Boolean).length; // Tiradas por medallas
    const manualExtras = player.manualExtraRolls || 0; // Tiradas extras manuales
    const usedRolls = player.rewards ? player.rewards.length : 0;
    const totalAvailable = phaseWins + badgeCount + manualExtras;
    
    return Math.max(0, totalAvailable - usedRolls);
  };

  // Crear pool de recompensas basado en probabilidades
  const createRewardPool = () => {
    const pool = [];
    REWARDS.forEach(reward => {
      for (let i = 0; i < reward.probability; i++) {
        pool.push(reward.name);
      }
    });
    return pool;
  };

  const rollDice = () => {
    if (!selectedPlayer) {
      alert('⚠️ SELECCIONA UN JUGADOR PRIMERO');
      return;
    }

    const player = (tournamentData.players || []).find(p => p.id === parseInt(selectedPlayer));
    if (!player) {
      alert('⚠️ JUGADOR NO ENCONTRADO');
      return;
    }

    const availableRolls = getAvailableRolls(parseInt(selectedPlayer));
    if (availableRolls <= 0) {
      alert('⚠️ ESTE JUGADOR YA NO TIENE TIRADAS DISPONIBLES');
      return;
    }

    setIsRolling(true);
    setResult(null);

    // Animación de dados
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      setCurrentDice(DICE_FACES[Math.floor(Math.random() * 6)]);
      rollCount++;

      if (rollCount >= 20) {
        clearInterval(rollInterval);

        // Seleccionar recompensa del pool
        const rewardPool = createRewardPool();
        const selectedReward = rewardPool[Math.floor(Math.random() * rewardPool.length)];

        // Agregar recompensa al jugador
        tournamentData.addReward(parseInt(selectedPlayer), selectedReward);

        // Si es captura extra o captura ruta anterior, crear casilla automáticamente
        if (selectedReward === '➕ Captura Extra' || selectedReward === '🔙 Captura Ruta Anterior') {
          tournamentData.addExtraCaptureSlot(player.name, selectedReward);
        }

        // Mostrar resultado
        setResult({
          player: player.name,
          reward: selectedReward
        });

        setIsRolling(false);
      }
    }, 100);
  };

  const resetRoulette = () => {
    setSelectedPlayer('');
    setResult(null);
    setCurrentDice('⚅');
  };

  return (
    <div className="roulette-container">
      <audio ref={audioRef} loop>
        <source src="/music/Ruleta.mp3" type="audio/mpeg" />
      </audio>
      <div className="roulette-title">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png" alt="Delibird" className="delibird-title-sprite" />
        <h1 className="pixel-text">LOS REGALOS DE DELIBIRD</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png" alt="Delibird" className="delibird-title-sprite" />
      </div>

      {/* Reward Probabilities Info */}
      <div className="rewards-info pixel-card">
        <h2>📋 RECOMPENSAS DISPONIBLES (12 Total)</h2>
        <div className="rewards-list-info">
          {REWARDS.map(reward => (
            <div key={reward.id} className="reward-info-item">
              <span className="reward-name">{reward.name}</span>
              <span className="reward-prob">
                {reward.probability}/12 ({((reward.probability / 12) * 100).toFixed(1)}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dice Roller */}
      <div className="dice-roller pixel-card">
        <h2>🎯 LANZAR DADOS</h2>

        {!result ? (
          <>
            <div className="player-selector">
              <label htmlFor="player-select">SELECCIONA JUGADOR</label>
              <select 
                id="player-select"
                className="pixel-input"
                value={selectedPlayer}
                onChange={(e) => setSelectedPlayer(e.target.value)}
                disabled={isRolling}
              >
                <option value="">-- ELIGE TU JUGADOR --</option>
                {(tournamentData.players || [])
                  .filter(player => {
                    // Admin puede ver todos, usuarios normales solo su propio jugador
                    if (auth.currentUser?.isAdmin) return true;
                    return player.id === auth.currentUser?.playerId;
                  })
                  .map(player => {
                    const availableRolls = getAvailableRolls(player.id);
                    const extraRolls = getPlayerExtraRolls(player.id);
                    return (
                      <option key={player.id} value={player.id}>
                        {player.name} - {availableRolls} tirada{availableRolls !== 1 ? 's' : ''} disponible{availableRolls !== 1 ? 's' : ''}
                        {extraRolls > 0 ? ` (+${extraRolls} extra)` : ''}
                      </option>
                    );
                  })}
              </select>
              {selectedPlayer && (() => {
                const player = (tournamentData.players || []).find(p => p.id === parseInt(selectedPlayer));
                const phaseWins = getPlayerExtraRolls(parseInt(selectedPlayer));
                const badges = (player?.badges || []).filter(Boolean).length;
                const manualExtras = player?.manualExtraRolls || 0;
                return (
                  <div className="rolls-info">
                    <p>🎲 Tiradas disponibles: <strong>{getAvailableRolls(parseInt(selectedPlayer))}</strong></p>
                    <p className="rolls-detail">
                      {badges} medalla{badges !== 1 ? 's' : ''} + {phaseWins} fase{phaseWins !== 1 ? 's' : ''} ganada{phaseWins !== 1 ? 's' : ''}
                      {manualExtras > 0 ? ` + ${manualExtras} extra${manualExtras !== 1 ? 's' : ''}` : ''}
                    </p>
                    {auth.currentUser?.isAdmin && (
                      <button
                        className="pixel-button add-roll-btn"
                        onClick={() => tournamentData.incrementManualRolls(parseInt(selectedPlayer))}
                        disabled={isRolling}
                      >
                        ➕ AÑADIR TIRADA EXTRA (ADMIN)
                      </button>
                    )}
                  </div>
                );
              })()}
            </div>

            <div className={`dice-display ${isRolling ? 'rolling' : ''}`}>
              {isRolling ? (
                <img src="/recursos/delibird.gif" alt="Ruleta" className="roulette-gif" />
              ) : (
                <div className="dice-face">
                  {currentDice}
                </div>
              )}
            </div>

            <button 
              className="pixel-button roll-btn"
              onClick={rollDice}
              disabled={isRolling || !selectedPlayer}
            >
              {isRolling ? '🎲 LANZANDO...' : '🎲 LANZAR DADOS'}
            </button>
          </>
        ) : (
          <div className="result-display">
            <div className="result-animation">
              <div className="result-icon">🎉</div>
              <h3>¡RECOMPENSA OBTENIDA!</h3>
              <div className="result-player">
                <span className="result-label">JUGADOR</span>
                <span className="result-value">{result.player}</span>
              </div>
              <div className="result-reward">
                <span className="result-label">RECOMPENSA</span>
                <span className="result-value">{result.reward}</span>
              </div>
            </div>

            <button 
              className="pixel-button reset-btn"
              onClick={resetRoulette}
            >
              🔄 NUEVA TIRADA
            </button>
          </div>
        )}
      </div>

      {/* Recent Rewards History */}
      <div className="rewards-history pixel-card">
        <h2>📜 HISTORIAL DE RECOMPENSAS</h2>
        <div className="history-list">
          {(tournamentData.players || [])
            .filter(p => (p.rewards || []).length > 0)
            .map(player => (
              <div key={player.id} className="history-player">
                <div className="history-player-header">
                  {player.avatarImage && (
                    <img 
                      src={player.avatarImage} 
                      alt={player.name}
                      className="history-avatar"
                    />
                  )}
                  <h3>{player.name}</h3>
                  <span className="reward-count">{(player.rewards || []).length}</span>
                </div>
                <ul className="history-rewards">
                  {(player.rewards || []).map((reward, index) => (
                    <li key={index}>
                      <span className="reward-bullet">▸</span>
                      {reward}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {(tournamentData.players || []).every(p => (p.rewards || []).length === 0) && (
            <div className="no-history">
              <p className="empty-icon">📭</p>
              <p>AÚN NO HAY RECOMPENSAS</p>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="roulette-instructions pixel-card">
        <h3>📖 INSTRUCCIONES</h3>
        <ol>
          <li>Selecciona el jugador que va a girar la ruleta</li>
          <li>Haz clic en "LANZAR DADOS"</li>
          <li>La recompensa se asignará automáticamente al jugador</li>
          <li>La recompensa aparecerá en su ficha de jugador</li>
        </ol>
        <p className="instruction-note">
          <strong>NOTA:</strong> Las probabilidades están balanceadas según las 12 recompensas disponibles en el torneo.
        </p>
      </div>
    </div>
  );
};

export default Roulette;
