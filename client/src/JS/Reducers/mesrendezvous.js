import {
  ADD_RENDEZVOUS_FAIL,
  DOCTEUR_RENDEZVOUS_FAIL,
  DOCTEUR_RENDEZVOUS_LOAD,
  DOCTEUR_RENDEZVOUS_SUCC,
  PATIENT_RENDEZVOUS_FAIL,
  PATIENT_RENDEZVOUS_LOAD,
  PATIENT_RENDEZVOUS_SUCC,
} from "../ActionsType/mesrendezvous";

const initSate = {
  load: false,
  errors: [],
  patientrendezvous: [],
  docteurrendezvous: [],
};

const mesrendezvousReducer = (state = initSate, { type, payload }) => {
  switch (type) {
    case ADD_RENDEZVOUS_FAIL:
      return { ...state, errors: payload };
    case DOCTEUR_RENDEZVOUS_LOAD:
      return { ...state, load: true };
    case DOCTEUR_RENDEZVOUS_SUCC:
      return { ...state, load: false, docteurrendezvous: payload };
    case DOCTEUR_RENDEZVOUS_FAIL:
      return { ...state, load: false, errors: payload };
    case PATIENT_RENDEZVOUS_LOAD:
      return { ...state, load: true };
    case PATIENT_RENDEZVOUS_SUCC:
      return { ...state, load: false, patientrendezvous: payload };
    case PATIENT_RENDEZVOUS_FAIL:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default mesrendezvousReducer;
