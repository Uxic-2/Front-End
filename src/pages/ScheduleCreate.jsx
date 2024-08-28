import React, { useEffect, useState } from "react";
import Schedule from "./Schedule";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";

function ScheduleCreate() {
  return (
    <div className="flex">
      <SideBar links={links} />
      <Schedule />
    </div>
  );
}

export default ScheduleCreate;
