import { AiFillHome } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

export const sideNavigationLinks = [
  {
    icon: <AiFillHome className="icon-css text-success" size={22} />,
    title: "Home",
    to: "/home",
  },
  {
    icon: <BsCalendarDateFill className="icon-css text-success" size={22} />,
    title: "Appointment",
    to: "/appointment",
  },
  {
    icon: <FaUserTie className="icon-css text-success" size={22} />,
    title: "Consultant",
    to: "/consultant",
  },
];
