import React from "react";

const SkillBubble = ({ icon }) => {
  let size = Math.random() * 100;

  return (
    <span
      className="skill"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `100%`,
        left: `${Math.random() * 85}%`,
        animationDelay: `${Math.random() * 10}s`,
      }}
    >
      <i className={icon}></i>
    </span>
  );
};

export default SkillBubble;
