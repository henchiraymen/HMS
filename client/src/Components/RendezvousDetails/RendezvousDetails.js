import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDocteur } from "../../JS/Actions/docteur";

const RendezvousDetails = (rendezvous) => {
  const patient = useSelector((state) => state.patientReducer.patient);

  const docteur = getDocteur(rendezvous.docteurId);

  return (
    <div>
      <div className="part">
        <h5>Dr. {docteur.fullName}</h5>
        <h6>Patient : {patient.fullName}</h6>
        <h6>Date : {rendezvous.date}</h6>
        <h6>Heure : {rendezvous.time}</h6>
        <h6>Status : {rendezvous.status}</h6>
      </div>
    </div>
  );
};

export default RendezvousDetails;
