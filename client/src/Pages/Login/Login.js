import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginDocteur } from "../../JS/Actions/docteur";
import { loginPatient } from "../../JS/Actions/patient";

import "./Login.css";
const Login = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="card-login">
        <h4 className="card-title"> Login </h4>
        <form className="form">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={user.email}
            onChange={handleChangeUser}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
            value={user.password}
            onChange={handleChangeUser}
          />
        </form>
        <Button
          variant="warning"
          className="btn-register"
          onClick={() => {
            dispatch(loginPatient(user, history));
            dispatch(loginDocteur(user, history));
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
