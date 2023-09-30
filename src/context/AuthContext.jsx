import React from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const handleLogIn = (userLogged) => {};

  const handleLogOut = (userLogged) => {};

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextComponent;
