"use client";

import { authenticationClientMiddleware } from "@/utils/token";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { cookiesKey } from "@/utils/temp_tokenKey";
import { toast } from "react-toastify";

const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const cookies = new Cookies();
  const router = useRouter();
  const userData = authenticationClientMiddleware();
  const [auth, updateAuth] = useState(null);
  useEffect(() => {
    if (userData) {
      updateAuth(userData);
    }
  }, []);

  const signInHandler = (data, token) => {
    updateAuth(data);
    cookies.set(cookiesKey, token, { path: "/" });
  };

  const sign_out_handler = () => {
    toast.success("Logged Out");
    updateAuth(null);
    cookies.remove(cookiesKey, { path: "/" });
    router.push("/");
  };

  return (
    <UserContext.Provider value={{ auth, signInHandler, sign_out_handler }}>
      {children}
    </UserContext.Provider>
  );
};
