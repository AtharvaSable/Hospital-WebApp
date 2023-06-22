import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const DetailsBed = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const navigate = useNavigate();

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
      console.log("user deleted");
      navigate("/management/bedallotment");
    }
  };

  return (
    <div
      className="container mt-25 bg-light border border-1 mb-5 "
      style={{ marginTop: 100, paddingLeft: 30, paddingRight: 30 }}
    >
      <h1
        classname="headmain"
        style={{
          fontWeight: 400,
          marginTop: 30,
          textAlign: "center",
          color: "darkblue",
        }}
      >
        Welcome Back Doc!!
      </h1>
      <div
        classname="container ml-5"
        style={{ padding: 20, marginBottom: 10, overflow: "auto" }}
      ></div>
      <Card sx={{ maxWidth: 1800 }}>
        <CardContent sx={{ paddingBottom: 10 }}>
          <div className="add_btn">
            <NavLink to={`/dashboard/patient/editpatient/${getuserdata._id}`}>
              {" "}
              <button className="edit btn btn-primary mx-2">
                <CreateIcon />
              </button>
            </NavLink>
            <button
              className="edit btn btn-danger"
              onClick={() => deleteuser(getuserdata._id)}
            >
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="row  ">
            <div
              className="left_view col-lg-6 col-md-6 col-12 card text-white bg-dark mb-3 ml-3"
              style={{ marginLeft: 40 }}
            >
              <img
                src="/profile.png"
                style={{
                  width: 140,
                  marginBottom: 10,
                  height: 140,
                  marginLeft: 65,
                }}
                alt="profile"
              />
            </div>
            <div className=" centre_view col-lg-3 col-md-6 col-3 ">
              <h3 className="mt-5">
                Name: <span>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Bed Number: <span>{getuserdata.bednum}</span>
              </h3>
              <h3 className="mt-3">
                <MailOutlineIcon />
                Type: <span>{getuserdata.type}</span>
              </h3>
            </div>
            <div
              className="right_view col-lg-3 col-md-3 col-6 "
              style={{ marginRight: 50 }}
            >
              <h4 className="mt-3">
                <LocationOnIcon />
                Allotment Date: <span>{getuserdata.allotdate}</span>
              </h4>
              <h4 className="mt-3">
                <LocationOnIcon />
                Discharge Date: <span>{getuserdata.dischargedate}</span>
              </h4>
              <h4 className="mt-3">
                Description: <span>{getuserdata.desc}</span>
              </h4>
            </div>
          </div>
          <div
            classname="container ml-5"
            style={{ padding: 20, marginBottom: 10, overflow: "auto" }}
          ></div>
        </CardContent>
      </Card>
      <div
        classname="container ml-5"
        style={{ padding: 30, marginBottom: 10, overflow: "auto" }}
      ></div>
    </div>
  );
};

export default DetailsBed;
