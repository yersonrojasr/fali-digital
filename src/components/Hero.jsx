import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ theme, config }) => {
  // En el nivel Senior, usamos la carpeta 'public' para imágenes dinámicas
  const imageSrc = config.images?.hero ? `/${config.images.hero}` : '/Julieta/Portada.JPG';

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-stone-900">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src={imageSrc} 
          className="w-full h-full object-cover" 
          alt="Portada" 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080?text=Fali+Digital'; }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[12px] md:text-[14px] uppercase tracking-[0.8em] mb-6 drop-shadow-md font-light"
        >
          Estás invitado
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`${theme?.title || 'font-serif'} text-6xl md:text-[100px] leading-none drop-shadow-lg`}
        >
          {config.event?.babyName}
        </motion.h1>
        <motion.div 
           initial={{ width: 0 }}
           animate={{ width: "80px" }}
           transition={{ delay: 1.2 }}
           className="h-px bg-white/60 mx-auto mt-8" 
        />
      </div>
    </section>
  );
};

export default Hero;