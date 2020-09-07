import React, { Component } from 'react';
import {Switch, Route, Router} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Detail from './Components/Detail';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from "./Components/Modal";

class App extends Component{
  render(){
    return (
      <React.Fragment> 
        <Navbar/>   
          <Switch>
              <Route exact path="/" component={ProductList}/>
              <Route path="/details" component={Detail}/>
              <Route path="/cart" component={Cart}/>
              <Route component={Default}/>
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
