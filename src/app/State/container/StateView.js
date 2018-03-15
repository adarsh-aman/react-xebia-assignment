import {connect} from 'react-redux';
import StateView from '../components/StateView';
import * as actions from '../state/action';

const mapStateToProps= (state)=>{
    console.log("this is state in view",state);
    return {
        curState : state.stateViews
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        stateItemList: function(id) {
            let actionN = actions.stateItemList(id);
            console.log("map dispatch:",actionN);
            dispatch(actionN);
        }   
    }
}

export default connect(mapStateToProps, 
    mapDispatchToProps) (StateView)