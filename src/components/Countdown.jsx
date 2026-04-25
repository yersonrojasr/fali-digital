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

  const timerComponents = useMemo(() => {
    if (!timeLeft) return null;

    return Object.entries(timeLeft).map(([label, value]) => (
      <div key={label} className="flex flex-col items-center mx-1 md:mx-2 min-w-[55px] md:min-w-[70px]">
        <span className={`${theme.title} text-2xl md:text-4xl font-bold`}>{formatValue(value)}</span>
        <span className={`${theme.accent} text-[9px] md:text-[10px] uppercase tracking-tighter opacity-70`}>{label}</span>
      </div>
    ));
  }, [timeLeft, theme.title, theme.accent]);

  return (
    <div className={`w-[92%] max-w-xl mx-auto my-12 p-6 md:p-8 ${theme.card} flex flex-col items-center shadow-sm overflow-hidden`}>
      {theme.name === 'traveler' ? (
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 md:w-16 bg-stone-200"></div>
          <Compass className="text-stone-400" size={28} strokeWidth={1} />
          <div className="h-px w-12 md:w-16 bg-stone-200"></div>
        </div>
      ) : (
        <h3 className={`${theme.title} text-lg md:text-xl mb-6 opacity-70 uppercase tracking-widest`}>Faltan:</h3>
      )}

      <div className="flex justify-center items-center w-full">
        {timerComponents || <span className={theme.title}>¡Llegó el día!</span>}
      </div>
    </div>
  );
};

export default Countdown;