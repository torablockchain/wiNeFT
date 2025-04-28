import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Nivel principal del footer */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p>Dirección: Calle Falsa 123, Mendoza, Argentina</p>
          <p>Teléfono: +54 9 261 123-4567</p>
          <p>Email: info@toradev.com</p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-xl font-bold mb-4">Navegación</h3>
          <ul>
            <li><a href="/about" className="hover:underline">Sobre Nosotros</a></li>
            <li><a href="/services" className="hover:underline">Servicios</a></li>
            <li><a href="/projects" className="hover:underline">Proyectos</a></li>
            <li><a href="/contact" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Toradev. Todos los derechos reservados.</p>
        <p className="text-sm">
          <a href="/privacy" className="hover:underline">Política de Privacidad</a> | <a href="/terms" className="hover:underline">Términos y Condiciones</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
