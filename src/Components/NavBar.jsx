import React from "react";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div className="navbar ">
      <div className="d-flex w-100 justify-content-between">
        <div className="d-flex align-items center">
          <button title="Go Back" className="angle mx-3">
            <TfiAngleLeft />
          </button>
          <button title="Go Foward" className="angle">
            <TfiAngleRight />
          </button>
        </div>
        <div>
            <button className="upgrade px-4 py-1">Upgrade</button>
            <button className="rounded-5 text-light border-0 USER   px-4 bg-dark mx-5"> <span className="fs-5 text-secondary"><FaUserCircle/></span> Ultimate <VscTriangleDown/></button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
