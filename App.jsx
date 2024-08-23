import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import MasterAdmin from "./components/MasterAdmin";
import View1 from "./components/View1";
import Vehicle from "./components/Vehicle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Welcome />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MasterAdmin />} />
          <Route path="View1" element={<View1 />} />
          <Route path="Vehicle" element={<Vehicle />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
