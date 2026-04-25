import React, { useMemo } from 'react';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

const Location = ({ theme, locations }) => {
  if (!locations || locations.length === 0) return null;

  // Limpieza de padding para que el mapa ocupe todo el ancho posible
  const cleanCard = useMemo(() => theme.card
    .replace(/\bp-\d+\b/g, 'p-0')
    .replace(/\bpx-\d+\b/g, 'px-0'), [theme.card]);

  const borderColor = theme.divider?.split(' ')[1] || 'border-stone-100';

  return (
    <section className="w-full space-y-20">
      {locations.map((loc, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          
          <div className="text-center mb-8 px-4">
            <MapPin className={`${theme.accent} mx-auto mb-4`} size={32} />
            <h2 className={`${theme.title} text-2xl md:text-3xl mb-2`}>{loc.name}</h2>
            
            <div className="flex items-center justify-center gap-2 mb-1 opacity-80">
              <Clock size={14} className={theme.accent} />
              <span className="text-[11px] font-bold uppercase tracking-widest">{loc.time}</span>
            </div>
            
            <p className="opacity-70 italic text-sm md:text-base">{loc.locationName}</p>
          </div>

          <div className={`w-full md:max-w-3xl overflow-hidden shadow-2xl ${cleanCard} border-4 border-white p-0 mx-auto`}>
            <div className="relative w-full h-[280px] md:h-[400px]">
              <iframe
                src={loc.url}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={`Mapa ${loc.name}`}
              />
            </div>

            <div className={`flex divide-x divide-stone-100 border-t ${borderColor}`}>
              <a 
                href={loc.googleMapsLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-4 flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                Google Maps <ExternalLink size={12} />
              </a>
              <a 
                href={loc.wazeLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-4 flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                Waze <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Location;