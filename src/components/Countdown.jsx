import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react'; // Importamos la Brújula

const Countdown = ({ targetDate, theme }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) return null;
    return (
      <div key={interval} className="flex flex-col items-center mx-2">
        <span className={`${theme.title} text-4xl font-bold`}>{timeLeft[interval]}</span>
        <span className={`${theme.accent} text-xs uppercase tracking-widest`}>{interval}</span>
      </div>
    );
  });

  return (
    <div className={`w-full max-w-xl mx-auto my-12 p-6 ${theme.card} flex flex-col items-center`}>
      
      {/* --- DETALLE EXCLUSIVO TRAVELER: BRÚJULA --- */}
      {theme.name === 'traveler' ? (
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-20 bg-[#D7CCC8]"></div>
          <Compass className="text-[#8D6E63]" size={32} strokeWidth={1.5} />
          <div className="h-px w-20 bg-[#D7CCC8]"></div>
        </div>
      ) : (
        <h3 className={`${theme.title} text-2xl mb-6`}>Faltan:</h3>
      )}

      <div className="flex justify-center items-center">
        {timerComponents.length ? timerComponents : <span>¡Llegó el día!</span>}
      </div>
    </div>
  );
};

export default Countdown;