// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Ap.css";
import fireDb from "../../firebase";
import "./View.css";
import "./Home.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  const [data, setData] = useState({});
  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  const onDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      fireDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
  };
  return (
    <div>
      <div className="header">
        <p className="logo">Contact App</p>
        <div className="header-right">
          <Link to="/doctor/AddEdit">
            <p
              className={`$(activeTab === "AddEdit" ? "active" : ""}`}
              onClick={() => setActiveTab("AddEdit")}
            >
              Add Doctor
            </p>
          </Link>
          <Link to="/doctor/About">
            <p
              className={`$(activeTab === "About" ? "active" : ""}`}
              onClick={() => setActiveTab("About")}
            >
              About
            </p>
          </Link>
          <Link to="/doctor/View">
            <p
              className={`$(activeTab === "View" ? "active" : ""}`}
              onClick={() => setActiveTab("View")}
            >
              View
            </p>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Contact</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((id, index) => {
              return (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].contact}</td>
                  <td>
                    <Link to={`/AddEdit/${id}`}>
                      <button className="btn btn-edit"> Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Header;
