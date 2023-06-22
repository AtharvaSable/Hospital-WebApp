import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const RegisterBed = () => {
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    bednum: "",
    type: "",
    name: "",
    allotdate: "",
    dischargedate: "",
    desc: "",
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

    const { bednum, type, name, allotdate, dischargedate, desc } = inpval;

    const res = await fetch("http://localhost:8003/registerbed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        bednum,
        type,
        name,
        allotdate,
        dischargedate,
        desc,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      navigate("/management/bedallotment");
      setUdata(data);
      console.log("data added");
    }
  };

  return (
    <div className="container col-xl-6">
      <NavLink to="/management/bedallotment">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 25 }}>
        Add Allotment
      </h5>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Bed Number
            </label>
            <input
              type="number"
              value={inpval.bednum}
              onChange={setdata}
              name="bednum"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Type
            </label>
            <input
              type="text"
              value={inpval.type}
              onChange={setdata}
              name="type"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Allotment Date
            </label>
            <input
              type="date"
              value={inpval.allotdate}
              onChange={setdata}
              name="allotdate"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Discharge Date
            </label>
            <input
              type="date"
              value={inpval.dischargedate}
              onChange={setdata}
              name="dischargedate"
              class="form-control"
              id="start"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
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
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default RegisterBed;
