// ServicesPage.tsx
import React, { useState } from 'react';
import { Check, Calendar, Clock, DollarSign, Star } from 'lucide-react';
import { Service, BookingForm } from '../../types';
import { services } from '../../dato';

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    serviceId: '',
    date: '',
    time: '',
    location: '',
    message: ''
  });

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setBookingForm(prev => ({ ...prev, serviceId: service.id }));
    setShowBookingForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Booking form submitted:', bookingForm);
    alert('¡Solicitud enviada! Te contactaremos pronto para confirmar tu sesión.');
    setShowBookingForm(false);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      serviceId: '',
      date: '',
      time: '',
      location: '',
      message: ''
    });
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            SERVICIOS FOTOGRÁFICOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco una amplia gama de servicios fotográficos profesionales adaptados a tus necesidades específicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service: Service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {service.popular && (
                <div className="bg-black text-white text-center py-2">
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm font-medium">MÁS POPULAR</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="text-2xl font-bold text-black">${service.price}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleServiceSelect(service)}
                  className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors duration-300 font-medium"
                >
                  CONTRATAR SESIÓN
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && selectedService && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold">Contratar: {selectedService.name}</h3>
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
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
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Fecha preferida *</label>
                    <input
                      type="date"
                      name="date"
                      value={bookingForm.date}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Hora preferida *</label>
                    <select
                      name="time"
                      value={bookingForm.time}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                      required
                    >
                      <option value="">Seleccionar hora</option>
                      {timeSlots.map((time: string) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ubicación preferida</label>
                    <input
                      type="text"
                      name="location"
                      value={bookingForm.location}
                      onChange={handleInputChange}
                      placeholder="Estudio, parque, domicilio..."
                      className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Mensaje adicional</label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Cuéntanos más sobre lo que tienes en mente para tu sesión..."
                    className="w-full p-3 border border-gray-300 rounded focus:border-black focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Resumen de tu solicitud:</h4>
                  <div className="flex justify-between items-center">
                    <span>{selectedService.name}</span>
                    <span className="font-semibold">${selectedService.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    * El precio final puede variar según ubicación y requerimientos específicos
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 hover:bg-gray-50 transition-colors duration-300"
                  >
                    CANCELAR
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-black text-white py-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    ENVIAR SOLICITUD
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-light mb-6 text-center">¿Necesitas algo personalizado?</h3>
          <p className="text-center text-gray-600 mb-6">
            Si no encuentras exactamente lo que buscas, contáctame para crear un paquete personalizado que se adapte perfectamente a tus necesidades.
          </p>
          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300">
              CONTACTAR DIRECTAMENTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;