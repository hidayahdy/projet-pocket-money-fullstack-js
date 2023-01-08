import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ Children }) => {
  const token = localStorage.getItem("token");

  return <div>{token ? Children : <Navigate to="/login" />}</div>;
};

export default PrivateRoutes;