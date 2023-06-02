import React from "react";
import SideNav from "./SideNav";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <div>
      <div className=" landing w-100 d-flex">
        <div className="">
          <SideNav />
        </div>
        <div className="mainpage">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
