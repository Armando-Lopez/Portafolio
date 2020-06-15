import React from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li id="about-me" className="navigation__item">
          About me
        </li>
        <li id="projects" className="navigation__item">
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
