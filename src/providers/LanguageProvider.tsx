import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Language } from '../types';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    title: 'Fakestore Learning App',
    subtitle: 'Una app educativa para aprender React, rutas, hooks y CRUD.',
    catalog: 'Catálogo público',
    dashboard: 'Panel privado',
    login: 'Ingresar',
    logout: 'Salir',
    products: 'Productos',
    manage: 'Gestiona contenido',
    theme: 'Tema',
    language: 'Idioma',
    learn: 'Aprende',
  },
  en: {
    title: 'Fakestore Learning App',
    subtitle: 'An educational app to learn React, routing, hooks and CRUD.',
    catalog: 'Public catalog',
    dashboard: 'Private dashboard',
    login: 'Login',
    logout: 'Logout',
    products: 'Products',
    manage: 'Manage your content',
    theme: 'Theme',
    language: 'Language',
    learn: 'Learn',
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('fakestore-language') as Language | null;
    return stored ?? 'es';
  });

  useEffect(() => {
    localStorage.setItem('fakestore-language', language);
  }, [language]);

  const t = (key: string) => translations[language][key] ?? key;
  const value = useMemo(() => ({ language, setLanguage: setLanguageState, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
