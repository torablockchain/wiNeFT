import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: "url('/HeroCorchos.png')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-7xl w-full px-6 md:px-20 lg:px-32 space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sora font-semibold leading-tight">
          Viví el Vino
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light font-sora pl-2">
          Invertí, coleccioná, experimentá
        </p>

        <p className="text-sm md:text-base font-medium font-sans pt-24">
          <strong className="font-semibold">
            Transformamos grandes vinos en activos digitales únicos.
          </strong>
          <br />
          Tokenizá botellas exclusivas, partidas a granel y vinos en barrica directamente desde la bodega.
          Cada NFT representa un producto real, con trazabilidad certificada en blockchain y múltiples opciones:
          conservar, intercambiar o solicitar la entrega física cuando lo desees.
        </p>

        <div className="pt-4">
        <button className="mt-6 px-6 py-2 border border-white text-white font-sans text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out">
          Conectar Wallet
        </button>
        </div>
      </div>

      {/* Franja con marcas de bodegas */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-6 px-8 flex justify-center gap-12 z-30">
        <button className="hover:opacity-80 transition">
          <img src="/logos/Bodega1.png" alt="Bodega 1" className="h-30 md:h-36" />
        </button>
        <button className="hover:opacity-80 transition">
          <img src="/logos/Bodega2.png" alt="Bodega 2" className="h-30 md:h-36" />
        </button>
        <button className="hover:opacity-80 transition">
          <img src="/logos/Bodega1.png" alt="Bodega 3" className="h-30 md:h-36" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
