import {
  DOCTEUR_FAIL,
  DOCTEUR_LOAD,
  DOCTEUR_LOGOUT,
  DOCTEUR_SUCC,
  GET_DOCTEURS_FAIL,
  GET_DOCTEURS_LOAD,
  GET_DOCTEURS_SUCC,
} from "../ActionsType/docteur";

const initSate = {
  docteurList: [],
  load: false,
  docteur: {},
  errors: [],
  isPatientAuth: false,
  isDocteurAuth: false,
};

const docteurReducer = (state = initSate, { type, payload }) => {
  switch (type) {
    case GET_DOCTEURS_LOAD:
      return { ...state, load: true };
    case GET_DOCTEURS_SUCC:
      return { ...state, load: false, docteurList: payload };
    case GET_DOCTEURS_FAIL:
      return { ...state, load: false, errors: payload };
    case DOCTEUR_LOAD:
      return { ...state, load: true };
    case DOCTEUR_SUCC:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        docteur: payload.docteur,
        isDocteurAuth: true,
      };
    case DOCTEUR_FAIL:
      return {
        ...state,
        load: false,
        errors: payload.errors,
        isDocteurAuth: false,
      };
    case DOCTEUR_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        load: false,
        docteur: {},
        errors: [],
        isPatientAuth: false,
        isDocteurAuth: false,
      };
    default:
      return state;
  }
};

export default docteurReducer;
