import axios from "axios";

import {
  CURRENT_DOCTEUR,
  DELETE_DOCTEUR_FAIL,
  DELETE_DOCTEUR_SUCC,
  DOCTEUR_FAIL,
  DOCTEUR_LOAD,
  DOCTEUR_LOGOUT,
  DOCTEUR_SUCC,
  EDIT_DOCTEUR_FAIL,
  EDIT_DOCTEUR_SUCC,
  GET_DOCTEURS_FAIL,
  GET_DOCTEURS_LOAD,
  GET_DOCTEURS_SUCC,
  GET_DOCTEUR_FAIL,
  GET_DOCTEUR_LOAD,
  GET_DOCTEUR_SUCC,
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

//get docteur by id
export const getDocteur = (docteurId) => async (dispatch) => {
  dispatch({ type: GET_DOCTEUR_LOAD });
  try {
    let result = await axios.get(`/api/docteur/getDocteur/${docteurId}`);
    dispatch({ type: GET_DOCTEUR_SUCC, payload: result.data.docteurToFind.fullName });
  } catch (error) {
    dispatch({ type: GET_DOCTEUR_FAIL, payload: error.response.data });
  }
};

// current docteur
export const currentDocteur = () => async (dispatch) => {
  dispatch({ type: DOCTEUR_LOAD });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/docteur/current", config);
    dispatch({ type: CURRENT_DOCTEUR, payload: result.data });
  } catch (error) {
    dispatch({ type: DOCTEUR_FAIL, payload: error.response.data }); //{errors : []}
  }
};

//edit docteur
export const editDocteur = (docteurId, newDocteur) => async (dispatch) => {
  try {
    await axios.put(`/api/docteur/update/${docteurId}`, newDocteur);
    dispatch({ type: EDIT_DOCTEUR_SUCC });
    localStorage.removeItem("token");
  } catch (error) {
    dispatch({ type: EDIT_DOCTEUR_FAIL, payload: error.response.data });
  }
};

//delete docteur
export const deleteDocteur = (docteurId) => async (dispatch) => {
  try {
    await axios.delete(`/api/docteur/delete/${docteurId}`);
    dispatch({ type: DELETE_DOCTEUR_SUCC });
  } catch (error) {
    dispatch({ type: DELETE_DOCTEUR_FAIL, payload: error.response.data });
  }
};
