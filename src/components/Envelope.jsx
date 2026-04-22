import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Envelope = ({ onOpen, title, names }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Esperamos a que la animación de la solapa termine para avisar al padre
    setTimeout(() => {
      onOpen(); 
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-stone-100"
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Contenedor del Sobre */}
          <div className="relative w-72 h-52 bg-white shadow-2xl flex items-center justify-center border border-gray-200">
            
            {/* Solapa Superior (Animada) */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white border-b border-gray-200"
              style={{ originY: 0, clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
              animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Sello de Lacre */}
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="z-110 w-12 h-12 bg-amber-600 rounded-full shadow-lg flex items-center justify-center text-white border-2 border-amber-700 cursor-pointer"
            >
              <span className="text-xs font-serif italic">Fali</span>
            </motion.button>

            {/* Texto en el sobre */}
            <div className="absolute bottom-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Has sido invitado
              </p>
              <h2 className="font-serif text-gray-700 mt-1">{names}</h2>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;