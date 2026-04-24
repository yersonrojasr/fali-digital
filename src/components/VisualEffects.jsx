import React, { useMemo } from "react";
import { motion } from "framer-motion";

const VisualEffects = React.memo(({ themeId }) => {
  const id = themeId?.toString().toLowerCase().trim();

  // Generamos la data de los efectos una sola vez por tema
  const effectData = useMemo(() => {
    if (!id) return null;
    
    const cloudItems = Array.from({ length: 10 });
    const petalItems = Array.from({ length: 20 });
    const confettiItems = Array.from({ length: 30 });
    const confettiColors = ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#a78bfa'];

    return { cloudItems, petalItems, confettiItems, confettiColors };
  }, [id]);

  if (!id || !effectData) return null;

  // RENDER: NUBES (Babyshower)
  if (id === 'babyshower') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        {effectData.cloudItems.map((_, i) => (
          <Cloud key={i} index={i} />
        ))}
      </div>
    );
  }

  // RENDER: PÉTALOS (Wedding)
  if (id === 'wedding') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        {effectData.petalItems.map((_, i) => (
          <Petal key={i} index={i} />
        ))}
      </div>
    );
  }

  // RENDER: CONFETI (Birthday)
  if (id === 'birthday') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        {effectData.confettiItems.map((_, i) => (
          <Confetti key={i} index={i} colors={effectData.confettiColors} />
        ))}
      </div>
    );
  }

  return null;
});

// --- SUB-COMPONENTES PARA MEJORAR LECTURA Y RENDIMIENTO ---

const Cloud = ({ index }) => {
  const startX = index < 4 ? `${Math.random() * 80}vw` : "-50vw";
  const duration = 20 + Math.random() * 15;
  
  return (
    <motion.div
      initial={{ x: startX, y: `${Math.random() * 90}vh`, opacity: 0 }}
      animate={{ 
        x: "110vw", 
        opacity: [0, 0.8, 0.8, 0],
        y: [null, `${(Math.random() * 100) - 5}vh`] 
      }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay: index < 4 ? 0 : index * 2 }}
      className="absolute scale-[0.5] md:scale-90"
    >
      <div className="relative w-48 h-16 bg-white/90 rounded-full blur-[3px] shadow-sm">
        <div className="absolute -top-8 left-6 w-20 h-20 bg-white/90 rounded-full" />
        <div className="absolute -top-5 left-18 w-16 h-16 bg-white/95 rounded-full" />
      </div>
    </motion.div>
  );
};

const Petal = ({ index }) => (
  <motion.div
    initial={{ y: index < 10 ? `${Math.random() * 100}vh` : -100, left: `${Math.random() * 100}%`, opacity: 0 }}
    animate={{ y: "110vh", rotate: 360, x: [0, 25, -25, 0], opacity: [0, 0.7, 0] }}
    transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
    className="absolute w-4 h-5 bg-[#FADADD]/60 shadow-sm rounded-full"
    style={{ borderRadius: '100% 0% 100% 0%' }}
  />
);

const Confetti = ({ index, colors }) => (
  <motion.div
    initial={{ y: index < 15 ? `${Math.random() * 100}vh` : -50, left: `${Math.random() * 100}%`, opacity: 0 }}
    animate={{ y: "110vh", rotate: 720, opacity: [0, 1, 1, 0] }}
    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "circOut", delay: index * 0.1 }}
    className="absolute w-2 h-4 rounded-sm"
    style={{ backgroundColor: colors[index % colors.length] }}
  />
);

VisualEffects.displayName = "VisualEffects";
export default VisualEffects;