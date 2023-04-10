import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [myOrder, setMyOrder] = useState([]);
  const createUser = async (userInfo) => {
    const { data } = await axiosInstance.post("/api/register", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (data) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setCurrentUser(data.user);
      toast.success(data.message);
    }
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  const signIn = async (userInfo) => {
    setLoading(false);
    const { data } = await axiosInstance.post("/api/login", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (data) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setCurrentUser(data.user);
      toast.success(data.message);
    }
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  };
  useEffect(() => {
    axiosInstance
      .get(`/api/order?email=${currentUser?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setMyOrder(res.data.order));
  }, [currentUser?.email]);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = isAuthenticated();
      if (cuser === null) {
        cuser = null;
      }

      setCurrentUser(cuser);
    };

    checkLoggedIn();
  }, []);
  const logOut = async () => {
    const { data } = await axiosInstance.get(`/api/logout`, {
      withCredentials: true,
    });
    if (data) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };
  const authInfo = {
    createUser,
    currentUser,
    setCurrentUser,
    signIn,
    logOut,
    loading,
    setMyOrder,
    myOrder,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
