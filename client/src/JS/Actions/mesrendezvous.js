import axios from "axios";
import {
  ADD_RENDEZVOUS_FAIL,
  ADD_RENDEZVOUS_SUCC,
  EDIT_RENDEZVOUS_FAIL,
  EDIT_RENDEZVOUS_SUCC,
  GET_RENDEZVOUS_FAIL,
  GET_RENDEZVOUS_LOAD,
  GET_RENDEZVOUS_SUCC,
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
  dispatch({ type: GET_RENDEZVOUS_LOAD });
  try {
    let result = await axios.get(
      `/api/rendezvous/getrendezvousbypatient/${patientId}`
    );
    dispatch({ type: GET_RENDEZVOUS_SUCC, payload: result.data.patientrendezvous });
  } catch (error) {
    dispatch({ type: GET_RENDEZVOUS_FAIL, payload: error.response.data });
  }
};

//get by docteur
export const getrendezvousbydocteur = (docteurId) => async (dispatch) => {
  dispatch({ type: GET_RENDEZVOUS_LOAD });
  try {
    let result = await axios.get(
      `/api/rendezvous/getrendezvousbydocteur/${docteurId}`
    );
    dispatch({ type: GET_RENDEZVOUS_SUCC, payload: result.data.docteurrendezvous });
  } catch (error) {
    dispatch({ type: GET_RENDEZVOUS_FAIL, payload: error.response.data });
  }
};

//edit 
export const editRendezvous = (rendezvousId, newRendezvous) => async (dispatch) => {
    try {
      await axios.put(`/api/rendezvous/update/${rendezvousId}`, newRendezvous);
      dispatch({ type: EDIT_RENDEZVOUS_SUCC });
    } catch (error) {
      dispatch({ type: EDIT_RENDEZVOUS_FAIL, payload: error.response.data });
    }
  };