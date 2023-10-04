import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || {}
  );
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLogged")) || false
  );

  const handleLogIn = (userLogged) => {
    setUser(userLogged);
    setIsLogged(true);
    localStorage.setItem("userInfo", JSON.stringify(userLogged));
    localStorage.setItem("isLogged", JSON.stringify(true));
  };

  const logOutContext = () => {
    setUser({});
    setIsLogged(false);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("isLogged");
  };

  let data = { user, isLogged, handleLogIn, logOutContext };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextComponent;
