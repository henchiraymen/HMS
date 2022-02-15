import { combineReducers } from "redux";
import patientReducer from "./patient";
import docteurReducer from "./docteur";

const rootReducer = combineReducers({ patientReducer, docteurReducer });

export default rootReducer;
