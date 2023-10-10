import React from "react";
import ReactDOM from "react-dom";
var name = "Himanshu";
var date = new Date();
var n = date.getFullYear();
// var date = date.getYear();
ReactDOM.render(
  <div>
    <p>Hello {name} </p> <p> copyright {n}</p>{" "}
  </div>,
  document.getElementById("root"),
);
