import {
  PATIENT_FAIL,
  PATIENT_LOAD,
  PATIENT_LOGOUT,
  PATIENT_SUCC,
} from "../ActionsType/patient";

const initSate = {
  load: false,
  patient: {},
  errors: [],
  isPatientAuth: false,
  isDocteurAuth: false,
};

const patientReducer = (state = initSate, { type, payload }) => {
  switch (type) {
    case PATIENT_LOAD:
      return { ...state, load: true };
    case PATIENT_SUCC:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        patient: payload.patient,
        isPatientAuth: true,
      };
    case PATIENT_FAIL:
      return {
        ...state,
        load: false,
        errors: payload.errors,
        isPatientAuth: false,
      };
    case PATIENT_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        load: false,
        patient: {},
        errors: [],
        isPatientAuth: false,
        isDocteurAuth: false,
      };
    default:
      return state;
  }
};

export default patientReducer;
