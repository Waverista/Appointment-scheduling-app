import { createContext, useState } from "react";

export const ProviderContext = createContext();

const Provider = (props) => {
  const [token, setToken] = useState(
    sessionStorage.getItem("access_token")
      ? sessionStorage.getItem("access_token")
      : null
  );

  const [user, setUser] = useState({
    accessToken: "",
    refreshToken: "",
  });

  return (
    <ProviderContext.Provider value={{ token, setToken, user, setUser }}>
      {props.children}
    </ProviderContext.Provider>
  );
};

export default Provider;
