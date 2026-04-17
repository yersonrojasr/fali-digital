import { useState } from 'react';
import { Send, CheckCircle, Gift, Calendar, Bell, ExternalLink } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

const RSVPForm = ({ theme }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Sí, asistiré',
    guests: 'Solo yo'
  });

  const { event } = invitationConfig;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí se conectará la lógica de envío (Google Sheets / EmailJS)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error("Error al confirmar:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = "w-full p-4 bg-white/40 backdrop-blur-sm border border-black/5 rounded-2xl outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:opacity-30 text-sm";

  return (
    <section className="w-full max-w-lg px-6 py-12 flex flex-col gap-8 items-center">
      
      {/* BLOQUE 1: ASISTENCIA */}
      <div className={`${theme.card} w-full shadow-2xl rounded-[2.5rem] overflow-hidden`}>
        <div className="p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-700 flex flex-col items-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-green-500" size={40} strokeWidth={1.5} />
              </div>
              <h3 className={`${theme.title} text-3xl italic mb-3`}>¡Asistencia Confirmada!</h3>
              <p className="opacity-60 text-[10px] tracking-[0.2em] uppercase text-center">
                Tu respuesta ha sido registrada. <br /> ¡Nos vemos pronto!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className={`${theme.title} text-3xl italic`}>Confirmar Asistencia</h2>
                <div className="w-12 h-px bg-black/10 mx-auto mt-4"></div>
              </div>

              <div className="text-left">
                <label className="text-[9px] uppercase tracking-[0.2em] opacity-50 ml-2 mb-2 block font-bold">Nombre Completo</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Escribe tu nombre..." 
                  className={inputStyles}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <label className="text-[9px] uppercase tracking-[0.2em] opacity-50 ml-2 mb-2 block font-bold">¿Asistirás?</label>
                  <select 
                    className={inputStyles}
                    value={formData.attendance}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                  >
                    <option>Sí, asistiré</option>
                    <option>No podré ir</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] uppercase tracking-[0.2em] opacity-50 ml-2 mb-2 block font-bold">Invitados</label>
                  <select 
                    className={inputStyles}
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    <option>Solo yo</option>
                    <option>+1 Acompañante</option>
                    <option>+2 Acompañantes</option>
                  </select>
                </div>
              </div>

              <button type="submit" disabled={loading} 
                className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold tracking-[0.2em] shadow-xl active:scale-95 transition-all uppercase text-xs ${theme.button}`}
              >
                {loading ? "Registrando..." : "Confirmar Ahora"} 
                {!loading && <Send size={16} />}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* BLOQUE 2: CALENDARIO */}
      <div className={`${theme.card} w-full p-8 rounded-[2.5rem] text-center shadow-lg group`}>
        <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-white/50 shadow-inner`}>
          <Calendar className={theme.accent} size={24} strokeWidth={1.5} />
        </div>
        <h3 className={`${theme.title} text-xl mb-1 italic`}>
          {theme.name === 'traveler' ? "Itinerario de Vuelo" : event.calendarTitle}
        </h3>
        <p className="text-[10px] uppercase tracking-widest opacity-40 mb-6 px-4">Guarda la fecha especial en tu calendario</p>
        <a href={event.calendarLink} className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all hover:shadow-lg ${theme.button}`}>
          Agendar Evento <Bell size={14} />
        </a>
      </div>

      {/* BLOQUE 3: REGALOS */}
      <div className={`${theme.card} w-full p-8 rounded-[2.5rem] text-center shadow-lg group`}>
        <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-white/50 shadow-inner`}>
          <Gift className={theme.accent} size={24} strokeWidth={1.5} />
        </div>
        <h3 className={`${theme.title} text-xl mb-1 italic`}>
          {theme.name === 'traveler' ? "Sugerencia de Equipaje" : event.giftTitle}
        </h3>
        <p className="text-[10px] leading-relaxed uppercase tracking-widest opacity-40 mb-6 px-4">
          Tu presencia es nuestro mejor regalo
        </p>
        <a href={event.giftListLink} target="_blank" rel="noreferrer" 
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all hover:shadow-lg ${theme.button}`}>
          Ver Detalles <ExternalLink size={14} />
        </a>
      </div>

    </section>
  );
};

export default RSVPForm;