import React from "react";

import "./RendezvousDetails.css";

const RendezvousDetails = ({ rendezvous }) => {
  

  return (
    <div>
      <div className="R-card">
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
        </div>
      </div>
    </div>
  );
};

export default RendezvousDetails;
