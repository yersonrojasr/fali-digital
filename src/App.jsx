import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Gift, MapPin, Clock, MessageCircle, Mail, Instagram } from 'lucide-react';

// --- CONFIGURACIONES ---
import { invitationConfig } from './config/invitationConfig';
import { themeConfig } from './components/themeConfig';
import { businessConfig } from './config/businessLogic';

// --- COMPONENTES EXTERNOS ---
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import Location from './components/Location';
import RSVPForm from './components/RSVPForm';
import PhotoCarousel from './components/PhotoCarousel';
import VisualEffects from './components/VisualEffects';

const THEME_ICONS = {
  safari: '🦁', pastel: '🌸', minimalista: '✨', boho: '🌿', 
  deepNight: '🌌', royalGold: '👑', ocean: '🌊', babyshower: '🍼', wedding: '💍',
  traveler: '✈️', garden: '🌼', vintage: '📜', lavender: '🪻', cleanModern: '🔳'
};

// --- FOOTER 1: INFORMACIÓN DE NEGOCIO (PARA LANDING E INFO) ---
const BusinessFooter = () => (
  <footer className="w-full py-16 px-6 text-center border-t border-stone-100 bg-[#F9F8F6]">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-stone-500">
        <div className="flex flex-col items-center space-y-3">
          <MessageCircle size={18} className="text-stone-300" />
          <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">WhatsApp</h5>
          <a href="https://wa.me/50683162053" target="_blank" rel="noreferrer" className="text-[11px] underline underline-offset-4 decoration-stone-200">+506 8316-2053</a>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Mail size={18} className="text-stone-300" />
          <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">Email</h5>
          <p className="text-[11px]">falidigitalcr@gmail.com</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Clock size={18} className="text-stone-300" />
          <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">Tiempos</h5>
          <p className="text-[11px]">Autor: 48h | Bespoke: 5-10 días</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <a href="https://instagram.com/falidigital" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-3 hover:opacity-60 transition-all">
            <Instagram size={18} className="text-stone-300" />
            <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">Instagram</h5>
            <p className="text-[11px]">@falidigital</p>
          </a>
        </div>
      </div>
      <h4 className="font-serif text-[12px] tracking-[0.3em] uppercase text-stone-400">Fali Digital</h4>
    </div>
  </footer>
);

// --- FOOTER 2: CRÉDITOS (PARA LAS INVITACIONES) ---
const BrandFooter = ({ theme }) => (
  <footer className={`w-full py-12 px-6 text-center ${theme?.container}`}>
    <div className="max-w-4xl mx-auto pt-8 border-t border-stone-100/10 opacity-40">
      <h4 className="font-serif text-[13px] tracking-[0.3em] uppercase mb-2 font-bold">Fali Digital</h4>
      <p className="text-[9px] uppercase tracking-widest">Diseño exclusivo para este evento - © 2026</p>
      <p className="text-[9px] uppercase tracking-widest mt-1 text-inherit">Diseñado por Fali Digital</p>
    </div>
  </footer>
);

function App() {
  const [viewMode, setViewMode] = useState(invitationConfig.isProduction ? 'invitation' : 'home');
  const [currentTheme, setCurrentTheme] = useState(invitationConfig.isProduction ? invitationConfig.defaultTheme : null);
  const [hasStarted, setHasStarted] = useState(false);
  const [guestInfo, setGuestInfo] = useState({ pases: null, name: null });
  
  const audioRef = useRef(null);

  const theme = useMemo(() => themeConfig[currentTheme] || themeConfig['safari'], [currentTheme]);
  const isPremium = invitationConfig.planType === 'personalizado';
  const eventName = invitationConfig.event?.babyName || "Tu Evento";

  useEffect(() => { window.scrollTo(0, 0); }, [viewMode, currentTheme]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestInfo({ pases: params.get('p'), name: params.get('n') });
  }, []);

  const stopMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const handleStart = useCallback(() => {
    setHasStarted(true);
    if (audioRef.current) audioRef.current.play().catch(() => {});
  }, []);

  // FUNCIÓN CLAVE: Volver al catálogo, no al Home
  const handleBackToCatalog = useCallback(() => {
    stopMusic();
    setCurrentTheme(null);
    setHasStarted(false);
    setViewMode('catalog');
  }, [stopMusic]);

  const getWhatsAppLink = useCallback((message) => {
    const phone = businessConfig.contact?.whatsapp?.replace(/\D/g, '') || "";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, []);

  const showLanding = !invitationConfig.isProduction && !currentTheme;

  return (
    <div className={`min-h-screen transition-all duration-700 relative overflow-x-hidden ${theme?.container || 'bg-[#F9F8F6]'} font-sans text-stone-800`}>
      <audio ref={audioRef} src={`/${invitationConfig.music}`} loop />

      <AnimatePresence mode="wait">
        
        {/* --- VISTA: LANDING --- */}
        {showLanding && viewMode === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center bg-[#F9F8F6]">
            <div className="flex-1 flex flex-col items-center justify-center p-8 w-full max-w-5xl">
              <header className="mb-20 text-center">
                <img src="/logosinfondo.png" alt="Logo" className="w-64 md:w-80 mb-6 mx-auto" />
                <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-medium italic">The Art of Virtual Hosting</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch w-full max-w-4xl text-stone-800 text-left mb-20 font-sans">
                <div className="flex flex-col justify-between border-t border-stone-200 pt-8">
                  <div><span className="text-[10px] uppercase tracking-widest text-stone-400 mb-4 block font-bold">Colección 01</span><h2 className="text-3xl font-serif italic mb-6">Diseños de Autor</h2><p className="text-stone-500 text-sm leading-relaxed mb-10">Estilos curados listos para personalizar.</p></div>
                  <button onClick={() => setViewMode('info-autor')} className="text-[10px] uppercase tracking-[0.3em] font-bold py-5 rounded-full border border-stone-800 hover:bg-stone-800 hover:text-white transition-all">Ver Detalles</button>
                </div>
                <div className="flex flex-col justify-between border-t border-stone-200 pt-8">
                  <div><span className="text-[10px] uppercase tracking-widest text-stone-400 mb-4 block font-bold">Colección 02</span><h2 className="text-3xl font-serif italic mb-6">Personalizados</h2><p className="text-stone-500 text-sm leading-relaxed mb-10">Diseños exclusivos desde cero.</p></div>
                  <button onClick={() => setViewMode('info-personalizado')} className="text-[10px] uppercase tracking-[0.3em] font-bold py-5 bg-stone-800 text-white rounded-full shadow-lg hover:bg-stone-700 transition-all font-sans">Detalles Premium</button>
                </div>
              </div>
            </div>
            <BusinessFooter />
          </motion.div>
        )}

        {/* --- VISTAS INFO --- */}
        {showLanding && viewMode === 'info-autor' && (
           <motion.div key="info-autor" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col bg-white">
              <div className="flex-1 max-w-4xl mx-auto py-20 px-6">
                <button onClick={() => setViewMode('home')} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest font-sans">← Volver</button>
                <header className="mb-12"><span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4 font-sans text-left">Autor Collection</span><h1 className="text-5xl font-serif italic mb-6 text-stone-800">Elegancia Inmediata</h1><p className="text-lg text-stone-500 leading-relaxed max-w-2xl">{businessConfig.rules?.autor?.descripcion}</p></header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">{businessConfig.rules?.autor?.ventajas?.map((v, i) => (<div key={i} className="border border-stone-100 p-8 rounded-3xl bg-[#F9F8F6] text-stone-800 text-left"><h4 className="font-bold text-stone-800 mb-2 uppercase text-[10px] tracking-widest font-sans">{v.title}</h4><p className="text-sm text-stone-500 leading-snug font-sans">{v.desc}</p></div>))}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20 text-left">
                  <div className="space-y-8 text-stone-800"><h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 border-b pb-2 text-stone-500">Interacción Premium</h3><div className="grid grid-cols-1 gap-4">{businessConfig.rules?.autor?.features?.map((f, i) => (<div key={i} className="flex items-center gap-3 text-sm text-stone-600 font-medium font-sans"><div className="w-1.5 h-1.5 bg-stone-800 rounded-full" /> {f}</div>))}</div></div>
                  <div className="bg-stone-900 text-white p-12 rounded-[3rem] shadow-2xl"><div className="mb-10"><h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2 font-sans">Inversión Final</h4><p className="text-4xl font-serif italic text-stone-200">{businessConfig.plans?.autor?.price}</p><p className="text-sm text-stone-400 mt-2 font-sans italic">Entrega en {businessConfig.rules?.autor?.entrega}</p></div><button onClick={() => setViewMode('catalog')} className="w-full bg-white text-stone-900 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-100 transition-all font-sans">Ver Catálogo</button></div>
                </div>
              </div>
              <BusinessFooter />
           </motion.div>
        )}

        {showLanding && viewMode === 'info-personalizado' && (
          <motion.div key="info-personalizado" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col bg-white">
            <div className="flex-1 max-w-4xl mx-auto py-20 px-6">
              <button onClick={() => setViewMode('home')} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest font-sans">← Volver</button>
              <header className="mb-16 text-left text-stone-800"><span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4 font-sans text-left text-stone-800 font-sans">Bespoke Service</span><h1 className="text-5xl md:text-[80px] font-serif italic mb-6 text-stone-800">Diseños Personalizados</h1><p className="text-xl text-stone-500 leading-relaxed max-w-2xl font-sans">{businessConfig.rules?.personalizado?.descripcion}</p></header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 text-left text-stone-800">
                <div className="space-y-12">{businessConfig.rules?.personalizado?.pasos?.map((p, i) => (<div key={i} className="flex gap-6 text-stone-800"><span className="text-3xl font-serif italic text-stone-200">{i + 1}</span><div><h4 className="font-bold text-lg mb-1 text-stone-800 font-sans">{p.title}</h4><p className="text-sm text-stone-500 font-sans">{p.desc}</p></div></div>))}</div>
                <div className="bg-[#F9F8F6] p-12 rounded-[4rem] h-fit sticky top-10 border border-stone-100 shadow-sm text-center"><p className="text-3xl font-serif italic mb-2 text-stone-800">{businessConfig.plans?.personalizado?.price}</p><p className="text-stone-500 text-sm mb-10 font-sans">Tiempo estimado: {businessConfig.rules?.personalizado?.entrega}</p><a href={businessConfig.contact?.formUrl} target="_blank" rel="noreferrer" className="block w-full bg-stone-900 text-white py-5 rounded-full text-center text-[10px] font-bold uppercase tracking-widest font-sans transition-all">Iniciar Proyecto</a></div>
              </div>
            </div>
            <BusinessFooter />
          </motion.div>
        )}

        {showLanding && viewMode === 'catalog' && (
          <motion.div key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen p-8 bg-[#F9F8F6] py-20 text-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
              <button onClick={() => setViewMode('home')} className="mb-16 text-stone-400 text-[10px] font-bold uppercase tracking-widest hover:text-stone-800 transition-colors font-sans">← Volver al inicio</button>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
                {Object.keys(themeConfig).map((t) => (
                  <div key={t} onClick={() => setCurrentTheme(t)} className="cursor-pointer bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all flex flex-col items-center group border border-stone-50">
                      <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-4xl shadow-inner group-hover:rotate-12 transition-transform ${themeConfig[t]?.container || ''}`}>
                        {THEME_ICONS[t] || '✨'}
                      </div>
                      <h3 className="text-lg font-serif italic capitalize text-stone-800">{t}</h3>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* --- SOBRE --- */}
        {currentTheme && !hasStarted && (
          <EnvelopeView theme={theme} eventName={eventName} guestName={isPremium ? guestInfo.name : null} onStart={handleStart} onBack={handleBackToCatalog} />
        )}

        {/* --- INVITACIÓN FINAL --- */}
        {currentTheme && hasStarted && (
          <div className={`w-full flex flex-col items-center ${currentTheme === 'deepNight' ? 'bg-[#0F172A]' : 'bg-white'}`}>
            {!invitationConfig.isProduction && (
              <div className="fixed top-6 left-6 z-[100] flex gap-3">
                <button onClick={handleBackToCatalog} className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold shadow-lg border border-stone-100 uppercase tracking-widest font-sans">← Catálogo</button>
                <a href={getWhatsAppLink(`Elegí el diseño ${currentTheme}`)} target="_blank" rel="noreferrer" className="bg-stone-800 text-white px-6 py-2 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-widest font-sans">Elegir diseño</a>
              </div>
            )}
            <div className={`w-full relative z-10 overflow-hidden ${currentTheme === 'deepNight' ? 'bg-[#0F172A]' : 'bg-white'}`}>
              <Hero theme={theme} config={invitationConfig} />
              
              <div className="w-full flex flex-col items-center py-10 md:py-24 space-y-32">
                <div className="w-full max-w-4xl px-6 flex flex-col items-center"><Countdown targetDate={invitationConfig.event?.date} theme={theme} /></div>
                <div className="w-full max-w-[1400px] mx-auto px-4"><Location theme={theme} locations={invitationConfig.locations || []} /></div>
                <div className="w-full max-w-[1600px] mx-auto px-4 space-y-32"><Gallery theme={theme} /><PhotoCarousel theme={theme} /></div>
                
                <div className="w-full max-w-4xl px-6 space-y-32">
                  <RSVPForm theme={theme} pases={isPremium ? guestInfo.pases : null} guestName={isPremium ? guestInfo.name : null} />
                  
                  {/* AGENDAR */}
                  <div className={`w-full text-center ${theme.card.replace(/\bp-\d+\b/g, 'p-10')} shadow-sm rounded-[3rem] border border-stone-100/10 bg-inherit`}>
                    <Calendar className={`${theme?.accent} mx-auto mb-6 opacity-30`} size={48} strokeWidth={1} />
                    <h2 className={`${theme?.title} text-3xl mb-6`}>{invitationConfig.event?.calendarTitle}</h2>
                    <p className="text-base opacity-70 mb-10 max-w-md mx-auto leading-relaxed">
                        Para que no se olviden de la fecha, darle click al botón y guardarla en su calendario. ¡Esperamos que nos puedan acompañar! Te esperamos.
                    </p>
                    <a href={invitationConfig.event?.calendarLink} download className={`inline-block w-full md:w-auto md:px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl ${theme?.button}`}>📅 Agregar a mi calendario</a>
                  </div>

                  {/* REGALOS */}
                  <div className={`w-full text-center ${theme.card.replace(/\bp-\d+\b/g, 'p-10')} shadow-sm rounded-[3rem] border border-stone-100/10 bg-inherit`}>
                    <Gift className={`${theme?.accent} mx-auto mb-6 opacity-30`} size={48} strokeWidth={1} />
                    <h2 className={`${theme?.title} text-3xl mb-6`}>{invitationConfig.event?.giftTitle}</h2>
                    <p className="text-base opacity-70 mb-4 max-w-md mx-auto leading-relaxed">
                        Debido a que ya tenemos muchos de los artículos necesarios, esta lista es una sugerencia para que todas las muestras de cariño sean aprovechadas.
                    </p>
                    <p className="text-sm opacity-60 mb-10 italic">No es obligatorio llevar algo de la lista.</p>
                    <a href={invitationConfig.event?.giftListLink} target="_blank" rel="noreferrer" className={`inline-block w-full md:w-auto md:px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl ${theme?.button}`}>🎁 Ver sugerencias</a>
                  </div>
                </div>
              </div>
              <BrandFooter theme={theme} />
            </div>
            <MusicPlayer theme={theme} audioRef={audioRef} />
            <VisualEffects themeId={currentTheme} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const EnvelopeView = ({ theme, eventName, guestName, onStart, onBack }) => (
  <div className={`fixed inset-0 z-[500] flex items-center justify-center p-6 backdrop-blur-xl ${theme?.container || ''}`}>
    <div className={`p-12 text-center shadow-2xl flex flex-col items-center max-w-sm w-full bg-white rounded-[3rem] ${theme?.card || ''} border border-white/50`}>
      <span className="text-[9px] uppercase tracking-[0.5em] text-stone-300 mb-6 block font-sans">Invitación Digital</span>
      {guestName && <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-medium italic text-stone-800 font-sans">Hola, {guestName}</p>}
      <h2 className={`${theme?.title || ''} text-3xl mb-12 text-stone-800`}>{eventName}</h2>
      <button onClick={onStart} className={`${theme?.button || 'bg-stone-800 text-white'} w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl animate-pulse hover:scale-105 transition-transform font-sans`}><span className="text-[10px] font-bold uppercase tracking-widest text-white font-sans">Abrir</span></button>
      {!invitationConfig.isProduction && <button onClick={onBack} className="mt-8 text-stone-400 text-[9px] uppercase tracking-widest hover:text-stone-800 font-sans">Volver al catálogo</button>}
    </div>
  </div>
);

export default App;