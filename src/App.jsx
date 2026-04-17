import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitationConfig } from './config/invitationConfig';
import { themeConfig } from './components/themeConfig';

import Hero from './components/Hero';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import Location from './components/Location';
import RSVPForm from './components/RSVPForm';
import PhotoCarousel from './components/PhotoCarousel';
import Footer from './components/Footer';
import VisualEffects from './components/VisualEffects';

const THEME_ICONS = {
  safari: '🦁', pastel: '🌸', minimalista: '✨', boho: '🌿',
  deepNight: '🌌', royalGold: '👑', cleanModern: '🔳', ocean: '🌊',
  vintage: '📜', lavender: '🪻', traveler: '✈️', garden: '🌼',
  wedding: '💍', birthday: '🎂', babyshower: '🍼'
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(invitationConfig.isProduction ? invitationConfig.defaultTheme : null);
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
    // VOLVEMOS AL ORIGEN: El fondo lo dicta estrictamente el themeConfig
    <div className={`min-h-screen transition-all duration-700 relative overflow-x-hidden ${theme ? theme.container : 'bg-gray-50'}`}>
      
      <audio ref={audioRef} src="/cancion.mp3" loop />

      <AnimatePresence mode="wait">
        
        {/* VISTA: CATÁLOGO */}
        {!currentTheme && (
          <motion.div 
            key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center p-6 text-center relative z-100"
          >
            <h1 className="text-3xl md:text-4xl font-light my-12 text-gray-800 tracking-[0.2em] uppercase">Nuestros Diseños</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl pb-12">
              {Object.keys(themeConfig).map((t) => (
                <motion.div 
                  key={t} whileHover={{ y: -10 }} onClick={() => setCurrentTheme(t)}
                  className="cursor-pointer bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center group"
                >
                  <div className={`w-24 h-24 rounded-full mb-4 flex items-center justify-center text-4xl shadow-inner transition-transform group-hover:rotate-12 ${themeConfig[t].container}`}>
                    {THEME_ICONS[t] || '✨'}
                  </div>
                  <h3 className="text-xl font-bold capitalize text-gray-800">{t}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* VISTA: BIENVENIDA */}
        {currentTheme && !hasStarted && (
          <motion.div 
            key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-6 bg-white/90 backdrop-blur-md"
          >
            <div className={`${theme.card} p-12 text-center shadow-2xl flex flex-col items-center max-w-sm`}>
              <h2 className={`${theme.title} text-2xl mb-8 uppercase`}>Has sido invitado</h2>
              <button onClick={handleStart} className={`${theme.button} px-10 py-6 rounded-2xl`}>
                <span className="text-lg font-bold uppercase tracking-tighter">Abrir Invitación</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* VISTA: CUERPO */}
        {currentTheme && hasStarted && (
          <motion.div key="invitation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full relative z-20">
            <button 
              onClick={() => {setCurrentTheme(null); setHasStarted(false);}} 
              className="fixed top-6 left-6 z-100 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold shadow-lg border border-gray-200"
            >
              ← CATÁLOGO
            </button>

            {/* Ajustamos la opacidad para que Pastel se vea sólido y BabyShower deje pasar las nubes */}
            <div className={`w-full md:max-w-5xl mx-auto flex flex-col items-center shadow-2xl overflow-x-hidden relative z-30 
              ${currentTheme === 'babyshower' ? 'bg-white/30 backdrop-blur-md' : 'bg-white/80'}`}>
              <Hero theme={theme} />
              <div className="w-full px-4 md:px-12 flex flex-col items-center space-y-16 text-center mt-12 pb-12">
                <Countdown targetDate={invitationConfig.event.date} theme={theme} />
                <Location theme={theme} />
                <Gallery theme={theme} />
                <PhotoCarousel theme={theme} />
                <RSVPForm theme={theme} />
              </div>
              <Footer theme={theme} />
            </div>
            
            <MusicPlayer audioRef={audioRef} theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Los efectos se cargan aquí al final */}
      {currentTheme && hasStarted && (
        <VisualEffects themeId={currentTheme} />
      )}
    </div>
  );
}

export default App;