import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import EditPatient from "./views/EditPatient";
import EditProfessional from "./views/EditProfessional";
import ExamData from "./views/ExamData";
import Measurement from "./views/Measurement";
import PatientDetails from "./views/PatientDetails";
import Profile from "./views/Profile";
import RegisterPatient from "./views/RegisterPatient";
import SignIn from "./views/SignIn";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/register-patient" exact component={RegisterPatient} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/patient-details" exact component={PatientDetails} />
    <Route path="/measurement" exact component={Measurement} />
    <Route path="/exam-data" exact component={ExamData} />
    <Route path="/edit-professional" exact component={EditProfessional} />
    <Route path="/EditPatient" exact component={EditPatient} />
    <Route path="/dashboard" exact component={Dashboard} />
  </BrowserRouter>
);

export default Routes;
