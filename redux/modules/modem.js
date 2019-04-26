//imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
//actions
const GET_MODEM = "GET_MODEM";
const SET_SECTOR = "SET_SECTOR";
//action creators
function getModem() {
  return { type: GET_MODEM };
}

//api action
function applyGetModem(state, action) {
  //serialport
  test = "1";
  return {
    ...state,
    data: test
  };
}

//initial state

const initialState = { data: 0 };

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MODEM:
      return applyGetModem(state, action);
    default:
      return state;
  }
}

// reducer actions

//exports
const actionCreators = {
  getModem
};

export { actionCreators };
//default reducer export
export default reducer;
