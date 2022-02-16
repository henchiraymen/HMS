import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDocteurs } from "../../JS/Actions/docteur";
import DocteurDetails from "../../Components/DocteurDetails/DocteurDetails";

import "./Docteurs.css";

const Docteurs = () => {
  const docteurList = useSelector((state) => state.docteurReducer.docteurList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocteurs());
  }, [dispatch]);
  return (
    <div className="doctuers">
      {docteurList.map((docteur) => (
        <DocteurDetails docteur={docteur} key={docteur._id} />
      ))}
    </div>
  );
};

export default Docteurs;
