import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PhotoCarousel = ({ theme }) => {
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
             
              <div className="aspect-4/5 w-full bg-white/10 backdrop-blur-sm rounded-[2.5rem] overflow-hidden flex items-center justify-center border-4 border-white shadow-xl">
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
    </section>
  );
};

export default PhotoCarousel;