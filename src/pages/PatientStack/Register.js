import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";

const RegisterPatient = () => {
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    sex: "",
    age: "",
    mobile: "",
    bloodgroup: "",
    city: "",
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

    const { name, sex, age, mobile, bloodgroup, city, desc } = inpval;

    const res = await fetch("http://localhost:8003/registerpatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        sex,
        age,
        mobile,
        bloodgroup,
        city,
        desc,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      navigate("/dashboard/patient");
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
      {/* <NavLink to="/dashboard/patient">
        <strong>Back</strong>
      </NavLink> */}
      <NavLink to="/dashboard/patient">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 25 }}>
        Add New Patient
      </h5>
      <form className="mt-1">
        <div className="row">
          {/* <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div> */}
          <div className="row">
            <div class="col-md-6 mb-3">
              {/* <label for="form3Example1m" class="form-label">
                Name
              </label> */}
              <input
                type="text"
                value={inpval.name}
                onChange={setdata}
                name="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
            </div>
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Sex
              </label> */}
              <input
                type="text"
                value={inpval.sex}
                onChange={setdata}
                name="sex"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Gender"
              />
            </div>
          </div>
          <div className="row">
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Age
              </label> */}
              <input
                type="text"
                value={inpval.age}
                onChange={setdata}
                name="age"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Age"
              />
            </div>
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Mobile
              </label> */}
              <input
                type="number"
                value={inpval.mobile}
                onChange={setdata}
                name="mobile"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                BloodGroup
              </label> */}
              <input
                type="text"
                value={inpval.bloodgroup}
                onChange={setdata}
                name="bloodgroup"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Blood Group"
              />
            </div>
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                City
              </label> */}
              <input
                type="text"
                value={inpval.city}
                onChange={setdata}
                name="city"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="City"
              />
            </div>
          </div>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div>
          <div>
            <div class="mb-3 col-lg-12 col-md-12 col-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Description
              </label> */}
              <textarea
                name="desc"
                value={inpval.desc}
                onChange={setdata}
                className="form-control"
                id=""
                cols="30"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div>
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto", marginBottom: 10 }}
          ></div>
        </div>
      </form>
    </div>
  );
};
export default RegisterPatient;
