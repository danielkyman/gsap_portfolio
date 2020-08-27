import React from "react";
import "./sass/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="wrapper">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
