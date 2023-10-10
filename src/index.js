import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favorite foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Banana</li>
      <li>mumbo jumbo</li>
    </ul>
  </div>,
  document.getElementById("root"),
);
