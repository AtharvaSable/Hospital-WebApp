import "./App.css";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patient from "./pages/Patient";
import OperationDetails from "./pages/OperationDetails";
import Doctor from "./pages/DoctorDetails/Doctor";
import BedAllotment from "./pages/BedAllotment";
import BloodBag from "./pages/BloodBag";
import Medicines from "./pages/Medicines";
import Management from "./pages/Management";
import Nurse from "./pages/Nurse";
import Home from "./pages/Home";
import AddEdit from "./pages/DoctorDetails/AddEdit";
import View from "./pages/DoctorDetails/View";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Dashboard from "./pages/Dash/Dashboard";
import HomeSupport from "./comp_crud/Home";
import Details from "./comp_crud/Details";
import Edit from "./comp_crud/Edit";
import Register from "./comp_crud/Register";
import HomeNurse from "./pages/NurseStack/Home";
import RegisterNurse from "./pages/NurseStack/Register";
import EditNurse from "./pages/NurseStack/Edit";
import DetailsNurse from "./pages/NurseStack/Details";
import HomeDoc from "./pages/DocStack/Home";
import RegisterDoc from "./pages/DocStack/Register";
import EditDoc from "./pages/DocStack/Edit";
import DetailsDoc from "./pages/DocStack/Details";
import HomePatient from "./pages/PatientStack/Home";
import RegisterPatient from "./pages/PatientStack/Register";
import EditPatient from "./pages/PatientStack/Edit";
import DetailsPatient from "./pages/PatientStack/Details";
import HomeBed from "./pages/BedStack/Home";
import RegisterBed from "./pages/BedStack/Register";
import DetailsBed from "./pages/BedStack/Details";
import EditBed from "./pages/BedStack/Edit";
import HomeBlood from "./pages/BloodBagStack/Home";
import RegisterBlood from "./pages/BloodBagStack/Register";
import EditBlood from "./pages/BloodBagStack/Edit";
import HomeOp from "./pages/OperationStack/Home";
import RegisterOp from "./pages/OperationStack/Register";
import DetailsOp from "./pages/OperationStack/Details";
import EditOp from "./pages/OperationStack/Edit";

function App() {
  return (
    <Router>
      {/* <Sidebar classname="Sidebar" /> */}
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/operationdetails" element={<HomeOp />} />
        <Route
          path="/dashboard/operationdetails/registerop"
          element={<RegisterOp />}
        />
        <Route
          path="/dashboard/operationdetails/editop/:id"
          element={<EditOp />}
        />
        <Route
          path="/dashboard/operationdetails/viewop/:id"
          element={<DetailsOp />}
        />

        <Route path="/dashboard/patient" element={<HomePatient />} />
        <Route
          path="/dashboard/patient/registerpatient"
          element={<RegisterPatient />}
        />
        <Route
          path="/dashboard/patient/editpatient/:id"
          element={<EditPatient />}
        />
        <Route
          path="/dashboard/patient/viewpatient/:id"
          element={<DetailsPatient />}
        />

        <Route path="/management/bedallotment" element={<HomeBed />} />
        <Route
          path="/management/bedallotment/registerbed"
          element={<RegisterBed />}
        />
        <Route
          path="/management/bedallotment/editbed/:id"
          element={<EditBed />}
        />
        <Route
          path="/management/bedallotment/viewbed/:id"
          element={<DetailsBed />}
        />

        <Route path="/management/bloodbag" element={<HomeBlood />} />
        <Route
          path="/management/bloodbag/registerblood"
          element={<RegisterBlood />}
        />
        <Route
          path="/management/bloodbag/editblood/:id"
          element={<EditBlood />}
        />

        <Route path="/management/medicines" element={<Medicines />} />

        <Route path="/doctor" element={<HomeDoc />} />
        <Route path="/doctor/registerdoc" element={<RegisterDoc />} />
        <Route path="/doctor/editdoc/:id" element={<EditDoc />} />
        <Route path="/doctor/viewdoc/:id" element={<DetailsDoc />} />

        <Route path="/nurse" element={<HomeNurse />} />
        <Route path="/nurse/registernurse" element={<RegisterNurse />} />
        <Route path="/nurse/editnurse/:id" element={<EditNurse />} />
        <Route path="/nurse/viewnurse/:id" element={<DetailsNurse />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/support" element={<HomeSupport />} />
        <Route path="/support/register" element={<Register />} />
        <Route path="/support/edit/:id" element={<Edit />} />
        <Route path="/support/view/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
