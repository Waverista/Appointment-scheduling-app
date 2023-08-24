import { Avatar } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ProviderContext } from "./components/Provider/Provider";
import Router from "./router/index.js";

function App() {
  const { user } = useContext(ProviderContext);
  return (
    <BrowserRouter>
      <Router />
      {sessionStorage.getItem("userType") && (
        <div
          className="d-flex justify-content-end"
          style={{ position: "absolute", top: "60px", right: "40px" }}
        >
          <div
            style={{
              textAlign: "right",
              marginTop: "14px",
              marginRight: "10px",
            }}
          >
            <h5
              style={{
                marginBottom: "2px",
                fontWeight: "900",
                fontSize: "18px",
              }}
            >
              {sessionStorage.getItem("userName")}
            </h5>
            <h6 style={{ fontSize: "15px" }}>
              {sessionStorage.getItem("userType")}
            </h6>
          </div>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/2.jpg"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
