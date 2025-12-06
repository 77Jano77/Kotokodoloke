import { useState, useEffect, useRef } from 'react';
import './Resources.css';
import { TYPE_CHART } from '../data/typeChart';
import { POKEDEX_DATA } from '../data/pokedex';
import { ABILITIES_DATA } from '../data/abilities';
import { CAPTURE_ZONES } from '../data/captureZones';

const Resources = ({ audioControls, tournamentData }) => {
  const audioRef = useRef(null);
  const [activeTab, setActiveTab] = useState('types');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedGen, setSelectedGen] = useState('all');
  const [showConnectionGuide, setShowConnectionGuide] = useState(false);
  
  // Usar captureRecords de Firebase
  const captureRecords = tournamentData.captureRecords || [];
  const [showNewRecordForm, setShowNewRecordForm] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [expandedRecord, setExpandedRecord] = useState(null);

  // Limpiar LocalStorage antiguo
  useEffect(() => {
    localStorage.removeItem('capture-records');
  }, []);

  useEffect(() => {
    if (audioRef.current && audioControls) {
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
    if (audioRef.current && audioControls) {
      audioRef.current.volume = audioControls.volume / 100;
      audioRef.current.muted = audioControls.isMuted;
    }
  }, [audioControls?.volume, audioControls?.isMuted]);

  const createNewRecord = () => {
    if (!newPlayerName.trim()) {
      alert('⚠️ Introduce un nombre de jugador');
      return;
    }

    const recordData = {
      playerName: newPlayerName.trim(),
      kantoZones: CAPTURE_ZONES.kanto.map(zone => ({ ...zone, captured: false })),
      seviZones: CAPTURE_ZONES.seviIslands.map(zone => ({ ...zone, captured: false }))
    };

    tournamentData.addCaptureRecord(recordData);
    setNewPlayerName('');
    setShowNewRecordForm(false);
  };

  const toggleZone = (recordId, region, zoneId) => {
    const record = captureRecords.find(r => r.id === recordId);
    if (!record) return;

    const zones = region === 'kanto' ? 'kantoZones' : 'seviZones';
    const updatedZones = record[zones].map(zone =>
      zone.id === zoneId ? { ...zone, captured: !zone.captured } : zone
    );

    tournamentData.updateCaptureRecord(recordId, {
      [zones]: updatedZones
    });
  };

  const deleteRecord = (recordId) => {
    if (confirm('¿Eliminar este registro?')) {
      tournamentData.deleteCaptureRecord(recordId);
    }
  };

  // Filtrar Pokémon
  const filteredPokedex = POKEDEX_DATA.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pokemon.number.toString().includes(searchTerm);
    const matchesGen = selectedGen === 'all' || pokemon.generation === parseInt(selectedGen);
    const matchesType = !selectedType || 
                       pokemon.types.includes(selectedType);
    return matchesSearch && matchesGen && matchesType;
  });

  // Filtrar habilidades
  const filteredAbilities = ABILITIES_DATA.filter(ability =>
    ability.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="resources-container">
      <audio ref={audioRef} loop>
        <source src="/music/Recursos y descargas.mp3" type="audio/mpeg" />
      </audio>
      <h1 className="pixel-text">📚 RECURSOS DEL TORNEO</h1>

      <div className="connection-guide-section">
        <button 
          className="pixel-button connection-guide-btn-main"
          onClick={() => setShowConnectionGuide(true)}
        >
          📖 VER GUÍA DE CONEXIÓN ONLINE
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="resources-tabs">
        <button
          className={`tab-btn pixel-button ${activeTab === 'types' ? 'active' : ''}`}
          onClick={() => setActiveTab('types')}
        >
          🔥 TABLA DE TIPOS
        </button>
        <button
          className={`tab-btn pixel-button ${activeTab === 'pokedex' ? 'active' : ''}`}
          onClick={() => setActiveTab('pokedex')}
        >
          📖 POKÉDEX
        </button>
        <button
          className={`tab-btn pixel-button ${activeTab === 'abilities' ? 'active' : ''}`}
          onClick={() => setActiveTab('abilities')}
        >
          ⚡ HABILIDADES
        </button>
        <button
          className={`tab-btn pixel-button ${activeTab === 'map' ? 'active' : ''}`}
          onClick={() => setActiveTab('map')}
        >
          🗺️ MAPA DE KANTO
        </button>
        <button
          className={`tab-btn pixel-button ${activeTab === 'capture' ? 'active' : ''}`}
          onClick={() => setActiveTab('capture')}
        >
          📋 REGISTRO ZONAS
        </button>
      </div>

      {/* Type Chart Tab */}
      {activeTab === 'types' && (
        <div className="types-section pixel-card">
          <h2>TABLA DE EFECTIVIDAD DE TIPOS (Gen 6)</h2>
          <p className="section-description">
            Muestra las fortalezas y debilidades de cada tipo Pokémon actualizada a 6ª generación (con Hada)
          </p>
          
          <div className="type-chart-container">
            <table className="type-chart">
              <thead>
                <tr>
                  <th className="corner-cell">ATK ➜<br/>DEF ⬇</th>
                  {TYPE_CHART.types.map(type => (
                    <th key={type} className={`type-header type-${type.toLowerCase()}`}>
                      {type}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TYPE_CHART.types.map(defendingType => (
                  <tr key={defendingType}>
                    <td className={`type-header type-${defendingType.toLowerCase()}`}>
                      {defendingType}
                    </td>
                    {TYPE_CHART.types.map(attackingType => {
                      const effectiveness = TYPE_CHART.chart[attackingType]?.[defendingType] || 1;
                      return (
                        <td 
                          key={`${attackingType}-${defendingType}`}
                          className={`effectiveness eff-${effectiveness}`}
                          title={`${attackingType} → ${defendingType}: ${effectiveness}x`}
                        >
                          {effectiveness === 0 ? '×0' :
                           effectiveness === 0.25 ? '¼' :
                           effectiveness === 0.5 ? '½' :
                           effectiveness === 1 ? '-' :
                           effectiveness === 2 ? '2×' :
                           effectiveness === 4 ? '4×' : effectiveness}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="type-legend">
            <h3>Leyenda</h3>
            <div className="legend-items">
              <span className="legend-item eff-0">×0 = Inmune</span>
              <span className="legend-item eff-0.25">¼ = Muy poco eficaz</span>
              <span className="legend-item eff-0.5">½ = Poco eficaz</span>
              <span className="legend-item eff-1">- = Normal</span>
              <span className="legend-item eff-2">2× = Muy eficaz</span>
              <span className="legend-item eff-4">4× = Súper eficaz</span>
            </div>
          </div>
        </div>
      )}

      {/* Pokédex Tab */}
      {activeTab === 'pokedex' && (
        <div className="pokedex-section">
          <div className="pokedex-header pixel-card">
            <h2>POKÉDEX NACIONAL (Gen 1-3)</h2>
            <p className="section-description">
              {POKEDEX_DATA.length} Pokémon con stats base de 6ª gen y evoluciones adaptadas a "Easier Evolutions"
            </p>
            
            <div className="pokedex-filters">
              <input
                type="text"
                className="pixel-input search-input"
                placeholder="Buscar por nombre o número..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
              <select
                className="pixel-input"
                value={selectedGen}
                onChange={(e) => setSelectedGen(e.target.value)}
              >
                <option value="all">Todas las generaciones</option>
                <option value="1">Generación 1 (Kanto)</option>
                <option value="2">Generación 2 (Johto)</option>
                <option value="3">Generación 3 (Hoenn)</option>
              </select>

              <select
                className="pixel-input"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Todos los tipos</option>
                {TYPE_CHART.types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pokedex-grid">
            {filteredPokedex.map(pokemon => (
              <div key={pokemon.number} className="pokemon-card pixel-card">
                <div className="pokemon-header">
                  <span className="pokemon-number">#{String(pokemon.number).padStart(3, '0')}</span>
                  <div className="pokemon-types">
                    {pokemon.types.map(type => (
                      <span key={type} className={`type-badge type-${type.toLowerCase()}`}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pokemon-image">
                  <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
                    alt={pokemon.name}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>

                <h3 className="pokemon-name">{pokemon.name}</h3>
                <p className="pokemon-description">{pokemon.description}</p>

                <div className="pokemon-stats">
                  <div className="stat-row">
                    <span className="stat-name">HP</span>
                    <div className="stat-bar">
                      <div className="stat-fill stat-hp" style={{width: `${(pokemon.stats.hp/255)*100}%`}}></div>
                    </div>
                    <span className="stat-value">{pokemon.stats.hp}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-name">ATK</span>
                    <div className="stat-bar">
                      <div className="stat-fill stat-atk" style={{width: `${(pokemon.stats.attack/255)*100}%`}}></div>
                    </div>
                    <span className="stat-value">{pokemon.stats.attack}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-name">DEF</span>
                    <div className="stat-bar">
                      <div className="stat-fill stat-def" style={{width: `${(pokemon.stats.defense/255)*100}%`}}></div>
                    </div>
                    <span className="stat-value">{pokemon.stats.defense}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-name">SpA</span>
                    <div className="stat-bar">
                      <div className="stat-fill stat-spa" style={{width: `${(pokemon.stats.spAttack/255)*100}%`}}></div>
                    </div>
                    <span className="stat-value">{pokemon.stats.spAttack}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-name">SpD</span>
                    <div className="stat-bar">
                      <div className="stat-fill stat-spd" style={{width: `${(pokemon.stats.spDefense/255)*100}%`}}></div>
                    </div>
                    <span className="stat-value">{pokemon.stats.spDefense}</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-name">SPE</span>
                    <div className="stat-bar">
                      <div className="stat-fill stat-spe" style={{width: `${(pokemon.stats.speed/255)*100}%`}}></div>
                    </div>
                    <span className="stat-value">{pokemon.stats.speed}</span>
                  </div>
                  <div className="stat-total">
                    <strong>TOTAL:</strong> {Object.values(pokemon.stats).reduce((a, b) => a + b, 0)}
                  </div>
                </div>

                {pokemon.evolution && (
                  <div className="pokemon-evolution">
                    <strong>Evolución:</strong> {pokemon.evolution}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredPokedex.length === 0 && (
            <div className="no-results pixel-card">
              <p>❌ No se encontraron Pokémon con esos filtros</p>
            </div>
          )}
        </div>
      )}

      {/* Abilities Tab */}
      {activeTab === 'abilities' && (
        <div className="abilities-section">
          <div className="abilities-header pixel-card">
            <h2>HABILIDADES HASTA 6ª GENERACIÓN</h2>
            <p className="section-description">
              Listado completo de todas las habilidades disponibles en el juego
            </p>
            
            <input
              type="text"
              className="pixel-input search-input"
              placeholder="Buscar habilidad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="abilities-list">
            {filteredAbilities.map(ability => (
              <div key={ability.id} className="ability-card pixel-card">
                <div className="ability-header">
                  <h3 className="ability-name">{ability.name}</h3>
                  {ability.generation && (
                    <span className="ability-gen">Gen {ability.generation}</span>
                  )}
                </div>
                <p className="ability-description">{ability.description}</p>
              </div>
            ))}
          </div>

          {filteredAbilities.length === 0 && (
            <div className="no-results pixel-card">
              <p>❌ No se encontraron habilidades</p>
            </div>
          )}
        </div>
      )}

      {/* Map Tab */}
      {activeTab === 'map' && (
        <div className="map-section pixel-card">
          <h2>🗺️ MAPA INTERACTIVO DE KANTO</h2>
          <p className="section-description">
            Explora Kanto con este mapa interactivo completo. Encuentra ubicaciones, rutas, ciudades y puntos de interés.
          </p>
          
          <div className="map-embed-container">
            <a 
              href="https://pkmnmap.com/FireRedLeafGreen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link pixel-button"
            >
              🌍 ABRIR MAPA INTERACTIVO DE KANTO
            </a>
            
            <div className="map-info">
              <p>📍 <strong>Características del mapa:</strong></p>
              <ul>
                <li>✅ Todas las ciudades y rutas de Kanto</li>
                <li>✅ Ubicaciones de Pokémon salvajes</li>
                <li>✅ Puntos de interés y objetos</li>
                <li>✅ Versión FireRed/LeafGreen</li>
              </ul>
            </div>

            <iframe
              src="https://pkmnmap.com/FireRedLeafGreen/"
              title="Mapa interactivo de Kanto"
              className="map-iframe"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Capture Zones Registry Tab */}
      {activeTab === 'capture' && (
        <div className="capture-registry-section">
          <div className="capture-header pixel-card">
            <h2>📋 REGISTRO DE ZONAS DE CAPTURA</h2>
            <p className="section-description">
              Lleva un control de las zonas que ya has usado para capturar Pokémon
            </p>
            
            <button 
              className="pixel-button"
              onClick={() => setShowNewRecordForm(!showNewRecordForm)}
            >
              ➕ NUEVO REGISTRO
            </button>
          </div>

          {showNewRecordForm && (
            <div className="new-record-form pixel-card">
              <h3>Crear Nuevo Registro</h3>
              <div className="form-group">
                <label htmlFor="player-name-input">NOMBRE DEL JUGADOR</label>
                <input
                  type="text"
                  id="player-name-input"
                  className="pixel-input"
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && createNewRecord()}
                  placeholder="Introduce el nombre..."
                />
              </div>
              <div className="form-buttons">
                <button className="pixel-button" onClick={createNewRecord}>
                  ✓ CREAR
                </button>
                <button 
                  className="pixel-button-secondary" 
                  onClick={() => {
                    setShowNewRecordForm(false);
                    setNewPlayerName('');
                  }}
                >
                  ✕ CANCELAR
                </button>
              </div>
            </div>
          )}

          {captureRecords.length === 0 ? (
            <div className="no-records pixel-card">
              <p>📝 No hay registros todavía. Crea uno con el botón de arriba.</p>
            </div>
          ) : (
            <>
              {/* Records Grid - Sprite View */}
              {!expandedRecord && (
                <div className="records-sprite-grid">
                  {captureRecords.map(record => {
                    const kantoCompleted = record.kantoZones.filter(z => z.captured).length;
                    const seviCompleted = record.seviZones.filter(z => z.captured).length;
                    const totalCompleted = kantoCompleted + seviCompleted;
                    const totalZones = record.kantoZones.length + record.seviZones.length;

                    return (
                      <div 
                        key={record.id} 
                        className="record-sprite-card"
                        onClick={() => setExpandedRecord(record.id)}
                      >
                        <div className="record-sprite-icon">👤</div>
                        <span className="record-sprite-label">{record.playerName}</span>
                        <span className="record-sprite-progress">
                          {totalCompleted}/{totalZones}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Expanded Record View */}
              {expandedRecord && captureRecords.find(r => r.id === expandedRecord) && (() => {
                const record = captureRecords.find(r => r.id === expandedRecord);
                const kantoCompleted = record.kantoZones.filter(z => z.captured).length;
                const seviCompleted = record.seviZones.filter(z => z.captured).length;
                const totalCompleted = kantoCompleted + seviCompleted;
                const totalZones = record.kantoZones.length + record.seviZones.length;

                return (
                  <div className="capture-record-expanded pixel-card">
                    <div className="record-header">
                      <h3>🎮 {record.playerName}</h3>
                      <div className="record-actions">
                        <span className="progress-badge">
                          {totalCompleted}/{totalZones} zonas
                        </span>
                        <button 
                          className="delete-record-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteRecord(record.id);
                            setExpandedRecord(null);
                          }}
                          title="Eliminar registro"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>

                    {/* Kanto Zones */}
                    <div className="zones-region">
                      <h4 className="region-title">
                        🗾 KANTO ({kantoCompleted}/{record.kantoZones.length})
                      </h4>
                      <div className="zones-grid">
                        {record.kantoZones.map(zone => (
                          <div 
                            key={zone.id} 
                            className={`zone-item ${zone.captured ? 'captured' : ''}`}
                            onClick={() => toggleZone(record.id, 'kanto', zone.id)}
                          >
                            <div className="zone-checkbox">
                              {zone.captured && '✓'}
                            </div>
                            <div className="zone-info">
                              <span className="zone-name">{zone.name}</span>
                              <span className="zone-count">{zone.pokemonCount} Pokémon</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Islas Sevi */}
                    <div className="zones-region">
                      <h4 className="region-title">
                        🏝️ ISLAS SEVI ({seviCompleted}/{record.seviZones.length})
                      </h4>
                      <div className="zones-grid">
                        {record.seviZones.map(zone => (
                          <div 
                            key={zone.id} 
                            className={`zone-item ${zone.captured ? 'captured' : ''}`}
                            onClick={() => toggleZone(record.id, 'sevi', zone.id)}
                          >
                            <div className="zone-checkbox">
                              {zone.captured && '✓'}
                            </div>
                            <div className="zone-info">
                              <span className="zone-name">{zone.name}</span>
                              <span className="zone-count">{zone.pokemonCount} Pokémon</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Close Button */}
                    <button 
                      className="close-record-btn pixel-button"
                      onClick={() => setExpandedRecord(null)}
                    >
                      ✕ CERRAR
                    </button>
                  </div>
                );
              })()}
            </>
          )}
        </div>
      )}

      {/* Connection Guide Modal */}
      {showConnectionGuide && (
        <div className="modal-overlay" onClick={() => setShowConnectionGuide(false)}>
          <div className="modal-content connection-guide-modal pixel-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal-btn"
              onClick={() => setShowConnectionGuide(false)}
            >
              ✕
            </button>
            
            <h2>🎮 GUÍA DE CONEXIÓN ONLINE</h2>
            <p className="guide-intro">Sigue estos pasos para conectar dos emuladores GBA y jugar Pokémon online</p>

            <div className="connection-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Instalar Radmin VPN</h3>
                  <p>Descarga e instala <strong>Radmin VPN</strong> desde su página oficial (es gratis).</p>
                  <a href="https://www.radmin-vpn.com/" target="_blank" rel="noopener noreferrer" className="pixel-button download-link">
                    🔗 Ir a Radmin VPN
                  </a>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Unirse a la red</h3>
                  <p>Abre Radmin VPN y únete a la red con estos datos:</p>
                  <div className="connection-data">
                    <div><strong>Red:</strong> <code>Kotokodos Cup</code></div>
                    <div><strong>Contraseña:</strong> <code>Somalia</code></div>
                  </div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Copiar IP del host</h3>
                  <p>El jugador que va a ser el <strong>anfitrión</strong> debe:</p>
                  <ul>
                    <li>Ver su IP en Radmin VPN (aparece junto a tu nombre)</li>
                    <li>Copiar esa IP (ejemplo: 26.123.45.67)</li>
                    <li>Compartirla con el otro jugador</li>
                  </ul>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Configurar emulador (VBA Link)</h3>
                  <p>Ambos jugadores deben usar <strong>VisualBoy Advance Link</strong>:</p>
                  <ul>
                    <li><strong>Primero:</strong> Options → Link → Type → <strong>Game Boy Advance</strong></li>
                    <li><strong>Host:</strong> Options → Link → Start Network Link → Server</li>
                    <li><strong>Cliente:</strong> Options → Link → Start Network Link → Client → Introducir IP del host</li>
                  </ul>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Conectar en el juego</h3>
                  <p>Una vez conectados los emuladores:</p>
                  <ul>
                    <li>Entra al <strong>Centro Pokémon</strong> en el juego</li>
                    <li>Ve al segundo piso</li>
                    <li>Habla con la mujer del centro</li>
                    <li>Selecciona la opción de intercambio/combate por cable</li>
                  </ul>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>¡A jugar!</h3>
                  <p>Si todo salió bien, deberías poder intercambiar o combatir. ¡Disfruta el torneo! 🏆</p>
                </div>
              </div>
            </div>

            <div className="guide-tips">
              <h3>💡 CONSEJOS</h3>
              <ul>
                <li>Asegúrate de que ambos jugadores estén en la misma red de Radmin VPN</li>
                <li>Si no conecta, revisa que el firewall no esté bloqueando el emulador</li>
                <li>Usa la misma versión del ROM (Fire Red o Leaf Green)</li>
                <li>Guarda antes de intentar conectar por si hay problemas</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
