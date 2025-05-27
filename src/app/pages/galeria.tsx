'use client';
import React from 'react';
import { Eye } from 'lucide-react';

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

interface GaleriaProps {
  photos: Photo[];
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onSelectPhoto: (photo: Photo) => void;
}

const Galeria: React.FC<GaleriaProps> = ({
  photos,
  categories,
  selectedCategory,
  setSelectedCategory,
  onSelectPhoto
}) => {
  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
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
              onClick={() => onSelectPhoto(photo)}
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
};

export default Galeria;
