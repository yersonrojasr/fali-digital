import { MapPin, ExternalLink, Compass } from 'lucide-react'; // Importamos Compass
import { invitationConfig } from '../config/invitationConfig'; 

const Location = ({ theme }) => {
  const { event } = invitationConfig;

  return (
    <section className="w-full max-w-2xl px-6 py-12 flex flex-col items-center text-center relative">
      
      {/* LÓGICA DE ICONO DINÁMICO */}
      <div className={`mb-4 ${theme.accent}`}>
        {theme.name === 'traveler' ? (
          <Compass size={40} strokeWidth={1} className="animate-[spin_10s_linear_infinite]" />
        ) : (
          <MapPin size={32} />
        )}
      </div>

      <h2 className={`${theme.title} mb-4 text-2xl tracking-widest`}>
        {theme.name === 'traveler' ? "Coordenadas del Destino" : "Lugar del Evento"}
      </h2>
      
      <p className="text-lg font-bold mb-2 uppercase tracking-tight">
        {event.locationName}
      </p> 
      <p className={`mb-8 opacity-70 ${theme.name === 'traveler' ? 'font-mono text-sm' : ''}`}>
        {theme.name === 'traveler' ? "Check-in: 11:00 AM" : "11:00 AM"}
      </p>
      
      {/* MARCO DEL MAPA ESTILO TRAVELER */}
      <div className={`w-full overflow-hidden mb-8 shadow-2xl transition-all duration-500 
        ${theme.name === 'traveler' 
          ? 'rounded-none border-10 border-white ring-1 ring-gray-200' 
          : theme.name === 'pastel' ? 'rounded-[3rem] border-4 border-white' : 'rounded-xl'
        }`}
      >
        <iframe 
          src={event.locationUrl}
          width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy"
          className={theme.name === 'traveler' ? 'sepia-[0.2] contrast-[1.1]' : ''}
        />
      </div>
      
      <a 
        href={event.googleMapsLink}
        target="_blank" 
        rel="noopener noreferrer"
        className={`flex items-center gap-2 font-bold hover:scale-105 transition-transform ${theme.button} ${theme.name === 'traveler' ? 'px-8' : ''}`}
      >
        {theme.name === 'traveler' ? "VER RUTA DE VIAJE" : "ABRIR MAPA"} <ExternalLink size={16} />
      </a>
    </section>
  );
};

export default Location;