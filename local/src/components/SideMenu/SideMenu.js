import { useContext, useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logo/1.png";
import { ProviderContext } from "../Provider/Provider";
import "./SideMenu.css";
import { sideNavigationLinks } from "./navigationLinks";

function SideMenu({ mainBg }) {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(ProviderContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const logout = () => {
    try {
      sessionStorage.clear();
      setToken(null);
      setUser({
        accessToken: "",
        refreshToken: "",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Logout successful. Have a great day!",
        showConfirmButton: false,
        timer: 5000,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Oops! Something went wrong during the logout process. Please try again.",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  return (
    <nav
      className={`sidebar ${isSidebarOpen && "close"}`}
      style={{ backgroundColor: "#ddffdd" }}
    >
      <header>
        <div className="image-text mt-5">
          <span className="image">
            <img
              src={logo}
              alt=""
              style={{ width: "50px", borderRadius: "7px" }}
            />
          </span>

          <div className="text logo-text">
            <span className="name">The Jobs</span>
          </div>
        </div>

        <div
          className="toggle"
          style={{ border: "solid white 2px" }}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <MdKeyboardDoubleArrowRight />
          ) : (
            <MdKeyboardDoubleArrowRight />
          )}
        </div>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links p-0">
            {sideNavigationLinks.map((item) => (
              <li key={item.title} className="nav-link">
                <Link
                  to={item.to}
                  className=""
                  style={{ zIndex: "10", width: "max" }}
                >
                  {item.icon}
                  {!isSidebarOpen && (
                    <span className="nav-text ml-5">{item.title}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom-content">
          <li className="mb-5">
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: isHovered ? "#31d186" : "#198754" }}
              onClick={logout}
            >
              <IoLogOut
                className="logout-icon-css"
                style={{ color: "white" }}
                size={22}
              />
              {!isSidebarOpen && (
                <span className="nav-text ml-5" style={{ color: "white" }}>
                  Logout
                </span>
              )}
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default SideMenu;
