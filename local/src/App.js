import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideMenuLayout from "./Layouts/SideMenuLayout/SideMenuLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Consultant from "./pages/Consultants/Consultant";
import UserProfile from "./pages/User-profile/UserProfile";

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
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Consultant" element={<Consultant />}></Route>
        <Route path="/UserProfile" element={<UserProfile />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
