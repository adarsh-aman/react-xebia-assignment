import React from "react";
import Home from "./components/Home";
import Contacts from './components/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Address from './components/Address';
import NotFound from './components/NotFound';
import About from './components/About';

export class App extends React.Component {
    
    render() {
        console.log("app render");
        return(
            <div>  
            <Header/>
            {this.props.children}
            <Footer/>
            </div>
        )
        
    }
}