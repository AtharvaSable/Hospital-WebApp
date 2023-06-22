import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "./context/ContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const EditOp = () => {
  const { updata, setUPdata } = useContext(updatedata);

  const navigate = useNavigate("");

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

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`http://localhost:8003/getop/${id}`, {
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

    const { patientname, drname, desc, status, remark, date } = inpval;

    const res2 = await fetch(`http://localhost:8003/updateop/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
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

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      navigate("/dashboard/operationdetails");
      setUPdata(data2);
    }
  };

  return (
    <div className="container col-xl-6">
      <NavLink to="/dashboard/operationdetails">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 30 }}>
        Edit Detail
      </h5>
      <div
        classname="container ml-5"
        style={{ padding: 20, marginBottom: 10, overflow: "auto" }}
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
            />
          </div>
          <button type="submit" onClick={updateuser} class="btn btn-success">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditOp;
