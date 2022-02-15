import React from "react";
import { Card, Button } from "react-bootstrap";

import userImage from "../../assets/user.png";

import "./DocteurCard.css";

const DocteurCard = ({ docteur }) => {
  return (
    <div>
      <Card className="card">
        <Card.Img className="image" variant="top" src={userImage} />
        <Card.Body>
          <h5>Docteur : {docteur.fullName}</h5>
          <h6>Speciality : {docteur.speciality}</h6>
          <div>
            <Button className="b" variant="warning">
              more information
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocteurCard;
