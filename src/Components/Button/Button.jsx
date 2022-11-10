import React from "react";
import { ReactComponent as Icon } from "../../Assets/raw/iconArrowUpRight.svg";
import "./style.scss";

const Button = ({ onClick, text, icon }) => {
  return (
    <button className="btn-primary">
      {text}
      {icon}
    </button>
  );
};

Button.defaultProps = {
  icon: <Icon />,
};
export default Button;
