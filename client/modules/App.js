import Immutable from "immutable";
import axios from "axios";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

const defaultState = Immutable.fromJS({
  label: ["sign", "log"],
  value1: "value",
  loggedIn: false,
  username: ""
  //   noteList: { 'www.wikipedia.com': {
  //       img: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Note.svg',

  //   }},
});

export function createUser(event) {
  event.preventDefault();
  return dispatch => {
    axios
      .post("/signup", {
        name: event.target.username.value,
        password: event.target.password.value
      })
      .then(res => {
        console.log("res", res);
        return dispatch({
          type: ADD_USER,
          payload: res // expecting boolean
        });
      });
  };
}

export function deleteNote(noteId) {
  return dispatch => {
    return dispatch({
      type: DELETE_NOTE,
      payload: noteId
    });
  };
}

export function addNote(url, noteData) {
  return dispatch => {
    return dispatch({
      type: ADD_NOTE,
      // post request to database ---- whatever it returns i want payload to =
      payload: {
        url,
        noteData
      }
    });
  };
}

export function editNote(url, noteData) {
  return dispatch => {
    return dispatch({
      type: EDIT_NOTE,
      payload: {
        url,
        noteData
      }
    });
  };
}

export const actions = {
  addNote,
  deleteNote,
  editNote
};

const ACTION_HANDLERS = {
  [ADD_NOTE]: (state, action) => state.set("username", action.payload),
  [DELETE_NOTE]: (state, action) => state.set("value1", action.payload),
  [EDIT_NOTE]: (state, action) => state.set("value1", action.payload)
};

export default function appReducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
