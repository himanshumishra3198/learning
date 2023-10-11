import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const time = date.getHours();
var period;
var theme;
if (0 <= time && time <= 12) {
  period = "morning";
  theme = { color: "red" };
} else if (12 < time && time <= 18) {
  period = "afternoon";
  theme = { color: "green" };
} else {
  period = "evening";
  theme = { color: "blue" };
}
ReactDOM.render(
  <div>
    <h1 style={theme}>Good {period}</h1>
  </div>,
  document.getElementById("root")
);
