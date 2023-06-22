import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./OperationDetails.css";

const OperationDetails = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="mt-5">
        <h1 className="head">Operation Reports</h1>
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
            <button className="btn btn-primary">Add Report</button>
          </div>
          <table class="table table-striped">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Doctor Name</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Remark</th>
                <th scope="col">Date</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Jack</td>
                <td>Robert Williams</td>
                <td>Heart Disease</td>
                <td>Recovering</td>
                <td>Success</td>
                <td>25/10/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Richard</td>
                <td>Jane Williams</td>
                <td>Kidney Stone</td>
                <td>Recovering</td>
                <td>Success</td>
                <td>15/03/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Daisy</td>
                <td>Jack Sparrow</td>
                <td>Lung Infection</td>
                <td>Recovered</td>
                <td>Success</td>
                <td>25/10/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Akshay kumar</td>
                <td>Adam Steve</td>
                <td>Heart Disease</td>
                <td>Recovering</td>
                <td>Success</td>
                <td>01/01/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>John </td>
                <td>Robert Williams</td>
                <td>Anxiety</td>
                <td>Recovering</td>
                <td>Success</td>
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

export default OperationDetails;
