// types.ts
export interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface MenuItem {
  id: string;
  name: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  location: string;
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}