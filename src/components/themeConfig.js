// src/components/themeConfig.js

export const themeConfig = {
  safari: {
    name: 'safari',
    heroStyle: 'centered',
    container: "bg-[#f4f7f0] text-[#2d402e] font-safari",
    title: "font-bold text-[#3e5c33] uppercase tracking-widest",
    accent: "text-[#5e7153]",
    card: "bg-white border-b-4 border-[#8b9d77] rounded-xl shadow-sm p-6 sm:p-8",
    button: "bg-[#5e7153] hover:bg-[#4a5a42] text-white rounded-lg px-8 py-3 transition-all",
    icon: "text-[#8b9d77]",
    divider: "border-[#d1dcc7] w-full"
  },
  pastel: {
    name: 'pastel',
    heroStyle: 'centered',
    container: "bg-[#fff5f8] text-[#5b7a8c] font-baby",
    title: "font-cursive text-4xl text-[#f8bee2]",
    accent: "text-[#f8bee2]",
    card: "bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl shadow-pink-100/50 p-6 sm:p-8",
    button: "bg-[#f8bee2] hover:bg-[#f4a7d3] text-white rounded-full px-10 py-4 shadow-md transform hover:scale-105 transition-transform",
    icon: "text-[#f8bee2]",
    divider: "border-pink-50 w-full"
  },
  minimalista: {
    name: 'minimalista',
    heroStyle: 'editorial', // ACTIVADO: Estilo Lovent
    container: "bg-white text-gray-900 font-minimal-body",
    title: "font-minimal-title text-3xl tracking-[0.2em] uppercase text-black",
    accent: "text-[#af9358]",
    card: "bg-gray-50 border border-gray-100 rounded-none p-6 sm:p-10",
    button: "border border-black hover:bg-black hover:text-white text-black uppercase tracking-widest px-12 py-4 transition-colors",
    icon: "text-black",
    divider: "border-gray-200 w-full"
  },
  boho: { 
    name: 'boho',
    heroStyle: 'centered',
    container: 'bg-[#FAF7F2] text-[#704F38]',
    title: 'font-serif text-[#A65D47] tracking-normal italic capitalize',
    accent: 'text-[#D99066] font-medium tracking-[0.1em]',
    card: 'bg-[#F2E8DF]/50 rounded-[2.5rem] p-6 sm:p-10 border-2 border-[#D99066]/20 shadow-none',
    button: 'bg-[#A65D47] hover:bg-[#704F38] text-white px-10 py-3 rounded-full transition-all duration-500 font-serif shadow-lg',
    icon: "text-[#A65D47]",
    divider: 'border-[#D99066]/30 w-24 mx-auto'
  },
  deepNight: { 
    name: 'deepNight',
    heroStyle: 'editorial', // ACTIVADO: Estilo Gala Nocturna
    container: 'bg-[#0F172A] text-slate-300',
    title: 'font-serif text-white tracking-[0.2em] uppercase font-light',
    accent: 'text-blue-400 font-bold tracking-widest',
    card: 'bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]',
    button: 'bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]',
    icon: "text-blue-400",
    divider: 'border-slate-700 w-full'
  },
  royalGold: { 
    name: 'royalGold',
    heroStyle: 'editorial', // ACTIVADO: Estilo Lujoso
    container: 'bg-white text-stone-800',
    title: 'font-serif text-[#B8860B] tracking-tight font-black leading-tight',
    accent: 'text-stone-400 uppercase text-[10px] tracking-[0.4em]',
    card: 'bg-transparent border-y-2 border-[#B8860B]/10 py-8 sm:py-12 w-full text-center px-4',
    button: 'border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-12 py-3 transition-all duration-700 font-bold uppercase text-xs',
    icon: "text-[#B8860B]",
    divider: 'border-[#B8860B] w-16 mx-auto'
  },
  cleanModern: { 
    name: 'cleanModern',
    heroStyle: 'editorial',
    container: 'bg-white text-black',
    title: 'font-sans font-black text-4xl sm:text-5xl -tracking-[0.05em]',
    accent: 'text-gray-400 font-mono text-sm',
    card: 'bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-none',
    button: 'bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-2xl transition-all font-bold',
    icon: "text-black",
    divider: 'border-gray-200 h-px w-full'
  },
  ocean: { 
    name: 'ocean',
    heroStyle: 'centered',
    container: 'bg-[#F0F9FF] text-[#075985]',
    title: 'font-serif italic text-[#0369A1] tracking-wider',
    accent: 'text-[#38BDF8] font-bold',
    card: 'bg-white/60 backdrop-blur-md rounded-[2.5rem_1rem_2.5rem_1rem] p-6 sm:p-8 border-b-8 border-[#0EA5E9] shadow-xl',
    button: 'bg-[#0EA5E9] hover:bg-[#0369A1] text-white px-8 py-3 rounded-full transition-all shadow-lg font-bold uppercase text-sm',
    icon: "text-[#0EA5E9]",
    divider: 'border-[#BAE6FD] w-32 h-1 bg-[#BAE6FD] rounded-full mx-auto'
  },
  vintage: { 
    name: 'vintage',
    heroStyle: 'centered',
    container: 'bg-[#F5F2ED] text-[#43413E]',
    title: 'font-serif uppercase tracking-[0.2em] border-b border-[#43413E] pb-2 mb-6',
    accent: 'text-[#8C7E6C] font-mono text-xs uppercase',
    card: 'bg-transparent border-2 border-[#43413E] p-6 sm:p-8 m-1 shadow-[6px_6px_0px_0px_rgba(67,65,62,0.1)]',
    button: 'bg-[#43413E] hover:bg-transparent hover:text-[#43413E] text-[#F5F2ED] border border-[#43413E] px-6 py-2 transition-all duration-300 font-serif italic',
    icon: "text-[#43413E]",
    divider: 'border-t-4 border-double border-[#43413E] w-full'
  },
  lavender: { 
    name: 'lavender',
    heroStyle: 'centered',
    container: 'bg-[#FDFCFE] text-[#5B4D82]',
    title: 'font-serif text-[#7C6A9F] tracking-tight font-light italic',
    accent: 'text-[#A78BFA] uppercase tracking-widest text-[11px]',
    card: 'bg-[#F5F3FF] rounded-2xl p-6 sm:p-8 border-r-4 border-b-4 border-[#DDD6FE] shadow-sm',
    button: 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-3 rounded-2xl transition-all shadow-md',
    icon: "text-[#8B5CF6]",
    divider: 'border-[#DDD6FE] w-1/3 mx-auto'
  },
  traveler: { 
    name: 'traveler',
    heroStyle: 'editorial', // ACTIVADO: Estilo Aventura/Mapa
    container: 'bg-[#F4F1E8] text-[#43413E]', 
    title: 'font-serif uppercase tracking-[0.25em] text-[#5D4037] font-bold border-b-2 border-[#D7CCC8] pb-2',
    accent: 'text-[#8D6E63] font-mono text-[10px] uppercase tracking-widest',
    card: 'bg-white border-dashed border-2 border-[#D7CCC8] rounded-none p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(141,110,99,0.1)]',
    button: 'bg-[#5D4037] hover:bg-[#8D6E63] text-white px-8 py-3 rounded-none transition-all duration-500 uppercase font-mono text-xs tracking-tighter shadow-md',
    icon: "text-[#5D4037]",
    divider: 'border-t-2 border-dashed border-[#A1887F] w-48 mx-auto'
  },
  garden: {
    name: 'garden',
    heroStyle: 'centered',
    container: 'bg-[#F0F4F1] text-[#3E4F43]',
    title: 'font-serif text-[#2D5A27] tracking-tight italic font-medium',
    accent: 'text-[#8BA889] uppercase tracking-[0.2em] text-[10px] font-bold',
    card: 'bg-white/70 backdrop-blur-md rounded-[2.5rem_0.5rem] p-6 sm:p-10 border-l-4 border-[#2D5A27] shadow-xl',
    button: 'bg-[#2D5A27] hover:bg-[#1E3A1A] text-white px-8 py-3 rounded-full transition-all shadow-lg font-serif italic',
    icon: "text-[#2D5A27]",
    divider: 'border-[#2D5A27]/20 w-32 mx-auto'
  },
  wedding: {
    name: 'wedding', // CORREGIDO: Antes faltaba
    heroStyle: 'editorial', // ACTIVADO: Estilo Boda Real
    container: 'bg-[#FCF9F5] text-[#4A4238]',
    title: 'font-serif text-[#4A4238] tracking-[0.2em] uppercase text-xl md:text-2xl',
    accent: 'text-[#C5A27D] font-semibold tracking-wider',
    card: 'bg-white/80 backdrop-blur-md border border-[#E5DACE] rounded-2xl p-6 sm:p-8 shadow-sm',
    button: 'bg-[#4A4238] text-white hover:bg-[#5D5347] px-8 py-3 rounded-lg transition-all',
    icon: "text-[#C5A27D]",
    divider: 'border-[#E5DACE] w-1/3 mx-auto'
  },
  birthday: {
    name: 'birthday', // CORREGIDO: Antes faltaba
    heroStyle: 'centered',
    container: 'bg-[#F8FAFC] text-slate-800', 
    title: 'font-sans font-bold text-slate-800 uppercase tracking-widest text-2xl', 
    accent: 'text-yellow-600 font-bold',
    card: 'bg-white border-2 border-yellow-100 rounded-[1.5rem] p-6 sm:p-8 shadow-md',
    button: 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 rounded-xl px-8 py-3 font-bold transition-all shadow-sm',
    icon: "text-yellow-500",
    divider: 'border-yellow-200 w-1/2 mx-auto'
  },
  babyshower: {
    name: 'babyshower', // CORREGIDO: Antes faltaba
    heroStyle: 'centered',
    container: 'bg-[#F0F7FF] text-[#5D8EB5]',
    title: 'font-medium text-[#5D8EB5] tracking-wide text-2xl md:text-3xl',
    accent: 'text-[#A5CAD2] font-bold tracking-wide',
    card: 'bg-white/90 backdrop-blur-sm border border-[#D1E9FF] rounded-2xl p-6 sm:p-8 shadow-sm',
    button: 'bg-[#A5CAD2] text-white hover:bg-[#B8DCE3] px-8 py-3 rounded-xl transition-all font-medium',
    icon: "text-[#A5CAD2]",
    divider: 'border-[#D1E9FF] w-1/3 mx-auto'
  }
};