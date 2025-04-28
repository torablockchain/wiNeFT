import React from "react";
import {
  FaSearch,
  FaWallet,
  FaBoxOpen,
  FaTruck,
  FaGem
} from "react-icons/fa"; // Asegurate de que FaGem esté importado

const steps = [
  {
    icon: <FaSearch size={24} />,
    title: "Explorá",
    description: "Conocé vinos únicos ofrecidos por bodegas seleccionadas.",
  },
  {
    icon: <FaWallet size={24} />,
    title: "Comprá",
    description: "Convertí tus vinos en activos digitales certificados.",
  },
  {
    icon: <FaBoxOpen size={24} />,
    title: "Gestioná",
    description: "Guardalos en bodega, vendelos o intercambialos.",
  },
  {
    icon: <FaTruck size={24} />,
    title: "Recibí",
    description: "Solicitá la entrega física del vino en cualquier momento.",
  },
  {
    icon: <FaGem size={24} />,
    title: "Coleccioná o Vendé",
    description:
      "Tu NFT es único: guardalo como pieza de colección o comercializalo en el marketplace.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-4">
        <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 text-right">
        Cómo funciona?
        </h2>

        <p className="text-base md:text-lg font-inter leading-relaxed text-right mb-12">
          Nuestro proceso está diseñado para ofrecerte una experiencia única y segura:
          desde la selección y tokenización de vinos premium, hasta la posibilidad de
          conservarlos, intercambiarlos o pedir su entrega física. Todo está respaldado
          por tecnología blockchain y en colaboración directa con bodegas seleccionadas.
          Vos elegís qué hacer con tu NFT.
        </p>


        {/* Workflow gráfico */}
        <div className="w-full flex justify-center mt-12">
          <img
            src="/workflow-light.svg"
            alt="Workflow en modo claro"
            className="w-full h-auto max-w-5xl block dark:hidden"
          />
          <img
            src="/workflow-dark.svg"
            alt="Workflow en modo oscuro"
            className="w-full h-auto max-w-5xl hidden dark:block"
          />
        </div>

        {/* Paso a paso */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left space-y-3"
            >
              <div className="bg-darkBlue text-white p-3 rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold font-sora">{step.title}</h3>
              <p className="text-sm font-inter">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
