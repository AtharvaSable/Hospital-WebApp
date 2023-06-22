import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Management = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="management">
        <h1>Management</h1>
      </div>
    </div>
  );
};

export default Management;
