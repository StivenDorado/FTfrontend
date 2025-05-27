// data.ts
import { Photo, Category, MenuItem, Service } from './types';

export const photos: Photo[] = [
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

export const categories: Category[] = [
  { id: 'all', name: 'Todas', count: photos.length },
  { id: 'retratos', name: 'Retratos', count: photos.filter(p => p.category === 'retratos').length },
  { id: 'paisajes', name: 'Paisajes', count: photos.filter(p => p.category === 'paisajes').length },
  { id: 'bodas', name: 'Bodas', count: photos.filter(p => p.category === 'bodas').length }
];

export const menuItems: MenuItem[] = [
  { id: 'home', name: 'Inicio' },
  { id: 'gallery', name: 'Galería' },
  { id: 'services', name: 'Servicios' },
  { id: 'about', name: 'Sobre Mí' },
  { id: 'contact', name: 'Contacto' }
];

export const services: Service[] = [
  {
    id: 'portrait',
    name: 'Sesión de Retratos',
    description: 'Capturamos tu esencia con retratos profesionales que reflejan tu personalidad única.',
    duration: '2 horas',
    price: 299,
    features: [
      '50+ fotos editadas profesionalmente',
      'Sesión en estudio o locación exterior',
      'Cambios de vestuario incluidos',
      'Entrega digital en alta resolución',
      'Galería online privada'
    ]
  },
  {
    id: 'family',
    name: 'Sesión Familiar',
    description: 'Momentos familiares que perdurarán para siempre, capturados con calidez y naturalidad.',
    duration: '1.5 horas',
    price: 399,
    popular: true,
    features: [
      '80+ fotos editadas profesionalmente',
      'Sesión en parque o locación familiar',
      'Fotos grupales e individuales',
      'Recomendaciones de vestuario',
      'Entrega en 48 horas'
    ]
  },
  {
    id: 'wedding',
    name: 'Fotografía de Bodas',
    description: 'Tu día especial documentado con pasión, desde la preparación hasta la celebración.',
    duration: '8 horas',
    price: 1299,
    features: [
      '500+ fotos editadas profesionalmente',
      'Cobertura completa del evento',
      'Segundo fotógrafo incluido',
      'Álbum digital premium',
      'Entrega en USB personalizado',
      'Galería online para invitados'
    ]
  },
  {
    id: 'event',
    name: 'Eventos Corporativos',
    description: 'Documentación profesional de eventos empresariales y celebraciones corporativas.',
    duration: '4 horas',
    price: 599,
    features: [
      '200+ fotos editadas',
      'Cobertura del evento completo',
      'Fotos de networking y presentaciones',
      'Entrega en 24 horas',
      'Uso comercial incluido'
    ]
  }
];