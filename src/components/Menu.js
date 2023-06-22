import React from "react";
import "./Menu.css";
import { Link, Navigate } from "react-router-dom";
import { signout } from "../auth/index";
import Sidebar from "./Sidebar";

const Menu = () => {
  return (
    // <div className='color'>
    <header>
      <nav class="navbar">
        <ul>
          <li className="x">
            <Link to="/home" className="nav-ele" id="homeid">
              HOME
            </Link>
          </li>
          <li className="x">
            <Link to="/about" className="nav-ele">
              ABOUT
            </Link>
          </li>
          <li className="x">
            <Link to="/Signin" className="nav-ele">
              SIGNIN
            </Link>
          </li>
          <li className="x">
            <Link
              to="/signin"
              className="nav-ele"
              onClick={() => {
                signout(() => <Navigate to="/dashboard" />);
              }}
            >
              SIGNOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
