import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const handleLogIn = (userLogged) => {
    setUser(userLogged);
    setIsLogged(true);
  };

  const logOutContext = () => {
    setUser({});
    setIsLogged(false);
  };

  let data = { user, isLogged, handleLogIn, logOutContext };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextComponent;
