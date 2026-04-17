import { invitationConfig } from '../config/invitationConfig'; 
import FadeIn from './Fadein';
import fotoPortada from '../assets/Olivia.PNG'; 
import { Send } from 'lucide-react'; 

const Hero = ({ theme }) => {
  const { event } = invitationConfig;

  // Lógica de estilos de imagen para cada tema
  let imageStyle = "rounded-2xl"; 

  if (theme.name === 'traveler') {
    imageStyle = "rounded-none border-[12px] border-white p-1 bg-white shadow-2xl -rotate-2 hover:rotate-0 transition-all duration-500";
  } 
  else if (theme.name === 'pastel') {
    imageStyle = "rounded-full border-8 border-white shadow-pink-100";
  } 
  else if (theme.name === 'garden') {
    // Forma orgánica de pétalo para el nuevo tema Garden
    imageStyle = "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500";
  } 
  else if (theme.name === 'minimalista' || theme.name === 'cleanModern') {
    imageStyle = "rounded-none grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair";
  }

  return (
    <header className="flex flex-col items-center pt-24 pb-10 px-6 text-center relative w-full overflow-visible">
      
      {/* Avioncito exclusivo del tema Traveler */}
      {theme.name === 'traveler' && (
        <div className="absolute top-16 right-4 z-50 transform rotate-[-15deg] transition-transform hover:rotate-0 duration-500">
          <Send size={70} className="text-[#8D6E63] opacity-40" strokeWidth={1} />
          <div className="absolute top-8 right-16 w-32 h-1 border-b-2 border-dashed border-[#8D6E63] opacity-20 transform rotate-10"></div>
        </div>
      )}

      {/* Contenedor de Imagen con FadeIn */}
      <div className="mb-12 relative z-10">
        <FadeIn delay={0.2}>
          <img src={fotoPortada} alt={event.babyName} 
            className={`w-64 h-64 object-cover shadow-2xl transition-all duration-500 ${imageStyle}`} />
        </FadeIn>
      </div>
      
      <FadeIn delay={0.4}>
        <h1 className={`${theme.title} text-5xl mb-4 leading-tight`}>{event.babyName}</h1>
        <h2 className={`${theme.accent} text-xl italic opacity-80 tracking-[0.2em] uppercase font-light`}>
          04 de Octubre, 2026
        </h2>
      </FadeIn>
    </header>
  );
};

export default Hero;