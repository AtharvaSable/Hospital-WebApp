import React from "react";
import Sidebar from "../../components/Sidebar";
import "./Ap.css";
import Header from "../../components/Header";

const Doctor = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="mt-5">
        <h1 className="head">Doctors</h1>
        <div
          classname="container ml-5"
          style={{ padding: 40, overflow: "auto" }}
        >
          <div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="add_btn mt-2 ">
            <button className="btn btn-primary">Add Doctor</button>
          </div>
          <table class="table table-striped">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Sex</th>
                <th scope="col">Age</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Mobile</th>
                <th scope="col">City</th>
                <th scope="col">Status</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Robert Williams</td>
                <td>Male</td>
                <td>24</td>
                <td>A+</td>
                <td>+917452927445</td>
                <td>Hogwarts</td>
                <td>Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>James Williams</td>
                <td>Female</td>
                <td>42</td>
                <td>B+</td>
                <td>+917452677445</td>
                <td>Brisbane</td>
                <td>Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jack Sparrow</td>
                <td>Female</td>
                <td>29</td>
                <td>AB+</td>
                <td>+917832927445</td>
                <td>Gabba</td>
                <td>Not Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Adam Steve</td>
                <td>Female</td>
                <td>34</td>
                <td>O+</td>
                <td>+919752927445</td>
                <td>Adelaide</td>
                <td>Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Mark Henry</td>
                <td>Male</td>
                <td>54</td>
                <td>AB-</td>
                <td>+917452927445</td>
                <td>Hogwarts</td>
                <td>Not Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Doctor;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./Ap.css";
// import AddEdit from "./AddEdit";
// import Home from "./Home";
// import View from "./View";
// import About from "./About";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "../../components/Header";

// const Doctor = () => {
//   return (
//     <Router>
//       <div className="doctor">
//         <Header />
//         <ToastContainer position="top-center" />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/add" element={<AddEdit />} />
//           <Route path="/update/:id" element={<AddEdit />} />
//           <Route path="/view/:id" element={<View />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };
