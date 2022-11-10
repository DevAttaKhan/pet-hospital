import React from "react";
import IconAndText from "../IconAndText/IconAndText";
import IconPhone from "../../Assets/icons/IconPhone";
import IconClock from "../../Assets/icons/IconClock";

import "./style.scss";

const TopBar = () => {
  return (
    <div className="topbar bg-primary">
      <div className="container flex justify-sb">
        <div className="flex gap-24">
          <IconAndText />
          <IconAndText icon={<IconPhone />} text="605-646-9241" />
        </div>
        <IconAndText icon={<IconClock />} text="8:00 AM until 6:00 PM" />
      </div>
    </div>
  );
};

export default TopBar;
