import React from "react";
import { FaShieldAlt, FaKey, FaGlobe, FaWineBottle, FaChartPie, FaMapMarkerAlt } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaShieldAlt size={24} />,
      title: "Autenticidad Garantizada",
      description: "Cada token representa un vino real con trazabilidad en blockchain.",
    },
    {
      icon: <FaKey size={24} />,
      title: "Acceso Exclusivo",
      description: "Accedé a partidas únicas y ediciones limitadas directamente desde bodegas premium.",
    },
    {
      icon: <FaGlobe size={24} />,
      title: "Comercio Global",
      description: "Intercambiá o vendé tus vinos tokenizados en marketplaces especializados.",
    },
    {
      icon: <FaWineBottle size={24} />,
      title: "Custodia Segura",
      description: "Tus vinos físicos permanecen almacenados en condiciones óptimas hasta que los retires.",
    },
    {
      icon: <FaChartPie size={24} />,
      title: "Diversificación",
      description: "Incorporá activos alternativos a tu portafolio, con respaldo físico y valor cultural.",
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Conectá con el Origen",
      description: "Cada token incluye información detallada sobre el productor, varietal y origen.",
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-4">
        <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 text-right">
          Ventajas de tokenizar vino
        </h2>
        <p className="text-base md:text-lg font-inter leading-relaxed text-right mb-20">
          La tokenización de vinos abre una nueva dimensión para amantes del vino,<br />
          coleccionistas e inversores en el mundo cripto. Estos son algunos de sus principales beneficios:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border border-wine/80 dark:border-darkBlue p-6 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4 text-darkBlue dark:text-white">
                {item.icon}
                <h3 className="text-lg font-semibold font-sora">{item.title}</h3>
              </div>
              <p className="text-sm font-inter text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
