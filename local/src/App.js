import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideMenuLayout from "./Layouts/SideMenuLayout/SideMenuLayout";
import Appointments from "./pages/Appointments/Appointments";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <SideMenuLayout>
              <Home />
            </SideMenuLayout>
          }
        ></Route>
        <Route
          path="/appointment"
          element={
            <SideMenuLayout>
              <Appointments />
            </SideMenuLayout>
          }
        ></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
