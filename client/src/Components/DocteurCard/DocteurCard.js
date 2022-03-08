import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import userImage from "../../assets/user.png";

import "./DocteurCard.css";

const DocteurCard = ({ docteur }) => {
  const isPatientAuth = useSelector(
    (state) => state.patientReducer.isPatientAuth
  );
  const isDocteurAuth = useSelector(
    (state) => state.docteurReducer.isDocteurAuth
  );

  return (
    <div>
      <Card className="card">
        <Card.Img className="image" variant="top" src={userImage} />
        <Card.Body>
          <h5>Dr. {docteur.fullName}</h5>
          <h6>Spécialité : {docteur.speciality}</h6>
          <div>
            {isDocteurAuth || isPatientAuth ? (
              <Link to="/docteurs">
                <Button className="b" variant="warning">
                  more information
                </Button>
              </Link>
            ) : (
              <Link to="/register">
                <Button className="b" variant="warning">
                  more information
                </Button>
              </Link>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocteurCard;
