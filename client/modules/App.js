import Immutable from "immutable";

export const ACTIONO = "ACTIONO";

const defaultState = Immutable.fromJS({
  value1: "value"
});

export function myFirstAction(bool) {
  return (dispatch, getState) => {
    return dispatch({
      type: ACTIONO,
      payload: bool
    });
  };
}

export const actions = {
  myFirstAction
};

const ACTION_HANDLERS = {
  [ACTIONO]: (state, action) => state.set("value1", action.payload)
};

export default function appReducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
