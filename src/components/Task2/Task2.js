import React from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Task2 = () => {
  return (
    <div>
      <div className="md-hidden ">
        <DesktopView />
      </div>
      <div className="visible md:invisible">
        <MobileView />
      </div>
    </div>
  );
};

export default Task2;
