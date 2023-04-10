import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthProvider";

const PrivetRouter = ({ children }) => {
  const location = useLocation();
  const { currentUser, setLoading } = useContext(AuthContext);
  if (currentUser) {
    setLoading(false);
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;
