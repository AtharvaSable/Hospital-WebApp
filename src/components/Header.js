import React, { useEffect, useState } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="header navbar-expand-lg bg-light">
      <div className="header-right">
        <Link to="/home">
          <p
            className={`$(activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Home
          </p>
        </Link>
        <Link to="/signin">
          <p
            className={`$(activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            About
          </p>
        </Link>
        <Link to="/signup">
          <p
            className={`$(activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            Signup
          </p>
        </Link>
        <Link to="/signin">
          <p
            className={`$(activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Signin
          </p>
        </Link>
        <Link to="/signin">
          <p
            className={`$(activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            SignOut
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Header;
