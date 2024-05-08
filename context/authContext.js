import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextPriovider = ({ children }) => {
  const [user, seUser] = useState(null);
  const [isAuthenticaded, setIsAuthenticaded] = useState(undefined);

  useEffect(() => {}, []);

  const login = async (email, login) => {
    try {
    } catch (error) {
      throw new Error("Falha no login");
    }
  };

  const logout = async () => {
    try {
    } catch (error) {
      throw new Error("Falha no login");
    }
  };

  const register = async (email, login, username, profileUrl) => {
    try {
    } catch (error) {
      throw new Error("Falha no login");
    }
  };

  return (
    <AuthContext.Provider
      value={(user, isAuthenticaded, login, logout, register)}
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
