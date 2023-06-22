import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const EditBlood = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const { updata, setUPdata } = useContext(updatedata);

  const navigate = useNavigate("");

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

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`http://localhost:8003/getblood/${id}`, {
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
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const { bloodgroup, quantity } = inpval;

    const res2 = await fetch(`http://localhost:8003/updateblood/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bloodgroup,
        quantity,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      navigate("/management/bloodbag");
      setUPdata(data2);
    }
  };

  return (
    <div className="container col-xl-6 ">
      <NavLink to="/management/bloodbag">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 30 }}>
        Edit Details
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
            style={{ padding: 20, marginTop: 15, overflow: "auto" }}
          ></div>
          <button type="submit" onClick={updateuser} class="btn btn-success">
            Update
          </button>
          <div
            classname="container ml-5"
            style={{ padding: 20, marginBottom: 50, overflow: "auto" }}
          ></div>
        </div>
      </form>
    </div>
  );
};

export default EditBlood;
