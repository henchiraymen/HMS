import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getrendezvousbypatient } from "../../JS/Actions/mesrendezvous";
import RendezvousDetails from "../../Components/RendezvousDetails/RendezvousDetails";

import "./Patientrendezvous.css";

const Patientrendezvous = () => {
  const patient = useSelector((state) => state.patientReducer.patient);
  console.log(patient);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getrendezvousbypatient(patient._id));
  }, [dispatch, patient._id]);

  const mesrendezvous = useSelector(
    (state) => state.mesrendezvousReducer.patientrendezvous
  );
  console.log(mesrendezvous);

  return (
    <div className="listR">
      {mesrendezvous.map((rendezvous) => (
        <RendezvousDetails rendezvous={rendezvous} key={rendezvous._id} />
      ))}
    </div>
  );
};

export default Patientrendezvous;
