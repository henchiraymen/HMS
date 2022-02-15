import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDocteurs } from "../../JS/Actions/docteur";
import DocteurCard from "../../Components/DocteurCard/DocteurCard";

import "./Landpage.css";

const Landpage = () => {
  const docteurList = useSelector((state) => state.docteurReducer.docteurList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocteurs());
  }, [dispatch]);
  return (
    <div>
      <div> 
        <h4 className="title"> Bienvenue au site officiel de l'Hopital Régional de Ben Guerdane</h4>
      </div>
      <div className="doctuerlist">
        {docteurList.map((docteur) => (
          <DocteurCard docteur={docteur} key={docteur._id} />
        ))}
      </div>
    </div>
  );
};

export default Landpage;
