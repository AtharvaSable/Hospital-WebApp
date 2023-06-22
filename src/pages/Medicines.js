import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Medicines.css";

const Medicines = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="mt-5">
        <h1 className="head">Medicines</h1>
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
            <button className="btn btn-primary">Add Medicine</button>
          </div>
          <table class="table table-striped">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Company</th>
                <th scope="col">Qty</th>
                <th scope="col">Status</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mahacef</td>
                <td>Pain killer</td>
                <td>
                  Mahacef 200 Tablet contains Cefixime which belongs to the
                  cephalosporin class of antibiotic. It is used for the
                  treatment of bacterial infections .
                </td>
                <td>Mahacef</td>
                <td>150 Box</td>
                <td>Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mahacef</td>
                <td>Pain killer</td>
                <td>
                  Medical Description . It is used for the treatment of
                  bacterial infections of urinary tract, lungs, throat and
                  airways, gallbladd
                </td>
                <td>Mahacef</td>
                <td>150 Box</td>
                <td>Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mahacef</td>
                <td>Pain killer</td>
                <td>
                  Medical Description. Mahacef 200 Tablet contains Cefixime
                  which belongs to the cephalosporin class of antibiotic.
                </td>
                <td>Mahacef</td>
                <td>150 Box</td>
                <td>Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mahacef</td>
                <td>Pain killer</td>
                <td>
                  Medical Description. It is used for the treatment of bacterial
                  infections of urinary tract, lungs, throat and airways,
                  gallbladd
                </td>
                <td>Mahacef</td>
                <td>150 Box</td>
                <td>Available</td>
                <td className="d-flex">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Mahacef</td>
                <td>Pain killer</td>
                <td>
                  It is used for the treatment of bacterial infections of
                  urinary tract, lungs, throat and airways, gallbladd
                </td>
                <td>Mahacef</td>
                <td>150 Box</td>
                <td>Available</td>
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

export default Medicines;
