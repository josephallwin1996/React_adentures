import React from "react"
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Users from "./Users";
import Shop from "./Shop";
import ShopDetail from "./shopDetail";

import {BrowserRouter as Router, Switch, Route, } from "react-router-dom"
function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ShopDetail} />
        </Switch>
      </div>
    </Router> 
   
    
  );
}

const Home = () => (
  <div>
      <h1>Home page</h1>
  </div>
)

export default App;
