import React from "react";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { MdPrecisionManufacturing } from "react-icons/md";
import { TbBrandComedyCentral } from "react-icons/tb";
import MasterAdmin from "./MasterAdmin";
import SubAdmin from "./SubAdmin";
import Manufacturer from "./Manufacturer";
import CargoCoEmployee from "./CargoCoEmployee";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar"
      style={{ width: "290px" }}
    >
      <span className="fs-6">
        <img
          src="http://www.mining-dumptruck.com/photo/ps29756688-sinotruk_howo_6x4_heavy_cargo_truck_euro_ii_emission_standard_21_30_tons.jpg"
          alt=""
          width="90"
          height="80"
          className="rounded-circle me-2"
        />
      </span>

      <span className="fs-6">
        <h5>Cargo</h5>
      </span>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item dropdown">
          <a
            href="/"
            className="nav-link active"
            aria-current="page dropdown-toggle btn btn-primary"
          >
            <FaHome />
            <svg className="bi pe-none me-2" width="15" height="16">
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>  
        </li>

        <svg className="bi pe-none me-2" width="15" height="16">
          <use xlinkHref="#grid" />
        </svg>
        <li>
          <a
            href="/MasterAdmin"
            id="dropdownMenuButton"
            className="nav-link active dropdown-toggle"
            aria-current="page"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaRegUser />
            <svg className="bi pe-none me-2" width="15" height="16"></svg>
            Master Admin
          </a>
           
          <MasterAdmin />
        </li>

        <svg className="bi pe-none me-2" width="15" height="16">
          <use xlinkHref="#grid" />
        </svg>
        <li>
          <a
            href="/SubAdmin"
            id="dropdownMenuButton"
            className="nav-link active dropdown-toggle"
            aria-current="page"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <TbDeviceIpadMinus />
            <svg className="bi pe-none me-2" width="15" height="16">
              <use xlinkHref="#table" />
            </svg>
            Sub Admin
          </a>
          <SubAdmin />
        </li>

        <svg className="bi pe-none me-2" width="15" height="16">
          <use xlinkHref="#grid" />
        </svg>
        <li>
          <a
            href="/Manufacturer"
            id="dropdownMenuButton"
            className="nav-link active dropdown-toggle"
            aria-current="page"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MdPrecisionManufacturing />
            <svg className="bi pe-none me-2" width="15" height="16">
              <use xlinkHref="#grid" />
            </svg>
            Manufacturer
          </a>
          <Manufacturer />
        </li>
        <svg className="bi pe-none me-2" width="15" height="16">
          <use xlinkHref="#grid" />
        </svg>
        <li>
          <a
            href="/CargoCoEmployee"
            id="dropdownMenuButton"
            className="nav-link active dropdown-toggle"
            aria-current="page"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <TbBrandComedyCentral />
            <svg className="bi pe-none me-2" width="15" height="16">
              <use xlinkHref="#people-circle" />
            </svg>
            Cargo Co. Employe
          </a>
          <CargoCoEmployee />
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
