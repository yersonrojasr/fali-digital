import { useState, useEffect, useCallback } from 'react';

const MusicPlayer = ({ audioRef, theme }) => {
  // Inicializamos basado en si el audio realmente está sonando
  const [isPlaying, setIsPlaying] = useState(!audioRef.current?.paused);

  // Sincronizar el estado de la UI con el estado real del hardware de audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [audioRef]);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    
    if (audioRef.current.paused) {
      audioRef.current.play().catch(err => console.error("Error al reproducir:", err));
    } else {
      audioRef.current.pause();
    }
  }, [audioRef]);

  return (
    <div className="fixed bottom-6 right-6 z-[300]">
      <button 
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all 
        active:scale-95 border-2 hover:scale-105
        ${theme.card} ${isPlaying ? 'animate-pulse' : 'opacity-80'}`}
      >
        <span className="text-2xl select-none" role="img" aria-hidden="true">
          {isPlaying ? '🎵' : '🔇'}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;