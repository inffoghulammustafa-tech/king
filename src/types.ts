export type PageType = 'home' | 'about' | 'services' | 'contact' | 'logs';

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar?: string;
  joinedDate: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}
