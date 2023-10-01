import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedAdmin = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user.rol === import.meta.env.VITE_ROL_ADMIN ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedAdmin;
