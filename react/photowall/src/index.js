import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";

const tasks = ["aaa", "bbb", "ccc"];

const element = (
  <ol>
    {tasks.map((e, i) => (
      <li key={i}>{e}</li>
    ))}
  </ol>
);

ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
