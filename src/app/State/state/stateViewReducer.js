import * as ActionTypes from './action-types';

const INITIAL_STATE={}

export default function StateViewReducer(state=INITIAL_STATE,action){
    console.log("current  value name",state);
    switch(action.type){
        case ActionTypes.GETSTATEITEM:
            
            const item = action.payload.curState.find(item => {
                 
            if(item.id == action.payload.id)
            return item 
        });
       
        return item ? item : INITIAL_STATE;
        default:
        return state;
    }
}