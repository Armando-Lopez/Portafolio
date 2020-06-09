import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";

import "./scss/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <main>
        <Route exact path="/" component={Intro} />
        <Route exact path="/projects" component={Projects} />
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
