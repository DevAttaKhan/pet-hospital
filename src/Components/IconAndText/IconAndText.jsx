import React from "react";
import IconMail from "../../Assets/icons/IconMail";
import "./style.scss";

const IconAndText = ({ icon, text, classes }) => {
  return (
    <div className="icon-and-text">
      {icon} <span>{text}</span>
    </div>
  );
};

IconAndText.defaultProps = {
  icon: <IconMail />,
  text: "unreal@outlook.com",
};

export default IconAndText;
