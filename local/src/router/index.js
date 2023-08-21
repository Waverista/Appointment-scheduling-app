import { useRoutes } from "react-router-dom";
import SideMenuLayout from "../Layouts/SideMenuLayout/SideMenuLayout";
import Appointments from "../pages/Appointments/Appointments";
import Consultant from "../pages/Consultants/Consultant";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/User-profile/UserProfile";
import PrivateRouteInverse from "../utils/PrivateRouteInverse";
import PrivateRoutes from "../utils/PrivateRoutes";
import Consultantprofile from "../pages/Consultantprofile/Consultantprofile";

function Router() {
  const routes = [
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/home",
          element: (
            <SideMenuLayout style={{ paddingLeft: "88px", paddingTop: "0px" }}>
              <Home />
            </SideMenuLayout>
          ),
        },
        {
          path: "/appointment",
          element: (
            <SideMenuLayout>
              <Appointments />
            </SideMenuLayout>
          ),
        },
        {
          path: "/Consultant",
          element: (
            <SideMenuLayout>
              <Consultant />
            </SideMenuLayout>
          ),
        },
        {
          path: "/UserProfile",
          element: (
            <SideMenuLayout>
              <UserProfile />
            </SideMenuLayout>
          ),
        },
        {
          path: "/Consultantprofile",
          element: (
            <SideMenuLayout>
              <Consultantprofile/>
            </SideMenuLayout>
          ),
        },
      ],
    },
    {
      element: <PrivateRouteInverse />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    // {
    //   path: "/about",
    //   element: <About />,
    // },
  ];
  return useRoutes(routes);
}

export default Router;
