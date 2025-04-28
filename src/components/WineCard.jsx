// src/components/WineCard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const WineCard = ({ wine }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden w-72 h-[420px] flex flex-col items-center justify-between p-4 transition-transform duration-300 hover:scale-105">
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
        <p className="mt-2 text-xl font-bold">
          {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'USD',
          }).format(wine.price)}
        </p>
        <button
          onClick={() => navigate('/marketplace')}
          className="mt-2 px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          {wine.available ? 'Comprar' : 'Saber más'}
        </button>
      </div>
    </div>
  );
};

export default WineCard;
