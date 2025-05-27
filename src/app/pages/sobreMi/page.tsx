// AboutPage.tsx
import React from 'react';
import { Camera, Mail, Phone, Award, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Camera, number: '8+', label: 'Años de Experiencia' },
    { icon: Users, number: '500+', label: 'Clientes Satisfechos' },
    { icon: Heart, number: '100+', label: 'Bodas Documentadas' },
    { icon: Award, number: '15+', label: 'Premios Obtenidos' }
  ];

  const skills = [
    { name: 'Fotografía de Retratos', level: 95 },
    { name: 'Fotografía de Bodas', level: 90 },
    { name: 'Edición y Retoque', level: 85 },
    { name: 'Fotografía de Paisajes', level: 88 },
    { name: 'Fotografía Corporativa', level: 80 }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
              alt="Alex Rivera"
              className="w-full h-96 md:h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
              SOBRE MÍ
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              Hola, soy Alex Rivera, fotógrafo profesional con más de 8 años de experiencia 
              capturando los momentos más importantes de la vida. Mi pasión por la fotografía 
              comenzó como un hobby durante mis estudios universitarios y se convirtió en mi carrera 
              cuando descubrí el poder de congelar emociones en una imagen.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              Mi estilo se caracteriza por buscar la belleza en lo natural y auténtico. 
              Creo firmemente que las mejores fotografías surgen cuando las personas se sienten 
              cómodas y pueden ser ellas mismas frente a la cámara.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              Especializado en retratos que revelan la esencia de las personas, paisajes 
              que muestran la belleza del mundo natural, y bodas donde cada momento cuenta 
              una historia única de amor.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Camera className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Canon EOS R5, Sony α7R IV</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">alex@photography.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">MIS ESPECIALIDADES</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-black h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gray-50 p-12 rounded-lg mb-20">
          <h3 className="text-3xl font-light text-center mb-8">MI FILOSOFÍA</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              "Creo que cada persona tiene una historia única que contar, y mi trabajo es 
              encontrar la manera de narrarla a través de imágenes. No se trata solo de 
              técnica o equipos costosos, sino de conectar con las personas y capturar 
              su esencia auténtica."
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Mi enfoque se basa en crear un ambiente relajado y natural donde mis clientes 
              se sientan cómodos para ser ellos mismos. Las mejores fotografías no son 
              las más técnicamente perfectas, sino las que logran transmitir emociones 
              reales y momentos genuinos.
            </p>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-light mb-8">EQUIPO PROFESIONAL</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Cámaras</h4>
                <p className="text-gray-600">Canon EOS R5, Sony α7R IV, Canon 5D Mark IV</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Lentes</h4>
                <p className="text-gray-600">Canon RF 24-70mm f/2.8, Sony FE 85mm f/1.4, Canon EF 70-200mm f/2.8</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Iluminación</h4>
                <p className="text-gray-600">Profoto B1X, Godox AD600, Reflectores y difusores</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Edición</h4>
                <p className="text-gray-600">Adobe Lightroom, Photoshop, Capture One Pro</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-light mb-8">EDUCACIÓN Y LOGROS</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Licenciatura en Artes Visuales</h4>
                <p className="text-gray-600">Universidad de Bellas Artes (2012-2016)</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Certificación Profesional</h4>
                <p className="text-gray-600">Professional Photographers of America (PPA)</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Premios Destacados</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fotógrafo del Año 2023 - Asociación Nacional de Fotógrafos</li>
                  <li>• Mejor Portfolio de Bodas 2022 - Wedding Photography Awards</li>
                  <li>• Mención Honorífica - International Portrait Photography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">LO QUE DICEN MIS CLIENTES</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4 italic">
                "Alex capturó perfectamente la esencia de nuestra boda. Cada foto cuenta 
                una historia y nos emociona cada vez que las vemos."
              </p>
              <div className="font-semibold">María y Carlos</div>
              <div className="text-sm text-gray-500">Boda 2023</div>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4 italic">
                "Profesional, creativo y con un ojo increíble para los detalles. 
                Los retratos familiares quedaron espectaculares."
              </p>
              <div className="font-semibold">Familia Rodriguez</div>
              <div className="text-sm text-gray-500">Sesión Familiar 2023</div>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4 italic">
                "Alex hizo que me sintiera completamente cómoda durante la sesión. 
                Las fotos superaron todas mis expectativas."
              </p>
              <div className="font-semibold">Ana López</div>
              <div className="text-sm text-gray-500">Sesión de Retratos 2023</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-light mb-6">¿LISTO PARA CREAR ALGO ÚNICO?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Me encantaría conocer tu historia y ayudarte a crear recuerdos que perduren para siempre.
          </p>
          <button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-800 transition-colors duration-300">
            CONTACTAR AHORA
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;