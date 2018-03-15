
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as actions from '../state/action';
import StateList from './StateList';

export default class StateEdit extends Component {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
        //this.changeCode = this.changeCode.bind(this);
        //this.changeName = this.changeName.bind(this);
        this.state = {
            "id": this.props.match.params.id,
            "code": "",
            "name": ""
        }
    }
    
    componentWillMount() {
        console.log(this.props.match.params.id,"fsdfdsfsfsdf");
        this.props.stateItemList(this.props.match.params.id);

        // this.setState({
        //     "code": this.props.curState.code,
        //     "name": this.props.curState.name
        // })
    }

   
    updateValue(){
       console.log("changes in update function");
       let id = this.props.match.params.id;
       let value  ={
            "code": this.stateCodeInput.value,
            "name": this.stateNameInput.value
        }
        this.props.updateItemInList(value,id, (response) => {
            if(response) {
                this.props.history.push('/states')
            }
        });   
    }

    componentWillReceiveProps(prevProps) {
        console.log("prev props:"+prevProps.curState.code);
         this.setState({
                     "code": prevProps.curState.code,
                      "name": prevProps.curState.name
                  })
    }

    changeCode=(event)=> {
        //console.log("this in change code",this)
        this.setState({"code" : event.target.value})
    }

    changeName=(event)=> {
        this.setState({"name" : event.target.value})
    }
    
    render() {
        return (
            <div> 
            <input type="text" value={this.props.match.params.id} ref={el => (this.stateIdInput = el)}/>
            <input type="text"  value={this.state.code} ref={el => (this.stateCodeInput = el)} 
            onChange={event => this.changeCode(event)}/>
            <input type="text"  value={this.state.name} ref={el => (this.stateNameInput = el)}
            onChange={event => this.changeName(event)}/>
            <button onClick={this.updateValue}>Submit</button>
            </div>
        )
    }
} 


StateEdit.defaultProps = {
    
}

StateEdit.propTypes = {
    
}