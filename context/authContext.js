import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const authContextPriovider = ({ children }) => {
  const [user, seUser] = useState(null);
  const [isAuthenticaded, setIsAuthenticaded] = useState(undefined);

  useEffect(() => {}, []);
};
