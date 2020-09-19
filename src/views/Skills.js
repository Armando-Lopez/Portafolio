import React from "react";
import SkillBubble from "../components/SkillBubble";

const SkillsList = [
  {
    icon: "fab fa-html5",
    color: "#ea6228",
  },
  {
    icon: "fab fa-css3",
    color: "#0090d2",
  },
  {
    icon: "fab fa-js",
    color: "#f0d91d",
  },
  {
    icon: "fab fa-react",
    color: "#5ed4f4",
  },
  {
    icon: "fab fa-git",
    color: "#e94e32",
  },
  {
    icon: "fab fa-github",
    color: "#FFFFFF",
  },
  {
    icon: "fab fa-sass",
    color: "#c76495",
  },
  {
    icon: "fab fa-bootstrap",
    color: "#543b79",
  },
  {
    icon: "fab fa-php",
    color: "#7478ae",
  },
  {
    icon: "fab fa-materialize",
    color: "#7478ae",
  },
  {
    icon: "fab fa-vuejs",
    color: "#41b883"
  }
];

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="title">Skills</h1>
      {SkillsList.map((skill, index) => {
        return (
          <SkillBubble
            key={index}
            index={index}
            icon={skill.icon}
            color={skill.color}
          />
        );
      })}
    </section>
  );
};

export default Skills;
