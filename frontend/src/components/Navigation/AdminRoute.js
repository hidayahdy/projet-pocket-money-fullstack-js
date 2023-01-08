import React from "react";
import { Navigate } from "react-router-dom";
const AdminRoute = ({ Children }) => {
  const token = localStorage.getItem("token");

  return <div>{token?.isAdmin? Children : <Navigate to="/not-found" />}</div>;
};

export default AdminRoute;