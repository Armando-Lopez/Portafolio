import React from "react";
import photo from "../img/photoMe.jpg";
const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__content">
        <div className="about">
          <div className="intro__my-name">
            <h1 className="letter" id="D">
              D
            </h1>
            <h1 className="letter" id="A">
              A
            </h1>
            <h1 className="letter" id="L">
              L
            </h1>
            <h1 className="letter" id="V">
              V
            </h1>
          </div>
          <div className="my-description">
            <p>
              Hi!. I'am Diego. I am pasionate about web development. Working
              every to improve my skills, i want to build great things. I love
              animations and transitions. In this portfolio you will see my
              projects from my beginigs to this day. I will improving this page
              as well as some of my projects already published.
            </p>
          </div>
        </div>
        <div className="photo">
          <img src={photo} alt="photoDiego" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
