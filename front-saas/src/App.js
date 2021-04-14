import "./App.less";
import React from "react";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import "./styles/_common.less";
import "antd/dist/antd.css";
import { AnimatedSwitch } from "react-router-transition";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch as RouterSwitch,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Nav />
        <RouterSwitch>
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/List" exact component={List} />
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />
        </RouterSwitch>
    </Router>
  );
}

export default App;
