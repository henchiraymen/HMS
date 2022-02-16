import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { registerPatient } from "../../JS/Actions/patient";
import { registerDocteur } from "../../JS/Actions/docteur";

import "./Register.css";

const Register = ({ history }) => {
  const [newPatient, setNewPatient] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    address: "",
  });

  const [newDocteur, setNewDocteur] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    speciality: "",
  });

  const dispatch = useDispatch();

  const handleChangeNewPatient = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const handleChangeNewDocteur = (e) => {
    setNewDocteur({ ...newDocteur, [e.target.name]: e.target.value });
  };

  const [showDocteur, setShowDocteur] = useState(false);
  const [showPatient, setShowPatient] = useState(true);

  return (
    <div className="register">
      {/*<div>
        <Button variant="warning" className="nav-btn">Registrer entant que Patient</Button>
        <Button variant="warning" className="nav-btn">Registrer entant que Docteur</Button>
      </div>*/}

      {showDocteur ? (
        <Button
          variant="warning"
          className="bascule"
          onClick={() => {
            setShowDocteur((prev) => !prev);
            setShowPatient((prev) => !prev);
          }}
        >
          Register Patient
        </Button>
      ) : (
        <Button
          variant="warning"
          className="bascule"
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
                value={newPatient.fullName}
                onChange={handleChangeNewPatient}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                value={newPatient.email}
                onChange={handleChangeNewPatient}
              />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                value={newPatient.password}
                onChange={handleChangeNewPatient}
              />
              <input
                type="text"
                name="age"
                id="age"
                className="form-control"
                placeholder="Age"
                value={newPatient.age}
                onChange={handleChangeNewPatient}
              />
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone"
                value={newPatient.phone}
                onChange={handleChangeNewPatient}
              />
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                placeholder="Address"
                value={newPatient.address}
                onChange={handleChangeNewPatient}
              />
            </form>
            <Button
              variant="warning"
              className="btn-register"
              onClick={() => dispatch(registerPatient(newPatient, history))}
            >
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
                value={newDocteur.fullName}
                onChange={handleChangeNewDocteur}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                value={newDocteur.email}
                onChange={handleChangeNewDocteur}
              />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                value={newDocteur.password}
                onChange={handleChangeNewDocteur}
              />
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone"
                value={newDocteur.phone}
                onChange={handleChangeNewDocteur}
              />
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                placeholder="Address"
                value={newDocteur.address}
                onChange={handleChangeNewDocteur}
              />
              <input
                type="text"
                name="speciality"
                id="speciality"
                className="form-control"
                placeholder="Speciality"
                value={newDocteur.speciality}
                onChange={handleChangeNewDocteur}
              />
            </form>
            <Button
              variant="warning"
              className="btn-register"
              onClick={() => dispatch(registerDocteur(newDocteur, history))}
            >
              Register
            </Button>
          </div>
        )}
      </>
    </div>
  );
};

export default Register;
