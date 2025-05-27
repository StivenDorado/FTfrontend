// ContactPage.tsx
import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Clock, Send } from 'lucide-react';
import { ContactForm } from '../../types';

const ContactPage: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Contact form submitted:', contactForm);
    alert('¡Mensaje enviado! Te responderé lo antes posible.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'alex@photography.com',
      description: 'Respuesta en menos de 24 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+1 (555) 123-4567',
      description: 'Lun - Vie: 9:00 AM - 7:00 PM'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@alexrivera_photo',
      description: 'Sígueme para ver mi trabajo diario'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Ciudad de México, México',
      description: 'Disponible para viajes'
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo tardas en entregar las fotos?',
      answer: 'Para sesiones regulares, entrego las fotos editadas en 3-5 días hábiles. Para bodas, el tiempo de entrega es de 2-3 semanas para asegurar la máxima calidad en cada imagen.'
    },
    {
      question: '¿Viajas para sesiones fuera de la ciudad?',
      answer: 'Sí, me encanta viajar para capturar momentos especiales. Para sesiones fuera de la ciudad, se incluyen los gastos de viaje en la cotización final.'
    },
    {
      question: '¿Qué incluye la sesión?',
      answer: 'Cada sesión incluye la consulta previa, la sesión fotográfica, edición profesional de las imágenes seleccionadas, y entrega digital en alta resolución con galería online privada.'
    },
    {
      question: '¿Puedo ver algunas fotos durante la sesión?',
      answer: 'Por supuesto, me gusta mostrar algunas fotos durante la sesión para que veas el progreso y te sientas más cómodo con el proceso.'
    },
    {
      question: '¿Qué pasa si el clima no coopera?',
      answer: 'Para sesiones al aire libre, siempre tengo un plan B. Podemos reprogramar sin costo adicional o buscar locaciones cubiertas igualmente hermosas.'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            CONTACTO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tu historia y 
            ayudarte a crear recuerdos que duren para siempre.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-800 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-500">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-light mb-6">Envíame un mensaje</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Cuéntame más sobre tu proyecto, fechas importantes, estilo que buscas, etc."
                  className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                ENVIAR MENSAJE
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-2xl font-light mb-6">Información adicional</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold text-lg mb-2">Horarios de respuesta</h4>
                <div className="flex items-center text-gray-600 mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Lunes a Viernes: 9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Sábados: 10:00 AM - 4:00 PM</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Respondo todos los mensajes en menos de 24 horas
                </p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold text-lg mb-2">Proceso de reserva</h4>
                <ol className="text-gray-600 space-y-1">
                  <li>1. Conversación inicial sobre tu proyecto</li>
                  <li>2. Propuesta personalizada y cotización</li>
                  <li>3. Contrato y pago del 50% de anticipo</li>
                  <li>4. Planificación detallada de la sesión</li>
                  <li>5. ¡Día de la sesión!</li>
                </ol>
              </div>

              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold text-lg mb-2">Áreas de servicio</h4>
                <p className="text-gray-600 mb-2">
                  Basado en Ciudad de México, pero disponible para viajar a:
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Toda la República Mexicana</li>
                  <li>• Estados Unidos y Canadá</li>
                  <li>• Destinos internacionales bajo consulta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-center mb-12">PREGUNTAS FRECUENTES</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h4 className="font-semibold text-lg mb-2 text-red-800">¿Necesitas contactarme urgentemente?</h4>
          <p className="text-red-700 mb-4">
            Para emergencias el día de tu evento o sesión, puedes llamarme directamente:
          </p>
          <div className="flex items-center justify-center text-red-800 font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;