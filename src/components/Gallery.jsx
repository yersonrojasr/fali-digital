import { motion } from "framer-motion";

// Definimos las 5 rutas absolutas desde la carpeta pública de Julieta
const img1 = "/Julieta/IMG_4560 - michelle rojas.jpeg"; 
const img2 = "/Julieta/IMG_4561 - michelle rojas.jpeg"; 
const img3 = "/Julieta/IMG_4562 - michelle rojas.jpeg"; 
const img4 = "/Julieta/IMG_4565 - michelle rojas.jpeg"; 
const img5 = "/Julieta/IMG_4566 - michelle rojas.jpeg"; 

const Gallery = ({ theme, config }) => {
  return (
    <section className="py-12 px-4 overflow-hidden flex flex-col items-center w-full">
      
      {/* --- ENCABEZADO Y TIPO DE VESTIMENTA --- */}
      <div className="text-center mb-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${theme?.title || ''} text-3xl mb-2`}
        >
          Código de Vestimenta
        </motion.h3>
        
        {/* Texto del tipo de vestimenta inyectado desde la configuración */}
        {config?.event?.dressCodeType && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${theme?.accent || ''} text-sm uppercase tracking-[0.2em] opacity-70 font-semibold`}
          >
            Tipo: {config.event.dressCodeType}
          </motion.p>
        )}
      </div>

      {/* --- CARRUSEL/CUADRÍCULA DE FOTOS --- */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto mb-16">
        
        {/* Foto 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={img1} alt="Inspiración 1" className="w-40 h-auto rounded-2xl shadow-xl border-4 border-white" />
        </motion.div>

        {/* Foto 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={img2} alt="Inspiración 2" className="w-40 h-auto rounded-2xl shadow-xl border-4 border-white" />
        </motion.div>

        {/* Foto 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={img3} alt="Inspiración 3" className="w-40 h-auto rounded-2xl shadow-xl border-4 border-white" />
        </motion.div>

        {/* Foto 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={img4} alt="Inspiración 4" className="w-40 h-auto rounded-2xl shadow-xl border-4 border-white" />
        </motion.div>

        {/* Foto 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={img5} alt="Inspiración 5" className="w-40 h-auto rounded-2xl shadow-xl border-4 border-white" />
        </motion.div>
      </div>

      {/* --- CUADRO EXTRA: POLÍTICA DE NIÑOS (ADAPTADO AL TEMA) --- */}
      {config?.event?.childPolicy && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`w-full max-w-xl text-center p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-stone-100/20 shadow-sm flex flex-col items-center justify-center gap-4 ${theme?.card || 'bg-white text-stone-800'}`}
        >
          {/* Destello estético que usa el color de acento del tema */}
          <span className={`${theme?.accent || 'text-stone-400'} text-2xl opacity-70`} role="img" aria-label="Nota aclaratoria">
            ✨
          </span>
          
          {/* El texto hereda el flujo del tema, con un text-base limpio */}
          <p className="text-sm md:text-base tracking-wide leading-relaxed font-light px-2 opacity-90">
            {config.event.childPolicy}
          </p>
        </motion.div>
      )}

    </section>
  );
};

export default Gallery;