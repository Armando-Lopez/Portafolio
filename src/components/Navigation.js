import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation border">
      <ul className="navigation__list">
        <li className="navigation__item">DALV</li>
        <Link to="/">
          <li className="navigation__item">Intro</li>
        </Link>
        <Link to="projects">
          <li className="navigation__item">Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
