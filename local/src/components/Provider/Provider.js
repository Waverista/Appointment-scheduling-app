import axios from "axios";
import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const ProviderContext = createContext();

const Provider = (props) => {
  const [token, setToken] = useState(
    sessionStorage.getItem("accessToken")
      ? {
          accessToken: sessionStorage.getItem("accessToken"),
          refreshToken: sessionStorage.getItem("refreshToken"),
        }
      : null
  );

  const [user, setUser] = useState({
    userType: "",
    accessToken: "",
    refreshToken: "",
  });
  // console.log(token);

  const refreshToken = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/authentication/token-refresh",
        {
          refreshToken: sessionStorage.getItem("refreshToken"),
        }
      );
      const newTokens = res.data;
      console.log(newTokens);
      sessionStorage.setItem("accessToken", newTokens.accessToken);
      sessionStorage.setItem("refreshToken", newTokens.refreshToken);

      setUser({
        ...user,
        accessToken: newTokens.accessToken,
        refreshToken: newTokens.refreshToken,
      });
      return newTokens;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(sessionStorage.getItem("accessToken"));
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const [appointmentsLst, setAppointmentsLst] = useState([]);

  useEffect(() => {}, []);

  return (
    <ProviderContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        axiosJWT,
        appointmentsLst,
        setAppointmentsLst,
      }}
    >
      {props.children}
    </ProviderContext.Provider>
  );
};

export default Provider;
