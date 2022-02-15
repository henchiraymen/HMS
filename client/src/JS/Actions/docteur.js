import axios from "axios";

import {
  DOCTEUR_FAIL,
  DOCTEUR_LOAD,
  DOCTEUR_LOGOUT,
  DOCTEUR_SUCC,
  GET_DOCTEURS_FAIL,
  GET_DOCTEURS_LOAD,
  GET_DOCTEURS_SUCC,
} from "../ActionsType/docteur";

//register
export const registerDocteur = (newDocteur, history) => async (dispatch) => {
  dispatch({ type: DOCTEUR_LOAD });
  try {
    let result = await axios.post("/api/docteur/register", newDocteur);
    dispatch({ type: DOCTEUR_SUCC, payload: result.data }); //{msg,docteur,token}
    history.push("/profile");
  } catch (error) {
    dispatch({ type: DOCTEUR_FAIL, payload: error.response.data }); //{errors : []}
  }
};

//login
export const loginDocteur = (docteur, history) => async (dispatch) => {
  dispatch({ type: DOCTEUR_LOAD });
  try {
    let result = await axios.post("/api/docteur/login", docteur);
    dispatch({ type: DOCTEUR_SUCC, payload: result.data }); //{msg,patient,token}
    history.push("/profile");
  } catch (error) {
    dispatch({ type: DOCTEUR_FAIL, payload: error.response.data }); //{errors : []}
  }
};

//logout
export const logoutDocteur = () => {
  return {
    type: DOCTEUR_LOGOUT,
  };
};

//get all docteurs
export const getDocteurs = () => async (dispatch) => {
  dispatch({ type: GET_DOCTEURS_LOAD });
  try {
    let result = await axios.get("/api/docteur/alldocteurs");
    dispatch({ type: GET_DOCTEURS_SUCC, payload: result.data.docteurList });
  } catch (error) {
    dispatch({ type: GET_DOCTEURS_FAIL, payload: error.response.data });
  }
};
