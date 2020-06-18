import React from "react";

const Card = ({ title, description, url, img }) => {
  return (
    <div className="card">
      <div className="card__thumbnail">
        <img src={img} alt={title} loading="lazy" />
      </div>
      <div className="card__content">
        <h3 className="name">{title}</h3>
        <p className="description">{description}</p>
        <a
          className="link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit project
        </a>
      </div>
    </div>
  );
};

export default Card;
