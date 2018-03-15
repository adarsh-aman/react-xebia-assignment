import {createStore,combineReducers,applyMiddleware} from 'redux';
import stateListReducer from './State/state/stateListReducer';
import thunk from 'redux-thunk';
import stateViewReducer from './State/state/stateViewReducer';
import logger from  'redux-logger';
import stateEditReducer from './State/state/stateEditReducer';

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.log("Logger",action);
            let result = next(action);
            return result;
        }
    }
}

const rootReducers = combineReducers({
    //state name: reducer function
    //counter: counterReducer,
    //productState: productReducer
    //cartItems: cartReducer
    //tateName: stateListReducer
    stateLists:stateListReducer,
    stateViews:stateViewReducer,
    stateEdits: stateEditReducer
});

let store = createStore(rootReducers,applyMiddleware(thunk,logger));

if(typeof window !== undefined){
    window.__INITIAL_STATE__ = store.getState()
}


export default store;