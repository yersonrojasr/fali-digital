import { motion } from "framer-motion";
// 1. IMPORTAMOS EL CEREBRO
import { invitationConfig } from '../config/invitationConfig'; 

const Gallery = ({ theme }) => {
  // 2. EXTRAEMOS LAS IMÁGENES
  const { images } = invitationConfig;

  return (
    <section className="py-12 px-4 overflow-hidden">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${theme.title} text-center text-3xl mb-10`}
      >
        Código de Vestimenta
      </motion.h3>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          {/* 3. USAMOS LA VARIABLE DE LA CONFIGURACIÓN */}
          <img 
            src={`/src/assets/${images.paleta}`} 
            alt="Paleta de Colores" 
            className="w-48 h-auto rounded-2xl shadow-xl border-4 border-white" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
        >
          <img 
            src={`/src/assets/${images.flores}`} 
            alt="Detalles" 
            className="w-48 h-auto rounded-2xl shadow-xl border-4 border-white" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;