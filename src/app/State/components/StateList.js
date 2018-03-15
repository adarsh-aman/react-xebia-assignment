
import React, {Component} from "react";
import PropTypes from "prop-types";
import {fetchStateLists} from "../state/action";
import * as actions from '../state/action';


export default class StateList extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleView = this.handleView.bind(this);
        this.createNode = this.createNode;
    }

    handleView(id){
        console.log("view button clicked" +this.props);
        this.props.history.push(`/states/view/${id}`);
        event.preventDefault();
    }
  

    handleEdit(id){
        console.log("edit Button clicked");
        this.props.history.push(`/states/edit/${id}`);
        event.preventDefault();
    }

    createNode(){
        console.log("create button is clicked");
    }
componentWillMount(){
    this.props.fetchStateLists();
    console.log("test1")
    //this.curState =this.list;
    //console.log("asdad",this.state);
}


    renderStateListAction(stateLists){
       // console.log("going to render stateLists:"+stateLists)
        return stateLists.map((list,i) =>{
            return (
                <tr key={i}>
                    <td  data-id={list.id}>{list.id}</td>
                    <td>{list.code}</td>
                    <td>{list.name}</td>
                    <td>
                        <button onClick={this.handleView.bind(this,list.id)}>View</button>
                     </td>
                    <td>
                        <button onClick={this.handleEdit.bind(this,list.id)}>Edit</button>
                     </td>
                </tr>
            )
        })
    }
    
    render() {
        console.log("test2")

        let {stateLists} = this.props;
        //console.log(stateLists,"stateLists in render");
        
        return (
            <div> 
                <button onClick={this.createNode}>Create</button>    
                    <table>
                        <tbody>
                            {this.props.stateLists?this.renderStateListAction(stateLists):null}
                        </tbody>  
                    </table>          
            </div>
        )
    }
    
}