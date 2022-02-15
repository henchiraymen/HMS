import axios from "axios";

import {
  REGISTER_FAIL,
  REGISTER_LOAD,
  REGISTER_SUCC,
} from "../ActionsType/patient";

export const register = (newPatient) => async (dispatch) => {
  dispatch({ type: REGISTER_LOAD });
  try {
    let result = await axios.post("/api/patient/register", newPatient);
    dispatch({ type: REGISTER_SUCC, payload: result.data }); //{msg,patient,token}
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data }); //{errors : []}
  }
};
