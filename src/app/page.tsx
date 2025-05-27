// App.tsx
"use client";

import React, { useState } from 'react';
import { Camera, Menu, X, Instagram, Mail, Phone } from 'lucide-react';
import { menuItems } from '../app/dato';
import HomePage from '../app/tru/homePage';
import GalleryPage from '../app/pages/galeria/page';
import ServicesPage from '../app/pages//services/page';
import AboutPage from '../app/pages/sobreMi/page';
import ContactPage from '../app/pages/contacto/page';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleNavigation = (section: string): void => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const renderContent = (): JSX.Element => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'gallery':
        return <GalleryPage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <Camera className="w-8 h-8" />
            <span className="text-xl font-light tracking-wide">ALEX RIVERA</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-lg font-light tracking-wide transition-colors duration-300 pb-1 ${
                  activeSection === item.id 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left text-lg font-light tracking-wide transition-colors duration-300 py-2 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="w-6 h-6" />
                <span className="text-xl font-light tracking-wide">ALEX RIVERA</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Fotógrafo profesional especializado en capturar momentos únicos 
                y emociones auténticas. Más de 8 años de experiencia creando 
                recuerdos que perduran para siempre.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {menuItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-medium mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-gray-400">alex@photography.com</span>
                </div>
                <div className="flex items-center">           
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-gray-400">@alexrivera_photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Alex Rivera Photography. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;