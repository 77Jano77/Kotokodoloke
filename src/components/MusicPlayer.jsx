import { useEffect, useRef, useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ currentSection }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('music-muted');
    return saved === 'true';
  });
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('music-volume');
    return saved ? parseFloat(saved) : 0.5;
  });

  // Map sections to music files
  const musicMap = {
    home: '/music/Inicio.mp3',
    players: '/music/Jugadores.mp3',
    roulette: '/music/Ruleta.mp3',
    standings: '/music/PVP.mp3',
    resources: '/music/Recursos y descargas.mp3',
    downloads: '/music/Recursos y descargas.mp3',
    gallery: '/music/Galeria.mp3',
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume
    audio.volume = volume;

    const currentTrack = musicMap[currentSection];
    if (!currentTrack) return;

    // If it's a different track, change it
    if (audio.src !== window.location.origin + currentTrack) {
      audio.src = currentTrack;
      audio.load();
    }

    // Play if not muted
    if (!isMuted) {
      audio.play().catch(err => {
        console.log('Audio playback failed:', err);
      });
    }

    return () => {
      audio.pause();
    };
  }, [currentSection, isMuted, volume]);

  useEffect(() => {
    localStorage.setItem('music-muted', isMuted);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio playback failed:', err);
        });
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    localStorage.setItem('music-volume', newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        loop
        preload="auto"
      />
      <div className="music-controls">
        <button 
          className="music-toggle-btn"
          onClick={toggleMute}
          title={isMuted ? 'Activar música' : 'Silenciar música'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
          title={`Volumen: ${Math.round(volume * 100)}%`}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
