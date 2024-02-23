import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);

// stores the username & password data
// Passes through the whole application

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const login = (user, password) => {
    setUser(user);
    setPassword(password);
  };
  const logout = () => {
    setUser(null);
    setPassword(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, password }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
