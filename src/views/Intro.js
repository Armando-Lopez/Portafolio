import React from "react";
import Navigation from "../components/Navigation";
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At veniam
            nulla aliquid dignissimos neque iure labore, delectus magni id eum
            illo tempore, quos molestiae quia totam quaerat atque! Nesciunt
            reprehenderit aliquam iusto molestiae, expedita repudiandae
            obcaecati corrupti repellendus voluptatum dolores eos? Dolore eius
            officiis quibusdam nul unde distinctio totam id fugiat voluptatibus.
            Itaque ea fugit mollitia nulla a odio sequi ut nostrum.
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
