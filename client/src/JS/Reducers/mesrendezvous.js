import {
  ADD_RENDEZVOUS_FAIL,
  GET_RENDEZVOUS_FAIL,
  GET_RENDEZVOUS_LOAD,
  GET_RENDEZVOUS_SUCC,
} from "../ActionsType/mesrendezvous";

const initSate = {
  load: false,
  patient: {},
  docteur: {},
  errors: [],
  rendezvous: {},
  patientrendezvous: [],
  docteurrendezvous: [],
};

const mesrendezvousReducer = (state = initSate, { type, payload }) => {
  switch (type) {
    case ADD_RENDEZVOUS_FAIL:
      return { ...state, errors: payload };
    case GET_RENDEZVOUS_LOAD:
      return { ...state, load: true };
    case GET_RENDEZVOUS_SUCC:
      return { ...state, load: false, mesrendezvous: payload };
    case GET_RENDEZVOUS_FAIL:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default mesrendezvousReducer;
