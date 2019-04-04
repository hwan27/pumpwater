//imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
//actions
const SET_FEED = "SET_FEED";
const SET_SECTOR = "SET_SECTOR";
//action creators
function setFeed(feed) {
  return { type: SET_FEED, feed };
}
function setSector(sector) {
  return { type: SET_SECTOR, sector };
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

function getSector(townId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/pumps/towns/${townId}/sectors`, {
      header: {
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
    case SET_SECTOR:
      return applySetSector(state, action);
    default:
      return state;
  }
}

// reducer actions
function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}
function applySetSector(state, action) {
  const { sector } = action;
  return { ...state, sector };
}
//exports
const actionCreators = {
  getFeed,
  getSector
};

export { actionCreators };
//default reducer export
export default reducer;
