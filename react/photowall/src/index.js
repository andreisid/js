import React, { Component } from "react";
import ReactDOM from "react-dom";
//import App from "./App";

const tasks = ["wake up", "eat", "wash", "go to work"];

const element = (
  <ol>
    {tasks.map((e, i) => (
      <li key={i}>{e}</li>
    ))}
  </ol>
);

class List extends Component {
  render() {
    <ol>
      {tasks.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ol>;
  }
}

class Title extends Component {
  render() {
    return <h1>tasks list</h1>;
  }
}

ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
