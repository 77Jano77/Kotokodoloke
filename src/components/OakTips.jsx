import { useState, useEffect } from 'react';
import './Home.css'; // Reusing Home.css for now or move to separate CSS later

const OakTips = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);

    const TIPS = [
        "Parálisis: Reduce la velocidad del Pokémon afectado en un 75% (pasa a tener 1/4 de su velocidad).",
        "Quemadura: Reduce el daño de los ataques físicos del Pokémon en un 50%.",
        "STAB: Un Pokémon hace un 50% más de daño si usa un movimiento de su mismo tipo.",
        "Confusión: El Pokémon tiene un 50% de probabilidad de golpearse a sí mismo (el daño se calcula con su propio Ataque Físico).",
        "Naturalezas: Una naturaleza favorable aumenta una estadística un 10% y reduce otra un 10%.",
        "Golpes Críticos: Hacen 1.5 veces más daño e ignoran las mejoras en defensa del rival.",
        "Especial vs. Físico: Los movimientos de Categoría Especial usan el Atq. Esp. y la Def. Esp. para calcular el daño.",
        "Inmunidad Eléctrica: Los Pokémon de tipo Eléctrico no pueden ser paralizados (desde Gen 6).",
        "Inmunidad de Fuego: Los Pokémon de tipo Fuego no pueden ser quemados.",
        "Inmunidad a Polvo: Los Pokémon de tipo Planta son inmunes a movimientos de polvos y esporas (como Esporas o Somnífero).",
        "Tipo Acero: Es inmune al daño por veneno y a la tormenta de arena.",
        "Tipo Veneno: Al ser usados por un Pokémon de tipo Veneno, el movimiento Tóxico nunca falla (incluso si el rival vuela o bucea).",
        "Tipo Fantasma: Son inmunes a los efectos que impiden huir o ser intercambiados.",
        "Trampa Rocas: Infligen daño al entrar al combate según la debilidad del Pokémon al tipo Roca (desde 3% hasta 50%).",
        "Prioridad: Movimientos como Ataque Rápido siempre van primero, a menos que el rival use un movimiento de prioridad superior.",
        "Cambio de Clima: El clima dura 5 turnos si es provocado por una habilidad (como Sequía o Chorro Arena).",
        "Sorpresa solo funciona en el primer turno que el Pokémon está en el campo."
    ];

    useEffect(() => {
        // Select initial random tip
        setCurrentTipIndex(Math.floor(Math.random() * TIPS.length));

        const interval = setInterval(() => {
            if (userInteracted) return;
            setIsChanging(true);
            setTimeout(() => {
                setCurrentTipIndex(prev => {
                    let nextIndex;
                    do {
                        nextIndex = Math.floor(Math.random() * TIPS.length);
                    } while (nextIndex === prev && TIPS.length > 1);
                    return nextIndex;
                });
                setIsChanging(false);
            }, 500);
        }, 12000);

        return () => clearInterval(interval);
    }, [userInteracted]);

    const handleNext = (e) => {
        e.stopPropagation();
        setUserInteracted(true);
        setIsChanging(true);
        setTimeout(() => {
            setCurrentTipIndex(prev => (prev + 1) % TIPS.length);
            setIsChanging(false);
        }, 300);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setUserInteracted(true);
        setIsChanging(true);
        setTimeout(() => {
            setCurrentTipIndex(prev => (prev - 1 + TIPS.length) % TIPS.length);
            setIsChanging(false);
        }, 300);
    };

    return (
        <>
            <button
                className={`oak-toggle-btn pixel-button ${!isOpen ? 'show' : ''}`}
                onClick={() => setIsOpen(true)}
                title="Ver consejos de Oak"
            >
                💡 Ver Consejo
            </button>

            {isOpen && (
                <div className="oak-tips-container slide-up">
                    <div className="oak-header">
                        <button className="oak-close-btn" onClick={() => setIsOpen(false)}>✕</button>
                    </div>
                    <div className="oak-content">
                        <div className="oak-sprite-container">
                            <img src="/recursos/Oak.jpg" alt="Profesor Oak" className="oak-sprite" />
                        </div>
                        <div className="oak-text-bubble pixel-card paper-texture">
                            <h4 className="oak-title">Oak dice:</h4>
                            <div className="oak-tip-body">
                                <p className={`oak-tip-text ${isChanging ? 'fade-out' : 'fade-in'}`}>
                                    {TIPS[currentTipIndex]}
                                </p>
                            </div>
                            <div className="oak-nav-arrows">
                                <button className="oak-arrow-btn" onClick={handlePrev}>◀</button>
                                <button className="oak-arrow-btn" onClick={handleNext}>▶</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OakTips;
