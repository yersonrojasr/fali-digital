import { MessageCircle, Clock, MapPin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="w-full py-8 px-4 border-t border-stone-100 mt-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* WhatsApp */}
        <div className="flex flex-col items-center md:items-start">
          <MessageCircle className="text-stone-400 mb-2" size={18} />
          <h4 className="text-[9px] font-bold uppercase tracking-widest text-stone-800 mb-1">WhatsApp</h4>
          <a 
            href="https://wa.me/50683162053" 
            target="_blank" 
            rel="noreferrer"
            className="text-[11px] text-stone-500 hover:text-stone-800 transition-colors"
          >
            +506 8316-2053
          </a>
        </div>

        {/* Correo */}
        <div className="flex flex-col items-center md:items-start">
          <Mail className="text-stone-400 mb-2" size={18} />
          <h4 className="text-[9px] font-bold uppercase tracking-widest text-stone-800 mb-1">Email</h4>
          <a 
            href="mailto:falidigitalcr@gmail.com" 
            className="text-[11px] text-stone-500 hover:text-stone-800 transition-colors"
          >
            falidigitalcr@gmail.com
          </a>
        </div>

        {/* Entregas */}
        <div className="flex flex-col items-center md:items-start">
          <Clock className="text-stone-400 mb-2" size={18} />
          <h4 className="text-[9px] font-bold uppercase tracking-widest text-stone-800 mb-1">Tiempos</h4>
          <p className="text-[11px] text-stone-500 italic">Autor: 48h | Bespoke: 5-10 días</p>
        </div>

        {/* Ubicación */}
        <div className="flex flex-col items-center md:items-start">
          <MapPin className="text-stone-400 mb-2" size={18} />
          <h4 className="text-[9px] font-bold uppercase tracking-widest text-stone-800 mb-1">Ubicación</h4>
          <p className="text-[11px] text-stone-500">Quepos, Costa Rica 🇨🇷</p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;