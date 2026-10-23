import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PhotoCarousel = ({ theme }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lista con las 12 fotos, sus textos, posición del enfoque y esquina del número
  const meses = [
    { mes: "Recién nacida", num: "0", foto: "/gallery/mes0.JPG", objectPos: "object-center", numPos: "-top-2 -right-2" },
    { mes: "1 Mes", num: "1", foto: "/gallery/mes1.JPG", objectPos: "object-top", numPos: "-top-2 -left-2" },
    { mes: "2 Meses", num: "2", foto: "/gallery/mes2.JPG", objectPos: "object-center", numPos: "-bottom-2 -right-2" },
    { mes: "3 Meses", num: "3", foto: "/gallery/mes3.JPG", objectPos: "object-center", numPos: "-top-2 -right-2" },
    { mes: "4 Meses", num: "4", foto: "/gallery/mes4.JPG", objectPos: "object-center", numPos: "-bottom-2 -left-2" },
    { mes: "5 Meses", num: "5", foto: "/gallery/mes5.JPG", objectPos: "object-top", numPos: "-top-2 -right-2" },
    { mes: "6 Meses", num: "6", foto: "/gallery/mes6.JPG", objectPos: "object-center", numPos: "-bottom-2 -right-2" },
    { mes: "7 Meses", num: "7", foto: "/gallery/mes7.JPG", objectPos: "object-center", numPos: "-top-2 -left-2" },
    { mes: "8 Meses", num: "8", foto: "/gallery/mes8.JPG", objectPos: "object-top", numPos: "-bottom-2 -right-2" },
    { mes: "9 Meses", num: "9", foto: "/gallery/mes9.JPG", objectPos: "object-top", numPos: "-top-2 -right-2" },
    { mes: "10 Meses", num: "10", foto: "/gallery/mes10.JPG", objectPos: "object-center", numPos: "-bottom-2 -left-2" },
    { mes: "11 Meses", num: "11", foto: "/gallery/mes11.JPG", objectPos: "object-center", numPos: "-top-2 -left-2" },
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center overflow-hidden bg-transparent">
      {/* TÍTULO PRINCIPAL */}
      <h2 className={`${theme?.title || 'font-serif'} mb-2 text-3xl md:text-5xl tracking-[0.15em] uppercase text-stone-800 text-center`}>
        Mira cuánto he crecido
      </h2>
      <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-10 text-center font-sans">
        
      </p>
      
      {/* CUADRÍCULA ESTILO POLAROID */}
      <div className="w-full max-w-md md:max-w-3xl px-4 grid grid-cols-3 gap-3 md:gap-6">
        {meses.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedImage(item)}
            className="relative cursor-pointer group"
          >
            {/* TARJETA TIPO POLAROID */}
            <div className="bg-white p-2 md:p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-stone-100 flex flex-col items-center">
              
              {/* CONTENEDOR DE LA IMAGEN */}
              <div className="aspect-square w-full bg-stone-100 rounded overflow-hidden relative">
                <img 
                  src={item.foto} 
                  alt={`Francesca - ${item.mes}`} 
                  /* 'object-top' se aplica individualmente solo a los meses 1, 5, 8 y 9 */
                  className={`w-full h-full object-cover ${item.objectPos} transition-transform duration-500 group-hover:scale-105`}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x300?text=Francesca";
                  }}
                />
              </div>

              {/* ETIQUETA EN LA PARTE INFERIOR POLAROID */}
              <div className="pt-2 pb-1 text-center">
                <p className="font-serif italic text-[11px] md:text-sm text-stone-700 tracking-wide">
                  {item.mes} 
                </p>
              </div>
            </div>

            {/* NÚMERO DORADO ELEGANTE, SEMITRANSPARENTE Y CON POSICIONES VARIADAS */}
            <span 
              className={`absolute ${item.numPos} font-serif italic text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent opacity-60 drop-shadow-sm pointer-events-none select-none`}
            >
              {item.num}
            </span>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX: VISTA PREVIA AMPLIADA */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[500] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl max-w-xs md:max-w-md w-full text-center flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 bg-stone-100">
                <img 
                  src={selectedImage.foto} 
                  alt={selectedImage.mes}
                  className={`w-full h-full object-cover ${selectedImage.objectPos}`}
                />
              </div>
              <h3 className="font-serif italic text-2xl text-stone-800">
                {selectedImage.mes}
              </h3>
              <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">
                Francesca
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoCarousel;