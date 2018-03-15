import * as service from './service';
import * as ActionTypes from './action-types'
// export function getStateList(){
    
// }

const initStateList=(stateLists)=>{
   // console.log("function under then dispatch",stateLists);

    return {
        type: ActionTypes.INIT_STATELISTS,
        payload: {
            stateLists: stateLists
        }
    }
}


export const stateItemList=(id)=>{
    console.log("id in itemList",id);
    return (dispatch, getState) => {
        const statesList = getState().stateLists;
        console.log("statelist empty or not",getState());
        dispatch({
            type: ActionTypes.GETSTATEITEM,
            payload: {
                curState: statesList,
                id: id
            }
        });
    }
}


// export const editItemList=(stateLists)=>{
//   //  console.log("this is edit action list",editItem);
//     return{
//     type: ActionTypes.EDIT_STATES,
//     payload: {
//         stateToEdit: editItem,
//         id:id
//     }
//    }
// }



export  function fetchStateLists(){
    //console.log("fetch state list called");
    //const serviceList =service.getStateLists();
    
    return function(dispatch,getState){
        console.log("dispatch state list called");
        service.getStateLists()
        .then (stateLists=>{
            let action = initStateList(stateLists);
            //console.log("stateLisddts ",action);
            dispatch(action);
        });
    }

}


export const updateStateList=(item,id, callback)=>{
    return (dispatch,getState)=>{
        service.updateItem(item,id)
        .then(response=> {
            console.log("got the response");
            dispatch({
                type: ActionTypes.EDIT_STATES,
                payload: {
                    response: response
                }
            });
            callback(response);
        });
        
    }
}