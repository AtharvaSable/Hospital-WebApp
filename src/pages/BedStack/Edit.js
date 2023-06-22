import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const EditBed = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const { updata, setUPdata } = useContext(updatedata);

  const navigate = useNavigate("");

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

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`http://localhost:8003/getbed/${id}`, {
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

    const { bednum, type, name, allotdate, dischargedate, desc } = inpval;

    const res2 = await fetch(`http://localhost:8003/updatebed/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
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

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      navigate("/management/bedallotment");
      setUPdata(data2);
    }
  };

  return (
    <div className="container col-xl-6">
      <NavLink to="/management/bedallotment">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 30 }}>
        Edit Allotment
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
              name="dichargedate"
              class="form-control"
              id="exampleInputPassword1"
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
          <div
            classname="container ml-5"
            style={{ padding: 20, marginBottom: 10, overflow: "auto" }}
          ></div>
          <button type="submit" onClick={updateuser} class="btn btn-success">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBed;
