import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RSVPForm = ({ theme, pases, guestName }) => {
  const [formData, setFormData] = useState({
    name: '',
    confirm: 'si',
    pasesConfirmados: pases || 1,
    message: ''
  });

  // Efecto para rellenar el nombre si viene de la URL
  useEffect(() => {
    if (guestName) {
      setFormData(prev => ({ ...prev, name: guestName }));
    }
  }, [guestName]);

  const [isSent, setIsSent] = useState(false);
  const showPasesLogic = pases !== null && pases !== undefined;

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseMessage = `¡Hola! Confirmo mi asistencia.%0A*Nombre:* ${formData.name}%0A*¿Asiste?:* ${formData.confirm === 'si' ? '✅ Sí' : '❌ No'}`;
    const pasesMessage = showPasesLogic ? `%0A*Lugares a usar:* ${formData.pasesConfirmados} de ${pases}` : '';
    const extraMessage = formData.message ? `%0A*Nota:* ${formData.message}` : '';

    const finalUrl = `https://wa.me/${theme.whatsappNumber || '50687087484'}?text=${baseMessage}${pasesMessage}${extraMessage}`;
    window.open(finalUrl, '_blank');
    setIsSent(true);
  };

  return (
    <section id="rsvp" className="w-full max-w-xl mx-auto text-center py-12 px-4 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`p-6 sm:p-10 rounded-[2.5rem] ${theme.card} shadow-xl border border-stone-100`}>
        <h2 className={`${theme.title} text-3xl sm:text-4xl mb-4`}>Confirmar Asistencia</h2>
        
        {showPasesLogic && (
          <p className="text-stone-500 text-sm italic mb-6">
            {guestName ? `${guestName}, hemos` : 'Hemos'} reservado <span className="font-bold text-stone-800">{pases} {pases > 1 ? 'lugares' : 'lugar'}</span> para ti.
          </p>
        )}

        {/* Tarjeta informativa de la reserva */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-stone-50/80 border border-stone-200/60 text-stone-600 text-xs sm:text-sm leading-relaxed text-center">
          <p className="mb-3">
            Para ayudarnos a organizar los espacios y detalles del evento de la mejor manera, te solicitamos confirmar tu asistencia mediante un aporte de <span className="font-semibold text-stone-800">₡3,000 por persona</span>.
          </p>
          <div className="pt-3 border-t border-stone-200/60 text-xs font-medium text-stone-700 space-y-1">
            <p>📲 <span className="font-bold">SINPE Móvil:</span> 8708-7484 (Mamá) / 8316-2053 (Papá)</p>
            <p className="text-stone-400 text-[11px]">Concepto: Reserva - {guestName || 'Tu Nombre'}</p>
          </div>
        </div>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 ml-2">Nombre Completo</label>
              <input 
                required
                type="text" 
                value={formData.name} // Valor controlado
                className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-stone-200 transition-all text-sm"
                placeholder="Escribe tu nombre..."
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 ml-2">¿Asistirás?</label>
                <select className="w-full p-4 rounded-2xl bg-stone-50 border-none text-sm" onChange={(e) => setFormData({...formData, confirm: e.target.value})}>
                  <option value="si">Sí, asistiré</option>
                  <option value="no">No podré ir</option>
                </select>
              </div>
              {showPasesLogic && (
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 ml-2">¿Cuántos van?</label>
                  <select className="w-full p-4 rounded-2xl bg-stone-50 border-none text-sm" onChange={(e) => setFormData({...formData, pasesConfirmados: e.target.value})}>
                    {[...Array(parseInt(pases))].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <button type="submit" className={`w-full py-5 rounded-full ${theme.button} text-white font-bold uppercase tracking-[0.2em] text-[10px] shadow-lg hover:opacity-95 transition-opacity`}>
              Enviar por WhatsApp
            </button>
          </form>
        ) : (
          <div className="py-10">
            <h3 className="font-serif italic text-xl mb-2">¡Gracias por confirmar!</h3>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default RSVPForm;