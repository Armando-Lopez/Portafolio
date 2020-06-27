import React from "react";

const SkillBubble = ({ icon, color, index }) => {
  let size = Math.random() * 100;

  return (
    <span
      className="skill"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `100%`,
        left: `${Math.random() * 85}%`,
        animationDelay: `${index}s`,
      }}
    >
      <i className={icon} style={{ color: color }}></i>
    </span>
  );
};

export default SkillBubble;
