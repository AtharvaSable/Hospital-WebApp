import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const RegisterOp = () => {
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    patientname: "",
    drname: "",
    desc: "",
    status: "",
    remark: "",
    date: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { patientname, drname, desc, status, remark, date } = inpval;

    const res = await fetch("http://localhost:8003/registerop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        patientname,
        drname,
        desc,
        status,
        remark,
        date,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      navigate("/dashboard/operationdetails");
      setUdata(data);
      console.log("data added");
    }
  };

  return (
    <div
      className="container col-xl-6"
      style={{
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <NavLink to="/dashboard/operationdetails">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 25 }}>
        Add New Detail
      </h5>
      <div
        classname="container ml-5"
        style={{ padding: 10, overflow: "auto" }}
      ></div>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Patient Name
            </label>
            <input
              type="text"
              value={inpval.patientname}
              onChange={setdata}
              name="patientname"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Doctor Name
            </label>
            <input
              type="text"
              value={inpval.drname}
              onChange={setdata}
              name="drname"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <input
              type="text"
              value={inpval.desc}
              onChange={setdata}
              name="desc"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Status
            </label>
            <input
              type="text"
              value={inpval.status}
              onChange={setdata}
              name="status"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Remark
            </label>
            <input
              type="text"
              value={inpval.remark}
              onChange={setdata}
              name="remark"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Date
            </label>
            <input
              type="date"
              value={inpval.date}
              onChange={setdata}
              name="date"
              class="form-control"
              id="exampleInputPassword1"
              rows="5"
            />
          </div>
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default RegisterOp;
