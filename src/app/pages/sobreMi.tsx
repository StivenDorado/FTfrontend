'use client';
import React from 'react';
import { Camera, Mail, Phone } from 'lucide-react';

const SobreMi: React.FC = () => (
  <div className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
            alt="Alex Rivera"
            className="w-full h-96 md:h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
            SOBRE MÍ
          </h2>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Soy Alex Rivera, fotógrafo profesional con más de 8 años de experiencia 
            capturando los momentos más importantes de la vida. Mi pasión por la fotografía 
            comenzó como un hobby y se convirtió en mi carrera.
          </p>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Especializado en retratos, paisajes y bodas, mi enfoque es crear una conexión genuina con mis clientes.
          </p>
          <p className="text-lg mb-8 leading-relaxed text-gray-700">
            Me esfuerzo por capturar momentos auténticos y naturales que perduren para siempre.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Camera className="w-5 h-5 mr-3" />
              <span>Canon EOS R5, Sony α7R IV</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              <span>alex@photography.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SobreMi;
