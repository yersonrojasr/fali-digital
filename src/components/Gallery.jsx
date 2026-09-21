import { motion } from "framer-motion";
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
        {/* Tarjeta 1: Estilo de Traje */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="w-64 p-6 rounded-2xl shadow-xl border-4 border-white bg-white/50 backdrop-blur-sm text-center"
        >
          <h4 className="font-serif text-lg font-bold mb-2 opacity-90">Vestimenta</h4>
          <p className="text-sm opacity-80 leading-relaxed">
            Te sugerimos asistir con vestimenta <strong className="font-semibold">Semiformal o formal</strong>.
          </p>
        </motion.div>

        {/* Tarjeta 2: Nota o Reservas */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="w-64 p-6 rounded-2xl shadow-xl border-4 border-white bg-white/50 backdrop-blur-sm text-center"
        >
          <h4 className="font-serif text-lg font-bold mb-2 opacity-90">Detalle</h4>
          <p className="text-sm opacity-80 leading-relaxed italic">
            Agradecemos reservar el color celeste para <strong className="font-semibold">Danna</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;