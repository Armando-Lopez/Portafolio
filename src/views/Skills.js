import React from "react";
import SkillBubble from "../components/SkillBubble";

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="title">Skills</h1>
      <SkillBubble icon="fab fa-html5" />
      <SkillBubble icon="fab fa-css3" />
      <SkillBubble icon="fab fa-js-square" />
      <SkillBubble icon="fab fa-react" />
      <SkillBubble icon="fab fa-git" />
      <SkillBubble icon="fab fa-github" />
      <SkillBubble icon="fab fa-sass" />
      <SkillBubble icon="fab fa-bootstrap" />
      <SkillBubble icon="fab fa-php" />
    </section>
  );
};

export default Skills;
