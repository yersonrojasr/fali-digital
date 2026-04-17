import { motion } from "framer-motion";

const VisualEffects = ({ themeId }) => {
  const id = themeId?.toString().toLowerCase().trim();
  if (!id) return null;

  // NUBES: Solo para Baby Shower
  if (id === 'babyshower') {
    const clouds = Array.from({ length: 10 });
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-45">
        {clouds.map((_, i) => {
          const startX = i < 4 ? `${Math.random() * 80}vw` : "-50vw"; 
          const duration = 15 + Math.random() * 10;

          return (
            <motion.div
              key={i}
              initial={{ x: startX, y: `${Math.random() * 90}vh`, opacity: 0 }}
              animate={{ 
                x: "110vw", 
                opacity: [0, 0.8, 0.8, 0],
                y: [null, `${(Math.random() * 100) - 5}vh`] 
              }}
              transition={{ duration, repeat: Infinity, ease: "linear", delay: i < 4 ? 0 : i * 2 }}
              className="absolute scale-[0.5] md:scale-90"
            >
              <div className="relative">
                 <div className="w-48 h-16 bg-white/90 rounded-full blur-[3px] shadow-sm" />
                 <div className="absolute -top-8 left-6 w-20 h-20 bg-white/90 rounded-full blur-[1px]" />
                 <div className="absolute -top-5 left-18 w-16 h-16 bg-white/95 rounded-full" />
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // PÉTALOS: Solo para Wedding
  if (id === 'wedding') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-45">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: i < 10 ? `${Math.random() * 100}vh` : -100, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ y: "110vh", rotate: 360, x: [0, 25, -25, 0], opacity: [0, 0.7, 0] }}
            transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
            className="absolute w-4 h-5 bg-[#FADADD]/70 shadow-sm"
            style={{ borderRadius: '100% 0% 100% 0%' }} 
          />
        ))}
      </div>
    );
  }

  // CONFETI: Solo para Birthday
  if (id === 'birthday') {
    const colors = ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#a78bfa'];
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-45">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: i < 15 ? `${Math.random() * 100}vh` : -50, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ y: "110vh", rotate: 720, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "circOut", delay: i * 0.1 }}
            className="absolute w-2 h-4 rounded-sm"
            style={{ backgroundColor: colors[i % colors.length] }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default VisualEffects;