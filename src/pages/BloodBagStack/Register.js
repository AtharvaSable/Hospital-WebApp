import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const RegisterBlood = () => {
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    bloodgroup: "",
    quantity: "",
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

    const { bloodgroup, quantity } = inpval;

    const res = await fetch("http://localhost:8003/registerblood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        bloodgroup,
        quantity,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      navigate("/management/bloodbag");
      setUdata(data);
      console.log("data added");
    }
  };

  return (
    <div className="container col-xl-6">
      <NavLink to="/management/bloodbag">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 25 }}>
        Add Data
      </h5>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Blood Group
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
              Quantity
            </label>
            <input
              type="number"
              value={inpval.quantity}
              onChange={setdata}
              name="quantity"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div>
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div>
        </div>
      </form>
    </div>
  );
};
export default RegisterBlood;
