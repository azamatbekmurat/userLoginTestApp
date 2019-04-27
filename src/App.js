import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import WelcomeUser from "./components/WelcomeUser";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" />
            <Route path="/login" component={Login} />
            <Route path="/welcome" component={WelcomeUser} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
