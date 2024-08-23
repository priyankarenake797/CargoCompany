import React from "react";

const Manufacturer = () => {
  return (
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <button className="dropdown-item">Add/Update Shipment Detail</button>
      <button className="dropdown-item">Request Cargo Pickup</button>
      <button className="dropdown-item">Track Shipment Status</button>
    </div>
  );
};

export default Manufacturer;
