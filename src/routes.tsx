// Admin Imports
import MyHomes from "views/admin/my-home";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import SutraTranscribing from "views/admin/sutra-transcribing";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import { FaBookOpen, FaPenAlt } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";


const routes = [
  {
    name: "My Homes",
    layout: "/admin",
    path: "default",
    icon: <GiStairsGoal className="h-6 w-6" />,
    component: <MyHomes />,
    showOnMenu: true,
  },
  {
    name: "Sutra Transcribing",
    layout: "/admin",
    path: "sutra-transcribing",
    icon: <FaPenAlt className="h-6 w-6" />,
    component: <SutraTranscribing />,
    showOnMenu: true,
  },
  {
    name: "Buddhist Resources",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <FaBookOpen className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
    showOnMenu: true,
  },
  {
    name: "Fellow Communities",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
    showOnMenu: true,
  },
  {
    name: "Personal Settings",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
    showOnMenu: true,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
    showOnMenu: false,
  },
];
export default routes;
