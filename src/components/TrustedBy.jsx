import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  '/logos/Bodega1.png',
  '/logos/Bodega2.png',
  '/logos/Bodega1.png',
  '/logos/Bodega2.png',
  '/logos/Bodega1.png',
  '/logos/Bodega2.png',
  // Asegurate que existan en /public/logos
];

const TrustedBy = () => {
  return (
    <section
      className="relative w-full bg-black text-white py-20"
      style={{
        backgroundImage: "url('/Piedra.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-sora font-semibold text-right mb-12">
          Confían en nosotros
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2.5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            1024: { slidesPerView: 5.5 },
          }}
          className="trusted-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Bodega ${index + 1}`}
                  className="h-20 opacity-90 hover:opacity-100 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedBy;

