import React, { useEffect, useState } from "react";
import Schedule from "./Schedule";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import questionIcon from "../imgs/question.png";

function ScheduleCreate() {
  return (
    <div className="flex">
      <SideBar links={links} />
      <Schedule />z
    </div>
  );
}

export default ScheduleCreate;
