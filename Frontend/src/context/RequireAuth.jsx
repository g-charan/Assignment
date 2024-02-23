import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./ProtectedRoutes";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  // if (auth.user !== "charan" || auth.password !== "ch") {
  //   alert("You are not charan");
  //   return <Navigate to="/login" />;
  // }
  return children;
};
