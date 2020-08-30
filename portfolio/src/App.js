import React from "react";
import "./App.scss";

import Header from "./components/Header";

import Home from "./components/Home";

import Stack from "./components/Stack";

import Projects from "./components/Projects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/stack" component={Stack} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

// function Projects() {
//   return <p>Discover our numerous opportunities</p>;
// }

// function Stack() {
//   return <p>Solutions that help you.</p>;
// }

function Contact() {
  return <p>Feel free to reach out.</p>;
}

export default App;
