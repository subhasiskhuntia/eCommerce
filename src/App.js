import './App.css';
import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Navbar from "./Header"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
          </Route >
          <Route path="/cart">
            <h1>Cart</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>
            <h1>home page</h1>

          </Route>
          <Route path="/Order">
            <h1>order</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
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
