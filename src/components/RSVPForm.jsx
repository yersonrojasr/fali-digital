import { useState } from 'react';
import { Send, CheckCircle, Gift, Calendar, Bell, ExternalLink } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

const RSVPForm = ({ theme }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { event } = invitationConfig;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section className="w-full max-w-lg px-6 py-12 flex flex-col gap-10 items-center">
      
      {/* BLOQUE 1: ASISTENCIA */}
      <div className={`${theme.card} w-full overflow-hidden shadow-xl`}>
        <div className="p-8 md:p-12"> {/* Padding corregido para Safari */}
          {submitted ? (
            <div className="text-center py-6 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
              <h3 className={`${theme.title} text-2xl italic`}>¡Confirmado!</h3>
              <p className="opacity-60 text-sm">Gracias por informarnos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className={`${theme.title} text-3xl text-center mb-4 italic`}>Confirmar Asistencia</h2>
              <div>
                <label className={`${theme.accent} text-[10px] uppercase font-black ml-1`}>Nombre del invitado</label>
                <input required type="text" placeholder="Tu nombre..."
                  className="w-full p-4 bg-white/50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-gray-200 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`${theme.accent} text-[10px] uppercase font-black ml-1`}>¿Asistirás?</label>
                  <select className="w-full p-4 bg-white/50 border border-gray-100 rounded-xl outline-none italic">
                    <option>Sí, asistiré</option>
                    <option>No podré ir</option>
                  </select>
                </div>
                <div>
                  <label className={`${theme.accent} text-[10px] uppercase font-black ml-1`}>Invitados</label>
                  <select className="w-full p-4 bg-white/50 border border-gray-100 rounded-xl outline-none italic">
                    <option>Solo yo</option>
                    <option>+1 Persona</option>
                    <option>+2 Personas</option>
                  </select>
                </div>
              </div>
              <button type="submit" disabled={loading} className={`w-full py-5 flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-all ${theme.button}`}>
                {loading ? "ENVIANDO..." : "ENVIAR CONFIRMACIÓN"} <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* BLOQUE 2: CALENDARIO (Dinámico) */}
      <div className={`${theme.card} w-full p-10 text-center shadow-lg transition-transform hover:scale-[1.01]`}>
        <Calendar className={`${theme.accent} mx-auto mb-4`} size={32} />
        <h3 className={`${theme.title} text-xl mb-2 italic`}>
          {theme.name === 'traveler' ? "Itinerario de Vuelo" : event.calendarTitle}
        </h3>
        <p className="text-sm opacity-60 mb-6 italic">No olvides guardar la fecha en tu agenda.</p>
        <a href={event.calendarLink} className={`inline-flex items-center gap-2 px-8 py-3 font-bold ${theme.button} text-sm`}>
          AGENDAR EVENTO <Bell size={16} />
        </a>
      </div>

      {/* BLOQUE 3: REGALOS (Dinámico) */}
      <div className={`${theme.card} w-full p-10 text-center shadow-lg transition-transform hover:scale-[1.01]`}>
        <Gift className={`${theme.accent} mx-auto mb-4`} size={32} />
        <h3 className={`${theme.title} text-xl mb-2 italic`}>
          {theme.name === 'traveler' ? "Sugerencia de Equipaje" : event.giftTitle}
        </h3>
        <p className="text-sm opacity-60 mb-6 italic">Tu presencia es nuestro mejor regalo. Este espacio es modificable, puedes elegir su uso de acuerdo a tus necesidades</p>
        <a href={event.giftListLink} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-8 py-3 font-bold ${theme.button} text-sm`}>
          VER LISTA <ExternalLink size={16} />
        </a>
      </div>

    </section>
  );
};

export default RSVPForm;