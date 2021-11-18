import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SignInPage from "./SignInPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
