import { Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { logouPatient } from "../../JS/Actions/patient";
import { logoutDocteur } from "../../JS/Actions/docteur";

const NavBar = () => {
  const isPatientAuth = useSelector(
    (state) => state.patientReducer.isPatientAuth
  );
  const isDocteurAuth = useSelector(
    (state) => state.docteurReducer.isDocteurAuth
  );
  const dispatch = useDispatch();

  return (
    <header>
      <div className="topnav">
        <div className="topnav-right">
          {isPatientAuth ? (
            <>
              <Link to="/">
                <Button variant="warning" className="btn">
                  home
                </Button>
              </Link>
              <Button variant="warning" className="btn">
                Docteurs
              </Button>
              <Button variant="warning" className="btn">
                Mes Rendez-vous
              </Button>
              <Link to="/login">
                <Button
                  variant="warning"
                  className="btn"
                  onClick={() => dispatch(logouPatient())}
                >
                  Logout
                </Button>
              </Link>
            </>
          ) : isDocteurAuth ? (
            <>
              <Link to="/">
                <Button variant="warning" className="btn">
                  home
                </Button>
              </Link>
              <Button variant="warning" className="btn">
                Mes Rendez-vous
              </Button>
              <Link to="/profile">
                <Button variant="warning" className="btn">
                  Profile
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="warning"
                  className="btn"
                  onClick={() => dispatch(logoutDocteur())}
                >
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <Button variant="warning" className="btn">
                  Home
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="warning" className="btn">
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="warning" className="btn">
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
