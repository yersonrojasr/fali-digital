import { useState, useRef } from 'react';
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
import PhotoCarousel from './components/PhotoCarousel';

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
    <div className={`min-h-screen transition-all duration-700 ${theme ? theme.container : 'bg-gray-50'}`}>
      
      {/* Audio oculto */}
      <audio ref={audioRef} src="/cancion.mp3" loop />

      <AnimatePresence mode="wait">
        {/* 1. CATÁLOGO */}
        {!currentTheme && (
          <motion.div 
            key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center p-6 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-light my-12 text-gray-800 tracking-[0.2em] uppercase">Nuestros Diseños</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl pb-12">
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
                  <span className="text-[10px] mt-2 opacity-40 font-black tracking-widest uppercase italic">Tocar para ver</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2. PANTALLA DE BIENVENIDA */}
        {currentTheme && !hasStarted && (
          <motion.div 
            key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-6 bg-white/90 backdrop-blur-md"
          >
            <div className={`${theme.card} p-12 text-center shadow-2xl flex flex-col items-center max-w-sm`}>
              <h2 className={`${theme.title} text-2xl mb-8`}>Has sido invitado</h2>
              <button onClick={handleStart} className={`${theme.button} px-10 py-6 flex flex-col items-center gap-1`}>
                <span className="text-lg font-bold uppercase">Abrir Invitación</span>
                <span className="text-[9px] opacity-70 tracking-[0.2em]">Y ACTIVAR MÚSICA</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* 3. INVITACIÓN FINAL (RESPONSIVA Y CENTRADA) */}
        {currentTheme && hasStarted && (
          <motion.div key="invitation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            <button 
              onClick={() => {setCurrentTheme(null); setHasStarted(false);}} 
              className="fixed top-6 left-6 z-100 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold shadow-lg border border-gray-200 hover:bg-white transition-colors"
            >
              ← CATÁLOGO
            </button>

            {/* Contenedor Maestro: En Mac md:max-w-5xl, centrado con mx-auto */}
            <div className="w-full md:max-w-5xl mx-auto flex flex-col items-center pb-24 bg-white min-h-screen shadow-2xl overflow-x-hidden">
              
              <Hero theme={theme} />
              
              {/* Contenedor de Contenido: flex-col e items-center fuerzan el centrado de todos los hijos */}
              <div className="w-full px-4 md:px-12 flex flex-col items-center space-y-16 text-center mt-12">
                
                <Countdown targetDate={invitationConfig.event.date} theme={theme} />
                
                {/* Dividimos Gallery y Location pero ambos heredan el centrado del padre */}
                <div className="w-full flex flex-col items-center space-y-16">
                  <Gallery theme={theme} />
                  <Location theme={theme} />
                </div>
                <PhotoCarousel theme={theme} />
                <RSVPForm theme={theme} />
              </div>
            </div>
            
            <MusicPlayer audioRef={audioRef} theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;