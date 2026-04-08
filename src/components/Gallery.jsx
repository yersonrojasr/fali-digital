import { motion } from "framer-motion";
// 1. IMPORTAMOS LAS IMÁGENES DIRECTAMENTE (El "Seguro de Vida")
import imgPaleta from '../assets/Paleta.JPG'; 
import imgFlores from '../assets/flores-paleta.JPG'; 

const Gallery = ({ theme }) => {
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
          {/* 2. USAMOS LA VARIABLE IMPORTADA, NO LA RUTA DE TEXTO */}
          <img 
            src={imgPaleta} 
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
            src={imgFlores} 
            alt="Detalles" 
            className="w-48 h-auto rounded-2xl shadow-xl border-4 border-white" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;