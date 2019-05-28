import React from "react";
import "./DrawerToggleButton.css";

const drawerToogleButton = props => (
  /* And then assigning it here to the onclicklistener */
  /* props.click in the end holds a reference of the drawerToggleClickHandler (from App) */
  /* Which get executed when this button gets clicked */
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default drawerToogleButton;
