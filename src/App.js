import './App.css';
import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Navbar from "./Header"
import Home from "./Home"
import ProductDetail from './Productdetail';
// import {createContext,useContext} from "react"


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route >
          <Route path="/cart">
            <h1>Cart</h1>
          </Route>
          <Route path="/Order">
            <h1>order</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route exact path="/product">
            <Home></Home>
          </Route>
          <Route path="/product/:id">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <h1>Page not exist</h1>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
