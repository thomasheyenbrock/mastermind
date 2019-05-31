import React from "react";

import "./style.css";
import { ResultColor } from "../ResultColor";

export const Result = props => (
  <div className="guess-row-result">
    <div className="guess-row-result-row">
      {props.result
        .slice(0, (props.result.length + 1) / 2)
        .map((result, index) => (
          <ResultColor key={index} color={result} />
        ))}
    </div>
    <div className="guess-row-result-row">
      {props.result
        .slice((props.result.length + 1) / 2)
        .map((result, index) => (
          <ResultColor key={index} color={result} />
        ))}
    </div>
  </div>
);
