import React from "react";

const SkillBubble = ({ icon }) => {
  let size = Math.random() * 100;

  return (
    <span
      className="skill"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 85}%`,
        left: `${Math.random() * 85}%`,
      }}
    >
      <i className={icon}></i>
    </span>
  );
};

export default SkillBubble;
