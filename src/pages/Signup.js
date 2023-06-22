import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/index";
import "./Signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-11 offset-sm-0 text-left">
          <form>
            <div className="form-goup">
              <label className="text-dark">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-goup">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-goup">
              <label className="text-dark">Passsword</label>
              <input
                className="form-control "
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-primary btn-block mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created succesfully.Please
            <Link to="/signin">Signin Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="signup-main">
        <div>
          <img
            src="https://nshcs.hee.nhs.uk/wp-content/uploads/2019/11/Medical-icon-network-iStock-695360362-e1574150479852.jpeg"
            style={{ height: "100vh", width: "100%" }}
          />
        </div>

        {/* <div> <h2 className="signup-heading">New Here?</h2>
      <h2 className="signup-heading">Worry not signup here!</h2></div> */}

        <div>
          <h2 className="signup-heading">JESWANI MULTISPECIALITY HOSPITAL</h2>
          <img
            className="signup-img"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWFiMW?ver=afdb&q=90&m=6&h=405&w=720&b=%23FFFFFFFF&l=f&o=t&aim=true"
          />
          <h4 className="signup-miniheading">Sign up here!</h4>
          <div className="signup-form">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
          </div>
        </div>
        {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
      </div>
    </>
  );
};

export default Signup;
