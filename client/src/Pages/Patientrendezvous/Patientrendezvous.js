import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getrendezvousbypatient } from "../../JS/Actions/mesrendezvous";
import RendezvousDetails from "../../Components/RendezvousDetails/RendezvousDetails";

const Patientrendezvous = () => {
  const patient = useSelector((state) => state.patientReducer.patient);
  const mesrendezvous = useSelector(
    (state) => state.mesrendezvousReducer.patientrendezvous
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getrendezvousbypatient(patient._id));
  }, [dispatch]);

  return (
    <div>
      {mesrendezvous.map((rendezvous) => (
        <RendezvousDetails rendezvous={rendezvous} key={rendezvous._id} />
      ))}
    </div>
  );
};

export default Patientrendezvous;
