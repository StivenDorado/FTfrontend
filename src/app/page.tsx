'use client';

import React, { useState } from 'react';
import { Camera, Menu, X, Instagram, Mail, Phone, Eye } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

const PhotographerPortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Datos de ejemplo para las fotos
  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1494790108755-2616c4f5e99b?w=800&h=600&fit=crop',
      title: 'Retrato Natural',
      category: 'retratos',
      description: 'Sesión de retrato con luz natural'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
      title: 'Paisaje Montañoso',
      category: 'paisajes',
      description: 'Amanecer en las montañas'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
      title: 'Momento Especial',
      category: 'bodas',
      description: 'Ceremonia íntima al atardecer'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      title: 'Retrato Masculino',
      category: 'retratos',
      description: 'Sesión de estudio profesional'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Lago Sereno',
      category: 'paisajes',
      description: 'Reflexiones en agua cristalina'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800&h=600&fit=crop',
      title: 'Celebración',
      category: 'bodas',
      description: 'Baile de novios bajo las estrellas'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
      title: 'Elegancia',
      category: 'retratos',
      description: 'Retrato editorial femenino'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
      title: 'Bosque Místico',
      category: 'paisajes',
      description: 'Niebla matutina entre los árboles'
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'Todas', count: photos.length },
    { id: 'retratos', name: 'Retratos', count: photos.filter(p => p.category === 'retratos').length },
    { id: 'paisajes', name: 'Paisajes', count: photos.filter(p => p.category === 'paisajes').length },
    { id: 'bodas', name: 'Bodas', count: photos.filter(p => p.category === 'bodas').length }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const menuItems = [
    { id: 'home', name: 'Inicio' },
    { id: 'gallery', name: 'Galería' },
    { id: 'about', name: 'Sobre Mí' },
    { id: 'contact', name: 'Contacto' }
  ];

  const renderHome = () => (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10  flex items-center justify-center min-h-screen text-white text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
            ALEX RIVERA
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wider">
            FOTÓGRAFO PROFESIONAL
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Capturando momentos únicos y emociones auténticas a través del lente. 
            Especializado en retratos, paisajes y fotografía de bodas con más de 8 años de experiencia.
          </p>
          <button 
            onClick={() => setActiveSection('gallery')}
            className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-opacity-90 transition-all duration-300 tracking-wide"
          >
            VER PORTFOLIO
          </button>
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-wide">
          MI TRABAJO
        </h2>
        
        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 border transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPhotos.map(photo => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden bg-gray-100 aspect-square cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
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
              comenzó como un hobby y se convirtió en mi carrera cuando descubrí el poder 
              de congelar emociones en una imagen.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              Especializado en retratos que revelan la esencia de las personas, paisajes 
              que muestran la belleza del mundo natural, y bodas donde cada momento cuenta 
              una historia única de amor.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              Mi enfoque se basa en crear una conexión genuina con mis clientes para 
              capturar momentos auténticos y naturales que perduren para siempre.
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

  const renderContact = () => (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
          CONTACTO
        </h2>
        <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría escuchar tu historia y 
          ayudarte a crear recuerdos que duren para siempre.
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
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
            />
            <textarea
              placeholder="Mensaje"
              rows={6}
              className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return renderHome();
      case 'gallery':
        return renderGallery();
      case 'about':
        return renderAbout();
      case 'contact':
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <Camera className="w-8 h-8" />
            <span className="text-xl font-light tracking-wide">ALEX RIVERA</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-lg font-light tracking-wide transition-colors duration-300 ${
                  activeSection === item.id ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'
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
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-4">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left text-lg font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black' : 'text-gray-600'
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

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-4xl max-h-full relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-xl font-medium mb-1">{selectedPhoto.title}</h3>
              <p className="text-gray-300">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            <Phone className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
          <p className="text-gray-400">
            © 2024 Alex Rivera Photography. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PhotographerPortfolio;