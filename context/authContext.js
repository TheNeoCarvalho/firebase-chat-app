import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextPriovider = ({ children }) => {
  const [user, seUser] = useState(null);
  const [isAuthenticaded, setIsAuthenticaded] = useState(undefined);

  useEffect(() => {
    setIsAuthenticaded(false);
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {
      throw new Error("Falha no login");
    }
  };

  const logout = async () => {
    try {
    } catch (error) {
      throw new Error("Falha no logout");
    }
  };

  const register = async (email, password, username, profileUrl) => {
    try {
    } catch (error) {
      throw new Error("Falha no registro");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticaded, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth");
  }
  return value;
};
