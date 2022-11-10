import React from "react";
import { ReactComponent as Syring } from "../../Assets/raw/iconSyring.svg";

import "./style.scss";

const Capsule = ({ text, icon, color }) => {
  return (
    <div className="capsule">
      <div className="capsule__icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
};

Capsule.defaultProps = {
  text: "Vaccinations",
  icon: <Syring />,
  color: "#2DDAFC",
};

export default Capsule;
