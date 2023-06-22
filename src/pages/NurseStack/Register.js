import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const RegisterNurse = () => {
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

    const res = await fetch("http://localhost:8003/registernurse", {
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
      navigate("/nurse");
      setUdata(data);
      console.log("data added");
    }
  };

  return (
    <div className="container col-xl-6">
      <NavLink to="/nurse">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 25 }}>
        Add New Nurse
      </h5>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              sex
            </label>
            <input
              type="text"
              value={inpval.sex}
              onChange={setdata}
              name="sex"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              age
            </label>
            <input
              type="text"
              value={inpval.age}
              onChange={setdata}
              name="age"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile
            </label>
            <input
              type="number"
              value={inpval.mobile}
              onChange={setdata}
              name="mobile"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              BloodGroup
            </label>
            <input
              type="text"
              value={inpval.bloodgroup}
              onChange={setdata}
              name="bloodgroup"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              city
            </label>
            <input
              type="text"
              value={inpval.city}
              onChange={setdata}
              name="city"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              name="desc"
              value={inpval.desc}
              onChange={setdata}
              className="form-control"
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={addinpdata}
            class="edit btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default RegisterNurse;
