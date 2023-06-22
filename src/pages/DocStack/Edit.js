import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const EditDoc = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const { updata, setUPdata } = useContext(updatedata);

  const navigate = useNavigate("");

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

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`http://localhost:8003/getdoc/${id}`, {
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

    const { name, email, work, add, mobile, desc, age } = inpval;

    const res2 = await fetch(`http://localhost:8003/updatedoc/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        add,
        mobile,
        desc,
        age,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      navigate("/doctor");
      setUPdata(data2);
    }
  };

  return (
    <div className="container col-xl-6">
      <NavLink to="/doctor">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 30 }}>
        Edit Doctor
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
              Sex
            </label>
            <input
              type="text"
              value={inpval.sex}
              onChange={setdata}
              name="gen"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Age
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
              name="work"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              City
            </label>
            <input
              type="text"
              value={inpval.city}
              onChange={setdata}
              name="add"
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
            onClick={updateuser}
            class="close btn btn-success"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDoc;
