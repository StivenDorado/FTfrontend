'use client';
import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const Contacto: React.FC = () => (
  <div className="py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
        CONTACTO
      </h2>
      <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
        ¿Tienes un proyecto en mente? Me encantaría escuchar tu historia y ayudarte a crear recuerdos que duren para siempre.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Mail className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-medium mb-2">Email</h3>
          <p className="text-gray-600">alex@photography.com</p>
        </div>
        <div className="text-center">
          <Phone className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-medium mb-2">Teléfono</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div className="text-center">
          <Instagram className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-medium mb-2">Instagram</h3>
          <p className="text-gray-600">@alexrivera_photo</p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-light mb-6">Envíame un mensaje</h3>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Nombre" className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none" />
          </div>
          <input type="text" placeholder="Asunto" className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none" />
          <textarea placeholder="Mensaje" rows={6} className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none resize-none"></textarea>
          <button type="submit" className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300">
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contacto;
