import React from 'react';
import { MessageCircle, Mail, Clock, Instagram } from 'lucide-react';

const Footer = ({ theme }) => {
  return (
    <footer className={`w-full py-16 px-6 text-center border-t border-stone-100/20 ${theme?.container || 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        {/* 4 Columnas de Información (Estilo Pantallazo) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-80 text-stone-500">
          <div className="flex flex-col items-center space-y-3">
            <MessageCircle size={18} className="opacity-50 text-stone-400" />
            <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">WhatsApp</h5>
            <a href="https://wa.me/50683162053" target="_blank" rel="noreferrer" className="text-[11px] hover:text-stone-800 transition-colors underline underline-offset-4 decoration-stone-100">+506 8316-2053</a>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Mail size={18} className="opacity-50 text-stone-400" />
            <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">Email</h5>
            <p className="text-[11px]">falidigitalcr@gmail.com</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Clock size={18} className="opacity-50 text-stone-400" />
            <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">Tiempos</h5>
            <p className="text-[11px]">Autor: 48h | Bespoke: 5-10 días</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <a href="https://instagram.com/falidigital" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-3 hover:opacity-60 transition-opacity">
              <Instagram size={18} className="opacity-50 text-stone-400" />
              <h5 className="text-[9px] font-bold uppercase tracking-[0.2em]">Instagram</h5>
              <p className="text-[11px]">@falidigital</p>
            </a>
          </div>
        </div>

        {/* Marca Final */}
        <div className="pt-8 border-t border-stone-100/10">
          <h4 className="font-serif text-[13px] tracking-[0.3em] uppercase opacity-40 mb-2 font-bold">Fali Digital</h4>
          <p className="text-[9px] uppercase tracking-widest opacity-30">Diseño exclusivo para este evento - © 2026</p>
          <p className="text-[9px] uppercase tracking-widest opacity-30 mt-1">Diseño por Fali Digital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;