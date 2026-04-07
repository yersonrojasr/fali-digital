import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitationConfig } from './config/invitationConfig';
import { themeConfig } from './Components/themeConfig';

// Componentes
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import Location from './components/Location';
import RSVPForm from './components/RSVPForm';

function App() {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  const theme = themeConfig[currentTheme];

  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio bloqueado", err));
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${theme ? theme.container : 'bg-gray-50'}`}>
      
      {/* Audio oculto (asegúrate de tener musica.mp3 en /public) */}
      <audio ref={audioRef} src="/cancion.mp3" loop />

      <AnimatePresence mode="wait">
        {/* 1. CATÁLOGO */}
        {!currentTheme && (
          <motion.div 
            key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
          >
            <h1 className="text-4xl font-light mb-12 text-gray-800 tracking-[0.2em] uppercase">Nuestros Diseños</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
              {Object.keys(themeConfig).map((t) => (
                <motion.div 
                  key={t} whileHover={{ y: -10 }} onClick={() => setCurrentTheme(t)}
                  className="cursor-pointer bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center group"
                >
                  <div className={`w-24 h-24 rounded-full mb-4 flex items-center justify-center text-4xl shadow-inner transition-transform group-hover:rotate-12 ${themeConfig[t].container}`}>
                    {t === 'safari' && '🦁'} {t === 'pastel' && '🌸'} {t === 'minimalista' && '✨'}
                    {t === 'boho' && '🌿'} {t === 'deepNight' && '🌌'} {t === 'royalGold' && '👑'}
                    {t === 'cleanModern' && '🔳'} {t === 'ocean' && '🌊'} {t === 'vintage' && '📜'}
                    {t === 'lavender' && '🪻'} {t === 'traveler' && '✈️'} {t === 'garden' && '🌼'}
                  </div>
                  <h3 className="text-xl font-bold capitalize text-gray-800">{t}</h3>
                  <span className="text-[10px] mt-2 opacity-40 font-black tracking-widest uppercase">Explorar</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2. PANTALLA DE BIENVENIDA (Solo aparece tras elegir tema) */}
        {currentTheme && !hasStarted && (
          <motion.div 
            key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-6 bg-white/90 backdrop-blur-md"
          >
            <div className={`${theme.card} p-12 text-center shadow-2xl flex flex-col items-center max-w-sm`}>
              <h2 className={`${theme.title} text-2xl mb-8`}>Has sido invitado</h2>
              <button onClick={handleStart} className={`${theme.button} px-10 py-6 flex flex-col items-center gap-1`}>
                <span className="text-lg font-bold">ABRIR INVITACIÓN</span>
                <span className="text-[9px] opacity-70 tracking-[0.2em]">Y ACTIVAR MÚSICA</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* 3. INVITACIÓN FINAL */}
        {currentTheme && hasStarted && (
          <motion.div key="invitation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            <button onClick={() => {setCurrentTheme(null); setHasStarted(false);}} className="fixed top-6 left-6 z-100 bg-white/80 p-3 rounded-full text-[10px] font-bold shadow-lg">← CATÁLOGO</button>
            <div className="max-w-4xl mx-auto flex flex-col items-center pb-24">
              <Hero theme={theme} />
              <Countdown targetDate={invitationConfig.event.date} theme={theme} />
              <Gallery theme={theme} />
              <Location theme={theme} />
              <RSVPForm theme={theme} />
            </div>
            <MusicPlayer audioRef={audioRef} theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;