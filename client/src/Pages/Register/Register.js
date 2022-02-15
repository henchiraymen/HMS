import React from "react";
import { Button } from "react-bootstrap";

import { useState } from "react";

import "./Register.css";

const Register = () => {
  const [showDocteur, setShowDocteur] = useState(false);
  const [showPatient, setShowPatient] = useState(true);

  return (
    <div className="register">
      {/*<div>
        <Button variant="warning" className="nav-btn">Registrer entant que Patient</Button>
        <Button variant="warning" className="nav-btn">Registrer entant que Docteur</Button>
      </div>*/}

      {showDocteur ? (
        <Button variant="warning" className="bascule"
          onClick={() => {
            setShowDocteur((prev) => !prev);
            setShowPatient((prev) => !prev);
          }}
        >
          Register Patient
        </Button>
      ) : (
        <Button variant="warning" className="bascule"
          onClick={() => {
            setShowDocteur((prev) => !prev);
            setShowPatient((prev) => !prev);
          }}
        >
          Register Docteur
        </Button>
      )}
      <>
        {showPatient && (
          <div className="card-patient">
            <h4 className="card-title"> Registrer entant que patient</h4>
            <form className="form">
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="form-control"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
              <input
                type="text"
                name="age"
                id="age"
                className="form-control"
                placeholder="Age"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone"
              />
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                placeholder="Address"
              />
            </form>
            <Button variant="warning" className="btn-register">
              Register
            </Button>
          </div>
        )}
        {showDocteur && (
          <div className="card-patient">
            <h4 className="card-title"> Registrer entant que Docteur</h4>
            <form className="form">
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="form-control"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone"
              />
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                placeholder="Address"
              />
              <input
                type="text"
                name="speciality"
                id="speciality"
                className="form-control"
                placeholder="Speciality"
              />
            </form>
            <Button variant="warning" className="btn-register">
              Register
            </Button>
          </div>
        )}
      </>
    </div>
  );
};

export default Register;
