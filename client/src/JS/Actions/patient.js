import axios from "axios";

import {
  PATIENT_FAIL,
  PATIENT_LOAD,
  PATIENT_LOGOUT,
  PATIENT_SUCC,
} from "../ActionsType/patient";

//register patient
export const registerPatient = (newPatient,history) => async (dispatch) => {
  dispatch({ type: PATIENT_LOAD });
  try {
    let result = await axios.post("/api/patient/register", newPatient);
    dispatch({ type: PATIENT_SUCC, payload: result.data }); //{msg,patient,token}
    history.push("/mesrendezvous");
  } catch (error) {
    dispatch({ type: PATIENT_FAIL, payload: error.response.data }); //{errors : []}
  }
};

//login patient
export const loginPatient = (patient, history) => async (dispatch) => {
  dispatch({ type: PATIENT_LOAD });
  try {
    let result = await axios.post("/api/patient/login", patient);
    dispatch({ type: PATIENT_SUCC, payload: result.data }); //{msg,patient,token}
    history.push("/mesrendezvous");
  } catch (error) {
    dispatch({ type: PATIENT_FAIL, payload: error.response.data }); //{errors : []}
  }
};

//logout patient
export const logouPatient = () => {
  return {
    type: PATIENT_LOGOUT
  }
}