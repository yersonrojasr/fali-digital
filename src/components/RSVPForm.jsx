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

    const finalUrl = `https://wa.me/${theme.whatsappNumber || '50683162053'}?text=${baseMessage}${pasesMessage}${extraMessage}`;
    window.open(finalUrl, '_blank');
    setIsSent(true);
  };

  return (
    <section id="rsvp" className="w-full max-w-md mx-auto text-center py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={`p-8 rounded-[2.5rem] ${theme.card} shadow-xl border border-stone-100`}>
        <h2 className={`${theme.title} text-3xl mb-4`}>Confirmar Asistencia</h2>
        
        {showPasesLogic && (
          <p className="text-stone-500 text-sm italic mb-6">
            {guestName ? `${guestName}, hemos` : 'Hemos'} reservado <span className="font-bold text-stone-800">{pases} {pases > 1 ? 'lugares' : 'lugar'}</span> para ti.
          </p>
        )}

        {!isSent ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 ml-2">Nombre Completo</label>
              <input 
                required
                type="text" 
                value={formData.name} // Valor controlado
                className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-stone-200 transition-all"
                placeholder="Escribe tu nombre..."
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            {/* ... Resto del formulario igual al anterior ... */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 ml-2">¿Asistirás?</label>
                <select className="w-full p-4 rounded-2xl bg-stone-50 border-none" onChange={(e) => setFormData({...formData, confirm: e.target.value})}>
                  <option value="si">Sí, asistiré</option>
                  <option value="no">No podré ir</option>
                </select>
              </div>
              {showPasesLogic && (
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 ml-2">¿Cuántos van?</label>
                  <select className="w-full p-4 rounded-2xl bg-stone-50 border-none" onChange={(e) => setFormData({...formData, pasesConfirmados: e.target.value})}>
                    {[...Array(parseInt(pases))].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <button type="submit" className={`w-full py-5 rounded-full ${theme.button} text-white font-bold uppercase tracking-[0.2em] text-[10px] shadow-lg`}>
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