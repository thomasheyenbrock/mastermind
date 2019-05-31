import React from "react";

import "./style.css";

export const Color = props => (
  <span
    {...props}
    className={`color ${props.color} ${props.onClick ? "clickable" : ""} ${
      props.selected ? "selected" : ""
    }`}
  />
);
