import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sergio Blas',
    role: 'CEO & Fundador',
    image: '/images/team/sergio.png',
    social: {
      linkedin: 'https://linkedin.com/in/carlatorazzi',
      twitter: 'https://twitter.com/carlatorazzi',
      instagram: 'https://instagram.com/carlatorazzi',
    },
  },
  {
    name: 'Juan Pérez',
    role: 'CTO',
    image: '/images/team/juan.png',
    social: {
      linkedin: 'https://linkedin.com/in/juanperez',
      twitter: 'https://twitter.com/juanperez',
      instagram: 'https://instagram.com/juanperez',
    },
  },
  {
    name: 'María López',
    role: 'CMO',
    image: '/images/team/maria.png',
    social: {
      linkedin: 'https://linkedin.com/in/marialopez',
      twitter: 'https://twitter.com/marialopez',
      instagram: 'https://instagram.com/marialopez',
    },
  },
  {
    name: 'Pedro Gómez',
    role: 'COO',
    image: '/images/team/pedro.png',
    social: {
      linkedin: 'https://linkedin.com/in/pedrogomez',
      twitter: 'https://twitter.com/pedrogomez',
      instagram: 'https://instagram.com/pedrogomez',
    },
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-sora font-bold mb-12 text-center">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-wine"
              />
              <h3 className="text-2xl font-bold font-sora text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine hover:text-wine-dark transition-colors duration-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine hover:text-wine-dark transition-colors duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine hover:text-wine-dark transition-colors duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
