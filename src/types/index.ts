export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}

export interface ProductDraft {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface AuthUser {
  email: string;
  name: string;
}

export type ThemeMode = 'light' | 'dark' | 'system';
export type Language = 'es' | 'en';
