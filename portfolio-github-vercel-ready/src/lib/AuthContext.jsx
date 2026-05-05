import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

const localUser = {
  id: 'local-user',
  full_name: 'Local Preview User',
  email: 'local@example.com',
};

export const AuthProvider = ({ children }) => {
  const value = {
    user: localUser,
    isAuthenticated: true,
    isLoadingAuth: false,
    isLoadingPublicSettings: false,
    authError: null,
    appPublicSettings: {},
    authChecked: true,
    logout: () => {},
    navigateToLogin: () => {},
    checkUserAuth: async () => localUser,
    checkAppState: async () => {},
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
