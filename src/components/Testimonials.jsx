import React from 'react';

const testimonials = [
  {
    name: 'María Gómez',
    role: 'Coleccionista de vinos',
    image: '/images/testimonials/maria.jpg',
    quote: 'wiNeFT me permitió invertir en vinos exclusivos de manera segura y sencilla.',
  },
  {
    name: 'Carlos Pérez',
    role: 'Sommelier profesional',
    image: '/images/testimonials/carlos.jpg',
    quote: 'La tokenización de vinos abre nuevas oportunidades en el mundo del vino.',
  },
  {
    name: 'Lucía Fernández',
    role: 'Inversionista',
    image: '/images/testimonials/lucia.jpg',
    quote: 'Gracias a wiNeFT, diversifiqué mi portafolio con activos respaldados por vinos premium.',
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative w-full py-24 px-6 md:px-24 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/corchos2.png')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sora font-bold mb-12 text-left md:text-right">
          Lo que ellos dicen de wiNeFT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border border-white"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-100">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
