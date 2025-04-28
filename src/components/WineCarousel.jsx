import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


const wines = [
  {
    id: 1,
    name: 'Malbec Reserva 2020',
    winery: 'Bodega Mendoza',
    varietal: 'Malbec',
    price: 25.0,
    available: true,
    image: '/images/Botella.png',
    exclusive: true,
    exclusivityDetails: '12 meses en barrica francesa',
  },
  {
    id: 2,
    name: 'Cabernet Sauvignon 2019',
    winery: 'Viñedos del Sol',
    varietal: 'Cabernet Sauvignon',
    price: 30.0,
    available: false,
    image: '/images/8.png',
    exclusive: true,
    exclusivityDetails: '50 ejemplares únicos',
  },
  {
    id: 1,
    name: 'Malbec Reserva 2020',
    winery: 'Bodega Mendoza',
    varietal: 'Malbec',
    price: 25.0,
    available: true,
    image: '/images/Botella.png',
    exclusive: true,
    exclusivityDetails: '12 meses en barrica francesa',
  },
  {
    id: 2,
    name: 'Cabernet Sauvignon 2019',
    winery: 'Viñedos del Sol',
    varietal: 'Cabernet Sauvignon',
    price: 30.0,
    available: false,
    image: '/images/8.png',
    exclusive: true,
    exclusivityDetails: '50 ejemplares únicos',
  },{
    id: 1,
    name: 'Malbec Reserva 2020',
    winery: 'Bodega Mendoza',
    varietal: 'Malbec',
    price: 25.0,
    available: true,
    image: '/images/Botella.png',
    exclusive: true,
    exclusivityDetails: '12 meses en barrica francesa',
  },
  {
    id: 2,
    name: 'Cabernet Sauvignon 2019',
    winery: 'Viñedos del Sol',
    varietal: 'Cabernet Sauvignon',
    price: 30.0,
    available: false,
    image: '/images/8.png',
    exclusive: true,
    exclusivityDetails: '50 ejemplares únicos',
  },
  // Agrega más vinos según sea necesario
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

const WineCarousel = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-black via-gray-900 to-black text-white relative">
      <h1 className="text-5xl md:text-6xl font-sora font-bold text-center mb-16">
        Conectá con la exclusividad
      </h1>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        {wines.map((wine) => (
          <SwiperSlide
            key={wine.id}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden w-72 h-[420px] flex flex-col items-center justify-between p-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-64">
              <img
                src={wine.image}
                alt={wine.name}
                className="w-full h-full object-cover rounded-md"
              />
              {wine.exclusive && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-3 py-1 rounded">
                  {wine.exclusivityDetails}
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-sora font-semibold">{wine.name}</h3>
              <p className="text-xs text-gray-300">
                {wine.winery} • {wine.varietal}
              </p>
              <p className="mt-2 text-xl font-bold">{formatPrice(wine.price)}</p>
              <button className="mt-1 px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors">
                {wine.available ? 'Ver más' : 'Ver más'}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex justify-center mt-12">
        <button
          onClick={() => navigate('/marketplace')}
          className="px-6 py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors"
        >
          Ver todos los vinos
        </button>
      </div>
    </section>
  );
};

export default WineCarousel;
