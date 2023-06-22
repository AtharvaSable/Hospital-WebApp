import React from "react";
import "./style.css";
import Dbox from "./Dbox";
import Sidebar from "../../components/Sidebar";
import Menu from "../../components/Menu";

const Dashboard = () => {
  return (
    <>
      <div>
        {/* impp */}
        <div className="dash-menu">
          <div className="">
            <Sidebar />
          </div>
          <div>
            <Menu />
          </div>
        </div>

        <div>
          {/* <h1 className="title">DashBoard</h1> */}
          <Dbox />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
