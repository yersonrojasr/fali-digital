import { useState, useEffect, useMemo, useCallback } from 'react';
import { Compass } from 'lucide-react';

const Countdown = ({ targetDate, theme }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
      if (!updatedTime) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const formatValue = (val) => String(val).padStart(2, '0');

  // LIMPIEZA DE PADDING para el componente
  const cleanCard = useMemo(() => theme.card
    .replace(/\bp-\d+\b/g, 'p-4')
    .replace(/\bpx-\d+\b/g, 'px-2')
    .replace(/\bpy-\d+\b/g, 'py-4'), [theme.card]);

  const timerComponents = useMemo(() => {
    if (!timeLeft) return null;
    return Object.entries(timeLeft).map(([label, value]) => (
      <div key={label} className="flex flex-col items-center flex-1 min-w-0">
        {/* text-[8vw] para que escale con el ancho del móvil */}
        <span className={`${theme.title} text-[8vw] md:text-4xl font-bold leading-none`}>
          {formatValue(value)}
        </span>
        <span className={`${theme.accent} text-[2.5vw] md:text-[10px] uppercase tracking-tighter opacity-70 mt-1`}>
          {label}
        </span>
      </div>
    ));
  }, [timeLeft, theme.title, theme.accent]);

  return (
    <div className={`w-full max-w-xl mx-auto my-8 ${cleanCard} flex flex-col items-center shadow-sm`}>
      {theme.name === 'traveler' ? (
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-stone-200"></div>
          <Compass className="text-stone-400" size={24} strokeWidth={1} />
          <div className="h-px w-10 bg-stone-200"></div>
        </div>
      ) : (
        <h3 className={`${theme.title} text-xs md:text-sm mb-4 opacity-50 uppercase tracking-[0.2em]`}>Faltan:</h3>
      )}

      <div className="flex justify-between items-center w-full">
        {timerComponents || <span className={theme.title}>¡Llegó el día!</span>}
      </div>
    </div>
  );
};

export default Countdown;