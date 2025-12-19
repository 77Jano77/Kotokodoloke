import './Banners.css';
import OakTips from './OakTips';

const Banners = ({ setCurrentSection, setResourceAction }) => {
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

    // Rotación automática de banners cada 12 segundos
    useEffect(() => {
        if (availableAds.length === 0) return;

        const interval = setInterval(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % availableAds.length);
        }, 12000); // Cambiar cada 12 segundos

        return () => clearInterval(interval);
    }, [availableAds.length]);

    const randomUrls = [
        "https://falange.es/",
        "https://www.llados.com/",
        "https://www.gaymaletube.com/es/",
        "https://partidofeminista.es/",
        "https://fincasluna.com/"
    ];

    const handleRandomRedirect = () => {
        const randomUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
        window.open(randomUrl, '_blank');
    };

    // Obtener los 2 banners actuales
    const currentAd1 = availableAds[currentAdIndex];
    const currentAd2 = availableAds[(currentAdIndex + 1) % availableAds.length];

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
                                    onClick={() => {
                                        setResourceAction('open_my_zones');
                                        setCurrentSection('resources');
                                    }}
                                    title="Ir a mi registro de zonas"
                                >
                                    📍 Ir a mi registro
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Left Banners - Publicitarios (Rotación Automática - 1 solo) */}
                    <div className="left-banners">
                        {currentAd1 && (
                            <div
                                className="ad-banner pixel-card ad-rotating"
                                key={`ad1-${currentAdIndex}`}
                                onClick={handleRandomRedirect}
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={`/publi/${currentAd1}`}
                                />
                            </div>
                        )}

                        {/* Relocated Professor Oak Tips */}
                        <div className="banner-oak-integration">
                            <OakTips />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Banners;
