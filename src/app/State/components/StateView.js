
import React, {Component} from "react";
import PropTypes from "prop-types";
import StateList from './StateList';
import {fetchStateLists} from "../state/action";
import {connect} from 'react-redux';
import * as actions from '../state/action';

export default class StateView extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        console.log("in will mount:"+this.props.match.params.id)
       this.props.stateItemList(this.props.match.params.id);
    }

    render() {
        //console.log("this",this.props.match.params.id);
        console.log("List",this.props);
        return (
            <div> 
                <div>Id: {this.props.match.params.id}</div>
                <div>Code: {this.props.curState.code} </div>
                <div>Name: {this.props.curState.name}</div>
            </div>
        )
    }
} 


StateView.defaultProps = {
    
}

StateView.propTypes = {
    
}