import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Notepad from "./components/Notepad";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app_main">
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/notepad" component={Notepad} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
