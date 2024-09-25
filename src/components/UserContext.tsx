
"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic here (e.g., API request)
    setLoggedIn(true);
    console.log('User logged in');
  };

  const logout = () => {
    // Perform logout logic here (e.g., API request)
    setLoggedIn(false);
    console.log('User logged out');
  };

  return (
    <UserContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
