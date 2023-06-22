import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./BedAllotment.css";

const BedAllotment = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="mt-5">
        <h1 className="head">Bed Allotment</h1>
        <div
          classname="container ml-5"
          style={{ padding: 30, overflow: "auto" }}
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
            <button className="btn btn-primary">Add Allotment</button>
          </div>
          <table class="table table-striped">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">Bed Number</th>
                <th scope="col">Type</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Allotment Date</th>
                <th scope="col">Discharge Date</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>12</td>
                <td>common</td>
                <td>Shardul</td>
                <td>10/11/2022</td>
                <td>15/11/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>13</td>
                <td>ICU</td>
                <td>Jack</td>
                <td>10/11/2022</td>
                <td>15/11/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>14</td>
                <td>Shared</td>
                <td>John</td>
                <td>10/11/2022</td>
                <td>15/11/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>15</td>
                <td>common</td>
                <td>Buttler</td>
                <td>10/11/2022</td>
                <td>15/11/2022</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>16</td>
                <td>common</td>
                <td>Stokes</td>
                <td>10/11/2022</td>
                <td>15/11/2022</td>
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

export default BedAllotment;
