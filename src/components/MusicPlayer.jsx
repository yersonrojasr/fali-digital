import React, { useState } from 'react';
import { Music, Music2 } from 'lucide-react';

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
    <button 
      onClick={toggleMusic}
      className={`fixed bottom-6 right-6 z-100 p-4 rounded-full shadow-2xl transition-all active:scale-90
      ${theme.card} border-2 ${isPlaying ? 'animate-pulse' : 'opacity-50'}`}
    >
      {isPlaying ? (
        <Music className={theme.accent} size={24} />
      ) : (
        <Music2 className="text-gray-400" size={24} />
      )}
    </button>
  );
};

export default MusicPlayer;