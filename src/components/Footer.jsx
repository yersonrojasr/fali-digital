const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-2 flex flex-col items-center justify-center border-t border-black/5 bg-transparent mt-auto">
      <div className="flex flex-col items-center gap-0.5">
        <span className={`${theme?.title || ''} text-[10px] tracking-[0.4em] uppercase opacity-50`}>
          Fali Digital
        </span>
        
        <p className="text-[7px] uppercase tracking-widest opacity-30 text-center">
          Diseño exclusivo para este evento • © {currentYear}
        </p>

        <a 
          href="https://wa.me/TUNUMERO" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[7px] font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
        >
          Diseño por Fali Digital
        </a>
      </div>
    </footer>
  );
};

export default Footer;