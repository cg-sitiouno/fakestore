import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { AuthUser } from '../types/index';

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('fakestore-user');
    if (stored) {
      setUser(JSON.parse(stored) as AuthUser);
    }
  }, []);

  const login = (email: string, password: string) => {
    if (!email.includes('@') || password.length < 4) {
      return false;
    }

    const nextUser = { email, name: email.split('@')[0] };
    setUser(nextUser);
    localStorage.setItem('fakestore-user', JSON.stringify(nextUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fakestore-user');
  };

  const value = useMemo(() => ({ user, isAuthenticated: Boolean(user), login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
