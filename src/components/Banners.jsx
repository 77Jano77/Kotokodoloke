import { useState, useEffect } from 'react';
import './Banners.css';

const Banners = ({ tournamentData, auth, setCurrentSection }) => {
    const [showBanners, setShowBanners] = useState(true);
    const [showAdSelector, setShowAdSelector] = useState(false);
    const [availableAds, setAvailableAds] = useState([]);
    const [selectedAds, setSelectedAds] = useState([]);

    // Cargar imágenes publicitarias disponibles
    useEffect(() => {
        // Lista de banners publicitarios disponibles en /publi/
        // El admin los puede agregar manualmente a esta carpeta
        const adFiles = [
            'banner1.png',
            'banner2.png',
            'banner3.png',
            'banner4.png',
            'banner5.png'
        ];
        setAvailableAds(adFiles);

        // Cargar banners seleccionados desde el estado global (si existe)
        if (tournamentData.selectedAdBanners) {
            setSelectedAds(tournamentData.selectedAdBanners);
        }
    }, [tournamentData.selectedAdBanners]);

    const isAdmin = auth?.currentUser?.isAdmin;

    const toggleAdBanner = (adFile) => {
        const newSelected = selectedAds.includes(adFile)
            ? selectedAds.filter(ad => ad !== adFile)
            : [...selectedAds, adFile];

        setSelectedAds(newSelected);
        // Guardar en el estado global
        if (tournamentData.updateAdBanners) {
            tournamentData.updateAdBanners(newSelected);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                className="toggle-banners-btn"
                onClick={() => setShowBanners(!showBanners)}
                title={showBanners ? 'Ocultar banners' : 'Mostrar banners'}
            >
                {showBanners ? '◀' : '▶'}
            </button>

            {showBanners && (
                <>
                    {/* Right Banners - Informativos */}
                    <div className="right-banners">
                        {/* Banner de Servidor (existente) */}
                        <div className="info-banner server-banner pixel-card">
                            <div className="banner-header">
                                <span className="banner-icon">🌐</span>
                                <span className="banner-title">SERVIDOR</span>
                            </div>
                            <div className="banner-content">
                                <div className="banner-item">
                                    <span className="item-label">📡 Red Radmin:</span>
                                    <span className="item-value">Kotokodos Cup</span>
                                </div>
                                <div className="banner-item">
                                    <span className="item-label">🔑 Contraseña:</span>
                                    <span className="item-value">Somalia</span>
                                </div>
                                <button
                                    className="banner-link-btn pixel-button"
                                    onClick={() => setCurrentSection('resources')}
                                    title="Ver guía de conexión"
                                >
                                    📖 Guía de conexión
                                </button>
                            </div>
                        </div>

                        {/* Banner de Registro de Zonas - NUEVO */}
                        <div className="info-banner zones-banner pixel-card">
                            <div className="banner-header">
                                <span className="banner-icon">🗺️</span>
                                <span className="banner-title">REGISTRO</span>
                            </div>
                            <div className="banner-content">
                                <div className="mew-sprite">
                                    <img
                                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
                                        alt="Mew"
                                    />
                                </div>
                                <button
                                    className="banner-link-btn pixel-button zones-btn"
                                    onClick={() => setCurrentSection('roulette')}
                                    title="Ir a registro de zonas"
                                >
                                    📍 Registrar Zonas
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Left Banners - Publicitarios */}
                    <div className="left-banners">
                        {isAdmin && (
                            <button
                                className="manage-ads-btn pixel-button"
                                onClick={() => setShowAdSelector(!showAdSelector)}
                            >
                                ⚙️ Gestionar Banners
                            </button>
                        )}

                        {selectedAds.map((adFile, index) => (
                            <div key={index} className="ad-banner pixel-card">
                                <img
                                    src={`/publi/${adFile}`}
                                    alt={`Publicidad ${index + 1}`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        console.log(`Banner ${adFile} no encontrado`);
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Ad Selector Modal (solo para admin) */}
                    {isAdmin && showAdSelector && (
                        <div className="modal-overlay" onClick={() => setShowAdSelector(false)}>
                            <div className="modal-content pixel-card ad-selector-modal" onClick={(e) => e.stopPropagation()}>
                                <h2>📢 GESTIONAR BANNERS PUBLICITARIOS</h2>
                                <p className="modal-subtitle">Selecciona qué banners mostrar en el lateral izquierdo</p>

                                <div className="ad-selection-grid">
                                    {availableAds.map((adFile) => (
                                        <div
                                            key={adFile}
                                            className={`ad-option ${selectedAds.includes(adFile) ? 'selected' : ''}`}
                                            onClick={() => toggleAdBanner(adFile)}
                                        >
                                            <img
                                                src={`/publi/${adFile}`}
                                                alt={adFile}
                                                onError={(e) => {
                                                    e.target.parentElement.style.opacity = '0.3';
                                                    e.target.alt = 'No encontrado';
                                                }}
                                            />
                                            {selectedAds.includes(adFile) && <span className="check-icon">✓</span>}
                                            <span className="ad-filename">{adFile}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="close-modal-btn pixel-button"
                                    onClick={() => setShowAdSelector(false)}
                                >
                                    ✓ GUARDAR Y CERRAR
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Banners;
