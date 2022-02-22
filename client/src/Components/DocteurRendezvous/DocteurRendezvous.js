import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editRendezvous } from "../../JS/Actions/mesrendezvous";

import "./DocteurRendezvous.css";

const DocteurRendezvous = ({ rendezvous }) => {
  const [newRendezvous, setNewRendezvous] = useState({
    patientId: rendezvous.patientId,
    docteurId: rendezvous.docteurId,
    docteurName: rendezvous.docteurName,
    patientName: rendezvous.patientName,
    date: rendezvous.date,
    time: rendezvous.time,
    status: "En attente",
  });

  const dispatch = useDispatch();

  const ConfirmRendezvous = (e) => {
    setNewRendezvous({
      ...newRendezvous,
      status: "Confirmé",
    });
  };

  const RejeterRendezvous = (e) => {
    setNewRendezvous({
      ...newRendezvous,
      status: "Rejeté",
    });
  };

  return (
    <div>
      <div className="D-card">
        <div className="R-card-body">
          <h5 className="R-card-title">Rendez-vous</h5>
          <h6 className="R-card-subtitle mb-2 text-muted">
            Patient : {rendezvous.patientName}
          </h6>
          <h6 className="R-card-subtitle mb-2 text-muted">
            Docteur : {rendezvous.docteurName}
          </h6>
          <p>Date : {rendezvous.date} </p>
          <p> Heure : {rendezvous.time}</p>
          <h6>Status : {rendezvous.status}</h6>
          <Button
            className="bb"
            variant="success"
            onClick={() => {
              ConfirmRendezvous();
              dispatch(editRendezvous(rendezvous._id, newRendezvous));
            }}
          >
            {" "}
            confirmer{" "}
          </Button>
          <Button
            className="bb"
            variant="danger"
            onClick={() => {
              RejeterRendezvous();
              dispatch(editRendezvous(rendezvous._id, newRendezvous));
            }}
          >
            {" "}
            rejeter{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocteurRendezvous;
