import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Layout = () => {
  return (
    <>
     
        <TopBar/>
        <Navbar/>
      <Outlet />
    </>
  )
};

export default Layout;