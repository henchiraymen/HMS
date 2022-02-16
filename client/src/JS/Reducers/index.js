import { combineReducers } from "redux";
import patientReducer from "./patient";
import docteurReducer from "./docteur";
import mesrendezvousReducer from "./mesrendezvous";

const rootReducer = combineReducers({
  patientReducer,
  docteurReducer,
  mesrendezvousReducer,
});

export default rootReducer;
