import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Get in touch</h1>
      <div className="contact__redes">
        <a
          className="contact__link"
          href="https://github.com/Armando-Lopez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="contact__link"
          href="https://www.linkedin.com/in/diego-a-lopez-797088196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="contact__link"
          href="https://www.freecodecamp.org/diego-lopez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-free-code-camp"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
