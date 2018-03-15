import * as ActionTypes from "./action-types";

const INITIAL_STATE = []

export default function StateListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.INIT_STATELISTS:
      // console.log("statereducer1 value is:"+[...action.payload.stateLists]);
      return [...action.payload.stateLists];
    default:
      console.log("default is called"+state);
      return state;
  }
}
