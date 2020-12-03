import logo from './logo.svg';

import React from 'react';
import Login from './Templates/Login'
import Home from './Templates/connect/Home'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import './font/font.css';

function App() {
  return (
    <div className="">
      
      <Router>

      <Switch>

      <Route exact path="/" component={Login} />
   
      <Route path="/alpha2"> <Home /> </Route>
          
        </Switch>
      
    </Router>



    </div>
  );
}

export default App;
