import { useState, useEffect } from 'react';
import './Banners.css';

const Banners = ({ setCurrentSection }) => {
    const [showBanners, setShowBanners] = useState(true);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    // Lista de banners publicitarios disponibles en /publi/
    const availableAds = [
        'publi1.jpg',
        'publi2.jpg',
        'publi3.jpg',
        'publi4.jpg',
        'publi5.jpg',
        'Publi6.jpg',
        'publi7.jpg',
        'publi8.jpg'
    ];

    // Rotación automática de banners cada 5 segundos
    useEffect(() => {
        if (availableAds.length === 0) return;

        const interval = setInterval(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % availableAds.length);
        }, 5000); // Cambiar cada 5 segundos

        return () => clearInterval(interval);
    }, [availableAds.length]);

    const currentAd = availableAds[currentAdIndex];

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

                        {/* Banner de Registro de Zonas */}
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

                    {/* Left Banners - Publicitarios (Rotación Automática) */}
                    <div className="left-banners">
                        {currentAd && (
                            <div className="ad-banner pixel-card ad-rotating" key={currentAdIndex}>
                                <img
                                    src={`/publi/${currentAd}`}
                                    alt={`Publicidad ${currentAdIndex + 1}`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Banners;
