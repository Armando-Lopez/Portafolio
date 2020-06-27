import React from "react";

const ContactBubble = ({ icon, link }) => (
  <a
    className="contact__link"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const Contact = () => {
  return (
    <section className="contact">
      <h1>Get in touch</h1>
      <div className="contact__redes">
        <ContactBubble
          icon="whatsapp"
          link="https://api.whatsapp.com/send?phone=+573116758177"
        />

        <ContactBubble
          icon="linkedin"
          link="https://www.linkedin.com/in/diego-a-lopez-797088196/"
        />

        <ContactBubble icon="github" link="https://github.com/Armando-Lopez" />

        <ContactBubble
          icon="free-code-camp"
          link="https://www.freecodecamp.org/diego-lopez"
        />
      </div>
    </section>
  );
};

export default Contact;
