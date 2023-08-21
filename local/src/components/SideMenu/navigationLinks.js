import { AiFillHome } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
// import { RiProfileFill } from "react-icons/im";
import { MdPeople } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";

export const sideNavigationLinks = [
  {
    icon: <AiFillHome className="icon-css text-success" size={22} />,
    title: "Home",
    to: "/home",
  },
  {
    icon: <BsCalendarDateFill className="icon-css text-success" size={20} />,
    title: "Appointment",
    to: "/appointment",
  },
  {
    icon: <FaUserTie className="icon-css text-success" size={22} />,
    title: "Consultant",
    to: "/consultant",
  },
];

export const sideNavigationAdminLinks = [
  {
    icon: <AiFillHome className="icon-css text-success" size={22} />,
    title: "Home",
    to: "/home",
  },
  {
    icon: <BsCalendarDateFill className="icon-css text-success" size={20} />,
    title: "Appointment",
    to: "/appointment",
  },
  {
    icon: <FaUserTie className="icon-css text-success" size={22} />,
    title: "Consultant",
    to: "/consultant",
  },
  {
    icon: <MdPeople className="icon-css text-success" size={22} />,
    title: "Job Seeker",
    to: "/jobSeeker",
  },
];

export const sideNavigationConsultantLinks = [
  {
    icon: <AiFillHome className="icon-css text-success" size={22} />,
    title: "Home",
    to: "/home",
  },
  {
    icon: <BsCalendarDateFill className="icon-css text-success" size={20} />,
    title: "Appointment",
    to: "/appointment",
  },
  {
    icon: <RiProfileFill className="icon-css text-success" size={22} />,
    title: "Profile",
    to: "/userProfile",
  },
];

export const sideNavigationJSeekerLinks = [
  {
    icon: <AiFillHome className="icon-css text-success" size={22} />,
    title: "Home",
    to: "/home",
  },
  {
    icon: <BsCalendarDateFill className="icon-css text-success" size={20} />,
    title: "Appointment",
    to: "/appointment",
  },
  {
    icon: <FaUserTie className="icon-css text-success" size={22} />,
    title: "Consultant",
    to: "/consultant",
  },
  {
    icon: <RiProfileFill className="icon-css text-success" size={22} />,
    title: "Profile",
    to: "/userProfile",
  },
];
