import React, { useState, useEffect, useContext } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./Bed.css";

const HomeBed = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch("http://localhost:8003/getbed", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`http://localhost:8003/deletebed/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("bed deleted");
      setDLTdata(deletedata);
      getdata();
    }
  };

  return (
    <>
      {udata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{udata.name}</strong> added succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}
      {updata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{updata.name}</strong> updated succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {dltdata ? (
        <>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{dltdata.name}</strong> deleted succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}
      <div>
        <div>
          <Header />
          <Sidebar />
        </div>
        <div class="row">
          <div
            class="col-md-6 mb-3"
            style={{
              paddingBottom: 10,
              justifyContent: "center",
              paddingLeft: 25,
            }}
          >
            <h1 className="head">Bed Allotment </h1>
          </div>
          <div className="col-md-6 mb-3 mt-4 ">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="close btn btn-outline-success" type="submit">
                <i class="fas fa-search"></i>
                Search
              </button>
            </form>
          </div>
        </div>
        <hr></hr>
        <div className="parent">
          <div
            className="container "
            style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
          >
            <div className="add_btn mt-2 mb-2 ">
              <NavLink
                to="/management/bedallotment/registerbed"
                className="btn btn-primary"
              >
                Reserve Bed
              </NavLink>
            </div>

            <table class="table table-striped table-hover table-responsive">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Id</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Bed Number</th>
                  <th scope="col">Type</th>
                  <th scope="col">Allotment Date</th>
                  <th scope="col">Discharge Date</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {getuserdata.map((element, id) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.bednum}</td>
                        <td>{element.type}</td>
                        <td>{element.allotdate}</td>
                        <td>{element.dischargedate}</td>
                        <td className="d-flex justify-content-between">
                          <NavLink to={`viewbed/${element._id}`}>
                            {" "}
                            <button className="close btn btn-success">
                              <RemoveRedEyeIcon />
                            </button>
                          </NavLink>
                          <NavLink to={`editbed/${element._id}`}>
                            {" "}
                            <button className="close btn btn-primary">
                              <CreateIcon />
                            </button>
                          </NavLink>
                          <button
                            className="close btn btn-danger"
                            onClick={() => deleteuser(element._id)}
                          >
                            <DeleteOutlineIcon />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBed;
