// src/context/AuthContext.tsx
import { fetchUserProfile, login } from '../services/api/userApi';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await fetchUserProfile();
        setUser(currentUser);
      } catch (err) {
        console.error('Failed to get current user:', err);
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await login({ email, password });
      setUser(user);
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Implement logout logic here
      setUser(null);
    } catch (err) {
      setError('Failed to logout.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    error,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};