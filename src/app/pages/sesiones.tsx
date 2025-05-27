'use client';
import React from 'react';

interface SesionesProps {
  onClickVerPortfolio: () => void;
}

const Sesiones: React.FC<SesionesProps> = ({ onClickVerPortfolio }) => (
  <div className="min-h-screen relative">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <div className="relative z-10 flex items-center justify-center min-h-screen text-white text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
          ALEX RIVERA
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 tracking-wider">
          FOTÓGRAFO PROFESIONAL
        </p>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Capturando momentos únicos y emociones auténticas a través del lente. 
          Especializado en retratos, paisajes y fotografía de bodas.
        </p>
        <button 
          onClick={onClickVerPortfolio}
          className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-opacity-90 transition-all duration-300 tracking-wide"
        >
          VER PORTFOLIO
        </button>
      </div>
    </div>
  </div>
);

export default Sesiones;
