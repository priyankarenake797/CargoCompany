import React from "react";
import { Link } from "react-router-dom";
import View1 from "./View1";

const MasterAdmin = () => {
  return (
    <>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to={"View1" }  className="dropdown-item">
          View Connected Manufacturer.
        </Link>
        
        <Link to="MasterAdmin/Vehicle" className="dropdown-item">
          View Connected Cargo Vehicle.
        </Link>
      </div>
    </>
  );
};

export default MasterAdmin;
