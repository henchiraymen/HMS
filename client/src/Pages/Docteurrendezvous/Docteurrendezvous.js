import React from "react";
import { useSelector } from "react-redux";

const Docteurrendezvous = () => {
  const docteur = useSelector((state) => state.docteurReducer.docteur);
  const patient = useSelector((state) => state.patientReducer.patient);

  return <div>Docteurrendezvous</div>;
};

export default Docteurrendezvous;
