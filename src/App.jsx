import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURACIONES ---
import { invitationConfig } from './config/invitationConfig';
import { themeConfig } from './components/themeConfig';
import { businessConfig } from './config/businessLogic';

// --- COMPONENTES ---
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
  deepNight: '🌌', royalGold: '👑', ocean: '🌊', babyshower: '🍼', wedding: '💍',
  traveler: '✈️', garden: '🌼', vintage: '📜', lavender: '🪻', cleanModern: '🔳'
};

function App() {
  // 1. ESTADOS DE NAVEGACIÓN
  // Si isProduction es true, cargamos directamente el tema por defecto
  const [viewMode, setViewMode] = useState(invitationConfig.isProduction ? 'invitation' : 'home');
  const [currentTheme, setCurrentTheme] = useState(invitationConfig.isProduction ? invitationConfig.defaultTheme : null);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  // 2. LÓGICA DE DATOS
  const theme = currentTheme ? themeConfig[currentTheme] : null;
  const eventName = invitationConfig.event.babyName || "Tu Evento";

  const getWhatsAppLink = (message) => {
    const phone = businessConfig.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => console.log("Audio en espera de interacción"));
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 relative overflow-x-hidden ${theme ? theme.container : 'bg-[#F9F8F6]'} font-sans text-stone-800`}>
      
      {/* Audio Global */}
      <audio ref={audioRef} src={`/${invitationConfig.music}`} loop />

      <AnimatePresence mode="wait">
        
        {/* --- VISTA 1: HOME (DISEÑO DE 2 COLUMNAS) --- */}
        {!invitationConfig.isProduction && !currentTheme && viewMode === 'home' && (
          <motion.div 
            key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#F9F8F6]"
          >
            <div className="max-w-5xl w-full flex flex-col items-center">
              <header className="mb-20 text-center flex flex-col items-center">
                <img src="/logosinfondo.png" alt="Logo" className="w-64 md:w-80 mb-6" />
                <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-medium">The Art of Virtual Hosting</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch w-full max-w-4xl">
                <div className="flex flex-col justify-between border-t border-stone-200 pt-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-4 block font-bold">Colección 01</span>
                    <h2 className="text-3xl font-serif italic mb-6">Diseños de Autor</h2>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-10">Curaduría de estilos listos para personalizar. La opción más ágil y elegante.</p>
                  </div>
                  <button onClick={() => setViewMode('info-autor')} className="text-[10px] uppercase tracking-[0.3em] font-bold py-5 border border-stone-800 hover:bg-stone-800 hover:text-white transition-all rounded-full">Ver Detalles</button>
                </div>

                <div className="flex flex-col justify-between border-t border-stone-200 pt-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-4 block font-bold">Colección 02</span>
                    <h2 className="text-3xl font-serif italic mb-6">Personalizados</h2>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-10">Diseños únicos desde lienzo en blanco. Reflejamos la esencia de su evento.</p>
                  </div>
                  <button onClick={() => setViewMode('info-personalizado')} className="text-[10px] uppercase tracking-[0.3em] font-bold py-5 bg-stone-800 text-white hover:bg-stone-700 transition-all rounded-full shadow-lg">Detalles Premium</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- VISTA 2: INFO DISEÑOS DE AUTOR --- */}
        {!invitationConfig.isProduction && !currentTheme && viewMode === 'info-autor' && (
          <motion.div 
            key="info-autor" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="min-h-screen bg-white py-20 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <button onClick={() => setViewMode('home')} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest hover:text-stone-800 transition-colors">← Volver</button>
              
              <header className="mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Autor Collection</span>
                <h1 className="text-5xl font-serif italic mb-6 text-stone-800">Elegancia Inmediata</h1>
                <p className="text-lg text-stone-500 leading-relaxed max-w-2xl">{businessConfig.rules.autor.descripcion}</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {businessConfig.rules.autor.ventajas.map((v, i) => (
                  <div key={i} className="border border-stone-100 p-8 rounded-3xl bg-[#F9F8F6]">
                    <h4 className="font-bold text-stone-800 mb-2 uppercase text-[10px] tracking-widest">{v.title}</h4>
                    <p className="text-sm text-stone-500">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                <div className="space-y-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 border-b pb-2">Experiencia Interactiva</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {businessConfig.rules.autor.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-stone-600">
                        <div className="w-1.5 h-1.5 bg-stone-800 rounded-full" />
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-900 text-white p-12 rounded-[3rem] shadow-2xl">
                  <div className="mb-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">Inversión y Tiempo</h4>
                    <p className="text-4xl font-serif italic text-stone-200">{businessConfig.plans.autor.price}</p>
                    <p className="text-sm text-stone-400 mt-2 italic">Entrega garantizada en {businessConfig.rules.autor.entrega}</p>
                  </div>
                  <div className="space-y-4">
                    <button onClick={() => setViewMode('catalog')} className="w-full bg-white text-stone-900 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-100 transition-all">Explorar Catálogo</button>
                    <a href={getWhatsAppLink("Me interesa un diseño de autor.")} target="_blank" className="block w-full border border-stone-700 text-white py-5 rounded-full text-center text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-all">Consultar por WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- VISTA 3: INFO PERSONALIZADOS --- */}
        {!invitationConfig.isProduction && !currentTheme && viewMode === 'info-personalizado' && (
          <motion.div 
            key="info-personalizado" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
            className="min-h-screen bg-white py-16 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <button onClick={() => setViewMode('home')} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest hover:text-stone-800 transition-colors">← Volver</button>
              
              <header className="mb-16">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Bespoke Design</span>
                <h1 className="text-5xl font-serif italic mb-6 text-stone-800">Diseños Personalizados</h1>
                <p className="text-xl text-stone-500 mb-16 max-w-2xl leading-relaxed">{businessConfig.rules.personalizado.descripcion}</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-12">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 border-b pb-2">Proceso Creativo</h4>
                  {businessConfig.rules.personalizado.pasos.map((p, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-3xl font-serif italic text-stone-200">{i + 1}</span>
                      <div>
                        <h5 className="font-bold text-stone-800 text-lg mb-1">{p.title}</h5>
                        <p className="text-sm text-stone-500 leading-snug">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F9F8F6] p-12 rounded-[4rem] h-fit sticky top-10 border border-stone-100 shadow-sm">
                  <div className="mb-10 pb-8 border-b border-stone-200">
                    <div className="mb-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Inversión Estimada</h4>
                      <p className="text-3xl font-serif italic text-stone-800">{businessConfig.plans.personalizado.price}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Tiempo de Desarrollo</h4>
                      <p className="text-stone-700 font-medium">{businessConfig.rules.personalizado.entrega}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <a href={businessConfig.contact.formUrl} target="_blank" className="block w-full bg-stone-900 text-white py-5 rounded-full text-center text-[10px] font-bold uppercase tracking-widest shadow-xl hover:bg-stone-800 transition-colors">Iniciar Formulario de Proyecto</a>
                    <a href={getWhatsAppLink(businessConfig.plans.personalizado.whatsappMessage)} target="_blank" className="block w-full border border-stone-300 py-5 rounded-full text-center text-[10px] font-bold uppercase tracking-widest hover:border-stone-800 transition-colors">Hablar con un Diseñador</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- VISTA 4: CATÁLOGO --- */}
        {!invitationConfig.isProduction && !currentTheme && viewMode === 'catalog' && (
          <motion.div key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen p-8 bg-[#F9F8F6]">
            <button onClick={() => setViewMode('info-autor')} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest hover:text-stone-800 transition-colors">← Volver</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {Object.keys(themeConfig).map((t) => (
                <div key={t} onClick={() => setCurrentTheme(t)} className="cursor-pointer bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all flex flex-col items-center group">
                  <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-4xl shadow-inner transition-transform group-hover:rotate-12 ${themeConfig[t].container}`}> {THEME_ICONS[t] || '✨'} </div>
                  <h3 className="text-lg font-serif italic capitalize text-stone-800">{t}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* --- VISTA 5: EL SOBRE (PRE-VIEW) --- */}
        {currentTheme && !hasStarted && (
          <motion.div key="envelope" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 1.1, opacity: 0 }} className={`fixed inset-0 z-[500] flex items-center justify-center p-6 backdrop-blur-xl ${theme.container}`}>
            <div className={`p-12 text-center shadow-2xl flex flex-col items-center max-w-sm w-full bg-white rounded-[3rem] ${theme.card}`}>
              <span className="text-[9px] uppercase tracking-[0.5em] text-stone-300 mb-8 block">Invitación Digital</span>
              <h2 className={`${theme.title} text-3xl mb-12`}>{eventName}</h2>
              <button onClick={handleStart} className={`${theme.button} w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl animate-pulse`}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Abrir</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* --- VISTA 6: LA INVITACIÓN FINAL --- */}
        {currentTheme && hasStarted && (
          <motion.div key="invitation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex flex-col items-center">
            
            {/* Barra de Herramientas solo para modo edición */}
            {!invitationConfig.isProduction && (
              <div className="fixed top-6 left-6 z-[100] flex gap-3">
                <button onClick={() => {setCurrentTheme(null); setHasStarted(false); setViewMode('catalog');}} className="bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold shadow-lg border border-stone-100 uppercase tracking-widest">← Catálogo</button>
                <a href={getWhatsAppLink(`¡Hola Fali! Me encantó el diseño "${currentTheme}". Quiero este para mi evento.`)} target="_blank" className="bg-stone-800 text-white px-5 py-2 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-widest text-center">Elegir este</a>
              </div>
            )}
            
            <div className={`w-full md:max-w-4xl mx-auto shadow-2xl relative z-10 ${theme.card} md:my-10 overflow-hidden`}>
              <Hero theme={theme} />
              <div className="w-full px-6 md:px-12 flex flex-col items-center space-y-24 py-24">
                <Countdown targetDate={invitationConfig.event.date} theme={theme} />
                <Location theme={theme} />
                <Gallery theme={theme} />
                <PhotoCarousel theme={theme} />
                <RSVPForm theme={theme} />
              </div>
              <Footer theme={theme} />
            </div>
            
            <MusicPlayer theme={theme} />
            <VisualEffects themeId={currentTheme} />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;