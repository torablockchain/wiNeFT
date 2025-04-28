import React from 'react';

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
    id: 3,
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
    id: 4,
    name: 'Cabernet Sauvignon 2019',
    winery: 'Viñedos del Sol',
    varietal: 'Cabernet Sauvignon',
    price: 30.0,
    available: false,
    image: '/images/8.png',
    exclusive: true,
    exclusivityDetails: '50 ejemplares únicos',
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const MarketPreviewCarousel = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-black via-gray-900 to-black text-white">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {wines.map((wine) => (
          <div
            key={wine.id}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-between p-4 transition-transform duration-300 hover:scale-105"
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
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketPreviewCarousel;