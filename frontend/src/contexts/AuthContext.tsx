import React, {useContext} from 'react';
import {createContext, ReactNode, useEffect, useState} from 'react';
import Loading from '../pages/Loading';
import {User} from '../types/User';

interface AuthContextType {
  token: string;
  setToken: (token: string) => void;
  user: User;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({children}: AuthProviderProps) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<User>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    cpfCnpj: '',
  });
  const [loading, setLoading] = useState(true);

  const loadToken = () => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  };

  const saveToken = (token: string) => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  };

  useEffect(() => {
    loadToken();
  }, []);

  useEffect(() => {
    saveToken(token);
  }, [token]);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{token, setToken, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
