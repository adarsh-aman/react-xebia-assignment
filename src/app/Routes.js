import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {App} from './App.js';

import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Address from './components/Address';
import NotFound from './components/NotFound';
import StateList from './State/container/StateList';
import StateView from './State/container/StateView';
import StateEdit from './State/container/StateEdit';


export default function Routes(props){
    console.log("Router");
    return(
        <Router>
            <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contacts}/>                
                <Route exact path="/about" component={About}/>
                <Route exact path="/states" component={StateList}/>
                <Route exact path="/states/view/:id" component={StateView}/>
                <Route exact path="/states/edit/:id" component={StateEdit}/>
                <Route path="/*" component={NotFound}/>   
            </Switch>
            </App>
        </Router>
    )
}
