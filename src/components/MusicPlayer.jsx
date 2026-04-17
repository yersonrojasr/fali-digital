import { useState } from 'react';

const MusicPlayer = ({ audioRef, theme }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-300">
      <button 
        onClick={toggleMusic}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all active:scale-90 border-2
        ${theme.card} ${isPlaying ? 'animate-pulse' : 'opacity-80'}`}
      >
        <span className="text-2xl select-none">
          {isPlaying ? '🎵' : '🔇'}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;