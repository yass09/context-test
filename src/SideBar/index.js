import React from "react";
import SideBarContent from "./SideBarContent";

const SideBar = () => (
  <div
    className=''
    style={{
      width: 350,
      height: "100vh",
      borderLeft: "solid 5px #e9ebef"
    }}>
    <SideBarContent />
  </div>
);

export default SideBar;
