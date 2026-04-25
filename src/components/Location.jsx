import React, { useMemo } from 'react';
import { MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';

const Location = ({ theme, locations }) => {
  if (!locations || locations.length === 0) return null;

  // Limpieza de padding para que el mapa ocupe todo el ancho posible
  const cleanCard = useMemo(() => theme.card
    .replace(/\bp-\d+\b/g, 'p-0')
    .replace(/\bpx-\d+\b/g, 'px-0'), [theme.card]);

  return (
    <section className="w-full space-y-20">
      {locations.map((loc, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          
          <div className="text-center mb-8 px-4">
            <MapPin className={`${theme.accent} mx-auto mb-4 animate-bounce`} size={32} />
            <h2 className={`${theme.title} text-2xl md:text-3xl mb-2`}>{loc.name}</h2>
            
            <div className="flex items-center justify-center gap-2 mb-1 opacity-80">
              <Clock size={14} className={theme.accent} />
              <span className="text-[11px] font-bold uppercase tracking-widest">{loc.time}</span>
            </div>
            
            <p className="opacity-70 italic text-sm md:text-base">{loc.locationName}</p>
          </div>

          <div className={`w-full md:max-w-3xl overflow-hidden shadow-2xl ${cleanCard} border-4 border-white p-0 mx-auto`}>
            {/* Mapa Iframe */}
            <div className="relative w-full h-[280px] md:h-[400px] bg-stone-100">
              <iframe
                src={loc.url}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={`Mapa ${loc.name}`}
              />
            </div>

            {/* BOTONES DE ACCIÓN MEJORADOS */}
            <div className="flex flex-col sm:flex-row w-full p-4 gap-3 bg-white">
              <a 
                href={loc.googleMapsLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-stone-800 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-stone-700 transition-all active:scale-95 shadow-md"
              >
                <MapPin size={18} />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  Google Maps
                </span>
                <ExternalLink size={14} className="opacity-50" />
              </a>

              <a 
                href={loc.wazeLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-sky-500 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-sky-400 transition-all active:scale-95 shadow-md"
              >
                <Navigation size={18} />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  Abrir en Waze
                </span>
                <ExternalLink size={14} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Location;