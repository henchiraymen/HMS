import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocteurRendezvous from "../../Components/DocteurRendezvous/DocteurRendezvous";

import { getrendezvousbydocteur } from "../../JS/Actions/mesrendezvous";

const Docteurrendezvous = () => {
  const docteur = useSelector((state) => state.docteurReducer.docteur);
  console.log(docteur);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getrendezvousbydocteur(docteur._id));
  }, [dispatch, docteur._id]);

  const mesrendezvous = useSelector(
    (state) => state.mesrendezvousReducer.docteurrendezvous
  );
  console.log(mesrendezvous);
  return (
    <div className="listR">
      {mesrendezvous.map((rendezvous) => (
        <DocteurRendezvous rendezvous={rendezvous} key={rendezvous._id} />
      ))}
    </div>
  );
};

export default Docteurrendezvous;
