import React from "react";
import "./style.scss";
const PetAvatar = ({ img, title, text, className, flip, gap }) => {
  return (
    <div
      className={`flex ${className}`}
      style={{ flexDirection: `${flip ? "row-reverse" : ""}` }}
    >
      <img src={img} alt="img" />
      <div>
        <h5 style={{ marginBottom: `${gap ? gap : ""}` }}>{title}</h5>
        <p>{text} </p>
      </div>
    </div>
  );
};

export default PetAvatar;
