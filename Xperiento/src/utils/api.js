import axios from "axios";
import { server_base_Url, cookiesKey } from "./temp_tokenKey";
import Cookies from "universal-cookie";

const instance = axios.create({
  baseURL: server_base_Url,
  timeout: 25000,
});

instance.interceptors.request.use(
  async function (config) {
    try {
      config.headers["Content-Type"] = "application/json";
      config.headers.Accept = "application/json";
      const token = new Cookies().get(cookiesKey);
      console.log("token", token);
      if (token) {
        config.headers.Authorization = ` Bearer ${token}`;
      }
    } catch (error) {
      console.error("error ==> ", error.message);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  return instance.post("auth/login", data);
};

export const signUp = async (data) => {
  try {
    return await instance.post("auth/createAccount", data);
  } 
  catch (error) {
    console.error("error ==> ", error.message);
    return {data:{
      data:"Server Error",success:false
    }}
  }
};
export const getDashboard = async () => {
  return await instance.get("insights/counts");
};

export const cardget = async () => {
  return await instance.get("insights");
}
