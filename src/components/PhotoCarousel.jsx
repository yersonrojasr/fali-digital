import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PhotoCarousel = ({ theme }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fotos = [
    "/gallery/foto1.jpg",
    "/gallery/foto2.jpg",
    "/gallery/foto3.jpg", 
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center overflow-hidden bg-transparent">
      <h2 className={`${theme?.title || ''} mb-10 text-3xl tracking-[0.2em] uppercase opacity-80 text-center`}>
        Nuestra Galería
      </h2>
      
      <div className="w-full max-w-lg md:max-w-4xl px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={fotos.length > 1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
          }}
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          className="mySwiper rounded-[2.5rem] bg-transparent"
        >
          {fotos.map((foto, index) => (
            <SwiperSlide key={index} className="bg-transparent">
              <div 
                onClick={() => setSelectedImage(foto)}
                className="aspect-4/5 w-full bg-white/10 backdrop-blur-sm rounded-[2.5rem] overflow-hidden flex items-center justify-center border-4 border-white shadow-xl cursor-pointer"
              >
                <img 
                  src={foto} 
                  alt={`Momento ${index + 1}`} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x500?text=Error+Cargando";
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className={`${theme?.title || ''} mt-6 text-[9px] uppercase tracking-[0.3em] opacity-40 italic`}>
        Desliza para ver más
      </p>

      {/* LIGHTBOX: Se activa al hacer clic en una foto del Swiper */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-500 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button 
              className="absolute top-10 right-10 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain border-2 border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoCarousel;