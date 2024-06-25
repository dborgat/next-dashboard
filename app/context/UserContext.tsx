'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

type UserContextType = {
  setUser: (user: UserType) => void;
  user: UserType | undefined;
};

type UserType = {
  name: string;
  email: string;
  password: string;
  familyTypeId: number;
  houseTypeId: number;
  id: number;
  rolId: number;
  zoneId: number;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    password: '',
    familyTypeId: 0,
    houseTypeId: 0,
    id: 0,
    rolId: 0,
    zoneId: 0,
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      // Si el usuario ya está autenticado, redirigir al dashboard
      router.push('/login');
    }
  }, [router]);

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
