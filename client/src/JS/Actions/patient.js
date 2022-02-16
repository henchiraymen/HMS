import axios from "axios";

import {
  CURRENT_PATIENT,
  PATIENT_FAIL,
  PATIENT_LOAD,
  PATIENT_LOGOUT,
  PATIENT_SUCC,
} from "../ActionsType/patient";

//register patient
export const registerPatient = (newPatient, history) => async (dispatch) => {
  dispatch({ type: PATIENT_LOAD });
  try {
    let result = await axios.post("/api/patient/register", newPatient);
    dispatch({ type: PATIENT_SUCC, payload: result.data }); //{msg,patient,token}
    history.push("/patientrendezvous");
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
    history.push("/patientrendezvous");
  } catch (error) {
    dispatch({ type: PATIENT_FAIL, payload: error.response.data }); //{errors : []}
  }
};

//logout patient
export const logouPatient = () => {
  return {
    type: PATIENT_LOGOUT,
  };
};

//current
export const currentPatient = () => async (dispatch) => {
  dispatch({ type: PATIENT_LOAD });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api:patient/current", config);
    dispatch({ type: CURRENT_PATIENT, payload: result.data });
  } catch (error) {
    dispatch({ type: PATIENT_FAIL, payload: error.response.data }); //{errors : []}
  }
};
