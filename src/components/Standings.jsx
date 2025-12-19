import { useState, useEffect, useRef } from 'react';
import './Standings.css';
import { safeTeamToArray } from '../utils/teamHelpers';

const Standings = ({ tournamentData, audioControls, auth }) => {
  const audioRef = useRef(null);
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [showAddPointsModal, setShowAddPointsModal] = useState(false);
  const [selectedPlayerForPoints, setSelectedPlayerForPoints] = useState('');
  const [pointsToAdd, setPointsToAdd] = useState(6);

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

  const currentPhase = selectedPhase === 'all' ? null : parseInt(selectedPhase);
  const sortedPlayers = tournamentData.getSortedPlayers(currentPhase);

  const handleAddPoints = () => {
    if (!selectedPlayerForPoints) {
      alert('⚠️ SELECCIONA UN JUGADOR');
      return;
    }

    const player = tournamentData.players.find(p => p.id === selectedPlayerForPoints);
    if (!player) return;

    const newPoints = player.points + pointsToAdd;
    tournamentData.updatePlayer(selectedPlayerForPoints, { points: newPoints });

    setShowAddPointsModal(false);
    setSelectedPlayerForPoints('');
    setPointsToAdd(6);
  };

  const getBadgeCount = (player) => {
    return (player.badges || []).filter(Boolean).length;
  };

  const getPhaseFromBadges = (badgeCount) => {
    if (badgeCount <= 2) return 1;
    if (badgeCount <= 4) return 2;
    if (badgeCount <= 6) return 3;
    return 4;
  };

  return (
    <div className="standings-container">
      <audio ref={audioRef} loop>
        <source src="/music/PVP.mp3" type="audio/mpeg" />
      </audio>
      <div className="standings-header">
        <h1 className="pixel-text">⚔️ PVP</h1>
        {auth?.currentUser?.isAdmin && (
          <button
            className="pixel-button add-points-btn"
            onClick={() => setShowAddPointsModal(true)}
          >
            ➕ AÑADIR PUNTOS
          </button>
        )}
      </div>

      {/* Phase Filter */}
      <div className="phase-filter pixel-card">
        <label>SELECCIONAR FASE:</label>
        <div className="phase-buttons">
          <button
            className={`phase-btn ${selectedPhase === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedPhase('all')}
          >
            TODAS
          </button>
          <button
            className={`phase-btn ${selectedPhase === '1' ? 'active' : ''}`}
            onClick={() => setSelectedPhase('1')}
          >
            FASE 1
          </button>
          <button
            className={`phase-btn ${selectedPhase === '2' ? 'active' : ''}`}
            onClick={() => setSelectedPhase('2')}
          >
            FASE 2
          </button>
          <button
            className={`phase-btn ${selectedPhase === '3' ? 'active' : ''}`}
            onClick={() => setSelectedPhase('3')}
          >
            FASE 3
          </button>
          <button
            className={`phase-btn ${selectedPhase === '4' ? 'active' : ''}`}
            onClick={() => setSelectedPhase('4')}
          >
            FASE 4
          </button>
        </div>
      </div>

      {/* Standings Table */}
      <div className="standings-table-container pixel-card">
        {sortedPlayers.length > 0 ? (
          <table className="standings-table">
            <thead>
              <tr>
                <th>POS</th>
                <th>AVATAR</th>
                <th>JUGADOR</th>
                <th>MODO</th>
                <th>MEDALLAS</th>
                <th>PUNTOS</th>
                <th>VICTORIAS</th>
                <th>EQUIPO</th>
                <th>RECOMPENSAS</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((player, index) => {
                const badgeCount = getBadgeCount(player);
                const teamSize = safeTeamToArray(player.team).filter(Boolean).length;
                const position = index + 1;

                return (
                  <tr key={player.id} className={`position-${position <= 3 ? position : 'other'}`}>
                    <td className="position-cell">
                      <span className="position-number">{position}</span>
                      {position === 1 && <span className="medal">🥇</span>}
                      {position === 2 && <span className="medal">🥈</span>}
                      {position === 3 && <span className="medal">🥉</span>}
                    </td>

                    <td className="avatar-cell">
                      {player.avatarImage ? (
                        <img
                          src={player.avatarImage}
                          alt={player.name}
                          className="player-avatar"
                        />
                      ) : (
                        <div className="avatar-placeholder">👤</div>
                      )}
                    </td>

                    <td className="player-cell">
                      <div className="player-info">
                        <span className="player-name">{player.name}</span>
                        {player.trainerName && (
                          <span className="trainer-name">"{player.trainerName}"</span>
                        )}
                      </div>
                    </td>

                    <td className="mode-cell">
                      <span className={`mode-badge ${player.mode}`}>
                        {player.mode === 'hardcore' ? 'HARD' : 'SOFT'}
                      </span>
                    </td>

                    <td className="badges-cell">
                      <div className="badges-display">
                        <span className="badge-count">{badgeCount}/8</span>
                        <div className="badge-bar">
                          <div
                            className="badge-progress"
                            style={{ width: `${(badgeCount / 8) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="points-cell">
                      <span className="points-number">{tournamentData.calculatePlayerPoints(player.id, currentPhase)}</span>
                    </td>

                    <td className="wins-cell">
                      <span className="wins-number">{tournamentData.calculatePlayerWins(player.id, currentPhase)}</span>
                    </td>

                    <td className="team-cell">
                      <span className={`team-count ${teamSize === 6 ? 'full' : ''}`}>
                        {teamSize}/6
                      </span>
                    </td>

                    <td className="rewards-cell">
                      <span className="rewards-count">{(player.rewards || []).length}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="no-players-message">
            <p className="empty-icon">🏆</p>
            <p>NO HAY JUGADORES EN ESTA FASE</p>
          </div>
        )}
      </div>

      {/* Add Points Modal */}
      {showAddPointsModal && (
        <div className="modal-overlay" onClick={() => setShowAddPointsModal(false)}>
          <div className="modal-content pixel-card" onClick={(e) => e.stopPropagation()}>
            <h2>➕ AÑADIR PUNTOS</h2>

            <div className="modal-form">
              <div className="form-group">
                <label>SELECCIONA JUGADOR</label>
                <select
                  className="pixel-input"
                  value={selectedPlayerForPoints}
                  onChange={(e) => setSelectedPlayerForPoints(e.target.value)}
                >
                  <option value="">-- ELIGE UN JUGADOR --</option>
                  {sortedPlayers.map(player => (
                    <option key={player.id} value={player.id}>
                      {player.name} (Puntos actuales: {player.points})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>PUNTOS A AÑADIR</label>
                <div className="points-selector">
                  <button
                    className="pixel-button points-preset"
                    onClick={() => setPointsToAdd(6)}
                  >
                    6 PTS (Victoria)
                  </button>
                  <button
                    className="pixel-button points-preset"
                    onClick={() => setPointsToAdd(3)}
                  >
                    3 PTS (Top 2)
                  </button>
                  <input
                    type="number"
                    className="pixel-input"
                    value={pointsToAdd}
                    onChange={(e) => setPointsToAdd(parseInt(e.target.value) || 0)}
                    min="0"
                    max="10"
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button
                  className="pixel-button confirm-btn"
                  onClick={handleAddPoints}
                >
                  ✓ CONFIRMAR
                </button>
                <button
                  className="pixel-button cancel-btn"
                  onClick={() => setShowAddPointsModal(false)}
                >
                  ✕ CANCELAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Matches Table */}
      {selectedPhase !== 'all' && (
        <div className="matches-section pixel-card">
          <h2>⚔️ TABLA DE ENFRENTAMIENTOS</h2>
          <div className="matches-tabs">
            {[1, 2, 3, 4].map(phase => (
              <button
                key={phase}
                className={`match-phase-btn ${selectedPhase === phase.toString() ? 'active' : ''}`}
                onClick={() => setSelectedPhase(phase.toString())}
              >
                FASE {phase}
              </button>
            ))}
          </div>

          {(tournamentData.players || []).length >= 2 ? (
            <div className="matches-grid">
              {(tournamentData.players || []).map((player1, i) =>
                (tournamentData.players || []).slice(i + 1).map((player2, j) => (
                  <div key={`${player1.id}-${player2.id}`} className="match-card">
                    <div className="match-players">
                      <div className="match-player">
                        {player1.avatarImage && (
                          <img src={player1.avatarImage} alt={player1.name} className="match-avatar" />
                        )}
                        <span>{player1.name}</span>
                        {(() => {
                          const scores = tournamentData.getMatchScore(player1.id, player2.id, selectedPhase);
                          if (scores.player1 === 6 || scores.player2 === 6) {
                            return scores.player1 === 6 ? (
                              <span className="match-result winner">GANADOR</span>
                            ) : (
                              <span className="match-result loser">PERDEDOR</span>
                            );
                          }
                          return null;
                        })()}
                      </div>
                      <span className="vs-text">VS</span>
                      <div className="match-player">
                        {player2.avatarImage && (
                          <img src={player2.avatarImage} alt={player2.name} className="match-avatar" />
                        )}
                        <span>{player2.name}</span>
                        {(() => {
                          const scores = tournamentData.getMatchScore(player1.id, player2.id, selectedPhase);
                          if (scores.player1 === 6 || scores.player2 === 6) {
                            return scores.player2 === 6 ? (
                              <span className="match-result winner">GANADOR</span>
                            ) : (
                              <span className="match-result loser">PERDEDOR</span>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    </div>
                    <div className="match-score">
                      {(() => {
                        const matchData = tournamentData.getMatchScore(player1.id, player2.id, selectedPhase);
                        const isAdmin = auth?.currentUser?.isAdmin;
                        const currentPlayerId = auth?.currentUser?.playerId;
                        const isPlayer1 = currentPlayerId === player1.id;
                        const isPlayer2 = currentPlayerId === player2.id;
                        const isInvolved = isPlayer1 || isPlayer2;
                        const canEdit = isAdmin || (!matchData.locked && isInvolved);

                        return (
                          <>
                            <div className="score-control">
                              {canEdit && (
                                <button
                                  className="score-btn decrease"
                                  onClick={() => {
                                    const currentScore = matchData.player1 || 0;
                                    if (currentScore > 0) {
                                      tournamentData.updateMatchScore(selectedPhase, player1.id, player2.id, currentScore - 1, matchData.player2 || 0);
                                    }
                                  }}
                                  title="Restar punto"
                                >
                                  -
                                </button>
                              )}
                              <input
                                type="text"
                                readOnly
                                value={matchData.player1 || 0}
                                className={`score-display ${matchData.player1 > matchData.player2 ? 'winning' :
                                    matchData.player1 < matchData.player2 ? 'losing' : ''
                                  }`}
                              />
                              {canEdit && (
                                <button
                                  className="score-btn increase"
                                  onClick={() => {
                                    const currentScore = matchData.player1 || 0;
                                    if (currentScore < 6) {
                                      tournamentData.updateMatchScore(selectedPhase, player1.id, player2.id, currentScore + 1, matchData.player2 || 0);
                                    }
                                  }}
                                  title="Sumar punto"
                                >
                                  +
                                </button>
                              )}
                            </div>
                            <span className="vs-divider">-</span>
                            <div className="score-control">
                              {canEdit && (
                                <button
                                  className="score-btn decrease"
                                  onClick={() => {
                                    const currentScore = matchData.player2 || 0;
                                    if (currentScore > 0) {
                                      tournamentData.updateMatchScore(selectedPhase, player1.id, player2.id, matchData.player1 || 0, currentScore - 1);
                                    }
                                  }}
                                  title="Restar punto"
                                >
                                  -
                                </button>
                              )}
                              <input
                                type="text"
                                readOnly
                                value={matchData.player2 || 0}
                                className={`score-display ${matchData.player2 > matchData.player1 ? 'winning' :
                                    matchData.player2 < matchData.player1 ? 'losing' : ''
                                  }`}
                              />
                              {canEdit && (
                                <button
                                  className="score-btn increase"
                                  onClick={() => {
                                    const currentScore = matchData.player2 || 0;
                                    if (currentScore < 6) {
                                      tournamentData.updateMatchScore(selectedPhase, player1.id, player2.id, matchData.player1 || 0, currentScore + 1);
                                    }
                                  }}
                                  title="Sumar punto"
                                >
                                  +
                                </button>
                              )}
                            </div>
                          </>
                        );
                      })()}
                      {tournamentData.getMatchScore(player1.id, player2.id, selectedPhase).locked &&
                        (auth?.currentUser?.isAdmin ||
                          auth?.currentUser?.playerId === player1.id ||
                          auth?.currentUser?.playerId === player2.id) && (
                          <button
                            className="reset-match-btn pixel-button"
                            onClick={() => tournamentData.resetMatchScore(player1.id, player2.id, selectedPhase)}
                            title="Reiniciar combate"
                          >
                            🔄
                          </button>
                        )}
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <p className="no-matches">Añade al menos 2 jugadores para ver enfrentamientos</p>
          )}
        </div>
      )}

      {/* Stats Summary */}
      <div className="stats-summary pixel-card">
        <h2>📊 ESTADÍSTICAS GENERALES</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-value">{sortedPlayers.length}</span>
            <span className="stat-label">JUGADORES</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">
              {sortedPlayers.reduce((sum, p) => sum + p.points, 0)}
            </span>
            <span className="stat-label">PUNTOS TOTALES</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">
              {sortedPlayers.reduce((sum, p) => sum + getBadgeCount(p), 0)}
            </span>
            <span className="stat-label">MEDALLAS</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">
              {sortedPlayers.reduce((sum, p) => sum + (p.rewards || []).length, 0)}
            </span>
            <span className="stat-label">RECOMPENSAS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
