import React from "react";

import { Button } from "../Button";
import "./style.css";

export const Counter = props => (
  <div className="counter-container">
    <Button onClick={() => props.current > props.min && props.decrement()}>
      -
    </Button>
    <div className="counter-value">{props.current}</div>
    <Button onClick={() => props.current < props.max && props.increment()}>
      +
    </Button>
  </div>
);
