import * as ActionTypes from './action-types';

const INITIAL_STATE={}

export default function stateEditReducer(state=INITIAL_STATE,action){
    console.log("current state value name in edit",state);
    switch(action.type){
        case ActionTypes.EDIT_STATES:
        console.log("in edit reducer",action.payload.response);
            return {...action.payload.response};
            
        default:
            return state;

    }
}