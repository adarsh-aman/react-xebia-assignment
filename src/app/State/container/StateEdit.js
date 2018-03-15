import {connect} from 'react-redux';
import StateEdit from '../components/StateEdit';
import * as actions from '../state/action';

const mapStateToProps = (state)=>{
    console.log("state in edit view container",state);
    return{
        curState: state.stateViews,
        editState: state.stateEdits
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        stateItemList: function(id){
            let actionN =  actions.stateItemList(id);
            dispatch(actionN);
        },
        updateItemInList: function(item,id, callback){
            let actionU = actions.updateStateList(item,id,callback);
            dispatch(actionU);
        }

    }
}


export default connect(mapStateToProps,
    mapDispatchToProps) (StateEdit)
