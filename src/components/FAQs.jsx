import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Qué es la tokenización de vinos?',
    answer: 'Es el proceso de representar un vino físico como un activo digital único en la blockchain, lo que permite su compra, venta y seguimiento de manera segura y transparente.',
  },
  {
    question: '¿Cómo puedo invertir en vinos tokenizados?',
    answer: 'Puedes registrarte en nuestra plataforma, explorar las opciones disponibles y adquirir tokens representativos de vinos específicos.',
  },
  {
    question: '¿Es seguro invertir en vinos a través de wiNeFT?',
    answer: 'Sí, utilizamos tecnología blockchain para garantizar la autenticidad y trazabilidad de cada vino, además de cumplir con las regulaciones locales.',
  },
  // Agrega más preguntas según sea necesario
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6 md:px-24">
      <h2 className="text-4xl md:text-5xl font-sora font-bold mb-12 text-center md:text-left">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg md:text-xl font-medium focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-base md:text-lg text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
