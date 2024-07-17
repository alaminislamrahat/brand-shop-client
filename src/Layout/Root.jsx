import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

import LocomotiveScroll from 'locomotive-scroll';

const Root = () => {
   

const locomotiveScroll = new LocomotiveScroll();
    return (
        <div>
            <Navbar></Navbar>
          <div className="">
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;