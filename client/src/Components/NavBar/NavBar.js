import { Button } from "react-bootstrap";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div class="topnav">
      <div class="topnav-right">
        <Button variant="warning" className="btn">
          home
        </Button>
        <Button variant="warning" className="btn">
          Docteurs
        </Button>
        <Button variant="warning" className="btn">
          Register
        </Button>
        <Button variant="warning" className="btn">
          Login
        </Button>
      </div>
    </div>
    /*<header className="header">
      <div className="header">
        <h3>Hospital</h3>
        <div className="btns">
          <Button variant="info" className="btn">
            home
          </Button>
          <Button variant="info" className="btn">
            Docteurs
          </Button>
          <Button variant="info" className="btn">
            Register
          </Button>
          <Button variant="info" className="btn">
            Login
          </Button>
        </div>
      </div>
    </header>*/
  );
};

export default NavBar;
