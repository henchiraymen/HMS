import axios from "axios";
import {
  ADD_RENDEZVOUS_FAIL,
  ADD_RENDEZVOUS_SUCC,
  DOCTEUR_RENDEZVOUS_FAIL,
  DOCTEUR_RENDEZVOUS_LOAD,
  DOCTEUR_RENDEZVOUS_SUCC,
  EDIT_RENDEZVOUS_FAIL,
  EDIT_RENDEZVOUS_SUCC,
  PATIENT_RENDEZVOUS_FAIL,
  PATIENT_RENDEZVOUS_LOAD,
  PATIENT_RENDEZVOUS_SUCC,
} from "../ActionsType/mesrendezvous";

//add rendezvous
export const addRendezvous = (newRendezvous) => async (dispatch) => {
  try {
    await axios.post("/api/rendezvous/add", newRendezvous);
    dispatch({ type: ADD_RENDEZVOUS_SUCC });
  } catch (error) {
    dispatch({ type: ADD_RENDEZVOUS_FAIL, payload: error.response.data }); //{errors : []}
  }
};

//get by patient
export const getrendezvousbypatient = (patientId) => async (dispatch) => {
  dispatch({ type: PATIENT_RENDEZVOUS_LOAD });
  try {
    let result = await axios.get(
      `/api/rendezvous/getrendezvousbypatient/${patientId}`
    );
    dispatch({
      type: PATIENT_RENDEZVOUS_SUCC,
      payload: result.data.rendezvousToFind,
    });
  } catch (error) {
    dispatch({ type: PATIENT_RENDEZVOUS_FAIL, payload: error.response.data });
  }
};

//get by docteur
export const getrendezvousbydocteur = (docteurId) => async (dispatch) => {
  dispatch({ type: DOCTEUR_RENDEZVOUS_LOAD });
  try {
    let result = await axios.get(
      `/api/rendezvous/getrendezvousbydocteur/${docteurId}`
    );
    dispatch({
      type: DOCTEUR_RENDEZVOUS_SUCC,
      payload: result.data.rendezvousToFind,
    });
  } catch (error) {
    dispatch({ type: DOCTEUR_RENDEZVOUS_FAIL, payload: error.response.data });
  }
};

//edit
export const editRendezvous =
  (rendezvousId, newRendezvous) => async (dispatch) => {
    try {
      await axios.put(`/api/rendezvous/update/${rendezvousId}`, newRendezvous);
      dispatch({ type: EDIT_RENDEZVOUS_SUCC });
    } catch (error) {
      dispatch({ type: EDIT_RENDEZVOUS_FAIL, payload: error.response.data });
    }
  };
