import React from "react";
import goTo from "../functions/myRouter";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li
          id="about-me"
          className="navigation__item"
          onClick={() => goTo("/")}
        >
          About me
        </li>
        <li
          id="projects"
          className="navigation__item"
          onClick={() => goTo("projects")}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
