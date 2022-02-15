import {
  REGISTER_FAIL,
  REGISTER_LOAD,
  REGISTER_SUCC,
} from "../ActionsType/patient";

const initSate = {
  load: false,
  patient: {},
  errors: [],
  isPatientAuth: false,
};

const patientReducer = (state = initSate, { type, payload }) => {
  switch (type) {
    case REGISTER_LOAD:
      return { ...state, load: true };
    case REGISTER_SUCC:
      return {
        ...state,
        load: false,
        patient: payload.patient,
        isPatientAuth: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        load: false,
        errors: payload.errors,
        isPatientAuth: false,
      };
    default:
      return state;
  }
};

export default patientReducer;
