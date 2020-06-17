import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./views/Intro";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

import "./scss/style.css";

ReactDOM.render(
  <div className="wrapper">
    <Intro />
    <Projects />
    <Contact />
  </div>,
  document.getElementById("root")
);
