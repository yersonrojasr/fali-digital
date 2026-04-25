import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Gift, CheckCircle, MapPin, Clock, Users } from 'lucide-react';

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
  const [viewMode, setViewMode] = useState(invitationConfig.isProduction ? 'invitation' : 'home');
  const [currentTheme, setCurrentTheme] = useState(invitationConfig.isProduction ? invitationConfig.defaultTheme : null);
  const [hasStarted, setHasStarted] = useState(false);
  const [guestInfo, setGuestInfo] = useState({ pases: null, name: null });
  
  const audioRef = useRef(null);

  const theme = useMemo(() => currentTheme ? themeConfig[currentTheme] : null, [currentTheme]);
  const isPremium = invitationConfig.planType === 'personalizado';
  const eventName = invitationConfig.event.babyName || "Tu Evento";

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
    audioRef.current?.play().catch(() => {});
  }, []);

  const navigateTo = useCallback((mode) => {
    stopMusic();
    setViewMode(mode);
  }, [stopMusic]);

  const resetToCatalog = useCallback(() => {
    stopMusic();
    setCurrentTheme(null);
    setHasStarted(false);
    setViewMode('catalog');
  }, [stopMusic]);

  const getWhatsAppLink = useCallback((message) => {
    const phone = businessConfig.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, []);

  const showLanding = !invitationConfig.isProduction && !currentTheme;

  return (
    <div className={`min-h-screen transition-all duration-700 relative overflow-x-hidden ${theme ? theme.container : 'bg-[#F9F8F6]'} font-sans text-stone-800`}>
      <audio ref={audioRef} src={`/${invitationConfig.music}`} loop />

      <AnimatePresence mode="wait">
        {showLanding && viewMode === 'home' && <LandingView setViewMode={setViewMode} />}
        {showLanding && viewMode === 'info-autor' && <InfoAutorView onBack={() => navigateTo('home')} onCatalog={() => navigateTo('catalog')} />}
        {showLanding && viewMode === 'info-personalizado' && <InfoPersonalizadoView onBack={() => navigateTo('home')} />}
        {showLanding && viewMode === 'catalog' && <CatalogView onBack={() => navigateTo('info-autor')} onSelect={setCurrentTheme} />}

        {currentTheme && !hasStarted && (
          <EnvelopeView 
            theme={theme} 
            eventName={eventName} 
            guestName={isPremium ? guestInfo.name : null}
            onStart={handleStart}
            onBack={resetToCatalog}
          />
        )}

        {currentTheme && hasStarted && (
          <InvitationView 
            theme={theme} 
            currentTheme={currentTheme}
            guestInfo={guestInfo}
            isPremium={isPremium}
            onBack={resetToCatalog}
            audioRef={audioRef}
            whatsappSelectionLink={getWhatsAppLink(`¡Hola Fali! Me encantó el diseño "${currentTheme}". Quiero este para mi evento.`)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- VISTA DE LA INVITACIÓN (ORDEN CORREGIDO) ---
const InvitationView = ({ theme, currentTheme, guestInfo, isPremium, onBack, audioRef, whatsappSelectionLink }) => {
  const cleanMainCard = useMemo(() => theme.card
    .replace(/\bp-\d+\b/g, 'p-0')
    .replace(/\bpx-\d+\b/g, 'px-0')
    .replace(/\bpy-\d+\b/g, 'py-0'), [theme.card]);

  return (
    <div className="w-full flex flex-col items-center">
      {!invitationConfig.isProduction && (
        <div className="fixed top-6 left-6 z-[100] flex gap-3">
          <button onClick={onBack} className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold shadow-lg border border-stone-100 uppercase tracking-widest">← Catálogo</button>
          <a href={whatsappSelectionLink} target="_blank" rel="noreferrer" className="bg-stone-800 text-white px-6 py-2 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-widest">Elegir este diseño</a>
        </div>
      )}
      
      <div className={`w-full md:max-w-4xl mx-auto shadow-2xl relative z-10 ${cleanMainCard} md:my-10 overflow-hidden bg-white`}>
        <Hero theme={theme} />
        
        <div className="w-full px-4 md:px-12 flex flex-col items-center space-y-24 py-24">
          <Countdown targetDate={invitationConfig.event.date} theme={theme} />
          
          <Location theme={theme} locations={invitationConfig.locations} />
          
          <Gallery theme={theme} />
          
          <PhotoCarousel theme={theme} />
          
          {/* 1. Confirmación de Asistencia Primero */}
          <RSVPForm theme={theme} pases={isPremium ? guestInfo.pases : null} guestName={isPremium ? guestInfo.name : null} />
          
          {/* 2. Agendar Evento Después */}
          <div className={`w-full max-w-2xl mx-auto text-center ${theme.card.replace(/\bp-\d+\b/g, 'p-8 md:p-12')} shadow-sm`}>
            <Calendar className={`${theme.accent} mx-auto mb-6 opacity-30`} size={48} strokeWidth={1} />
            <h2 className={`${theme.title} text-2xl mb-4`}>{invitationConfig.event.calendarTitle}</h2>
            <p className="text-sm opacity-70 mb-8 italic">"Guarda la fecha en tu calendario para que nos acompañes en este gran día."</p>
            <a href={invitationConfig.event.calendarLink} download className={`inline-block w-full py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg ${theme.button}`}>
              📅 Agendar en mi calendario
            </a>
          </div>

          {/* 3. Lista de Regalos al Final */}
          <div className={`w-full max-w-2xl mx-auto text-center ${theme.card.replace(/\bp-\d+\b/g, 'p-8 md:p-12')} shadow-sm`}>
            <Gift className={`${theme.accent} mx-auto mb-6 opacity-30`} size={48} strokeWidth={1} />
            <h2 className={`${theme.title} text-2xl mb-4`}>{invitationConfig.event.giftTitle}</h2>
            <p className="text-sm opacity-70 mb-8 italic leading-relaxed px-4 text-pretty">
              "Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros, aquí les dejamos algunas sugerencias."
            </p>
            <a href={invitationConfig.event.giftListLink} target="_blank" rel="noreferrer" className={`inline-block w-full py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg ${theme.button}`}>
              🎁 Ver sugerencias de regalos
            </a>
          </div>
        </div>
        
        <Footer theme={theme} />
      </div>
      <MusicPlayer theme={theme} audioRef={audioRef} />
      <VisualEffects themeId={currentTheme} />
    </div>
  );
};

// --- VISTA INFO AUTOR (RESTAURADA COMPLETA) ---
const InfoAutorView = ({ onBack, onCatalog }) => (
  <motion.div key="info-autor" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen bg-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-stone-800">
      <button onClick={onBack} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest hover:text-stone-800 transition-colors">← Volver</button>
      
      <header className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Autor Collection</span>
        <h1 className="text-5xl font-serif italic mb-6">Elegancia Inmediata</h1>
        <p className="text-lg text-stone-500 leading-relaxed max-w-2xl">{businessConfig.rules.autor.descripcion}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {businessConfig.rules.autor.ventajas.map((v, i) => (
          <div key={i} className="border border-stone-100 p-8 rounded-3xl bg-[#F9F8F6]">
            <h4 className="font-bold text-stone-800 mb-2 uppercase text-[10px] tracking-widest">{v.title}</h4>
            <p className="text-sm text-stone-500 leading-snug">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
        <div className="space-y-8">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 border-b pb-2">Experiencia Interactiva</h3>
          <div className="grid grid-cols-1 gap-4 text-left">
            {businessConfig.rules.autor.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-stone-600">
                <div className="w-1.5 h-1.5 bg-stone-800 rounded-full" />
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-900 text-white p-12 rounded-[3rem] shadow-2xl">
          <div className="mb-10 text-center md:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">Inversión Final</h4>
            <p className="text-4xl font-serif italic text-stone-200">{businessConfig.plans.autor.price}</p>
            <p className="text-sm text-stone-400 mt-2">Entrega en {businessConfig.rules.autor.entrega}</p>
          </div>
          <button onClick={onCatalog} className="w-full bg-white text-stone-900 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-100 transition-all">Explorar Catálogo</button>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- COMPONENTES RESTANTES (LANDING, PERSONALIZADOS, CATALOGO, SOBRE) ---
const LandingView = ({ setViewMode }) => (
  <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#F9F8F6]">
    <div className="max-w-5xl w-full flex flex-col items-center text-center">
      <img src="/logosinfondo.png" alt="Logo" className="w-64 md:w-80 mb-6" />
      <p className="text-[10px] uppercase tracking-[0.6em] text-stone-400 mb-20 font-medium italic">The Art of Virtual Hosting</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch w-full max-w-4xl text-stone-800 text-left">
        <LandingCard title="Diseños de Autor" tag="Colección 01" desc="Curaduría de estilos listos para personalizar." onClick={() => setViewMode('info-autor')} />
        <LandingCard title="Personalizados" tag="Colección 02" desc="Diseños únicos desde lienzo en blanco." onClick={() => setViewMode('info-personalizado')} dark />
      </div>
    </div>
  </motion.div>
);

const LandingCard = ({ title, tag, desc, onClick, dark }) => (
  <div className="flex flex-col justify-between border-t border-stone-200 pt-8">
    <div>
      <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-4 block font-bold">{tag}</span>
      <h2 className="text-3xl font-serif italic mb-6">{title}</h2>
      <p className="text-stone-500 text-sm leading-relaxed mb-10">{desc}</p>
    </div>
    <button onClick={onClick} className={`text-[10px] uppercase tracking-[0.3em] font-bold py-5 rounded-full border border-stone-800 transition-all ${dark ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'}`}>
      Ver Detalles
    </button>
  </div>
);

const InfoPersonalizadoView = ({ onBack }) => (
  <motion.div key="info-personalizado" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen bg-white py-20 px-8">
    <div className="max-w-4xl mx-auto text-stone-800">
      <button onClick={onBack} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest hover:text-stone-800 transition-colors">← Volver</button>
      <header className="mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Bespoke Service</span>
        <h1 className="text-5xl md:text-6xl font-serif italic mb-6 text-stone-800">Diseños Personalizados</h1>
        <p className="text-xl text-stone-500 leading-relaxed max-w-2xl">{businessConfig.rules.personalizado.descripcion}</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          {businessConfig.rules.personalizado.pasos.map((p, i) => (
            <div key={i} className="flex gap-6">
              <span className="text-3xl font-serif italic text-stone-200">{i + 1}</span>
              <div><h4 className="font-bold text-lg mb-1">{p.title}</h4><p className="text-sm text-stone-500">{p.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="bg-[#F9F8F6] p-12 rounded-[4rem] h-fit sticky top-10 border border-stone-100 shadow-sm text-center">
          <p className="text-3xl font-serif italic mb-2 text-stone-800">{businessConfig.plans.personalizado.price}</p>
          <p className="text-stone-500 text-sm mb-10">Tiempo: {businessConfig.rules.personalizado.entrega}</p>
          <a href={businessConfig.contact.formUrl} target="_blank" rel="noreferrer" className="block w-full bg-stone-900 text-white py-5 rounded-full text-[10px] font-bold uppercase tracking-widest">Iniciar Proyecto</a>
        </div>
      </div>
    </div>
  </motion.div>
);

const CatalogView = ({ onBack, onSelect }) => (
  <motion.div key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen p-8 bg-[#F9F8F6]">
    <button onClick={onBack} className="mb-12 text-stone-400 text-[10px] font-bold uppercase tracking-widest hover:text-stone-800 transition-colors">← Volver</button>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
      {Object.keys(themeConfig).map((t) => (
        <div key={t} onClick={() => onSelect(t)} className="cursor-pointer bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all flex flex-col items-center group">
          <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-4xl shadow-inner group-hover:rotate-12 transition-transform ${themeConfig[t].container}`}> {THEME_ICONS[t] || '✨'} </div>
          <h3 className="text-lg font-serif italic capitalize text-stone-800">{t}</h3>
        </div>
      ))}
    </div>
  </motion.div>
);

const EnvelopeView = ({ theme, eventName, guestName, onStart, onBack }) => (
  <motion.div key="envelope" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 1.1, opacity: 0 }} className={`fixed inset-0 z-[500] flex items-center justify-center p-6 backdrop-blur-xl ${theme.container}`}>
    <div className={`p-12 text-center shadow-2xl flex flex-col items-center max-w-sm w-full bg-white rounded-[3rem] ${theme.card}`}>
      <span className="text-[9px] uppercase tracking-[0.5em] text-stone-300 mb-6 block">Invitación Digital</span>
      {guestName && <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-medium italic">Hola, {guestName}</p>}
      <h2 className={`${theme.title} text-3xl mb-12`}>{eventName}</h2>
      <button onClick={onStart} className={`${theme.button} w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl animate-pulse`}>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Abrir</span>
      </button>
      {!invitationConfig.isProduction && <button onClick={onBack} className="mt-8 text-stone-400 text-[9px] uppercase tracking-widest">Regresar al catálogo</button>}
    </div>
  </motion.div>
);

export default App;