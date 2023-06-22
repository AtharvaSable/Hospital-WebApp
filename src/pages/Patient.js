import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Patient = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="mt-5">
        <h1 className="head">Patients</h1>
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
            <button className="btn btn-primary">Add Patient</button>
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
                <th scope="col">Date</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Jack</td>
                <td>Male</td>
                <td>24</td>
                <td>A+</td>
                <td>+917452927445</td>
                <td>Hogwarts</td>
                <td>25/10/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Michael</td>
                <td>Male</td>
                <td>42</td>
                <td>B+</td>
                <td>+917452677445</td>
                <td>Brisbane</td>
                <td>05/03/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Wilson</td>
                <td>Female</td>
                <td>29</td>
                <td>AB+</td>
                <td>+917832927445</td>
                <td>Gabba</td>
                <td>15/07/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Napolean</td>
                <td>Male</td>
                <td>34</td>
                <td>O+</td>
                <td>+919752927445</td>
                <td>Adelaide</td>
                <td>05/10/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Buttler</td>
                <td>Male</td>
                <td>54</td>
                <td>AB-</td>
                <td>+917452927445</td>
                <td>Hogwarts</td>
                <td>25/10/2022</td>
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

export default Patient;
