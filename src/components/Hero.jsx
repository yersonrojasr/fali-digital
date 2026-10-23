import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ theme, config }) => {
  // Ruta de portada
  const imageSrc = config.images?.hero ? `/${config.images.hero}` : '/pollito.JPG';
  
  // Ruta de foto de perfil de la bebé (se define en config.images.profile o usa una por defecto)
  const profileSrc = config.images?.profile ? `/${config.images.profile}` : '/francesca-perfil.JPG';

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-stone-900">
      {/* IMAGEN DE PORTADA (FONDO COMPLETO) */}
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </motion.div>

      {/* CONTENIDO PRINCIPAL Y FOTO DE PERFIL */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
        
        {/* FOTO DE PERFIL TIPO FACEBOOK (MÁS GRANDE) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="relative mb-6"
        >
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-stone-800">
            <img 
              src={profileSrc} 
              className="w-full h-full object-cover" 
              alt="Francesca" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=Francesca'; }}
            />
          </div>
        </motion.div>

        {/* SUBTÍTULO */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-[12px] md:text-[14px] uppercase tracking-[0.8em] mb-4 drop-shadow-md font-light"
        >
          ¡Ven a Celebrar conmigo!
        </motion.p>

        {/* NOMBRE DE LA BEBÉ */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={`${theme?.title || 'font-serif'} text-5xl md:text-[90px] leading-none drop-shadow-lg`}
        >
          This little chick is turning <span className="text-amber-100">ONE</span>
        </motion.h1>

        {/* LÍNEA DECORATIVA */}
        <motion.div 
           initial={{ width: 0 }}
           animate={{ width: "80px" }}
           transition={{ delay: 1.2 }}
           className="h-px bg-white/60 mx-auto mt-6" 
        />
      </div>
    </section>
  );
};

export default Hero;