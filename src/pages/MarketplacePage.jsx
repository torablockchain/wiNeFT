import React from "react";
import MarketPreviewCarousel from "../components/MarketPreviewCarousel";

const MarketplacePage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32">
      <h1 className="text-5xl font-sora font-bold text-center mb-8">
        Marketplace de Bodegas
      </h1>
      <p className="text-lg text-gray-400 text-center mb-16">
        Explorá y descubrí todos los vinos disponibles en nuestra plataforma.
      </p>

      <MarketPreviewCarousel />
    </div>
  );
};

export default MarketplacePage;
