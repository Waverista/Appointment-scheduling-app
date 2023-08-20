import { useRoutes } from "react-router-dom";
import SideMenuLayout from "../Layouts/SideMenuLayout/SideMenuLayout";
import Appointments from "../pages/Appointments/Appointments";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouteInverse from "../utils/PrivateRouteInverse";
import PrivateRoutes from "../utils/PrivateRoutes";

function Router() {
  const routes = [
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/home",
          element: (
            <SideMenuLayout>
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
