import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setUser(JSON.parse(token));
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setUser(JSON.parse(token));
    }
  }, []);

  return { isAuthenticated, user, signIn, signOut };
};
