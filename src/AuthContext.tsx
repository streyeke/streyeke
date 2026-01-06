import { createContext, useContext, useEffect, useState } from 'react';
import type { AuthResponse } from './api';

interface AuthContextValue {
  user: AuthResponse['user'] | null;
  token: string | null;
  login: (data: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthResponse['user'] | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('streyeke_auth');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as AuthResponse;
        setUser(parsed.user);
        setToken(parsed.token);
      } catch {
        localStorage.removeItem('streyeke_auth');
      }
    }
  }, []);

  const handleLogin = (data: AuthResponse) => {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem('streyeke_auth', JSON.stringify(data));
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('streyeke_auth');
  };

  return (
    <AuthContext.Provider value={{ user, token, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
