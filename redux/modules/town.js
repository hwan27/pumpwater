//imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
//actions
const SET_FEED = "SET_FEED";
const SET_SECTOR = "SET_SECTOR";
const SET_TOWN = "SET_TOWN";
//action creators
function setFeed(feed) {
  return { type: SET_FEED, feed };
}
function setSector(sectorFeed) {
  return { type: SET_SECTOR, sectorFeed };
}
function setTown(townFeed) {
  return { type: SET_TOWN, townFeed };
}
//api action
function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`${API_URL}/pumps/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setFeed(json)));
  };
}

function getTown(townId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`${API_URL}/pumps/town/${townId}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setTown(json)));
  };
}
function getSector(sectorId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`${API_URL}/pumps/sector/${sectorId}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setSector(json)));
  };
}
//initial state

const initialState = {};

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case SET_TOWN:
      return applySetTown(state, action);
    case SET_SECTOR:
      return applySetSector(state, action);
    default:
      return state;
  }
}

// reducer actions
function applySetFeed(state, action) {
  const { feed } = action;
  return { ...state, feed };
}
function applySetSector(state, action) {
  const { sectorFeed } = action;
  return { ...state, sectorFeed };
}

function applySetTown(state, action) {
  const { townFeed } = action;
  return { ...state, townFeed };
}
//exports
const actionCreators = {
  getFeed,
  getSector,
  getTown
};

export { actionCreators };
//default reducer export
export default reducer;
