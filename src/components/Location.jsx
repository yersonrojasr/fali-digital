import { MapPin, ExternalLink, Compass, Navigation } from 'lucide-react'; 
import { invitationConfig } from '../config/invitationConfig'; 

const Location = ({ theme }) => {
  // Ahora esperamos que 'locations' sea una lista en tu config
  const { locations } = invitationConfig;

  return (
    <section className="w-full max-w-2xl px-6 py-12 flex flex-col items-center text-center relative">
      
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
      
      {/* MAPEO DE UBICACIONES (Doble ubicación) */}
      <div className="w-full space-y-12">
        {locations.map((loc, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-lg font-bold mb-1 uppercase tracking-tight">
              {loc.name}
            </p> 
            <p className={`mb-6 opacity-70 ${theme.name === 'traveler' ? 'font-mono text-sm' : ''}`}>
              {loc.time}
            </p>
            
            <div className={`w-full overflow-hidden mb-6 shadow-2xl transition-all duration-500 
              ${theme.name === 'traveler' 
                ? 'rounded-none border-10 border-white ring-1 ring-gray-200' 
                : theme.name === 'pastel' ? 'rounded-[3rem] border-4 border-white' : 'rounded-xl'
              }`}
            >
              <iframe 
                src={loc.url}
                width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
                className={theme.name === 'traveler' ? 'sepia-[0.2] contrast-[1.1]' : ''}
              />
            </div>
            
            {/* BOTONES DE MAPAS Y WAZE */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center px-4">
              <a 
                href={loc.googleMapsLink}
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 font-bold hover:scale-105 transition-transform ${theme.button} text-sm`}
              >
                GOOGLE MAPS <ExternalLink size={16} />
              </a>

              {/* Botón de Waze con el color oficial */}
              <a 
                href={loc.wazeLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-bold hover:scale-105 transition-transform bg-[#33CCFF] text-white px-6 py-3 rounded-full text-sm shadow-lg"
              >
                WAZE <Navigation size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Location;