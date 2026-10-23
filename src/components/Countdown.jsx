import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const Countdown = ({ targetDate, theme }) => {
  // Función para calcular el tiempo restante
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { días: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Efecto para hacer que el contador sea DINÁMICO
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* --- DETALLE TRAVELER: BRÚJULA ANIMADA --- */}
      {theme?.name === 'traveler' && (
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4"
        >
          <Compass className={theme?.accent} size={40} strokeWidth={1} />
        </motion.div>
      )}

      {/* --- TEXTO CON LA FECHA DEL EVENTO EN TONO PASTEL DEL TEMA --- */}
      <div className="text-center mb-6">
        <p className={`${theme?.title || 'font-serif'} ${theme?.accent || 'text-rose-400'} text-2xl md:text-3xl font-bold tracking-wide`}>
          Domingo, 15 de Noviembre
        </p>
      </div>

      {/* --- CONTADOR --- */}
      <div className="grid grid-cols-4 gap-4 md:gap-8 p-6 md:p-10 rounded-[2rem] bg-white shadow-sm border border-stone-50 w-full max-w-2xl">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <span className={`${theme?.title || 'font-serif'} ${theme?.accent || 'text-rose-400'} text-3xl md:text-5xl font-bold`}>
              {String(value).padStart(2, '0')}
            </span>
            <span className={`${theme?.accent || 'text-rose-300'} text-[10px] md:text-[12px] uppercase tracking-widest font-bold mt-1 opacity-70`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;